import { test as base, request } from "@playwright/test";
import { getToken } from "../utils/apiHelpers";


type AuthFixtures = {
    login: void;
    loginByAPI: void;
};

export const test = base.extend<AuthFixtures>({
    login: async ({ page }, use) => {
        await page.goto("https://conduit.bondaracademy.com/");
        await page.getByRole('link', { name: ' Sign in ' }).click()
        await page.getByPlaceholder('Email').fill('lanh.zensho@test.com')
        await page.getByPlaceholder('Password').fill('123456789')
        await page.getByRole('button', { name: ' Sign in ' }).click()
        await page.waitForResponse('https://conduit-api.bondaracademy.com/api/users/login')
        await page.reload()

        await use();
    },

    loginByAPI: [async ({ page, request }, use) => {
        const token = await getToken(request);
        await page.goto("https://conduit.bondaracademy.com/");
        await page.evaluate((token) => { localStorage.setItem("jwtToken", token) }, token);
        await page.reload();

        await use();

        await page.evaluate(() => localStorage.clear());
    }, { auto: true }]

});
export { expect } from '@playwright/test';