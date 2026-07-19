# React Track: Changes to Existing Repositories

This track measures whether a model can understand and safely extend a working
multi-file React application. The candidate must preserve baseline behavior,
modify the smallest reasonable surface, and satisfy feature and regression
tests.

## Public development case

`01-url-synchronized-inventory-filter` starts with a working inventory table and
name search. The requested change adds an in-stock filter plus URL/history
synchronization.

Unlike a blank-page generation task, this case tests state initialization,
browser history, component boundaries, regression safety, and accessibility.

## Run

```bash
npm install
npx playwright install chromium
npm run benchmark
```

The starter builds and its existing search works. It intentionally fails the new
feature tests until a candidate implements `TASK.md`.

## Score dimensions

- 35% requested feature correctness
- 25% URL and browser-history behavior
- 20% regression preservation
- 10% accessibility
- 10% build health and error-free execution

Editing `tests/`, deleting existing products, or replacing the application with
a hard-coded test fixture invalidates the case.
