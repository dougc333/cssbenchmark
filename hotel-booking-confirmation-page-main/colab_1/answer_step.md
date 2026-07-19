# Step 1 — Canvas and outside background

## Goal

Establish the page canvas, embedded reset, local fonts, design tokens, and neutral outside background.

This is the foundation stage.

## Assumptions

- The reference capture is evaluated at 1440 × 1056 CSS pixels.
- All CSS must live inside this page's `<style>` element; there is no external reset.css file.
- Local font files are available one directory up under `assets/fonts`.

## CSS and reset practices

- Embed a small reset at the top of `<style>`: universal `box-sizing: border-box`, zero body margin, inherited control fonts, and a 320px minimum page width.
- Define all style-guide colors as custom properties in `:root` rather than scattering raw values.
- Declare Fraunces, DM Sans, and DM Mono with local `@font-face` rules to avoid network dependencies.
- Use a grid-centered `.preview-stage` and hide accidental canvas overflow.

## Assets introduced

- `../assets/fonts/fraunces/Fraunces-VariableFont_SOFT,WONK,opsz,wght.ttf`
- `../assets/fonts/fraunces/Fraunces-Italic-VariableFont_SOFT,WONK,opsz,wght.ttf`
- `../assets/fonts/dm-sans/DMSans-VariableFont_opsz,wght.ttf`
- `../assets/fonts/dm-mono/DMMono-Regular.ttf`
- `../assets/fonts/dm-mono/DMMono-Medium.ttf`

## Completion check

- Open `index.html` at a 1440 × 1056 viewport.
- Confirm there is no horizontal or vertical overflow in the reference capture.
- Compare the result with `screenshot.png` and the cumulative target `../preview.jpg`.
- Confirm the page contains a `<style>` element and no external stylesheet link.
