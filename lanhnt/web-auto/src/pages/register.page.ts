import { Page as PlaywrightPage, expect } from "@playwright/test";
import { Page } from "./base.page";
import { PageUrl } from "../utils/constants";
import { RegisterData } from "../test-data/register.data";

export class RegisterPage extends Page {
    readonly pageUrl: string;

    // Khởi tạo dữ liệu ban đầu cho object
    constructor(page: PlaywrightPage) {
        super(page);
        this.pageUrl = PageUrl.REGISTER_URL;
    }

    /** Locators */
    title = this.page.locator('#title')
    fullNameField = this.page.getByPlaceholder("Full name")
    emailField = this.page.getByPlaceholder("Email address");
    passwordField = this.page.getByRole('textbox', { name: 'Password:', exact: true })
    repeatPasswordField = this.page.getByRole('textbox', { name: 'Repeat password:' })
    agreeCheckbox = this.page.locator(".custom-checkbox")
    registerBtn = this.page.getByRole("button", { name: " Register " });

    //Action & Assertion functions
    async goto() {
        const response = await this.page.goto(this.pageUrl);
        expect(response?.status()).toBeLessThan(400);
    }

    async waitForLoad() {
        await this.page.waitForURL(this.pageUrl);
        await expect(this.title).toHaveText('Register')
    }

    async fillForm(data: RegisterData) {
        await this.fullNameField.fill(data.fullname)
        await this.emailField.fill(data.email)
        await this.passwordField.fill(data.password)
        await this.repeatPasswordField.fill(data.confirm)
        if (data.agree) {
            await this.agreeCheckbox.click()
        }
    }

    async verifyErrMsg(msg: string) {
        const errMsg = this.page.locator('.caption.status-danger')
        await this.repeatPasswordField.blur()
        if (msg) {
            await expect(errMsg).toHaveText(msg)
        } else {
            await expect(errMsg).not.toBeVisible()
        }
    }

    async verifyRegisterBtnState(state: boolean) {
        if (state) {
            await expect(this.registerBtn).toBeEnabled()
        } else {
            await expect(this.registerBtn).toBeDisabled()
        }
    }
}