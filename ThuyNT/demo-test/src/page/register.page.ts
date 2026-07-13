import { Page as PlaywrightPage, expect } from "@playwright/test";
import { basePage } from "./base.page";
import { PageUrl } from "../utils/constants";

export class RegisterPage extends basePage {
    readonly pageUrl: string;

    constructor(page: PlaywrightPage) {
        super(page);
        this.pageUrl = PageUrl.REGISTER_URL;
    }

    /** Locators */
    fullNameField = this.page.getByPlaceholder("Full name", { exact: true });
    emailField = this.page.getByPlaceholder("Email address", { exact: true });
    passwordField = this.page.getByPlaceholder("Password", { exact: true });
    confirmPasswordField = this.page.getByPlaceholder("Confirm Password", { exact: true });
    agreeTermsCheckbox = this.page.getByRole("checkbox", { name: "Agree to Terms & Conditions" });
    registerBtn = this.page.getByRole("button", { name: "Register" });
    heading = this.page.getByRole("heading", { name: "Register" });

    fullNameError = this.page.locator('.form-control-group').filter({ hasText: 'Full name:' }).locator('.caption.status-danger');
    emailError = this.page.locator('.form-control-group').filter({ hasText: 'Email address:' }).locator('.caption.status-danger');
    passwordError = this.page.locator('.form-control-group').filter({ hasText: 'Password:' }).locator('.caption.status-danger');
    confirmPasswordError = this.page.locator('.form-control-group').filter({ hasText: 'Repeat password:' }).locator('.caption.status-danger');

    async goto() {
        const response = await this.page.goto(this.pageUrl);
        expect(response?.status()).toBeLessThan(400);
    }

    async waitForLoad() {
        await this.page.waitForURL(this.pageUrl);
        await expect(this.heading).toBeVisible();
    }

    async fillFullName(name: string) {
        await this.fullNameField.fill(name);
    }

    async fillEmail(email: string) {
        await this.emailField.fill(email);
    }

    async fillPassword(password: string) {
        await this.passwordField.fill(password);
    }

    async fillConfirmPassword(password: string) {
        await this.confirmPasswordField.fill(password);
    }

    async acceptTerms() {
        await this.agreeTermsCheckbox.check({ force: true });
    }

    async submit() {
        // Click the register button and wait for navigation to home page
        await Promise.all([
            this.page.waitForURL(PageUrl.HOME_URL),
            this.registerBtn.click(),
        ]);
    }

    async fillRegisterForm(data: { fullName?: string; email?: string; password?: string; confirmPassword?: string; acceptTerms?: boolean }) {
        if (data.fullName !== undefined) await this.fillFullName(data.fullName);
        if (data.email !== undefined) await this.fillEmail(data.email);
        if (data.password !== undefined) await this.fillPassword(data.password);
        if (data.confirmPassword !== undefined) await this.fillConfirmPassword(data.confirmPassword);
        if (data.acceptTerms) await this.acceptTerms();
    }

    async verifyRegisterButtonStatus(enabled: boolean) {
        if (enabled) {
            await expect(this.registerBtn).toBeEnabled();
        } else {
            await expect(this.registerBtn).toBeDisabled();
        }
    }

    async verifyErrorMessage(field: "fullName" | "email" | "password" | "confirmPassword", message: string | RegExp) {
        const locator = field === "fullName"
            ? this.fullNameError
            : field === "email"
                ? this.emailError
                : field === "password"
                    ? this.passwordError
                    : this.confirmPasswordError;

        await expect(locator).toHaveText(message);
    }
}
