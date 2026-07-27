# Step 5 — Booking header

## Goal

Add the confirmation eyebrow, personalized Fraunces heading, and the two pill-shaped actions.

This stage inherits everything from `colab_4` and adds only the work described below.

## Assumptions

- The heading uses Fraunces, body/actions use DM Sans, and the booking status uses DM Mono.
- The buttons are static in this HTML/CSS exercise; their hover and keyboard-focus appearances are still styled.

## CSS and reset practices

- Use flexbox to separate the heading and action cluster while preserving a consistent gap.
- Use `clamp()` for the heading size and pill radii for actions.
- Keep button borders inside declared dimensions through border-box sizing.

## Assets introduced

- No new assets are introduced in this stage.

## Completion check

- Open `index.html` at a 1440 × 1056 viewport.
- Confirm there is no horizontal or vertical overflow in the reference capture.
- Compare the result with `screenshot.png` and the cumulative target `../preview.jpg`.
- Confirm the page contains a `<style>` element and no external stylesheet link.
