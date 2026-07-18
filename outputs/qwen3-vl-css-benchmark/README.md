# Qwen3-VL CSS Benchmark

A small, deterministic benchmark for evaluating `Qwen/Qwen3-VL-8B-Instruct`
on text-and-HTML to CSS generation. It contains ten progressively larger UI
tasks and grades the generated stylesheets by rendering them in Chromium.

## Benchmark contract

For each case the model receives:

- An 800×600 reference screenshot.
- A natural-language visual specification.
- The complete, immutable HTML fixture.
- The exact required CSS filename.

The model must return CSS only. It must not modify the HTML, use JavaScript,
embed an image, or load a network resource.

Each page is rendered at `800 × 600` CSS pixels with device scale factor `1`.
The reference and candidate screenshots are compared by mean per-channel pixel
difference. Horizontal or vertical overflow applies an additional penalty.

Each case directory includes a pinned `reference.png`, and its manifest entry
contains a `reference_image` path. The runner sends that screenshot to the
vision-language model along with the specification and HTML.

## Run in Google Colab

1. Create a new Colab notebook.
2. Select **Runtime → Change runtime type → A100 GPU**.
3. Upload this folder, or upload its ZIP archive and extract it.
4. Open and run `qwen3_vl_css_benchmark_colab.ipynb`.

The notebook installs the dependencies, downloads Qwen3-VL-8B-Instruct, runs
all ten cases, and produces:

```text
results/
├── generated/<case-id>/<required-name>.css
├── screenshots/<case-id>-reference.png
├── screenshots/<case-id>-candidate.png
└── scores.json
```

On an A100, the default runner loads the model in BF16. To reduce memory usage,
run the script with `--load-in-4bit`.

## Run from a terminal

```bash
pip install -r requirements.txt
playwright install chromium
python run_benchmark.py
```

Useful options:

```bash
python run_benchmark.py --limit 2
python run_benchmark.py --load-in-4bit
python run_benchmark.py --model Qwen/Qwen3-VL-4B-Instruct
python run_benchmark.py --skip-generation
```

`--skip-generation` regrades existing files under `results/generated/`.

## Cases

1. Primary button
2. Text input
3. Profile card
4. Header navigation
5. Sidebar navigation
6. Three-card feature grid
7. Sign-in panel
8. Hero section
9. Footer
10. Dashboard shell

The reference CSS is intentionally visible because this is an executable
benchmark template, not a hidden test set. For a contamination-resistant
evaluation, keep a separate private set following the same schema.
