import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import login_data from "../.auth/account.info.json";

export type BaseTestFixtures = {
    loginPage: LoginPage;
};

export const test = base.extend<BaseTestFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.lgoto();
        await loginPage.emailField.fill(login_data[0].email);
        await loginPage.passwordField.fill(login_data[0].password);
        await loginPage.signInButton.click();
        await page.waitForURL("**/");
        await use(loginPage);
    },
});

export { expect } from "@playwright/test";
