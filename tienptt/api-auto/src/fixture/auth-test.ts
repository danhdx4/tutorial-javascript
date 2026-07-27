import { test as base, request } from "@playwright/test";
// đổi test thành bas để đỡ trùng 
//test là của playwright, vì một bài ko thể có 2 test

import { getToken } from "../utils/apiHelpers";


type AuthFixtures = {
    login: void;
    loginByAPI: void;
};

export const test = base.extend<AuthFixtures>({
    login: async ({ page }, use) => {
        // Set up the fixture.
        await page.goto("https://conduit.bondaracademy.com/");
        await page.getByRole('link', { name: ' Sign in ' }).click()
        await page.getByPlaceholder('Email').fill('lanh.zensho@test.com')
        await page.getByPlaceholder('Password').fill('123456789')
        await page.getByRole('button', { name: ' Sign in ' }).click()
        await page.waitForResponse('https://conduit-api.bondaracademy.com/api/users/login')
        await page.reload()

        // Use the fixture value in the test.
        await use();
    },

    loginByAPI: [async ({ page, request }, use) => {
        // Set up the fixture.
        const token = await getToken(request);
        await page.goto("https://conduit.bondaracademy.com/");

        // 	Phương thức Playwright để thực thi JavaScript code trong context của browser (không phải Node.js)
        await page.evaluate((token) => { localStorage.setItem("jwtToken", token) }, token);
        await page.reload();

        // Use the fixture value in the test.
        await use();

        // Cleanup the fixture after the test
        await page.evaluate(() => localStorage.clear());
    }, { auto: true }]

});
export { expect } from '@playwright/test';