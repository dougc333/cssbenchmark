# Step 11 — Breakfast and responsive behavior

## Goal

Complete the three-card guest-information row with the rose breakfast card and introduce the accessible mobile header, menu, and stacked responsive layout required by the style guide.

## CSS steps

1. **Complete the desktop information grid**
   - Reuse the existing three-column grid and shared `.info-card` surface.
   - Add the breakfast card after the Wi-Fi card so it fills column three.
   - Preserve the common 316px desktop column widths, 21px gaps, and 225px height.

2. **Apply the breakfast identity**
   - Add the style-guide Rose 500 token.
   - Use Rose 500 for the supplied breakfast icon’s 36px tile, the uppercase label, and the Fraunces `03` number.

3. **Style the breakfast content**
   - Reuse the shared 22px Fraunces heading for “Served 8 – 10:30.”
   - Use the shared Neutral 600 subtitle and 11.5px Neutral 700 body copy.
   - Keep the full dietary note visible within the card.

4. **Introduce the mobile header**
   - Hide `.mobile-header` and `.mobile-menu` on desktop.
   - Below 800px, replace the desktop sidebar with a 74px header containing the supplied logo and a 34px menu button.
   - Use the supplied menu and close icons at 20px.

5. **Build the accessible mobile menu**
   - Use a fixed panel below the 74px header with the same navigation, active state, badge, weather card, and property footer.
   - Connect the button with `aria-controls` and update `aria-expanded` and its accessible label.
   - Close the menu after a navigation link is selected.
   - Preserve the shared Terracotta focus ring.

6. **Maintain the responsive hero stack**
   - Stack the host and receipt cards at full width with rotation removed.
   - Place the host card first and disable hover-only transforms.
   - Hide the hover cue and decorative center sun on touch-sized layouts.

7. **Stack the information cards**
   - Collapse the information grid to one column below 800px.
   - Remove fixed card minimum heights, use 18px gaps, and enlarge headings and body copy for readability.

8. **Respect reduced motion**
   - Keep interactive transitions minimal for users who prefer reduced motion.

9. **Update the construction badge**
   - Change the label to `Step 11 — Breakfast and responsive behavior`.

## Verification checklist

- Arrival, Wi-Fi, and breakfast cards fill all three desktop grid columns.
- The breakfast card uses the correct rose icon, label, number, copy, and spacing.
- The mobile header replaces the desktop sidebar below 800px.
- The mobile menu is keyboard accessible and exposes correct ARIA state.
- The desktop page remains 1440 × 1056 without viewport overflow.

