# Step 8 — Composed center hero

## Goal

Complete the rotated overlap, fan-on-hover behavior, decorative sun reveal, hint, glow, and shadows.

This stage inherits everything from `colab_7` and adds only the work described below.

## Assumptions

- Desktop pointer users can reveal the fanned composition on hover; the resting state matches the supplied preview.
- Transforms are decorative and are disabled for the stacked mobile layout and reduced-motion preference.

## CSS and reset practices

- Group both cards in one positioned container so hover transforms stay local and predictable.
- Apply transitions only to decorative transforms/opacity and provide a reduced-motion override.
- Keep the reference resting state stable; hover is an enhancement rather than a dependency.

## Assets introduced

- `../assets/images/illustration-sun.svg`
- `../assets/images/icon-sparkle.svg`

## Completion check

- Open `index.html` at a 1440 × 1056 viewport.
- Confirm there is no horizontal or vertical overflow in the reference capture.
- Compare the result with `screenshot.png` and the cumulative target `../preview.jpg`.
- Confirm the page contains a `<style>` element and no external stylesheet link.
