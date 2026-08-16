# Step 10 — Wi-Fi card

## Goal

Extend the Step 9 guest-information grid with the blue Wi-Fi card shown in the second column, including the network name, password, supplied Wi-Fi icon, and copy control.

## CSS steps

1. **Preserve the cumulative page**
   - Keep the shell, sidebar, booking header, composed card hero, hover interaction, and arrival card unchanged.
   - Reuse the existing three-column information grid.

2. **Place the Wi-Fi card**
   - Add the card immediately after the arrival card so CSS Grid places it in column two.
   - Reuse the 225px minimum height, padding, border, radius, translucent background, and shadow from `.info-card`.

3. **Apply the blue identity**
   - Add the style-guide Blue 500 token.
   - Use it for the 36px Wi-Fi icon tile, uppercase `WiFi` label, and Fraunces `02` number.
   - Render the supplied Wi-Fi SVG at the shared 23 × 24px icon size.

4. **Style the card copy**
   - Reuse the 22px Fraunces information-card heading.
   - Keep “Password below” as the shared 10px Neutral 600 subtitle.

5. **Build the credential rows**
   - Use a compact definition list with 3px gaps and 15px top margin.
   - Make each row a minimum of 29px tall with `6px 8px` padding, a 7px radius, and Neutral 200 background.
   - Align labels and values with flexbox and `justify-content: space-between`.

6. **Format the credentials**
   - Use uppercase 8px tracked DM Mono for “Network” and “Password.”
   - Use 9px non-wrapping values so the credentials remain aligned.

7. **Add the copy control**
   - Style the button as a compact translucent pill using 7px uppercase DM Mono.
   - Keep the shared Terracotta focus ring for keyboard users.
   - Copy `soleil-2026` through the Clipboard API when the control is activated.

8. **Retain responsive behavior**
   - The existing mobile grid rule stacks the arrival and Wi-Fi cards in document order.
   - Credential rows remain flexible inside the wider single-column cards.

9. **Update the construction badge**
   - Change the label to `Step 10 — Wi-Fi card`.

## Verification checklist

- The Wi-Fi card occupies the second 316px grid column at desktop size.
- The blue icon, label, number, heading, credential rows, and Copy control match the reference.
- The arrival card and all hero content remain unchanged.
- The page remains 1440 × 1056 with no viewport overflow.

