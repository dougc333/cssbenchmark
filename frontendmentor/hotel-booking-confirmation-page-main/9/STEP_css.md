# Step 9 — Arrival card

## Goal

Extend the Step 8 hero with the first reusable guest-information card: the terracotta arrival card shown below the overlapping receipt and host cards.

## CSS steps

1. **Preserve all previous stages**
   - Keep the 1300 × 882px shell, sidebar, booking header, card hero, hover cue, and fan interaction unchanged.
   - Continue using the style-guide Fraunces, DM Sans, DM Mono, Neutral, and Terracotta tokens.

2. **Create the information grid**
   - Add a three-column grid using `repeat(3, minmax(0, 1fr))`.
   - Use a 21px column gap and a 34px top margin below the hero.
   - The single Step 9 card occupies the first column, leaving the remaining two columns empty for later stages.

3. **Build the reusable card surface**
   - Give `.info-card` a 225px minimum height with `20px 18px 18px` padding.
   - Use a 1px Neutral 400 border, 14px radius, translucent white background, and restrained shadow.

4. **Lay out the information header**
   - Use a three-column grid: 36px icon, flexible label, and automatic stage number.
   - Center the supplied 23 × 24px key icon inside a 36px rounded Terracotta 600 square.

5. **Style the arrival identifiers**
   - Render “Arrival” in 10px uppercase DM Mono with `0.17em` tracking.
   - Use Terracotta 700 for both the label and the Fraunces `01` number.

6. **Set the arrival typography**
   - Use 22px regular Fraunces for “Check-in from 15:00.”
   - Use a 10px Neutral 600 subtitle for the date.
   - Use 11.5px Neutral 700 copy with a 1.45 line height for the instructions.

7. **Retain responsive behavior**
   - Below 800px, collapse the information grid to one column with an 18px gap.
   - Reduce card side padding, remove the fixed minimum height, and enlarge heading/body text for mobile readability.

8. **Update the construction badge**
   - Change the label to `Step 09 — Arrival card`.

## Verification checklist

- The arrival card begins at approximately x = 342px and occupies the first information-grid column.
- Its icon, label, number, title, date, and instructions match the reference.
- The completed hero remains unchanged above it.
- The page remains 1440 × 1056 without viewport overflow.

