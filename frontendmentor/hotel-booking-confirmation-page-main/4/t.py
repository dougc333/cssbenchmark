import base64
import os
from pathlib import Path

from openai import OpenAI

ROOT = Path(
    "/Users/dc/cssbenchmark/"
    "hotel-booking-confirmation-page-main/4"
)

MODEL = "Qwen/Qwen2.5-VL-7B-Instruct"

client = OpenAI(
    base_url=os.environ["QWEN_BASE_URL"],
    api_key=os.environ["VLLM_API_KEY"],
)


def png_data_url(path: Path) -> str:
    encoded = base64.b64encode(
        path.read_bytes()
    ).decode("utf-8")

    return f"data:image/png;base64,{encoded}"


index_html = (ROOT / "index.html").read_text()
step = (ROOT / "STEP.md").read_text()
step_css = (ROOT / "STEP_css.md").read_text()

prompt = f"""
You are implementing Step 4 of a React/HTML/CSS visual
reconstruction benchmark.

The attached image is the target screenshot.

Follow the supplied requirements and inspect the current
index.html. Return a complete corrected index.html inside one
HTML code block. Do not invent assets. Preserve existing asset
paths and functionality.

STEP.md:
{step}

STEP_css.md:
{step_css}

CURRENT index.html:
{index_html}
"""

response = client.chat.completions.create(
    model=MODEL,
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": prompt,
                },
                {
                    "type": "image_url",
                    "image_url": {
                        "url": png_data_url(
                            ROOT / "screenshot.png"
                        )
                    },
                },
            ],
        }
    ],
    temperature=0.1,
    max_tokens=4000,
)

result = response.choices[0].message.content

(ROOT / "qwen_response.md").write_text(result)

print(result)
print("\nSaved to:", ROOT / "qwen_response.md")
