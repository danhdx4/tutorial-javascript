// tự động đăng nhập trước mỗi test, không cần phải đăng nhập bằng giao diện người dùng (UI)
export { expect } from "@playwright/test";
import { test as base } from "@playwright/test";
import { account } from "../data/account.data";

export const test = base.extend({});
test.beforeEach(async ({ page }) => {
  await page.goto("https://conduit.bondaracademy.com");
  await page.getByRole("link", { name: "Sign in" }).click();
  await page.getByPlaceholder("Email").fill(account.email);
  await page.getByPlaceholder("Password").fill(account.password);
  await page.getByRole("button", { name: "Sign in" }).click();
});
