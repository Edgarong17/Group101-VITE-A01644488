import { test, expect } from "@playwright/test";

interface IFruit {
  name: "Strawberry" | "Banana" | "Kiwi" | "Pitaya"; //string;
  id: number;
}

test.describe("network describe block", () => {
  test("mock a fruit and dont call endpoint", async ({ page }) => {
    // Mock the api call before the navigation
    await page.route("*/**/api-mocking/api/v1/fruits", async (route) => {
      //Mock the response with a json object
      const json: IFruit[] = [
        { name: "Strawberry", id: 21 },
        { name: "Banana", id: 22 },
        { name: "Kiwi", id: 23 },
      ];
      // fullfill the route eith the mocked JSON data
      await route.fulfill({ json });
    });

    await page.goto("https://demo.playwright.dev/api-mocking");

    await expect(
      page.getByRole("heading", { name: "Render a List of Fruits" }),
    ).toBeVisible();
  });

  test.describe(" Intercepting the request and modifying it", () => {
    test("Gets the json from API and adds a new fruit", async ({ page }) => {
      let resolveIntercept!: () => void;
      const interceptDone = new Promise<void>((resolve) => {
        resolveIntercept = resolve;
      });
      await page.route("*/**/api/v1/fruits", async (route) => {
        // Fetch the original response from the API
        // This will call the actual API endpoint and get the original data
        const response = await route.fetch();
        // Parse the JSON from the response. This is the original data from the API
        const json = await response.json();
        json.push({ name: "Pitaya", id: 100 });
        // Fulfill using the original response, while patching the response body
        // with the given JSON object
        await route.fulfill({ response, json });
        resolveIntercept();
      });
      try {
        await page.goto("https://demo.playwright.dev/api-mocking");
        await interceptDone; // ensure route callback finished
        await expect(page.getByText("Pitaya")).toBeVisible(); // assert modified result
      } finally {
        await page.unrouteAll({ behavior: "ignoreErrors" });
      }
    });
  });
});
