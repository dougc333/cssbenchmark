# Step 5 — Booking header

## Goal

Extend the completed Step 4 sidebar with the booking-confirmation header shown in `screenshot.png`. The new content occupies the top of the right panel while the shell and sidebar geometry remain unchanged.

## CSS steps

1. **Preserve the cumulative shell and sidebar**
   - Keep the 1300 × 882px desktop shell and the 235px sidebar column.
   - Leave the logo, navigation, weather card, footer, divider, background, radius, and shadow unchanged.

2. **Create the right-panel content inset**
   - Add `29px 36px 43px` padding to `.main-content`.
   - This places the header at approximately x = 342px and y = 117px in the 1440 × 1056 reference.

3. **Lay out the booking header**
   - Use a flex row with `justify-content: space-between`, a 24px gap, and an 88px minimum height.
   - Keep the booking copy left-aligned and the actions aligned to the upper-right.

4. **Style the status line**
   - Use uppercase DM Mono at 10px with `0.18em` tracking.
   - Apply Neutral 600 and an 8px bottom margin to separate it from the heading.

5. **Style the personalized heading**
   - Use regular Fraunces with `clamp(31px, 3vw, 39px)` and a tight line height.
   - Load the supplied Fraunces italic face for `Lucia.` and apply Terracotta 700.

6. **Build the action buttons**
   - Use pill-shaped controls with a 38px minimum height, 18px horizontal padding, and 12px semibold text.
   - Keep “Print receipt” transparent with a Neutral 400 border.
   - Use Neutral 900 for “Add to calendar,” with Neutral 50 text.
   - Add a Terracotta focus ring for keyboard navigation and a subtle one-pixel hover lift.

7. **Retain responsive behavior**
   - Below 1080px, reduce the right-panel horizontal padding to 26px.
   - Below 800px, stack the header and place the two actions in equal-width grid columns.
   - Use a responsive 34–42px heading size at mobile widths.

8. **Update the construction badge**
   - Change the fixed label to `Step 05 — Booking header`.

## Verification checklist

- The shell remains 1300 × 882px at the 1440 × 1056 reference viewport.
- The sidebar is unchanged from Step 4.
- The status and heading align with the reference’s upper-left header position.
- Both buttons align with the reference’s upper-right position.
- The page has no horizontal or vertical overflow.

