import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("https://conduit.bondaracademy.com/");

    // login with the credentical
    await page.getByRole('link', { name: ' Sign in ' }).click()
    await page.getByPlaceholder('Email').fill('lanh.zensho@test.com')
    await page.getByPlaceholder('Password').fill('123456789')
    await page.getByRole('button', { name: ' Sign in ' }).click()
});

test('Should be create a articel successfully', async ({ page, request }) => {
    // todo
    

})

test('Should delete the article successfully', async ({ page, request }) => {
    // todo
})
