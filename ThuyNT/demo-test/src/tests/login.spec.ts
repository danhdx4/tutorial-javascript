import { expect, test } from '@playwright/test';
import { LoginPage } from '../page/login.page';
import { HomePage } from '../page/home.page';

test.describe('Login feature should work correctly', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('Verify the initialization state for Login page', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await expect(loginPage.emailField).toHaveAttribute('placeholder', 'Email address');
        await expect(loginPage.passwordField).toHaveAttribute('placeholder', 'Password');
        await expect(loginPage.checkBox).not.toBeChecked();
        await expect(loginPage.loginBtn).toBeDisabled();
    });

    test('Verify when inputting a correct credential data', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.fillCredential('abc@gmail.com', '123456');
        await loginPage.verifySubmitBtn('enable');
        await loginPage.loginBtn.click();

        const homePage = new HomePage(page);
        await homePage.waitForLoad();
    });

    test('Verify when inputting an invalid data', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const invalidEmails = ['abc', 'abc@', 'abc.com', 'abc@gmail', '@gmail.com', '@@'];

        for (const email of invalidEmails) {
            await loginPage.fillCredential(email, '123456');
            await loginPage.loginBtn.click({ force: true });
            await loginPage.verifyErrMsg('email', 'Email should be the real one!');
        }

        const invalidPasswords = ['a', 'ab', 'abc'];
        for (const password of invalidPasswords) {
            await loginPage.fillCredential('abc@gmail.com', password);
            await loginPage.loginBtn.click({ force: true });
            await loginPage.verifyErrMsg('password', 'Password should contain from 4 to 50 characters');
        }
    });
});
