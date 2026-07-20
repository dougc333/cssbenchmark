# Step 2 CSS — Rounded application shell

## Target

Extend the Step 1 canvas with the empty Maison Soleil application frame shown in `screenshot.png`. At 1440 × 1056, the shell is a centered 1300 × 882px warm-neutral panel with rounded clipping, a subtle border, and a broad lower shadow.

## Implementation steps

1. **Preserve the Step 1 foundation.** Retain the embedded DM Sans and DM Mono fonts, universal border-box reset, neutral outside canvas, fixed construction label, and overflow protection.
2. **Use the style-guide surface color.** Add Neutral 100 (`hsl(35 60% 96%)`) as `--neutral-100` and apply it to `.hotel-app`, separating the warm application surface from the cooler `#efefee` canvas.
3. **Size the desktop shell.** Set the width to `min(1300px, calc(100vw - 8.7rem))`. This produces the 1300px reference width while preserving outside margins on narrower desktop windows.
4. **Establish the application height.** Use `min-height: 882px` so the shell matches the recorded desktop geometry and remains ready for cumulative content in later stages.
5. **Prepare later column layout.** Define `grid-template-columns: 235px minmax(0, 1fr)` now. The first track becomes the sidebar geometry in Step 3; `minmax(0, 1fr)` prevents future content from forcing horizontal overflow.
6. **Create the clipping boundary.** Apply `overflow: hidden` and a 16px radius so all later sidebar and content backgrounds remain clipped to the application silhouette.
7. **Refine the edge.** Combine a very low-opacity Neutral 900 border with `0 22px 28px rgb(43 38 32 / 24%)` to reproduce the soft, broad shadow beneath the panel.
8. **Keep the shell responsive.** At 1080px and below, remove the outer stage padding, expand the shell to the full viewport, remove its decorative radius/border/shadow, and maintain a minimum height of `100vh`.
9. **Update the stage marker.** Change the construction label to “Step 02 — Rounded application shell” while preserving its Step 1 typography and fixed positioning.

## Verification

- Render at exactly 1440 × 1056 CSS pixels with device pixel ratio 1.
- Confirm the shell begins 70px from the left, is 1300px wide, and is vertically centered at approximately 87px from the top.
- Confirm the panel height is 882px with a 16px corner radius.
- Confirm the warm panel, subtle border, and shadow match the reference.
- Confirm the viewport has no horizontal or vertical scrollbars.
- Confirm all CSS is embedded and all fonts are loaded locally.
