import { expect, test } from "@playwright/test";
import { RegisterPage } from "../pages/register.page";
import { registerData } from "../../test-data/register.data";

test.describe('register function', async () => {
    test('should be register successfully with valid data', async ({ page }) => {
        const username = "lanh zensho"
        const email = "lanh.zensho@test.com"
        const password = "123456789"
        const registerPage = new RegisterPage(page)
        await registerPage.goto()
        await registerPage.fillForm(username, email, password)
        await expect(registerPage.signUpBtn).toBeEnabled()
        //continue...
    })

    test('should be register fail with invalid data', async ({ page }) => {
        const username = "lanh zensho"
        const email = "lanh.zensho@test.com"
        const password = ""
        const registerPage = new RegisterPage(page)
        await registerPage.goto()
        await registerPage.fillForm(username, email, password)
        await expect(registerPage.signUpBtn).toBeDisabled()
    })
})