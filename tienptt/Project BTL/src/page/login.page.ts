import { expect, Locator, Page as PlaywrightPage } from "@playwright/test";
import { BasePage } from "./base.page";
import { PageUrl } from "../utils/constants";

export class LoginPage extends BasePage {
    readonly pageUrl: string;

    // Locators
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly signInBtn: Locator;

    constructor(page: PlaywrightPage) {
        super(page);

        this.pageUrl = PageUrl.LOGIN_URL;

        this.emailField = this.page.getByPlaceholder("Email");
        this.passwordField = this.page.getByPlaceholder("Password");
        this.signInBtn = this.page.getByRole("button", { name: "Sign in" });
    }

    // Action
    async goto() {
        const response = await this.page.goto(this.pageUrl);
        expect(response?.status()).toBeLessThan(400);
    }

    async fillCredential(email: string, password: string) {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
    }

    async clickSignIn() {
        await this.signInBtn.click();
    }

    async login(email: string, password: string) {
        await this.fillCredential(email, password);
        await this.clickSignIn();
    }
}