import { test as base, expect, Page } from "@playwright/test";
import { getToken } from "../utils/apiHelper";

type AuthFixtures = {
  loggedInPage: Page;
  authToken: string;
};

export const test = base.extend<AuthFixtures>({
  // Fixture này giúp mỗi test đều đăng nhập trước khi chạy bằng token API
  loggedInPage: async ({ page, request }, use) => {
    const token = await getToken(request);

    await page.goto("https://conduit.bondaracademy.com/");
    await page.evaluate((value) => {
      localStorage.setItem("jwt", value);
      localStorage.setItem("jwtToken", value);
    }, token);
    await page.reload();
    await page.waitForLoadState("networkidle");

    await use(page);
  },

  // Fixture này lấy token từ API để dùng cho các bước tạo/xóa dữ liệu
  authToken: async ({ request }, use) => {
    const token = await getToken(request);
    await use(token);
  },
});

export { expect };
