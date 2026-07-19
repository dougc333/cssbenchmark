# Step 6 — Receipt card

## Goal

Build the paper receipt with booking metadata, dates, itemized charges, total, payment line, and supplied barcode.

This stage inherits everything from `colab_5` and adds only the work described below.

## Assumptions

- The receipt is positioned inside a fixed-height hero composition on desktop.
- A subtle repeating gradient can suggest paper lines without adding another image asset.

## CSS and reset practices

- Use absolute positioning only inside the bounded hero composition, not for global page layout.
- Use semantic `<dl>`, `<dt>`, and `<dd>` markup for itemized charges.
- Combine dashed rules, monospace labels, and serif totals to recreate receipt hierarchy.

## Assets introduced

- `../assets/images/icon-barcode.svg`

## Completion check

- Open `index.html` at a 1440 × 1056 viewport.
- Confirm there is no horizontal or vertical overflow in the reference capture.
- Compare the result with `screenshot.png` and the cumulative target `../preview.jpg`.
- Confirm the page contains a `<style>` element and no external stylesheet link.
