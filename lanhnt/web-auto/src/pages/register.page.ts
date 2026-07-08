import { Page as PlaywrightPage, expect } from "@playwright/test";
import { Page } from "./base.page";
import { PageUrl } from "../utils/constants";

export class RegisterPage extends Page {
    readonly pageUrl: string;

    // Khởi tạo dữ liệu ban đầu cho object
    constructor(page: PlaywrightPage) {
        super(page);
        this.pageUrl = PageUrl.LOGIN_URL;
    }

    /** Locators */
    fullNameField = this.page.getByPlaceholder("Full name")
    emailField = this.page.getByLabel("Email address:");
    passwordField = this.page.getByLabel("Password:");
    repeatPasswordField = this.page.getByLabel("Comfirm Password");
    agreeCheckbox = this.page.locator("nb-checkbox")
    registerBtn = this.page.getByRole("button", { name: " Register " });

    //Action & Assertion functions
    async goto() {
        const response = await this.page.goto(this.pageUrl);
        expect(response?.status()).toBeLessThan(400);
    }

    async waitForLoad() {
        await this.page.waitForURL(this.pageUrl);
        await expect(this.page).toHaveTitle(
            "playwright-test-admin Demo Application",
        );
    }
}