// import { expect, test } from "@playwright/test";
import { test } from '../fixtures/auth-test'

test('checkly: ', async ({ page }) => {
    await page.goto("https://conduit.bondaracademy.com/");
})