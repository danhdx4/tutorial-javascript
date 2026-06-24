import { test, expect } from '@playwright/test';

test('Delete row with ID = 11', async ({ page }) => {
  await page.goto('http://localhost:4200/pages/tables/smart-table');

  // Search ID = 11
  await page.getByPlaceholder('ID').fill('11');

  // Row chứa ID = 11
  const row = page
    .locator('tbody tr')
    .filter({
      has: page.locator('td').first().getByText('11', { exact: true }),
    });

  await expect(row).toHaveCount(1);

  // Delete + Accept confirm dialog
  await Promise.all([
    page.waitForEvent('dialog').then(dialog => dialog.accept()),
    row.locator('.nb-trash').click(),
  ]);

  // Verify ID=11 không còn tồn tại
  await expect(
    page.locator('tbody tr').filter({
      has: page.locator('td').first().getByText('11', { exact: true }),
    })
  ).toHaveCount(0);
});
