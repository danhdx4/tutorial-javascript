import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

export const test = base.extend({
    page: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            "vananh217.tm@gmail.com",
            "12345678"
        );

        await loginPage.verifyLoginSuccess();

        await use(page);
    }
});

export { expect } from "@playwright/test";