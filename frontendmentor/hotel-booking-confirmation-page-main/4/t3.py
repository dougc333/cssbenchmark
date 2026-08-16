import base64
import mimetypes
import os
import re
from pathlib import Path

from openai import OpenAI

HERE = Path(__file__).resolve().parent
SOURCE = HERE.parent / "3" / "index.html"
TARGET = HERE / "screenshot.png"
OUTPUT = HERE / "index.html"
ASSET_ROOT = HERE.parent / "assets"

client = OpenAI(
    base_url=os.environ["QWEN_BASE_URL"],
    api_key=os.environ["VLLM_API_KEY"],
)

source_html = SOURCE.read_text(encoding="utf-8")

asset_paths = sorted(
    str(path.relative_to(HERE.parent))
    for path in ASSET_ROOT.rglob("*")
    if path.is_file() and path.suffix.lower() != ".txt"
)

mime_type = mimetypes.guess_type(TARGET.name)[0] or "image/png"
target_data = base64.b64encode(TARGET.read_bytes()).decode("ascii")
target_url = f"data:{mime_type};base64,{target_data}"

prompt = f"""
Rebuild Step 4 of this webpage.

You must start from the supplied Step 3 HTML and modify it to match the
supplied target screenshot as accurately as possible at exactly 1440x1056.

Requirements:
- Return one complete, valid HTML document.
- Return raw HTML only, without Markdown fences or explanations.
- The result will be saved as 4/index.html.
- Keep all CSS inside the HTML document.
- Preserve useful Step 3 geometry when it matches the target.
- Implement the complete visible sidebar shown in the target.
- The right content area should remain empty if it is empty in the target.
- Use the supplied local assets instead of recreating logos or icons.
- From 4/index.html, asset URLs must begin with ../assets/.
- You may use assets/images/* and assets/fonts/*.
- Do not use external URLs, external libraries, base64 assets, or JavaScript.
- Do not use image.html or any hidden/reference implementation.
- Match layout, dimensions, spacing, typography, colors, borders, shadows,
  icons, active state, weather card, and footer.
- Ensure the page renders correctly when opened locally in Chromium.
- Do not merely describe changes—return the finished HTML.

Available assets:
{chr(10).join(asset_paths)}

Starting Step 3 HTML:
{source_html}
""".strip()

response = client.chat.completions.create(
    model="Qwen/Qwen2.5-VL-7B-Instruct",
    messages=[
        {
            "role": "system",
            "content": (
                "You are an expert frontend engineer performing precise "
                "screenshot-to-HTML reconstruction. Output only finished HTML."
            ),
        },
        {
            "role": "user",
            "content": [
                {"type": "text", "text": prompt},
                {
                    "type": "image_url",
                    "image_url": {"url": target_url},
                },
            ],
        },
    ],
    temperature=0.1,
    max_tokens=4000,
)

html = (response.choices[0].message.content or "").strip()

# Remove Markdown fences if Qwen ignores the output instruction.
match = re.search(
    r"```(?:html)?\s*(.*?)```",
    html,
    flags=re.DOTALL | re.IGNORECASE,
)
if match:
    html = match.group(1).strip()

if "<!doctype" not in html.lower() or "<html" not in html.lower():
    raise RuntimeError(f"Qwen did not return a complete HTML document:\n{html}")

OUTPUT.write_text(html + "\n", encoding="utf-8")

print(f"Wrote: {OUTPUT}")
print(f"Characters: {len(html)}")
