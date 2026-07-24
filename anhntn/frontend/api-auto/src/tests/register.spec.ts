import { expect, test } from "@playwright/test";
import { RegisterPage } from "../pages/register.page";
import { registerData } from "../test-data/resgister.data";

test.describe('register function', async () => {
    test('should be register successfully with valid data', async ({ page }) => {
        const registerPage = new RegisterPage(page)
        await registerPage.goto()
        await registerPage.fillForm(registerData.valid)
        await expect(registerPage.signUpBtn).toBeEnabled()
        // await registerPage.signUpBtn.click({ force: true })

    })

    test('should be register fail with invalid data', async ({ page }) => {
        const registerPage = new RegisterPage(page)
        await registerPage.goto()
        await registerPage.fillForm(registerData.withoutPassword)
        await expect(registerPage.signUpBtn).toBeDisabled()
        await registerPage.signUpBtn.click({ force: true })
    })
})