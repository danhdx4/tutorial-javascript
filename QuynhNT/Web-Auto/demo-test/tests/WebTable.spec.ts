import test, { expect } from "@playwright/test";

test(`verify Web Table`, async ({ page }) => {
  await page.goto("http://localhost:4200/pages/tables/smart-table");
  await page.locator(".ng2-smart-pagination-nav").getByText("2").click();
  const targetRowById = page
    .getByRole("row", { name: "11" })
    .filter({ has: page.locator("td").nth(1).getByText("11") });

  await targetRowById.locator(".nb-trash").click();
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Are you sure");
    await dialog.accept();
  });

  await targetRowById.locator(".nb-trash").click();
  await expect(targetRowById.locator(".nb-trash")).not.toBeVisible();
});
