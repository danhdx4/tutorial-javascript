import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('Locator for Using the Grid', async ({ page }) => {
  //goto đến page cần test
  await page.goto('http://localhost:4200/pages/forms/layouts');
    // by Tag name nb-card
  page.locator("nb-card");
  // by ID id="inputEmail1"
  page.locator("#inputEmail1");
  // by Class value .shape-rectangle
  page.locator(".shape-rectangle");
  // by XPath //*[@id="inputEmail1"]
  page.locator('//*[@id="inputEmail1"]');
  //Using gird form
});