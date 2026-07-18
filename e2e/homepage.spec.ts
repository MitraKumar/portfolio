import { expect, test } from "@playwright/test";

test.describe("Homepage", () => {
  test("should load the main page successfully", async ({ page }) => {
    const response = await page.goto("/");

    expect(response?.status()).toBe(200);

    await expect(page).toHaveTitle(/.+/);

    await expect(page.locator("body")).toBeVisible();
  });
});
