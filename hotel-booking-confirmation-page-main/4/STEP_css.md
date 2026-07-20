# Step 4 — Complete sidebar

## Goal

Extend the Step 3 application shell with the complete Maison Soleil sidebar shown in `screenshot.png`. The desktop reference remains 1440 × 1056px, with the 235px left column inside the existing 1300 × 882px shell.

## CSS steps

1. **Preserve the Step 3 geometry**
   - Keep the centered shell at `min(1300px, calc(100vw - 8.7rem))` with `min-height: 882px`.
   - Retain `grid-template-columns: 235px minmax(0, 1fr)` and the 1px Neutral 400 divider.

2. **Build the vertical sidebar layout**
   - Make `.sidebar` a full-height flex column with `justify-content: space-between`.
   - Use `18px 15px 17px` padding so the brand and navigation sit at the top while the weather and property details stay anchored at the bottom.

3. **Size the brand and divider**
   - Render the supplied logo at 107 × 42px.
   - Add a 1px Neutral 400 rule with 14px spacing before the navigation.

4. **Create the navigation rows**
   - Use a three-column grid for each link: 20px icon, flexible label, and optional badge.
   - Give each row a 38px minimum height, 7px rounded corners, and 13px medium DM Sans text.
   - Highlight the active item with a white background and Neutral 900 text.
   - Render the notification as a 17px Terracotta 700 circle.
   - Add a visible Terracotta focus border for keyboard users.

5. **Style the weather card**
   - Use the supplied weather illustration as an absolutely positioned 80px decoration.
   - Apply the Sun palette gradient, 14px radius, and restrained shadow.
   - Pair a 9px DM Mono eyebrow with a 28px Fraunces temperature and 11px body copy.

6. **Add the property footer**
   - Separate it from the card with a dashed Neutral 400 rule.
   - Use uppercase DM Mono at 8.5px with increased tracking for the establishment date, address, and copyright.

7. **Keep the cumulative responsive rules**
   - Below 1080px, let the shell fill the viewport and remove its outer border, radius, and shadow.
   - Below 800px, hide this desktop-only sidebar; the mobile navigation is introduced in a later stage.

8. **Update the construction badge**
   - Change the label to `Step 04 — Complete sidebar` while preserving its fixed top-center position.

## Verification checklist

- The application shell is 1300 × 882px at 1440 × 1056.
- The sidebar remains 235px wide and its right divider aligns at approximately x = 305px.
- The logo, five navigation links, active badge, weather card, address, and copyright match the reference positions.
- The empty right content region remains unchanged from Step 3.
- The page has no horizontal or vertical overflow at the desktop reference size.
