import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("https://conduit.bondaracademy.com/");

    // login with the credentical
    await page.getByRole('link', { name: ' Sign in ' }).click()
    await page.getByPlaceholder('Email').fill('thuytest@test.com')
    await page.getByPlaceholder('Password').fill('12345678')
    await page.getByRole('button', { name: ' Sign in ' }).click()
});

