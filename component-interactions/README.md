# React Track: Component Interactions

This track measures whether a model can implement an accessible, stateful React
component from a behavioral contract. Visual styling matters, but correct state,
keyboard behavior, focus management, and edge cases are the primary signals.

## Public development case

`01-guest-selector` asks the model to replace the placeholder in `src/App.jsx`
with a guest selector. The candidate may edit files under `src/` only.

The public tests deliberately expose the contract so this directory can be used
to develop an agent and benchmark runner. Production evaluation cases should use
private tests following the same structure.

## Run

```bash
npm install
npx playwright install chromium
npm run benchmark
```

The initial starter builds successfully but does not pass the benchmark tests.
That is intentional: the model-generated patch is the artifact being evaluated.

## Score dimensions

- 60% interaction correctness
- 15% keyboard and focus behavior
- 15% automated accessibility
- 10% responsive behavior and build health

Any build failure or modification to `tests/` invalidates the case.
