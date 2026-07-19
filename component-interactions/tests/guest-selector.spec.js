import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("opens and reports its state accessibly", async ({ page }) => {
  const trigger = page.getByRole("button", { name: "Guests, 1 adult" });
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await trigger.click();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect(
    page.getByRole("dialog", { name: "Choose guests" }),
  ).toBeVisible();
});

test("updates counts and enforces lower bounds", async ({ page }) => {
  const trigger = page.getByRole("button", { name: "Guests, 1 adult" });
  await trigger.click();

  const decrementAdults = page.getByRole("button", {
    name: "Decrease adults",
  });
  const incrementAdults = page.getByRole("button", {
    name: "Increase adults",
  });
  const decrementChildren = page.getByRole("button", {
    name: "Decrease children",
  });
  const incrementChildren = page.getByRole("button", {
    name: "Increase children",
  });

  await expect(decrementAdults).toBeDisabled();
  await expect(decrementChildren).toBeDisabled();
  await incrementAdults.click();
  await incrementChildren.click();
  await expect(page.getByText("2", { exact: true })).toBeVisible();
  await expect(page.getByText("1", { exact: true })).toBeVisible();
  await expect(trigger).toHaveAccessibleName(
    "Guests, 2 adults, 1 child",
  );
});

test("Escape closes the dialog and restores trigger focus", async ({ page }) => {
  const trigger = page.getByRole("button", { name: "Guests, 1 adult" });
  await trigger.click();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("dialog", { name: "Choose guests" }),
  ).toBeHidden();
  await expect(trigger).toBeFocused();
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
});

test("clicking outside closes the dialog", async ({ page }) => {
  const trigger = page.getByRole("button", { name: "Guests, 1 adult" });
  await trigger.click();
  await page.locator("body").click({ position: { x: 8, y: 8 } });
  await expect(
    page.getByRole("dialog", { name: "Choose guests" }),
  ).toBeHidden();
});

test("has no serious accessibility violations", async ({ page }) => {
  await page.getByRole("button", { name: "Guests, 1 adult" }).click();
  const results = await new AxeBuilder({ page })
    .disableRules(["region"])
    .analyze();
  const serious = results.violations.filter(({ impact }) =>
    ["serious", "critical"].includes(impact),
  );
  expect(serious).toEqual([]);
});

for (const viewport of [
  { width: 375, height: 812 },
  { width: 1440, height: 900 },
]) {
  test(`does not overflow at ${viewport.width}x${viewport.height}`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("/");
    const overflow = await page.evaluate(() => ({
      horizontal:
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
      vertical:
        document.documentElement.scrollHeight >
        document.documentElement.clientHeight,
    }));
    expect(overflow).toEqual({ horizontal: false, vertical: false });
  });
}
