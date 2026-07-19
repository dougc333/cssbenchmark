# React Track: Complete Responsive Pages

This track measures complete-page composition rather than isolated CSS. A
submission must implement semantic structure, responsive transformations,
navigation behavior, accessibility, and stable rendering at multiple viewports.

## Public development case

`01-operations-dashboard` is a specification-driven responsive page. The
candidate may edit files under `src/` only.

Future private cases can add `reference_images` to `cases.jsonl` and combine
these behavioral checks with screenshot similarity. The public case avoids a
gold implementation so it can be used as a clean agent-development fixture.

## Run

```bash
npm install
npx playwright install chromium
npm run benchmark
```

The starter builds but intentionally fails page requirements until a candidate
implements `TASK.md`.

## Score dimensions

- 35% required page content and structure
- 25% responsive layout transformations
- 20% navigation interactions and focus behavior
- 10% accessibility
- 10% build health and overflow
