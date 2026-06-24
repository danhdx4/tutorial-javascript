import { test, expect } from '@playwright/test';

test("web tables - find id=27 and edit email", async ({ page }) => {

    // 1. Truy cập trang
    await page.goto('http://localhost:4200');

    // 2. vào bảng smart table
    await page.getByText('Tables & Data').click();
    await page.getByText('Smart Table').click();

    const nextBtn = page.locator('.ng2-smart-page-link.page-link-next');

    let found = false;

    while (!found) {

        // 3. Tìm row có ID = 27 (cột ID là cột thứ 2)
        const targetRow = page.getByRole('row').filter({
            has: page.locator('td').nth(1).getByText('27')
        });

        if (await targetRow.count() > 0) {

            console.log('✅ Found ID = 27');

            // 4. Click edit
            await targetRow.locator('.nb-edit').click();

            // 5. Sửa Email
            const emailInput = page.locator('input-editor')
                .getByPlaceholder('E-mail');

            await emailInput.clear();
            await emailInput.fill('test@test.com');

            // 6. Save
            await page.locator('.nb-checkmark').click();

            // 7. Verify
            await expect(targetRow).toContainText('test@test.com');

            found = true;

        } else {
            // 8. Nếu chưa thấy → next page
            const isDisabled = await nextBtn.getAttribute('class');

            if (isDisabled?.includes('disabled')) {
                throw new Error('❌ Không tìm thấy ID = 27');
            }

            await nextBtn.click();
        }
    }
});