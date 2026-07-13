import { expect, Page as PlaywrightPage } from "@playwright/test";
import { basePage } from "./base.page";
import { PageUrl } from "../utils/constants";

export class RegisterPage extends basePage {
    readonly pageUrl: string;

    constructor(page: PlaywrightPage) {
        super(page);
        this.pageUrl = PageUrl.REGISTER_URL;
    }

    /** Locators */
    nameField = this.page.getByLabel("Full name:");
    emailField = this.page.getByLabel("Email address:");
    passwordField = this.page.locator("#input-password");
    confirmPasswordField = this.page.locator("#input-re-password");
    termsCheckbox = this.page.getByRole("checkbox", { name: /agree to terms/i });
    registerBtn = this.page.getByRole("button", { name: /register/i });

    nameErrMsg = this.page.locator(".form-control-group").filter({ hasText: "Full name:" }).locator(".caption.status-danger");
    emailErrMsg = this.page.locator(".form-control-group").filter({ hasText: "Email address:" }).locator(".caption.status-danger");
    passwordErrMsg = this.page.locator(".form-control-group").filter({ hasText: "Password:" }).locator(".caption.status-danger");
    confirmPasswordErrMsg = this.page.locator(".form-control-group").filter({ hasText: "Repeat password:" }).locator(".caption.status-danger");

    // Action & Assertion functions
    async goto() {
        const response = await this.page.goto(this.pageUrl);
        expect(response?.status()).toBeLessThan(400);
    }

    async waitForLoad() {
        await this.page.waitForURL(this.pageUrl);
        await expect(this.page).toHaveTitle("playwright-test-admin Demo Application");
    }

    async fillRegisterForm(name: string, email: string, password: string, confirmPassword: string) {
        await this.nameField.fill(name);
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.confirmPasswordField.fill(confirmPassword);
    }

    async submit() {
        await this.registerBtn.click({ force: true });
    }

    async agreeToTerms() {
        await this.termsCheckbox.check({ force: true });
    }

    async verifyFieldError(field: "name" | "email" | "password" | "confirmPassword", expectedMsg: string) {
        const fieldMap = {
            name: this.nameErrMsg,
            email: this.emailErrMsg,
            password: this.passwordErrMsg,
            confirmPassword: this.confirmPasswordErrMsg,
        };

        await expect(fieldMap[field]).toContainText(expectedMsg);
    }

    async verifyRegisterBtn(isStatus: "enable" | "disable") {
        const expectedState = isStatus === "enable";
        if (expectedState) {
            await expect(this.registerBtn).toBeEnabled();
            return;
        }
        await expect(this.registerBtn).toBeDisabled();
    }
}