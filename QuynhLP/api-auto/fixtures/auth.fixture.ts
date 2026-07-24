import { test as base } from "@playwright/test";
import { LoginPage } from "../src/pages/login.page";
import { ConduitApiClient } from "../src/api/conduit.api";
import { AUTH } from "../src/utils/constants";

type AuthFixtures = {
  authToken: string;
  loginSession: void;
};

export const test = base.extend<AuthFixtures>({
  authToken: async ({ request }, use) => {
    const apiClient = new ConduitApiClient(request);
    const token = await apiClient.login(AUTH.email, AUTH.password);
    await use(token);
  },

  loginSession: [
    async ({ page }, use) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(AUTH.email, AUTH.password);
      await loginPage.expectLoggedIn();
      await use();
    },
    { auto: true },
  ],
});

export { expect } from "@playwright/test";
