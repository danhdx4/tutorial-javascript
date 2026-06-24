import { test, expect } from '@playwright/test';

// ## Bài tập về nhà
// Vào link http://localhost:4200/pages/tables/smart-table
// - Tìm kiếm row có id = 11
// - Thực hiện xoá row này. (Gợi ý dùng dialog confirm)

test('Table', async ({ page }) => {
  await page.goto('http://localhost:4200/pages/tables/smart-table');
  const targetRow = 11;
  const pageSize = 10;

  // - Tìm kiếm row có id = 11
  const targetPage  = Math.floor((targetRow - 1)/pageSize) + 1;  
  for (let current = 1; current < targetPage; current++) {
    const btnNext = page.locator('ng2-smart-table-pager .page-link-next');
    await btnNext.click();
  }

  // - Thực hiện xoá row này. (Gợi ý dùng dialog confirm)
  const row11 = page.locator('tr', {hasText: 'mark@gmail.com'});
  const btnDelete = row11.locator('.ng2-smart-action-delete-delete');
  
  page.on('dialog', async dialog => {
    setTimeout(() => dialog.accept(), 3000);
  });
  await btnDelete.click();
});