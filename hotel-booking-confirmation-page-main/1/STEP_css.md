# Step 1 CSS — Canvas and outside background

## Target

Reproduce `screenshot.png` as a standalone 1440 × 1056 page. This stage contains only the neutral presentation canvas and the fixed construction label; the application shell begins in Step 2.

## Implementation steps

1. **Embed the local fonts.** Declare DM Sans for the interface copy and DM Mono for the compact step identifier, using files under `../assets/fonts/` so the page does not depend on network fonts.
2. **Normalize sizing.** Apply `box-sizing: border-box` to every element and pseudo-element, remove the browser body margin, and retain a 320px minimum document width.
3. **Create the canvas.** Give `.preview-stage` a minimum height of `100vh`, hide accidental overflow, and fill both the root and stage with the neutral `#efefee` background.
4. **Center the empty presentation area.** Use CSS Grid with `place-items: center`. The stage intentionally contains no application frame or content at this point.
5. **Position the construction label.** Fix the label `1rem` from the top and center it with `left: 50%` plus `translateX(-50%)`, keeping it independent of later page content.
6. **Match the pill treatment.** Use a translucent white background, subtle neutral border, full pill radius, and low-opacity shadow. Flexbox aligns the step identifier and description with a consistent gap.
7. **Differentiate the identifier.** Render “Step 01” in small uppercase DM Mono with terracotta color and increased tracking; render the description in DM Sans and muted neutral text.

## Verification

- Render at exactly 1440 × 1056 CSS pixels with device pixel ratio 1.
- Confirm the canvas fills the viewport without scrollbars.
- Confirm the label remains horizontally centered and 16px from the top.
- Confirm there are no scripts, external stylesheets, or network resources.
