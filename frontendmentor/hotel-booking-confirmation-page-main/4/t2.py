import os
import re
from pathlib import Path
from openai import OpenAI

client = OpenAI(
    base_url=os.environ["QWEN_BASE_URL"],
    api_key=os.environ["VLLM_API_KEY"],
)

response = client.chat.completions.create(
    model="Qwen/Qwen2.5-VL-7B-Instruct",
    messages=[
        {
            "role": "system",
            "content": (
                "You are a web developer. Return only a complete HTML document. "
                "Do not include explanations or Markdown fences."
            ),
        },
        {
            "role": "user",
            "content": (
                "Create a single self-contained HTML page with a centered blue "
                "button labeled 'Continue'. Put all CSS inside a style element. "
                "Give the button a hover state, rounded corners, and accessible "
                "keyboard focus styling."
            ),
        },
    ],
    max_tokens=1200,
    temperature=0.1,
)

html = response.choices[0].message.content.strip()

# Tolerate Markdown fences if the model adds them anyway.
match = re.search(r"```(?:html)?\s*(.*?)```", html, re.DOTALL | re.IGNORECASE)
if match:
    html = match.group(1).strip()

if "<html" not in html.lower():
    raise RuntimeError(f"Qwen did not return HTML:\n{html}")

output = Path("qwen_blue_button.html")
output.write_text(html, encoding="utf-8")

print(f"Created: {output.resolve()}")