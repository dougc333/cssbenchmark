# Step 11 — Breakfast and responsive behavior

## Goal

Complete the three-card row, mobile stacking rules, and the compact mobile header.

This stage inherits everything from `colab_10` and adds only the work described below.

## Assumptions

- At 800px and below the sidebar is replaced by a compact mobile header and content becomes a single column.
- The desktop reference remains the primary screenshot for this staged folder.

## CSS and reset practices

- At the mobile breakpoint, switch the app shell from grid to block and the information grid to one column.
- Return the overlapping hero cards to normal document flow and remove rotations.
- Use fluid `clamp()` typography and full-width controls rather than fixed mobile dimensions.

## Assets introduced

- `../assets/images/icon-breakfast.svg`
- `../assets/images/logo.svg`
- `../assets/images/icon-menu.svg`

## Completion check

- Open `index.html` at a 1440 × 1056 viewport.
- Confirm there is no horizontal or vertical overflow in the reference capture.
- Compare the result with `screenshot.png` and the cumulative target `../preview.jpg`.
- Confirm the page contains a `<style>` element and no external stylesheet link.
