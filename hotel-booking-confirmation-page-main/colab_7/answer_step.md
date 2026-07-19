# Step 7 — Host card

## Goal

Layer in the terracotta welcome card with the supplied sun icon, host message, and room name.

This stage inherits everything from `colab_6` and adds only the work described below.

## Assumptions

- The host card overlaps the receipt and therefore needs a higher stacking order.
- The warm highlight can be reproduced with a radial gradient over the terracotta design token.

## CSS and reset practices

- Use flex column layout so room information can align to the bottom with `margin-top: auto`.
- Use `z-index` deliberately for the overlap and preserve readable contrast on terracotta.

## Assets introduced

- `../assets/images/icon-sun.svg`

## Completion check

- Open `index.html` at a 1440 × 1056 viewport.
- Confirm there is no horizontal or vertical overflow in the reference capture.
- Compare the result with `screenshot.png` and the cumulative target `../preview.jpg`.
- Confirm the page contains a `<style>` element and no external stylesheet link.
