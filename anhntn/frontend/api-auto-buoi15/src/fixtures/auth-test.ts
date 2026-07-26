import { test as base } from "playwright/test";
import { APP_URL, TEST_USER } from "../utils/constants";
import { getToken } from "../utils/apiHelpers";

type AuthFixtures = {
  login: void;
  loginByAPI: void;
};

export const test = base.extend<AuthFixtures>({
  login: async ({ page }, use) => {
    await page.goto(APP_URL);
    await page.getByRole("link", { name: " Sign in " }).click();
    await page.getByPlaceholder("Email").fill(TEST_USER.email);
    await page.getByPlaceholder("Password").fill(TEST_USER.password);
    await page.getByRole("button", { name: " Sign in " }).click();
    await page.waitForResponse("**/api/users/login");
    await page.reload();
    await use();
  },

  loginByAPI: [
    async ({ page, request }, use) => {
      const token = await getToken(request);
      await page.goto(APP_URL);
      await page.evaluate((jwt: string) => {
        localStorage.setItem("jwtToken", jwt);
      }, token);
      await page.reload();

      await use();

      await page.evaluate(() => localStorage.clear());
    },
  ],
});

export { expect } from "playwright/test";