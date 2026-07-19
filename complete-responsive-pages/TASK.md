# Case 01: Northstar operations dashboard

Replace the placeholder with a complete responsive dashboard.

## Required content

- A header containing the `Northstar` brand and a `Create project` button.
- A page heading named `Operations overview`.
- A navigation region named `Primary` with links for Overview, Projects,
  Calendar, Reports, and Settings.
- Three stat cards named Active projects, Tasks due, and Team capacity.
- A `Recent projects` table with at least four project rows and columns for
  Project, Owner, Status, and Due date.

## Responsive behavior

- At widths of 1024px and above, show a persistent left sidebar and hide the
  mobile menu button.
- Below 1024px, hide the persistent sidebar and show a `Open navigation` button.
- Activating the mobile menu opens a dialog named `Navigation`.
- `Escape` closes the navigation dialog and restores focus to its button.
- At 1440px, the three stat cards share one row.
- At 375px, the stat cards stack into one column.
- The page must not overflow horizontally at 375px, 768px, or 1440px.
- The table must remain usable on a phone; a locally scrollable table region is
  allowed, but the document itself must not scroll horizontally.

## Quality requirements

- Use semantic landmarks, headings, links, buttons, and a real table.
- Provide visible focus styles.
- Use no external resources or network fonts.
- Respect `prefers-reduced-motion`.

Do not edit `tests/`, `package.json`, or `playwright.config.js`.
