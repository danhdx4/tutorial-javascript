import { test, expect } from "@playwright/test";

/**
 * Vào link http://localhost:4200/pages/tables/smart-table
- Tìm kiếm row có id = 11
- Thực hiện xoá row này. (Gợi ý dùng dialog confirm)
 */

test("web tables - btvn6", async ({ page }) => {
  // Navigate to Smart Table Page
  await page.goto("http://localhost:4200/pages/tables/smart-table");

  const targetRowById = page
    .getByRole("row")
    .filter({ has: page.locator("td").nth(1).getByText("23") });
  const nextBtn = page.locator(".ng2-smart-page-link.page-link.page-link-next");

  // hàm while loop để tìm kiếm row có id = 23, nếu tìm thấy thì thực hiện xoá row này
  let found = false;
  while (!found) {
    console.log("checkly: ", await targetRowById.count());
    if (await targetRowById.count()) {
      console.log("I found it!!!!");

      // Delete row
      page.on("dialog", async (dialog) => {
        console.log("Check message text: ", dialog.message());
        console.log("Check dialog type: ", dialog.type());
        await dialog.accept();
      });

      await targetRowById.locator(".nb-trash").click();

      // Verify the target deleted
      await expect(targetRowById).toBeHidden();
      break;
    }
    await nextBtn.click();
  }
});

test("web tables - other", async ({ page }) => {
  // Navigate to Smart Table Page
  await page.goto("http://localhost:4200/pages/tables/smart-table");

  const targetRowById = page
    .getByRole("row")
    .filter({ has: page.locator("td").nth(1).getByText("23") });
  const nextBtn = page.locator(".ng2-smart-page-link.page-link.page-link-next");

  let found = false;
  while (!found) {
    console.log("checkly: ", await targetRowById.count());
    if (await targetRowById.count()) {
      console.log("I found it!!!!");

      // Edit row & cancel
      await targetRowById.locator(".nb-edit").click();
      await page.locator("input-editor").getByPlaceholder("Age").clear();
      await page.locator("input-editor").getByPlaceholder("Age").fill("300");
      await page.locator(".nb-close").click(); // cancel edit

      break;
    }
    await nextBtn.click();
  }
});
