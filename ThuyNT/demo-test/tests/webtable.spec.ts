import { test, expect } from "@playwright/test";

test("find id row", async ({ page }) => {
    // goto http://localhost:4200/pages/tables
    await page.goto('http://localhost:4200/pages/tables/smart-table')
    // find id row
    const idRow = page.locator('td').nth(1).filter({ hasText: '11' })

    const nextPage = page.locator(".ng2-smart-pagination-nav").getByText(">")
    const numberPage = await nextPage.count();
    for (let i = 0; i < numberPage; i++) {
        if (await idRow.count() == 0) {
            await nextPage.click()
        }
        else {
            console.log("Found id row: ", await idRow.count())
            await idRow.locator('.nb-trash').click();
            page.on("dialog", async (dialog) => {
                expect(dialog.message()).toContain("Are you sure");
                await dialog.accept();

            })
            break;
        }
    }
})