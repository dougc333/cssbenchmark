# Step 7 — Host card

## Goal

Extend the Step 6 receipt composition with the terracotta welcome card shown in `screenshot.png`. The new card overlaps the receipt while all earlier shell, sidebar, and header styling remains unchanged.

## CSS steps

1. **Preserve the cumulative composition**
   - Keep the centered 760px hero stage and the existing 356 × 376px receipt.
   - Leave the Step 5 booking header and Step 4 sidebar geometry untouched.

2. **Position the host card**
   - Add a second absolutely positioned 356 × 376px card at `top: 24px` and `right: 37px`.
   - Place it above the receipt with `z-index: 2` and rotate it `4deg`.
   - Use an 18px radius and a warm, larger shadow to reinforce the overlap.

3. **Apply the terracotta treatment**
   - Use Terracotta 700 as the base.
   - Layer a soft radial Terracotta highlight near the upper-right to reproduce the reference’s depth.
   - Use Neutral 50 for primary copy and Neutral 200 for supporting labels.

4. **Build the card header**
   - Lay out “Welcome card” and the supplied 43px sun icon with flexbox.
   - Add a subtle dashed translucent divider below the header.
   - Render the label in 8px uppercase DM Mono with tracked lettering.

5. **Style the host message**
   - Use italic Fraunces for the 34px `Margaux.` heading.
   - Render “A note from your host,” at 17px in Sun 300.
   - Use 12px DM Sans with a 1.45 line height for the welcome note.

6. **Anchor the room details**
   - Push the room block to the card bottom with `margin-top: auto`.
   - Use an 8px uppercase DM Mono label and 18px Fraunces room name.

7. **Add the card-fan interaction**
   - On pointer hover, shift and rotate the receipt and host card in opposite directions.
   - Keep the transitions at 450ms using the same easing curve as the cards.

8. **Retain responsive behavior**
   - At narrower desktop widths, pull the host card inward to `right: 5px`.
   - Below 800px, stack both cards at full width, remove rotation, and place the host card first.
   - Increase the host heading and note sizes slightly for mobile readability.

9. **Update the construction badge**
   - Change the label to `Step 07 — Host card`.

## Verification checklist

- The host card is 356 × 376px before rotation and overlaps the receipt from the right.
- The sun icon, host message, welcome copy, and room information are present.
- The host card uses the style-guide Terracotta, Sun, Neutral, and typography tokens.
- The original shell remains 1300 × 882px with no viewport overflow.

