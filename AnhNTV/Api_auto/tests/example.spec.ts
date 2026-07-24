// import { test, expect } from '@playwright/test';

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

import { test, expect } from '@playwright/test';
import mockArticles from '../test-data/articles.json';

test('Mock API articles từ file JSON', async ({ page }) => {
  await page.route('**/api/articles?limit=10&offset=0', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(mockArticles)
    });
  });

  await page.goto('https://conduit.bondaracademy.com/');

  // kiểm tra bài viết
  await expect(page.getByText('AnhNTV_Automation Test with Playwright')).toBeVisible();
});
