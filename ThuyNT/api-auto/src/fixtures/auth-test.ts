import { test as base } from "@playwright/test";
import { getToken } from "../utils/apiHelpers";

type AuthFixtures = {
    login: void;
    loginByAPI: void;
    accessToken: string;
};

export const test = base.extend<AuthFixtures>({
    accessToken: async ({ request }, use) => {
        const token = await getToken(request);
        await use(token);
    },

    login: async ({ page }, use) => {
        await page.goto("https://conduit.bondaracademy.com/");

        await page.getByRole("link", { name: "Sign in" }).click();
        await page.getByPlaceholder("Email").fill("thuy@test.com");
        await page.getByPlaceholder("Password").fill("12345678");
        await page.getByRole("button", { name: "Sign in" }).click();

        await page.waitForResponse(
            "https://conduit-api.bondaracademy.com/api/users/login"
        );

        await page.reload();

        await use();
    },

    loginByAPI: [
        async ({ page, accessToken }, use) => {
            await page.goto("https://conduit.bondaracademy.com/");

            await page.evaluate((token) => {
                localStorage.setItem("jwtToken", token);
            }, accessToken);

            await page.reload();

            await use();

            await page.evaluate(() => localStorage.clear());
        },
        { auto: true },
    ],
});

export { expect } from "@playwright/test";