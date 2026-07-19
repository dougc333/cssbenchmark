import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

function inventoryRows(page) {
  return page.getByRole("table", { name: "Inventory" }).locator("tbody tr");
}

test("preserves the existing name and category search", async ({ page }) => {
  await page.goto("/");
  const search = page.getByRole("searchbox", { name: "Search inventory" });
  await search.fill("camera");
  await expect(inventoryRows(page)).toHaveCount(1);
  await expect(page.getByRole("row", { name: /Field Camera/ })).toBeVisible();

  await search.fill("travel");
  await expect(inventoryRows(page)).toHaveCount(2);
  await expect(page.getByText("Showing 2 of 6 products")).toBeVisible();
});

test("filters to products that are currently in stock", async ({ page }) => {
  await page.goto("/");
  const inStock = page.getByRole("checkbox", { name: "In stock only" });
  await inStock.check();
  await expect(inventoryRows(page)).toHaveCount(4);
  await expect(page.getByText("Showing 4 of 6 products")).toBeVisible();
  await expect(page.getByText("Out of stock")).toHaveCount(0);
});

test("initializes both controls from a deep link", async ({ page }) => {
  await page.goto("/?q=office&stock=1");
  await expect(
    page.getByRole("searchbox", { name: "Search inventory" }),
  ).toHaveValue("office");
  await expect(
    page.getByRole("checkbox", { name: "In stock only" }),
  ).toBeChecked();
  await expect(inventoryRows(page)).toHaveCount(2);
});

test("updates the URL while preserving the other filter", async ({ page }) => {
  await page.goto("/");
  await page
    .getByRole("searchbox", { name: "Search inventory" })
    .fill("electronics");
  await expect(page).toHaveURL(/[?&]q=electronics(?:&|$)/);

  await page.getByRole("checkbox", { name: "In stock only" }).check();
  await expect(page).toHaveURL(/[?&]q=electronics(?:&|$)/);
  await expect(page).toHaveURL(/[?&]stock=1(?:&|$)/);
  await expect(inventoryRows(page)).toHaveCount(1);
});

test("Back and Forward restore controls and results", async ({ page }) => {
  await page.goto("/");
  const search = page.getByRole("searchbox", { name: "Search inventory" });
  const inStock = page.getByRole("checkbox", { name: "In stock only" });

  await search.fill("travel");
  await expect(page).toHaveURL(/[?&]q=travel(?:&|$)/);
  await inStock.check();
  await expect(page).toHaveURL(/[?&]stock=1(?:&|$)/);
  await expect(inventoryRows(page)).toHaveCount(1);

  await page.goBack();
  await expect(search).toHaveValue("travel");
  await expect(inStock).not.toBeChecked();
  await expect(inventoryRows(page)).toHaveCount(2);

  await page.goForward();
  await expect(inStock).toBeChecked();
  await expect(inventoryRows(page)).toHaveCount(1);
});

test("remains accessible and produces no console errors", async ({ page }) => {
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });

  await page.goto("/?q=office&stock=1");
  const results = await new AxeBuilder({ page }).analyze();
  expect(
    results.violations.filter(({ impact }) =>
      ["serious", "critical"].includes(impact),
    ),
  ).toEqual([]);
  expect(errors).toEqual([]);
});
