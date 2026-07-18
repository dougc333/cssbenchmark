#!/usr/bin/env python3
"""Generate and visually grade CSS with Qwen3-VL."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

import numpy as np
from PIL import Image


ROOT = Path(__file__).resolve().parent
VIEWPORT = {"width": 800, "height": 600}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--model", default="Qwen/Qwen3-VL-8B-Instruct")
    parser.add_argument("--limit", type=int, default=10)
    parser.add_argument("--max-new-tokens", type=int, default=1400)
    parser.add_argument("--load-in-4bit", action="store_true")
    parser.add_argument("--skip-generation", action="store_true")
    return parser.parse_args()


def build_prompt(case: dict, html: str) -> str:
    return f"""You are completing a deterministic CSS benchmark.

Write the complete contents of `{case["css_filename"]}` for the immutable HTML
below. Follow the visual specification exactly.

Rules:
- Return CSS only, without Markdown fences or commentary.
- Do not change or repeat the HTML.
- Do not use JavaScript, data URLs, external images, @import, or network fonts.
- The viewport is exactly 800px by 600px with devicePixelRatio 1.
- Avoid horizontal and vertical overflow.

VISUAL SPECIFICATION
{case["description"]}

HTML
{html}
"""


def extract_css(text: str) -> str:
    fenced = re.search(r"```(?:css)?\s*(.*?)```", text, flags=re.I | re.S)
    if fenced:
        text = fenced.group(1)
    text = re.sub(r"^\s*(?:Here(?:'s| is).*?:)\s*", "", text, flags=re.I)
    return text.strip() + "\n"


def load_model(model_name: str, load_in_4bit: bool):
    import torch
    from transformers import (
        AutoProcessor,
        BitsAndBytesConfig,
        Qwen3VLForConditionalGeneration,
    )

    kwargs = {
        "device_map": "auto",
        "torch_dtype": torch.bfloat16,
        "attn_implementation": "sdpa",
    }
    if load_in_4bit:
        kwargs["quantization_config"] = BitsAndBytesConfig(
            load_in_4bit=True,
            bnb_4bit_quant_type="nf4",
            bnb_4bit_compute_dtype=torch.bfloat16,
        )

    model = Qwen3VLForConditionalGeneration.from_pretrained(model_name, **kwargs)
    processor = AutoProcessor.from_pretrained(model_name)
    return model, processor


def generate_css(model, processor, prompt: str, max_new_tokens: int) -> str:
    import torch

    messages = [{"role": "user", "content": [{"type": "text", "text": prompt}]}]
    inputs = processor.apply_chat_template(
        messages,
        tokenize=True,
        add_generation_prompt=True,
        return_dict=True,
        return_tensors="pt",
    ).to(model.device)

    with torch.inference_mode():
        output_ids = model.generate(
            **inputs,
            max_new_tokens=max_new_tokens,
            do_sample=False,
        )
    new_tokens = output_ids[:, inputs["input_ids"].shape[1] :]
    response = processor.batch_decode(
        new_tokens,
        skip_special_tokens=True,
        clean_up_tokenization_spaces=False,
    )[0]
    return extract_css(response)


def html_with_inline_css(html: str, css: str) -> str:
    link_pattern = r'<link\s+rel=["\']stylesheet["\']\s+href=["\'][^"\']+["\']\s*/?>'
    replacement = "<style>\n" + css + "\n</style>"
    rendered, replacements = re.subn(
        link_pattern, replacement, html, count=1, flags=re.I
    )
    if replacements != 1:
        raise ValueError("Fixture must contain exactly one stylesheet link.")
    return rendered


def render(page, html: str, output_path: Path) -> dict:
    page.set_content(html, wait_until="load")
    page.add_style_tag(
        content="*,*::before,*::after{animation:none!important;transition:none!important}"
    )
    page.evaluate("document.fonts.ready")
    overflow = page.evaluate(
        """() => ({
          horizontal: document.documentElement.scrollWidth > window.innerWidth,
          vertical: document.documentElement.scrollHeight > window.innerHeight
        })"""
    )
    page.screenshot(path=str(output_path), full_page=False)
    return overflow


def pixel_similarity(reference_path: Path, candidate_path: Path) -> float:
    reference = np.asarray(Image.open(reference_path).convert("RGB"), dtype=np.float32)
    candidate = np.asarray(Image.open(candidate_path).convert("RGB"), dtype=np.float32)
    if reference.shape != candidate.shape:
        return 0.0
    mean_difference = np.abs(reference - candidate).mean() / 255.0
    return float(max(0.0, 1.0 - mean_difference))


def grade_cases(cases: list[dict]) -> list[dict]:
    from playwright.sync_api import sync_playwright

    generated_root = ROOT / "results" / "generated"
    screenshots_root = ROOT / "results" / "screenshots"
    screenshots_root.mkdir(parents=True, exist_ok=True)

    scores = []
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        page = browser.new_page(viewport=VIEWPORT, device_scale_factor=1)

        for case in cases:
            case_root = ROOT / "cases" / case["id"]
            html = (case_root / "index.html").read_text(encoding="utf-8")
            reference_css = (case_root / case["css_filename"]).read_text(
                encoding="utf-8"
            )
            candidate_path = (
                generated_root / case["id"] / case["css_filename"]
            )
            candidate_css = candidate_path.read_text(encoding="utf-8")

            reference_png = screenshots_root / f'{case["id"]}-reference.png'
            candidate_png = screenshots_root / f'{case["id"]}-candidate.png'
            render(page, html_with_inline_css(html, reference_css), reference_png)
            overflow = render(
                page, html_with_inline_css(html, candidate_css), candidate_png
            )
            similarity = pixel_similarity(reference_png, candidate_png)
            overflow_free = not overflow["horizontal"] and not overflow["vertical"]
            final_score = similarity if overflow_free else similarity * 0.90
            score = {
                "id": case["id"],
                "title": case["title"],
                "css_filename": case["css_filename"],
                "pixel_similarity": round(similarity, 6),
                "horizontal_overflow": overflow["horizontal"],
                "vertical_overflow": overflow["vertical"],
                "score": round(final_score, 6),
            }
            scores.append(score)
            print(
                f'{case["id"]}: similarity={similarity:.4f} '
                f'overflow={not overflow_free} score={final_score:.4f}'
            )

        browser.close()
    return scores


def main() -> None:
    args = parse_args()
    cases = json.loads((ROOT / "cases.json").read_text(encoding="utf-8"))
    cases = cases[: max(0, min(args.limit, len(cases)))]
    generated_root = ROOT / "results" / "generated"

    if not args.skip_generation:
        model, processor = load_model(args.model, args.load_in_4bit)
        for index, case in enumerate(cases, start=1):
            case_root = ROOT / "cases" / case["id"]
            html = (case_root / "index.html").read_text(encoding="utf-8")
            prompt = build_prompt(case, html)
            print(f'[{index}/{len(cases)}] Generating {case["css_filename"]}...')
            css = generate_css(model, processor, prompt, args.max_new_tokens)
            output_dir = generated_root / case["id"]
            output_dir.mkdir(parents=True, exist_ok=True)
            (output_dir / case["css_filename"]).write_text(css, encoding="utf-8")

    missing = [
        case["id"]
        for case in cases
        if not (generated_root / case["id"] / case["css_filename"]).exists()
    ]
    if missing:
        raise FileNotFoundError(
            "Missing generated CSS for: " + ", ".join(missing)
        )

    scores = grade_cases(cases)
    summary = {
        "model": args.model,
        "viewport": {**VIEWPORT, "devicePixelRatio": 1},
        "case_count": len(scores),
        "mean_score": round(float(np.mean([item["score"] for item in scores])), 6),
        "mean_pixel_similarity": round(
            float(np.mean([item["pixel_similarity"] for item in scores])), 6
        ),
        "overflow_failures": sum(
            item["horizontal_overflow"] or item["vertical_overflow"]
            for item in scores
        ),
        "cases": scores,
    }
    results_file = ROOT / "results" / "scores.json"
    results_file.parent.mkdir(parents=True, exist_ok=True)
    results_file.write_text(json.dumps(summary, indent=2) + "\n", encoding="utf-8")
    print(f'\nMean benchmark score: {summary["mean_score"]:.4f}')
    print(f"Saved results to {results_file}")


if __name__ == "__main__":
    main()
