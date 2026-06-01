import { test, expect, firefox } from '@playwright/test';


test.describe('Act3', () => {
  test('Browser Contexts', async ({ browser }) => {

    console.log('Browser Context start ' + browser.contexts().length);

    const context = await browser.newContext();
    console.log('Browser Context after ' + browser.contexts().length);
    const page = await context.newPage();
    await page.goto('https://playwright.dev/');

    await context.close();
    await browser.close();
  });

  test('Browser Contexts Teacher', async ({ }) => {
    const browser = await firefox.launch();
    console.log('Browser Context start ' + browser.contexts().length);
    const page = await browser.newPage();
    await page.goto('https://playwright.dev/');

    console.log('Browser Context after ' + browser.contexts().length);
    await page.screenshot({ path: './tests/screenshot.png' });

    await browser.close();
  });

  test('Multiple Pages', async ({ }) => {
    const browser = await firefox.launch();
    console.log('Browser Context start ' + browser.contexts().length);
    const page1 = await browser.newPage();
    await page1.goto('https://playwright.dev/');
    await page1.screenshot({ path: './tests/screenshot1.png' });
    console.log('Browser Context start ' + browser.contexts().length);
    const page2 = await browser.newPage();
    await page2.goto('https://playwright.dev/docs/intro');
    await page2.screenshot({ path: './tests/screenshot2.png' });
    console.log('Browser Context start ' + browser.contexts().length);
    await browser.close();
  });

  test('Pages Methods', async () => {
    const browser = await firefox.launch();
    const page = await browser.newPage(); // new context and page
    await page.goto('https://playwright.dev/');
    await page.screenshot({ path: './tests/pageMMethods1.png' });
    await page.goto('https://github.com');
    page.once('load', () => console.log('Page loaded'));
    await page.screenshot({ path: './tests/pageMMethods2.png' });
    await page.goBack();
    await page.screenshot({ path: './tests/pageMMethods3.png' });
    await browser.close();
  });

  test('Mercado Libre', async () => {
    const browser = await firefox.launch();
    const page = await browser.newPage(); // new context and page
    await page.goto('https://www.mercadolibre.com.mx');
    await page.getByRole('link', { name: 'ENVÍO GRATIS', exact: true });
    await page.getByText('Beneficios en entretenimientoPágina 1Página').fill('HAHAHA');
    await page.getByTestId('thb-double-container').getByRole('link', { name: 'FULL HASTA 50% DE DESCUENTO' });
    
  });
});