# Step 3 CSS — Left-column geometry

## Target

Extend the Step 2 application shell by dividing it into a fixed 235px left region and a flexible main-content region, matching `screenshot.png`. This stage establishes geometry only; the sidebar’s visible content begins in Step 4.

## Implementation steps

1. **Preserve the cumulative foundation.** Keep the Step 2 fonts, reset, neutral viewport canvas, construction label, 1300 × 882px shell, rounded clipping boundary, and broad shadow unchanged.
2. **Add the divider color token.** Define Neutral 400 from `style-guide.md` as `--neutral-400: hsl(36 22% 86%)` for the subtle vertical rule.
3. **Use an explicit two-column grid.** Keep `.hotel-app` at `grid-template-columns: 235px minmax(0, 1fr)`. The first track is fixed to the sidebar width visible in the reference; the second consumes all remaining space.
4. **Prevent intrinsic overflow.** Use `minmax(0, 1fr)` for the content track and `min-width: 0` on both children so later text and cards cannot widen the application shell.
5. **Introduce semantic regions.** Insert an empty `.sidebar-geometry` aside followed by `.app-content`. Their DOM order maps directly to the two grid tracks.
6. **Draw the column boundary.** Apply a 1px Neutral 400 border to the right edge of `.sidebar-geometry`. With the shell beginning at x=70px, the divider lands at approximately x=305px in the 1440px reference.
7. **Maintain the warm surface.** Give the sidebar region the same Neutral 100 background as the shell. Step 3 communicates structure through the divider rather than contrasting fills.
8. **Handle small screens.** Below 800px, switch the shell to block layout and hide the desktop sidebar geometry; later steps replace it with a compact mobile header.
9. **Update the stage marker.** Change the fixed badge to “Step 03 — Left-column geometry” without changing its inherited pill styling.

## Verification

- Render at exactly 1440 × 1056 CSS pixels with device pixel ratio 1.
- Confirm the shell remains 1300 × 882px at `(70, 87)`.
- Confirm the first grid track is 235px wide and the divider is 1px.
- Confirm the remaining content track fills the shell without overflow.
- Confirm both regions retain the style-guide Neutral 100 surface.
- Confirm there are no viewport scrollbars, scripts, or external stylesheets.
