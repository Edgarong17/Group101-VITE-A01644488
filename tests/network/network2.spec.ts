import { test, expect } from '@playwright/test';

test.describe("Handling HTTP requests and fallbacks", () => {

    test('handle GET and POST request', async ({ page }) => {
        await page.route("https://api.example.com/secure-data", async (route) => {
            if (route.request().method() === 'GET') {
                // mock a GEt request response
                route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({message: 'Mocked GET response'})
                });
            }
            else{
                route.fallback(); // Let other methods go thtough the next handler
            }
        });

        await page.route('https://api.example.com/data', async (route) => {
            if (route.request().method() === 'POST') {
                // Mock a POST request response
                route.fulfill({
                    status: 201,
                    contentType: 'application/json',
                    body: JSON.stringify({message: 'Mocked POST response'})
                });
            }else{
                route.fallback(); // Let other methods go thtough the next handler
            }
        });


        //Fallback of other request
        await page.route('**/*', async (route) => {
            route.fallback(); // Let all other request continue naturrally
        });

        await page.goto('https://example.com');
    });
});