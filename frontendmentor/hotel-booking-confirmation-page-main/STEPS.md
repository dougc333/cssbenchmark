# Maison Soleil implementation states

Run `npm run dev`, then open any numbered route to inspect that recorded stage.

| Step | Route | Recorded state |
| --- | --- | --- |
| 1 | `/1/` | Canvas and outside background |
| 2 | `/2/` | Rounded application shell |
| 3 | `/3/` | Left-column geometry |
| 4 | `/4/` | Complete sidebar |
| 5 | `/5/` | Booking header |
| 6 | `/6/` | Receipt card |
| 7 | `/7/` | Host card |
| 8 | `/8/` | Composed center hero |
| 9 | `/9/` | Arrival card |
| 10 | `/10/` | Wi-Fi card |
| 11 | `/11/` | Breakfast and responsive behavior |
| 12 | `/12/` | Final accessible polish |

Every numbered directory contains:

- `index.html` — runnable entry for the state
- `STEP.md` — description of what changed
- `screenshot.png` — 1440 × 1056 desktop recording

Step 12 additionally contains `mobile-screenshot.png` and
`mobile-menu-screenshot.png`.
