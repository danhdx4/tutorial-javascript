import { expect, test } from "@playwright/test";
import { baseRegisterData } from "../test-data/resgister.data";
// import { test } from '../fixtures/auth-test'

test('checkly: ', async ({ page }) => {
    // await page.goto("https://conduit.bondaracademy.com/");
    const data = baseRegisterData
    console.log('checkly:', data)
})