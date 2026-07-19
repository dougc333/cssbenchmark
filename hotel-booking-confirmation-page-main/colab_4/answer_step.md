# Step 4 — Complete sidebar

## Goal

Populate the sidebar with the supplied logo and navigation icons, active state, weather card, address, and copyright.

This stage inherits everything from `colab_3` and adds only the work described below.

## Assumptions

- Provided SVGs should be used as presentational images; decorative icons receive empty alt text.
- The sidebar must stretch to the full shell height so its footer can sit at the bottom.

## CSS and reset practices

- Use flex column layout with `justify-content: space-between` to pin weather/property details to the bottom.
- Reset list margins/padding and remove bullets before styling navigation.
- Use grid for icon/text/badge alignment and visible `:focus-visible` states for keyboard users.

## Assets introduced

- `../assets/images/logo.svg`
- `../assets/images/icon-bed.svg`
- `../assets/images/icon-house.svg`
- `../assets/images/icon-pin.svg`
- `../assets/images/icon-breakfast-outline.svg`
- `../assets/images/icon-mail.svg`
- `../assets/images/icon-weather.svg`

## Completion check

- Open `index.html` at a 1440 × 1056 viewport.
- Confirm there is no horizontal or vertical overflow in the reference capture.
- Compare the result with `screenshot.png` and the cumulative target `../preview.jpg`.
- Confirm the page contains a `<style>` element and no external stylesheet link.
