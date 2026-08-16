# Step 12 — Final accessible polish

## Goal

Finish the complete Maison Soleil confirmation page with the decorative backdrop marks, reduced-motion and print treatments, calendar export, clipboard feedback, and final accessibility refinements shown in `screenshot.png`.

## CSS steps

1. **Preserve the complete interface**
   - Keep the Step 11 desktop shell, sidebar, card hero, three information cards, and mobile navigation unchanged.
   - Remove the construction-stage badge for the final production view.

2. **Add the decorative backdrop**
   - Place two non-interactive marks behind the application shell at 50% opacity.
   - Build the upper mark from two pale-blue vertical borders on a skewed 96 × 52px box.
   - Build the lower-right mark as a partially clipped 176px pale-blue ring.
   - Keep the shell at `z-index: 1` so both decorations remain behind it.

3. **Keep decoration out of accessibility APIs**
   - Mark both backdrop elements with `aria-hidden="true"`.
   - Use `pointer-events: none` so they never intercept interaction.

4. **Add reduced-motion support**
   - Under `prefers-reduced-motion: reduce`, collapse transition duration to 0.01ms and disable smooth scrolling.
   - The card-fan interaction remains understandable without animated motion.

5. **Create print output**
   - Remove the preview padding and outside background.
   - Hide the decorations, sidebar, mobile navigation, booking controls, host card, hint, and information grid.
   - Remove shell borders and shadows.
   - Place the receipt statically, centered, unrotated, and shadow-free.

6. **Complete calendar export**
   - Generate a standards-based `.ics` file containing the stay dates, property address, room, and booking reference.
   - Download it only when “Add to calendar” is activated.

7. **Improve clipboard feedback**
   - Copy the Wi-Fi password through the Clipboard API.
   - Temporarily change the control text to “Copied.”
   - Announce success or failure through an off-screen `aria-live` region.

8. **Retain keyboard focus and mobile ARIA**
   - Keep the visible Terracotta focus treatment on buttons, links, copy control, and menu button.
   - Preserve the mobile menu’s `aria-expanded`, `aria-controls`, and changing accessible label.

9. **Final visual state**
   - Keep the desktop shell at 1300 × 882px and the three lower cards aligned.
   - The supplied screenshot has no construction badge; only the pale-blue backdrop accents distinguish Step 12 visually.

## Verification checklist

- The top accent and lower-right ring appear behind the shell.
- No construction badge remains.
- The final desktop composition matches `screenshot.png`.
- The mobile navigation remains functional at 375px.
- Calendar export, print styling, and clipboard feedback are implemented.
- Reduced-motion users receive minimal animation.
- The 1440 × 1056 page has no viewport overflow.

