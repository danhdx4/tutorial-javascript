import { Page as PlaywrightPage, expect } from "@playwright/test";
import { Page } from "./base.page";
import { PageUrl } from "../utils/constants";

export class LoginPage extends Page {
    readonly pageUrl: string;

    constructor(page: PlaywrightPage) {
        super(page);
        this.pageUrl = PageUrl.LOGIN_URL;
    }

    // Locators
    emailField = this.page.getByPlaceholder('Email');
    passwordField = this.page.getByPlaceholder('Password');
    signInButton = this.page.getByRole('button', { name: ' Sign in ' });

    // Action & Assertion functions
    async lgoto() {
        const response = await this.page.goto(this.pageUrl);
        expect(response?.status()).toBeLessThan(400);
    }

}