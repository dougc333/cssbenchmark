# Step 9 — Arrival card

## Goal

Introduce the reusable information-card pattern with the terracotta arrival card and supplied key icon.

This stage inherits everything from `colab_8` and adds only the work described below.

## Assumptions

- All lower information panels share one reusable visual structure.
- The first panel establishes spacing, type hierarchy, border, radius, and icon-tile conventions for the row.

## CSS and reset practices

- Create a three-column grid with `minmax(0, 1fr)` to prevent long content from expanding a track.
- Use a consistent card shell and modifier class for accent colors.

## Assets introduced

- `../assets/images/icon-key.svg`

## Completion check

- Open `index.html` at a 1440 × 1056 viewport.
- Confirm there is no horizontal or vertical overflow in the reference capture.
- Compare the result with `screenshot.png` and the cumulative target `../preview.jpg`.
- Confirm the page contains a `<style>` element and no external stylesheet link.
