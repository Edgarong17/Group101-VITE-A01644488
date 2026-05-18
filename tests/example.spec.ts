import { test, expect } from '@playwright/test';

test.describe('example', () => {
  test.beforeEach(async ({ page }) => {
    // Code to run before each test in this describe block
    // For example, you can navigate to a common page or set up mock data
    await page.goto('https://playwright.dev/');
  });

  test('first', async ({ page }) => {
    await page.goto('https://github.com/Edgarong17'); 
    await expect(page).toHaveTitle(/GitHub/);
    
  });

  test('log into github', async ({ page }) => {
    await page.goto('https://github.com/'); 
    await expect(page).toHaveTitle(/GitHub/);
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('testUser');
    await page.getByRole('textbox', { name: 'Password' }).fill('testPassword');
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page.getByText('There have been several')).toBeVisible();
  });

  test('go to playwright via google', async ({ page }) => {
    await page.goto('https://google.com'); 
    await expect(page).toHaveTitle(/Google/);
    await page.getByRole('combobox', { name: 'Buscar' }).fill('playwright');
    await page.keyboard.press('Enter');

    await expect(
      page.getByRole('link', { name: 'Playwright: Fast and reliable end-to-end testing for modern web apps' })
    ).toBeVisible();

    await page.getByRole('link', { name: 'Playwright: Fast and reliable end-to-end testing for modern web apps' }).click();
  });

  test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
});



test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
