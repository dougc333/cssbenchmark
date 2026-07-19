# Case 01: Accessible guest selector

Replace the placeholder page with a reusable guest selector.

## Requirements

- The trigger is a button whose accessible name starts as `Guests, 1 adult`.
- The trigger exposes its open state with `aria-expanded`.
- Activating the trigger opens a dialog named `Choose guests`.
- The dialog contains rows for `Adults` and `Children`.
- Each row has an accessible decrement button, count, and increment button.
- Adults start at 1 and cannot go below 1.
- Children start at 0 and cannot go below 0.
- Counts use correct singular/plural wording in the trigger.
- `Escape` closes the dialog and restores focus to the trigger.
- Clicking the trigger again closes the dialog.
- Clicking outside the component closes it.
- The component must work at 375×812 and 1440×900 without page overflow.
- Use semantic controls and visible `:focus-visible` styling.

Do not edit `tests/`, `package.json`, or `playwright.config.js`.
