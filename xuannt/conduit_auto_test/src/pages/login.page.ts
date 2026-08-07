import { Page as PlaywrightPage, expect } from "@playwright/test";
import { Page } from "./base.page";
import { PageUrl } from "../utils/constants";

export class LoginPage extends Page {
    readonly pageUrl: string;

    constructor(page: PlaywrightPage) {
        super(page);
        this.pageUrl = PageUrl.LOGIN_URL;
    }
//Định vị phần tử 
emailInput = this.page.locator('input[placeholder="Email"]');
passwordInput = this.page.locator('input[placeholder="Password"]');
btnSignIn = this.page.locator('button[type="Sign In"]');
//đi vào link để login
async lgoto() {
    const response = await this.page.goto(this.pageUrl);
    expect(response?.status()).toBeLessThan(400);
}