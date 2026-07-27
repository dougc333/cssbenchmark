# Preview decomposition

The seven directories reconstruct `preview.jpg` as cumulative CSS teaching
stages. Each `index.html` contains its own inline `<style>` element, uses the
provided assets, and adds one visual responsibility to the previous stage.

## Reference analysis

- `preview.jpg` is 1440 × 1056 pixels.
- The dark application panel is approximately 1200 × 854 pixels and is centered
  at about 120 pixels from the left and 101 pixels from the top.
- The application panel is the ticket-complete state shown in
  `design/desktop-design-ticket.jpg`, scaled to fit inside the preview frame.
- `style-guide.md` supplies the Inconsolata family, neutral palette, orange
  accents, and the 375/1440 mobile/desktop design widths.
- The implementation uses the provided desktop/mobile backgrounds, grid lines,
  circles, squiggles, ticket silhouette, logos, avatar, and GitHub icon rather
  than redrawing those assets in CSS.

## Step 1 — Canvas and application frame

Directory: `1/`

1. Load the local variable Inconsolata font.
2. Add the shared color tokens from `style-guide.md`.
3. Reset box sizing and default page margins.
4. Center a 1200 × 854 proportional application frame inside the 1440 × 1056
   showcase canvas.
5. Add clipping and the drop shadow visible around the dark preview panel.

This isolates the largest geometry before any decorative or typographic detail
is introduced.

## Step 2 — Background and decorative layers

Directory: `2/`

1. Apply `background-desktop.png` to the application frame.
2. Overlay `pattern-lines.svg` across the full panel.
3. Position both `pattern-circle.svg` instances.
4. Add the supplied top and bottom squiggly-line assets.
5. Keep all artwork behind content with an isolated stacking context.

This stage demonstrates the difference between a base background and positioned
decorative layers.

## Step 3 — Event brand

Directory: `3/`

1. Add the supplied `logo-full.svg`.
2. Center it independently with absolute positioning and a 50% translation.
3. Scale the source logo to match the inset preview.

The brand is isolated before the larger hero typography is added.

## Step 4 — Congratulatory headline

Directory: `4/`

1. Add the two-line completion heading.
2. Use the 800 weight supplied by the variable font.
3. Constrain and center the heading for predictable wrapping.
4. Apply the orange-to-white text gradient to the attendee name.

This stage focuses on hierarchy, line height, wrapping, and gradient text.

## Step 5 — Supporting message

Directory: `5/`

1. Add the email confirmation copy below the heading.
2. Use Neutral 300 for secondary information.
3. Highlight the email address with Orange 500.
4. Constrain the paragraph width and center its lines.

The heading and supporting copy can now be evaluated as one vertical text group.

## Step 6 — Ticket shell and event metadata

Directory: `6/`

1. Use `pattern-ticket.svg` as the ticket silhouette and translucent surface.
2. Position the ticket at the same center axis as the header and copy.
3. Add the event logo and date/location metadata.
4. Place the vertical ticket number inside the perforated stub area.

The complex notched ticket shape remains an asset; CSS is responsible for its
size, position, and the content layered over it.

## Step 7 — Attendee details and responsive polish

Directory: `7/`

1. Add the avatar, attendee name, GitHub icon, and username as a flex row.
2. Add the pale outer-preview decorations that sit outside the application
   frame in `preview.jpg`.
3. Switch to `background-mobile.png` below 700px.
4. Remove the marketing frame/shadow on small screens and make the app fill the
   viewport.
5. Resize and reposition the brand, copy, ticket, attendee row, and decorative
   assets for the mobile composition.

This final CSS stage is a static visual reconstruction. Form validation, file
upload behavior, and switching from the form to the generated ticket require
JavaScript and are intentionally not part of this seven-step CSS decomposition.

## Suggested review workflow

Open the pages in numerical order at 1440 × 1056. At each step, compare only the
new responsibility against `preview.jpg`; this keeps layout debugging narrow.
Then test `7/index.html` at 375px and across the full 320px-to-desktop range
recommended by `style-guide.md`.
