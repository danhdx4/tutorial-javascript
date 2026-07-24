// @ts-nocheck
import { test as base, expect } from "playwright/test";
import { APP_URL } from "../utils/constants";
import { loginAndGetToken } from "../utils/api-client";

type AuthFixtures = {
  authToken: string;
  login: void;
};

export const test = base.extend<AuthFixtures>({
  authToken: async ({ request }, use) => {
    const token = await loginAndGetToken(request);
    await use(token);
  },

  login: [
    async ({ page, authToken }, use) => {
      await page.goto(APP_URL);
      await page.evaluate((token: string) => {
        localStorage.setItem("jwtToken", token);
      }, authToken);
      await page.reload();
      await expect(page.getByRole("link", { name: " Sign in " })).not.toBeVisible();
      await use();
      await page.evaluate(() => localStorage.clear());
    },
    { auto: true },
  ],
});

export { expect } from "playwright/test";
