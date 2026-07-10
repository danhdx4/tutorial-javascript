import { test, expect } from '@playwright/test';
import { registerData } from '../test-data/register.data';
import { RegisterPage } from '../pages/register.page';

registerData.forEach((data) => {
    test(`Verify register in the case: ${data.title}`, async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.goto()

        // fill form
        await registerPage.fillForm(data)

        // verify the register btn state
        await registerPage.verifyRegisterBtnState(data.isEnableLogin)

        // click to register btn
        await registerPage.registerBtn.click({ force: true })

        // verify error msg
        await registerPage.verifyErrMsg(data.message)
    });
});