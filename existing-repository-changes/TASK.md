# Case 01: URL-synchronized inventory filtering

Extend the existing inventory application without regressing its current search.

## Requested change

- Add a checkbox labeled `In stock only`.
- When checked, display only products with `stock > 0`.
- Keep the result label in the form `Showing X of 6 products`.
- Initialize search from the `q` URL parameter.
- Initialize the checkbox from `stock=1`.
- Whenever either filter changes, update the URL without reloading the page.
- Omit `q` when the search is empty and omit `stock` when the checkbox is off.
- Preserve one filter's parameter when the other filter changes.
- Browser Back and Forward must restore both controls and the matching rows.
- Preserve the existing case-insensitive name-and-category search.
- Keep the existing product records and semantic table.
- Do not add a routing or state-management dependency.
- Do not introduce browser console errors.

You may edit files under `src/`. Do not edit tests, package configuration, or
the product data to satisfy assertions.
