import { Page as PlaywrightPage, expect } from '@playwright/test';
import { Page } from './base.page';
import { PageUrl } from '../utils/constants';

export class RegisterPage extends Page {
    readonly pageUrl: string;

    fullNameField = this.page.locator('#input-name');
    emailField = this.page.locator('#input-email');
    passwordField = this.page.locator('#input-password');
    repeatPasswordField = this.page.locator('#input-re-password');
    termsCheckbox = this.page.locator('input[type="checkbox"]');
    registerBtn = this.page.getByRole('button', { name: 'Register' });
    successMessage = this.page.locator('text=Successfully logged in');

    constructor(page: PlaywrightPage) {
        super(page);
        this.pageUrl = PageUrl.REGISTER_URL;
    }

    async goto() {
        const response = await this.page.goto(this.pageUrl);
        expect(response?.status()).toBeLessThan(400);
    }

    async waitForLoad() {
        await expect(this.fullNameField).toBeVisible();
    }

    async fillRegisterForm(fullName: string, email: string, password: string, repeatPassword: string) {
        await this.fullNameField.fill(fullName);
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.repeatPasswordField.fill(repeatPassword);
    }

    async checkTerms() {
        await this.termsCheckbox.click({ force: true });
    }

    async clickRegister() {
        await this.registerBtn.click();
    }

    async expectRegistrationSuccess() {
        await expect(this.successMessage).toBeVisible();
    }
}
