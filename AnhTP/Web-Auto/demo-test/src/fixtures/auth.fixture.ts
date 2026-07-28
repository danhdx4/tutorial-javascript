export { expect } from "@playwright/test";
import { test as base } from "@playwright/test";
import { account } from "../data/account.data";
import { PageUrl } from "../utils/constants";

// Tự động đăng nhập trước mỗi test, không cần phải đăng nhập bằng giao diện người dùng (UI)
export const test = base.extend({});
test.beforeEach(async ({ page }) => {
  await page.goto(PageUrl.BASE_URL);
  await page.getByRole("link", { name: "Sign in" }).click();
  await page.getByPlaceholder("Email").fill(account.email);
  await page.getByPlaceholder("Password").fill(account.password);
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.getByRole("link", { name: "New Article" }).waitFor();
});
