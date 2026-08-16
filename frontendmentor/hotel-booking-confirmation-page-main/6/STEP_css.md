# Step 6 — Receipt card

## Goal

Extend the Step 5 booking header with the angled printed receipt shown in `screenshot.png`. The sidebar, shell, status, heading, and header controls remain unchanged.

## CSS steps

1. **Preserve the cumulative layout**
   - Keep the 1300 × 882px application shell, 235px sidebar, and Step 5 header positions.
   - Continue using the style-guide Neutral palette, DM Sans, DM Mono, and Fraunces.

2. **Create the receipt staging area**
   - Limit `.booking-hero` to 760px and center it below the header with a 4px top margin.
   - Give `.hero-cards` a 405px relative positioning area.

3. **Position and rotate the receipt**
   - Use an absolutely positioned 356 × 376px card at `top: 24px` and `left: 52px`.
   - Rotate it `-4deg`, round it to 18px, and apply a soft 15px/20px shadow.
   - Use Neutral 50 with faint 32px repeating horizontal lines to suggest printed paper.

4. **Build the receipt header**
   - Use uppercase 8px DM Mono for the receipt label and booking reference.
   - Set “Your stay” in 20px regular Fraunces.

5. **Lay out the stay dates**
   - Create two equal grid columns separated from surrounding content by dashed Neutral 400 rules.
   - Use 8px monospaced labels, 30px Fraunces dates, and 10px Neutral 600 detail text.

6. **Format the itemized charges**
   - Use a compact grid with 7px row gaps and 11px descriptions.
   - Align each charge with flexbox and render amounts in 10px DM Mono.

7. **Emphasize the total**
   - Add a solid Neutral 700 rule above the total.
   - Pair a tracked 9px uppercase label with a 23px Fraunces amount.

8. **Add payment and barcode details**
   - Align the 8px payment string and supplied 83px barcode along the bottom edge.
   - Keep the barcode’s intrinsic aspect ratio and provide meaningful alternative text.

9. **Retain responsive behavior**
   - At narrower desktop widths, move the card toward the left edge.
   - Below 800px, remove absolute positioning and rotation, make the receipt full width, and increase key date and total sizes for readability.

10. **Update the construction badge**
    - Change the label to `Step 06 — Receipt card`.

## Verification checklist

- The shell and sidebar match Step 5.
- The receipt begins below the booking header and is rotated counter-clockwise.
- All booking reference, date, charge, total, payment, and barcode content is present.
- The page remains 1440 × 1056 with no overflow at the reference size.

