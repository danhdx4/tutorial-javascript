// import { expect, test } from "@playwright/test";
import { test } from '../fixtures/auth-test'

test('checkly: ', async ({ page, login }) => {
    await page.goto("https://conduit.bondaracademy.com/");
})