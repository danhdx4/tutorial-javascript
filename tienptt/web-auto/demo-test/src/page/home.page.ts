import { Page as PlaywrightPage, expect } from "@playwright/test";
import { Page } from "./base.page";
import { PageUrl } from "../utils/constants";

export class HomePage extends Page {
    readonly pageUrl: string;

    constructor(page: PlaywrightPage) {
        super(page);
        this.pageUrl = PageUrl.HOME_URL;
    }

    logo = this.page.locator('.logo');

    async goto() {
        const response = await this.page.goto(this.pageUrl);
        expect(response?.status()).toBeLessThan(400);
    }

    async waitForLoad() {
        await this.page.waitForURL(this.pageUrl);
        await expect(this.logo).toHaveText('PW-test');
    }
}