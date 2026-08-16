# Step 3 — Left-column geometry

## Goal

Divide the shell into a fixed 235px sidebar column and a flexible main-content column.

This stage inherits everything from `colab_2` and adds only the work described below.

## Assumptions

- The desktop sidebar is fixed at 235px while the content column consumes the remaining width.
- CSS Grid is the clearest way to express the two-column geometry.

## CSS and reset practices

- Set `grid-template-columns: 235px minmax(0, 1fr)` to prevent flexible content from forcing overflow.
- Give the sidebar geometry its own background and right divider.

## Assets introduced

- No new assets are introduced in this stage.

## Completion check

- Open `index.html` at a 1440 × 1056 viewport.
- Confirm there is no horizontal or vertical overflow in the reference capture.
- Compare the result with `screenshot.png` and the cumulative target `../preview.jpg`.
- Confirm the page contains a `<style>` element and no external stylesheet link.
