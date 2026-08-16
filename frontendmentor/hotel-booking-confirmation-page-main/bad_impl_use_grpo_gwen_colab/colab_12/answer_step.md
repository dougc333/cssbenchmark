# Step 12 — Final accessible polish

## Goal

Deliver the complete composition with decorative backdrop marks, focus states, reduced-motion rules, and print styles.

This stage inherits everything from `colab_11` and adds only the work described below.

## Assumptions

- The final goal is `preview.jpg`; all earlier stages are cumulative construction states toward that image.
- Keyboard focus, reduced motion, and print behavior are part of the final polish even when not visible in the desktop screenshot.

## CSS and reset practices

- Add decorative backdrop marks with CSS borders so they remain resolution independent.
- Use `:focus-visible` instead of removing outlines globally.
- Honor `prefers-reduced-motion` and provide a print rule that isolates the receipt.
- Keep all embedded styles organized from tokens/reset to layout, components, breakpoints, accessibility, and print.

## Assets introduced

- `../assets/images/favicon-32x32.png`

## Completion check

- Open `index.html` at a 1440 × 1056 viewport.
- Confirm there is no horizontal or vertical overflow in the reference capture.
- Compare the result with `screenshot.png` and the cumulative target `../preview.jpg`.
- Confirm the page contains a `<style>` element and no external stylesheet link.
