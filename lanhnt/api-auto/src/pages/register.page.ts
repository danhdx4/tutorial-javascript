import { Page as PlaywrightPage, expect } from "@playwright/test";
import { Page } from "./base.page";
import { PageUrl } from "../utils/constants";

export class RegisterPage extends Page {
    readonly pageUrl: string;

    // Khởi tạo dữ liệu ban đầu cho object
    constructor(page: PlaywrightPage) {
        super(page);
        this.pageUrl = PageUrl.REGISTER_URL;
    }

    /** Locators */
    titlePage = this.page.locator('h1.text-xs-center')
    username = this.page.getByPlaceholder('Username')
    email = this.page.getByPlaceholder('Email')
    password = this.page.getByPlaceholder('Password')
    signUpBtn = this.page.getByRole('button', { name: ' Sign up ' })


    //Action & Assertion functions
    async goto() {
        const response = await this.page.goto(this.pageUrl);
        expect(response?.status()).toBeLessThan(400);
    }

    async waitForLoad() {
        await this.page.waitForURL(this.pageUrl);
        await expect(this.titlePage).toHaveText('Sign up')
    }

    async fillForm(username: string, email: string, password: string) {
        await this.username.fill(username)
        await this.email.fill(email)
        await this.password.fill(password)
    }
}