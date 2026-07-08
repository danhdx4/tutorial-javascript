import { test, expect } from '@playwright/test';

test('BTVN 6 - Tìm và xóa row có ID = 11', async ({ page }) => {
  // Mở trang Smart Table
  await page.goto('http://localhost:4200/pages/tables/smart-table');
// action > để chuyển trang tiếp theo
  const nextBtn = page.locator('.ng2-smart-pagination-nav').getByText('>');
// Biến đánh dấu đã tìm thấy hay chưa
  let found = false;

  while (!found) {
    const targetRowById = page.getByRole('row').filter({
      has: page.locator('td').nth(1).filter({ hasText: '11' }),
    });

    console.log('Số dòng tìm thấy:', await targetRowById.count());
    if (await targetRowById.count() > 0) {
      found = true;

      page.once('dialog', async (dialog) => {await dialog.accept();});

      await targetRowById.locator('.nb-trash').click();
      break;
    } else {
      await nextBtn.click();
    }
  }
});