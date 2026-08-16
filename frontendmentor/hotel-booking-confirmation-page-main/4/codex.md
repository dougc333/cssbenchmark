# Step 4 — Planning Codex

## Objective

Build the **Complete sidebar** state for the Maison Soleil hotel booking confirmation page. The desktop reference is **1440 × 1056 CSS pixels**; the application shell inside it is **1300 × 882px** with a **235px** left column.

## Baseline (Step 3)

Step 3 (`3/index.html`, `3/screenshot.png`) established:

- Neutral gray viewport canvas (`#efefee`) with centered preview stage
- Construction badge: **Step 03 — Left-column geometry**
- Rounded 1300 × 882px shell with shadow and Neutral 100 fill
- Two-column grid: `235px` sidebar track + flexible content track
- 1px Neutral 400 vertical divider; sidebar region empty

`3/image.html` was not present in the repo; the baseline for this step is taken from `3/index.html` plus its screenshot.

## Planning steps

### 1. Audit references

- Read `style-guide.md` for color tokens (Neutral, Sun, Terracotta) and font families (Fraunces, DM Sans, DM Mono).
- Open `4/screenshot.png` and list every visible sidebar element: logo, divider, five nav rows, active badge, weather card, property footer.
- Read `4/STEP_css.md` for geometry, spacing, and verification targets.

### 2. Preserve cumulative shell geometry

- Keep preview stage padding: `5.35rem 4.35rem`.
- Keep `.hotel-app` at `min(1300px, calc(100vw - 8.7rem))`, `min-height: 882px`, `border-radius: 16px`, and existing shadow.
- Retain `grid-template-columns: 235px minmax(0, 1fr)` and `min-width: 0` on both columns.

### 3. Structure the sidebar DOM

```
.sidebar (flex column, space-between)
├── .sidebar-top
│   ├── logo
│   ├── .sidebar-rule
│   └── .guest-nav > ul > li > .nav-link
└── .sidebar-bottom
    ├── .weather-card
    └── .property-footer
```

### 4. Load local fonts

- Register Fraunces, DM Sans, and DM Mono via `@font-face` pointing at `../assets/fonts/`.

### 5. Brand block

- Render `logo.svg` at **107 × 42px** with `14px` bottom margin and `1px` left offset.
- Add a **1px** Neutral 400 horizontal rule below the logo.

### 6. Navigation rows

- Three-column grid per link: **20px** icon, label, optional badge.
- Row height **38px** minimum; **7px** radius; **13px** medium DM Sans.
- Active row: white background, Neutral 900 text, Terracotta 700 circular badge (**17px**).
- Focus: **2px** Terracotta 500 border.

### 7. Weather card

- Sun gradient (`#ffe69b` → Sun 300), **14px** radius, soft shadow.
- Absolutely position `icon-weather.svg` at **80px** in the top-right.
- Eyebrow: **9px** DM Mono uppercase; temperature: **28px** Fraunces; copy: **11px** DM Sans.

### 8. Property footer

- Dashed Neutral 400 top border with **15px** padding-top.
- **8.5px** DM Mono uppercase for establishment date, address, and copyright.

### 9. Responsive rules (inherited)

- **≤ 1080px:** shell fills viewport; remove outer border, radius, shadow.
- **≤ 800px:** hide desktop sidebar (mobile nav arrives in Step 11).

### 10. Deliverables

| File | Purpose |
| --- | --- |
| `index.html` | Runnable solution using `../assets/` for fonts and SVG icons |
| `image.html` | Self-contained variant: embedded CSS + base64 data-URI icons |
| `codex.md` | This planning document |

### 11. Verification checklist

- [ ] Shell is 1300 × 882 at 1440 × 1056 viewport
- [ ] Sidebar is 235px; divider aligns near x ≈ 305px
- [ ] Logo, five nav links, badge, weather card, and footer match screenshot positions
- [ ] Right content region remains empty (unchanged from Step 3)
- [ ] No viewport scrollbars at desktop reference size
- [ ] Construction badge reads **Step 04 — Complete sidebar**
