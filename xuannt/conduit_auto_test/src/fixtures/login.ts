import { test as base, expect } from "@playwright/test";
import user from "../.auth/user.account.json";
import { LoginPage } from "../pages/login.page";

export type LoginFixture = {
    loginPage: LoginPage;
};

export const test = base.extend<LoginFixture>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await loginPage.lgoto();
        await loginPage.emailInput.fill(user[0].email);
        await loginPage.passwordInput.fill(user[0].password);
        await loginPage.btnSignIn.click();
        await page.waitForURL("**/");
        await use(loginPage);
    },
});