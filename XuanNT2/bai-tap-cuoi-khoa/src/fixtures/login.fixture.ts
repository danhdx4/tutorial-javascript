import { test as base, Page } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { USER } from "../test-data/login.data";

type LoginFixtures = {
  login: Page;
};

export const test = base.extend<LoginFixtures>({
  login: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(USER.email, USER.password);
    await use(page);
  },
});
export { expect } from "@playwright/test";
