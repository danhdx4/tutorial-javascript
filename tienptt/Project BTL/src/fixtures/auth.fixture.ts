import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../page/login.page";

export const test = base.extend({
  page: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login( "tienptt1998@gmail.com","123456789");
    await use(page);
  },
});
export { expect };