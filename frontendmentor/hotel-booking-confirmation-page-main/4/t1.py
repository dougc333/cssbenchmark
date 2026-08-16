import json
import os

from openai import OpenAI

client = OpenAI(
    base_url=os.environ["QWEN_BASE_URL"],
    api_key=os.environ["VLLM_API_KEY"],
)

tools = [
    {
        "type": "function",
        "function": {
            "name": "render_page",
            "description": (
                "Render an HTML candidate in Chromium "
                "and return its screenshot path."
            ),
            "parameters": {
                "type": "object",
                "properties": {
                    "html_path": {
                        "type": "string",
                        "description": (
                            "Allowlisted relative HTML path"
                        ),
                    },
                    "width": {
                        "type": "integer",
                    },
                    "height": {
                        "type": "integer",
                    },
                },
                "required": [
                    "html_path",
                    "width",
                    "height",
                ],
                "additionalProperties": False,
            },
        },
    }
]

messages = [
    {
        "role": "system",
        "content": (
            "You control a browser using the provided tools. "
            "When asked to render a page, call render_page. "
            "Do not explain how the user could render it."
        ),
    },
    {
        "role": "user",
        "content": "Render candidate_qwen.html at 1440 by 1056 pixels.",
    },
]

response = client.chat.completions.create(
    model="Qwen/Qwen2.5-VL-7B-Instruct",
    messages=messages,
    tools=tools,
    tool_choice={
        "type": "function",
        "function": {"name": "render_page"},
    },
    parallel_tool_calls=False,
    max_tokens=1000,
    temperature=0.1,
)

message = response.choices[0].message

print("Content:", message.content)
print("Tool calls:", message.tool_calls)

if message.tool_calls:
    call = message.tool_calls[0]
    arguments = json.loads(
        call.function.arguments
    )

    print("Tool:", call.function.name)
    print("Arguments:", arguments)
