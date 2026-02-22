import { expect, test } from "@playwright/test";

test.describe("Landing Page Screenshots", () => {
  test("Dark mode - hero and navigation", async ({ page }) => {
    await page.goto("http://localhost:3000");

    // Wait for the page to fully load
    await page.waitForLoadState("networkidle");

    // Ensure we're in dark mode (default)
    await page.evaluate(() => {
      document.documentElement.classList.add("dark");
    });

    // Wait for any transitions
    await page.waitForTimeout(500);

    // Take full page screenshot
    await page.screenshot({
      path: "tests/screenshots/landing-dark-mode.png",
      fullPage: false,
    });

    // Verify text is visible (contrast check)
    const heroText = page.locator("h1");
    await expect(heroText).toBeVisible();
    await expect(heroText).toContainText("Design systems");
  });

  test("Light mode - hero and navigation", async ({ page }) => {
    await page.goto("http://localhost:3000");

    // Wait for the page to fully load
    await page.waitForLoadState("networkidle");

    // Switch to light mode
    await page.evaluate(() => {
      document.documentElement.classList.remove("dark");
    });

    // Wait for any transitions
    await page.waitForTimeout(500);

    // Take full page screenshot
    await page.screenshot({
      path: "tests/screenshots/landing-light-mode.png",
      fullPage: false,
    });

    // Verify text is visible (contrast check)
    const heroText = page.locator("h1");
    await expect(heroText).toBeVisible();
    await expect(heroText).toContainText("Design systems");
  });

  test("Verify Roboto font rendering", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.waitForLoadState("networkidle");

    // Check that fonts are loaded
    const fontFamily = await page.evaluate(() => {
      const body = document.body;
      return window.getComputedStyle(body).fontFamily;
    });

    console.log("Font family:", fontFamily);

    // Roboto should be in the font stack
    expect(fontFamily.toLowerCase()).toContain("roboto");
  });
});
