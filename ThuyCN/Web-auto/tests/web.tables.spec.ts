// Vào link http://localhost:4200/pages/tables/smart-table
// - Tìm kiếm row có id = 11
// - Thực hiện xoá row này. (Gợi ý dùng dialog confirm)
import test, {expect} from "@playwright/test";
test ('Web Tables', async ({page}) => {
    await page.goto('http://localhost:4200/pages/iot-dashboard')
    await page.getByText("Tables & Data").click();
    await page.getByText("Smart Table").click();
    const findById = page.getByRole('row').filter({ has: page.locator("td").nth(1).getByText("11") })
    const nextBtn = page.locator('.ng2-smart-page-link.page-link.page-link-next')
    page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Are you sure you want to delete?");
    await dialog.accept();
  });
    let found = false
    while (!found) {
        if (await findById.count()) {
            await findById.locator('.nb-trash').click()
            await expect(findById.locator(".nb-trash")).not.toBeVisible();
            break;
        }
        await nextBtn.click()
    }
})