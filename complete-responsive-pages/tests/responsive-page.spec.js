import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const desktop = { width: 1440, height: 900 };
const mobile = { width: 375, height: 812 };

test("contains the required semantic page content", async ({ page }) => {
  await page.setViewportSize(desktop);
  await page.goto("/");

  await expect(page.getByText("Northstar", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Operations overview", level: 1 }),
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Create project" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible();
  await expect(page.getByRole("table", { name: "Recent projects" })).toBeVisible();
  await expect(page.getByRole("row")).toHaveCount(5);
});

test("uses three desktop stat columns and one mobile column", async ({ page }) => {
  await page.setViewportSize(desktop);
  await page.goto("/");

  const cards = [
    page.getByTestId("stat-active-projects"),
    page.getByTestId("stat-tasks-due"),
    page.getByTestId("stat-team-capacity"),
  ];
  const desktopBoxes = await Promise.all(cards.map((card) => card.boundingBox()));
  expect(desktopBoxes.every(Boolean)).toBe(true);
  expect(Math.max(...desktopBoxes.map(({ y }) => y)) -
    Math.min(...desktopBoxes.map(({ y }) => y))).toBeLessThan(3);

  await page.setViewportSize(mobile);
  const mobileBoxes = await Promise.all(cards.map((card) => card.boundingBox()));
  expect(mobileBoxes[1].y).toBeGreaterThan(
    mobileBoxes[0].y + mobileBoxes[0].height - 2,
  );
  expect(mobileBoxes[2].y).toBeGreaterThan(
    mobileBoxes[1].y + mobileBoxes[1].height - 2,
  );
});

test("switches between persistent and mobile navigation", async ({ page }) => {
  await page.setViewportSize(desktop);
  await page.goto("/");
  await expect(page.getByTestId("desktop-sidebar")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toBeHidden();

  await page.setViewportSize(mobile);
  await expect(page.getByTestId("desktop-sidebar")).toBeHidden();
  const menuButton = page.getByRole("button", { name: "Open navigation" });
  await expect(menuButton).toBeVisible();
  await menuButton.click();
  await expect(page.getByRole("dialog", { name: "Navigation" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "Navigation" })).toBeHidden();
  await expect(menuButton).toBeFocused();
});

for (const viewport of [
  mobile,
  { width: 768, height: 1024 },
  desktop,
]) {
  test(`has no document overflow at ${viewport.width}x${viewport.height}`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("/");
    const horizontalOverflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );
    expect(horizontalOverflow).toBe(false);
  });
}

test("has no serious accessibility violations in desktop and menu states", async ({
  page,
}) => {
  await page.setViewportSize(desktop);
  await page.goto("/");
  let results = await new AxeBuilder({ page }).analyze();
  expect(
    results.violations.filter(({ impact }) =>
      ["serious", "critical"].includes(impact),
    ),
  ).toEqual([]);

  await page.setViewportSize(mobile);
  await page.getByRole("button", { name: "Open navigation" }).click();
  results = await new AxeBuilder({ page }).analyze();
  expect(
    results.violations.filter(({ impact }) =>
      ["serious", "critical"].includes(impact),
    ),
  ).toEqual([]);
});
