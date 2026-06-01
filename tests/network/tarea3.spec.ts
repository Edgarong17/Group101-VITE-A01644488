import { test, expect } from '@playwright/test';

test.describe("Handling HTTP requests and fallbacks", () => {

    test("abort request", async ({ page }) => {

        await page.route("**/*.{png,jpg,jpeg}", (route) => route.abort());

        await page.goto("https://playwright.dev/");
        await expect(page.getByRole('img')).toHaveCount(0);
    });
});