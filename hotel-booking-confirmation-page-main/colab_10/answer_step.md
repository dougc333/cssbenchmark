# Step 10 — Wi-Fi card

## Goal

Add the blue Wi-Fi card, network and password rows, supplied Wi-Fi icon, and copy-style control.

This stage inherits everything from `colab_9` and adds only the work described below.

## Assumptions

- The copy button is represented visually; clipboard behavior is outside this HTML/CSS-only staged artifact.
- The network and password values remain on one line at the desktop reference width.

## CSS and reset practices

- Use a definition list for label/value pairs and small neutral rows for scannability.
- Preserve button focus styling even though clipboard scripting is omitted.

## Assets introduced

- `../assets/images/icon-wifi.svg`

## Completion check

- Open `index.html` at a 1440 × 1056 viewport.
- Confirm there is no horizontal or vertical overflow in the reference capture.
- Compare the result with `screenshot.png` and the cumulative target `../preview.jpg`.
- Confirm the page contains a `<style>` element and no external stylesheet link.
