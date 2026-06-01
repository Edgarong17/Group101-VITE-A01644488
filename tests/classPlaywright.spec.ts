import { test, expect } from '@playwright/test';

test.describe('Test Playwright', () => {
  test('Add Task', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');

    await expect(page).toHaveTitle(/TodoMVC/i);

    await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Learn Playwright');

    await page.keyboard.press('Enter');

    await expect(page.getByTestId('todo-title')).toHaveText('Learn Playwright');
  });

  test('Complete Task', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');

    await expect(page).toHaveTitle(/TodoMVC/i);

    await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Learn Playwright');

    await page.keyboard.press('Enter');

    await page.getByRole('checkbox', { name: 'Toggle Todo' }).check();

    await expect(page.getByRole('checkbox', { name: 'Toggle Todo' })).toBeChecked();

  });

  test('Delete Task', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');

    await expect(page).toHaveTitle(/TodoMVC/i);

    await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Learn Playwright');

    await page.keyboard.press('Enter');

    await page.getByRole('button', { name: 'Delete' }).click();

    await expect(page.getByTestId('todo-title')).not.toBeVisible();
  });


});