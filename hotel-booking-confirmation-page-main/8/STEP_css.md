# Step 8 — Composed center hero

## Goal

Complete the interactive center composition from Step 7 by adding the “Hover to fan” cue and the supplied sun illustration that appears as the two cards fan apart.

## CSS steps

1. **Preserve the completed card stack**
   - Keep the receipt at 356 × 376px, `left: 52px`, and `rotate(-4deg)`.
   - Keep the host card at 356 × 376px, `right: 37px`, and `rotate(4deg)`.
   - Retain the host card’s higher stacking level.

2. **Add the hidden center sun**
   - Position the supplied 116 × 116px illustration absolutely at `top: 115px` and horizontal center.
   - Place it behind both cards with `z-index: 0`.
   - Start at 60% scale and zero opacity.

3. **Create the hover hint**
   - Center the hint directly beneath the 405px card stage.
   - Use uppercase 8px DM Mono, Neutral 600, and `0.07em` tracking.
   - Place a supplied 7px sparkle icon on each side of “Hover to fan.”

4. **Fan the cards on hover**
   - Move the receipt 55px left and rotate it to `6deg`.
   - Move the host card 55px right and rotate it to `-6deg`.
   - Reveal and scale the center sun to 100%.
   - Use the existing 450ms transitions for a coordinated motion.

5. **Preserve the default reference state**
   - At rest, the sun remains invisible and the cards retain the Step 7 overlap.
   - Only the hint is added visibly in the desktop screenshot.

6. **Retain responsive behavior**
   - Below 800px, hide the decorative sun and hover hint.
   - Keep the cards stacked and disable hover transforms on touch-sized layouts.

7. **Update the construction badge**
   - Change the label to `Step 08 — Composed center hero`.

## Verification checklist

- The resting card positions match Step 7 exactly.
- “Hover to fan” appears centered beneath the cards with two sparkle icons.
- Hovering separates the cards and reveals the center sun.
- The 1300 × 882px shell and all earlier content remain unchanged.
- The 1440 × 1056 page has no viewport overflow.

