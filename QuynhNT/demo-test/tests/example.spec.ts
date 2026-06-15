import { test, expect } from "@playwright/test";

// test("has title", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });
// const sleep = (ms: number): Promise<void> => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };

test("test app", async ({ page }) => {
  await page.goto(`localhost:4200`);

  //   // Click the get started link.
  //   await page.getByRole('link', { name: 'Get started' }).click();
  // await sleep(2000);
  //   // Expects page to have a heading with the name of Installation.
  //   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
