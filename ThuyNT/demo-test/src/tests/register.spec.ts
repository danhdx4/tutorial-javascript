import { expect, test } from '@playwright/test';
import { RegisterPage } from '../page/register.page';

const validUser = {
    fullName: 'Test User',
    email: 'test.user@example.com',
    password: '123456',
};

const invalidEmails = ['abc', 'abc@', 'abc.com', '@gmail.com', '@@','abc@gmail'];
const invalidPasswords = ['a', 'ab', 'abc'];

test.describe('Register feature should work correctly', () => {
    test.beforeEach(async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.goto();
        await registerPage.waitForLoad();
    });

    test('Should register a new user when all fields are valid', async ({ page }) => {
        const registerPage = new RegisterPage(page);

        await registerPage.fillRegisterForm({
            fullName: validUser.fullName,
            email: validUser.email,
            password: validUser.password,
            confirmPassword: validUser.password,
            acceptTerms: true,
        });

        await registerPage.verifyRegisterButtonStatus(true);
        await registerPage.submit();

        await expect(page).not.toHaveURL(registerPage.pageUrl);
    });

    test('Should show required field errors when required fields are empty', async ({ page }) => {
        const registerPage = new RegisterPage(page);

        await expect(registerPage.registerBtn).toBeDisabled();

        await registerPage.fullNameField.focus();
        await registerPage.emailField.focus();
        await registerPage.passwordField.focus();
        await registerPage.confirmPasswordField.focus();
        await registerPage.fullNameField.focus();

        await expect(page.getByText('Email is required!')).toBeVisible();
        await expect(page.getByText('Password is required!')).toBeVisible();
        await expect(page.getByText('Password confirmation is required!')).toBeVisible();
    });

    test('Should show an error when email format is invalid', async ({ page }) => {
        const registerPage = new RegisterPage(page);

        for (const email of invalidEmails) {
            await registerPage.fillRegisterForm({
                fullName: validUser.fullName,
                email,
                password: validUser.password,
                confirmPassword: validUser.password,
                acceptTerms: true,
            });
            await registerPage.emailField.blur();
            await registerPage.verifyErrorMessage('email', /Email should be the real one!/);
        }
    });

    test('Should show an error when password format is invalid', async ({ page }) => {
        const registerPage = new RegisterPage(page);

        for (const password of invalidPasswords) {
            await registerPage.fillRegisterForm({
                fullName: validUser.fullName,
                email: validUser.email,
                password,
                confirmPassword: password,
                acceptTerms: true,
            });
            await registerPage.passwordField.blur();
            await registerPage.verifyErrorMessage('password', /Password should contain from 4 to 50 characters/);
        }
    });
    // Chưa có message lỗi với email dạng abc@gmail

    test('Should not register when password and confirm password do not match', async ({ page }) => {
        const registerPage = new RegisterPage(page);

        await registerPage.fillRegisterForm({
            fullName: validUser.fullName,
            email: validUser.email,
            password: validUser.password,
            confirmPassword: '654321',
            acceptTerms: true,
        });

        await registerPage.confirmPasswordField.blur();
        await expect(page).toHaveURL(registerPage.pageUrl);
    });
});
