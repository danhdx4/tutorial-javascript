/**## Bài tập về nhà

Vào link http://localhost:4200/pages/tables/smart-table

- Tìm kiếm row có id = 11
- Thực hiện xoá row này. (Gợi ý dùng dialog confirm) */


import { test, expect } from '@playwright/test';

test("Delete row with ID 11 from smart table", async ({ page }) => {
    // Navigate to smart table page  
    await page.goto('http://localhost:4200/pages/tables/smart-table')

    // Navigate to page 2
    await page.getByRole('link', { name: '2' }).click()
    await page.waitForLoadState('networkidle')
    //Lanh note: Cách click trực tiếp vào page 2 sẽ khó mở rộng. Em nên tìm kiếm common để linh hoạt cách tìm nha

    // Count rows before deletion
    const rowsBefore = await page.locator('tbody tr').count()
    console.log('Rows before delete:', rowsBefore)

    // Find row with exact ID = "11" in the ID column (second cell)
    const row11 = page.locator('tbody tr', {
        has: page.locator('td:nth-child(2)', { hasText: /^11$/ })
    }).first()

    await expect(row11).toHaveCount(1)

    // Click delete and confirm the browser dialog
    const deleteBtn = row11.locator('a.ng2-smart-action-delete-delete')
    await expect(deleteBtn).toHaveCount(1)
    await expect(deleteBtn).toBeVisible()
    await deleteBtn.scrollIntoViewIfNeeded()

    page.on('dialog', async dialog => {
        console.log('Dialog appeared:', dialog.type(), dialog.message())
        await dialog.accept()
    })

    await deleteBtn.click()
    await page.waitForTimeout(1000)

    // Verify the row has been removed from the current table page
    const deletedRow = page.locator('tbody tr', {
        has: page.locator('td:nth-child(2)', { hasText: /^11$/ })
    })
    await expect(deletedRow).toHaveCount(0)
});
