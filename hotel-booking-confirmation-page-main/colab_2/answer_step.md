# Step 2 — Rounded application shell

## Goal

Add the centered warm-white application frame, rounded clipping boundary, subtle border, and broad shadow.

This stage inherits everything from `colab_1` and adds only the work described below.

## Assumptions

- The application shell is 1300px wide on the reference viewport and remains fluid below that width.
- The shell is a visual clipping boundary, so `overflow: hidden` is intentional.

## CSS and reset practices

- Use `width: min(1300px, calc(100vw - 8.7rem))` so the desktop shell scales safely.
- Use a restrained border plus layered shadow rather than a heavy opaque outline.
- Keep sizing predictable through the inherited border-box reset.

## Assets introduced

- No new assets are introduced in this stage.

## Completion check

- Open `index.html` at a 1440 × 1056 viewport.
- Confirm there is no horizontal or vertical overflow in the reference capture.
- Compare the result with `screenshot.png` and the cumulative target `../preview.jpg`.
- Confirm the page contains a `<style>` element and no external stylesheet link.
