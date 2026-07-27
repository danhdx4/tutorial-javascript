import { Page as PlaywrightPage, expect } from "@playwright/test";
import { Page } from "./base.page";
import { PageUrl } from "../utils/constants";
import { ArticleDataType } from "../utils/type";

export class HomePage extends Page {
    readonly pageUrl: string;

    constructor(page: PlaywrightPage) {
        super(page);
        this.pageUrl = PageUrl.HOME_URL;
    }

    /** Locators */
    logo = this.page.locator('.navbar-brand')

    //Action & Assertion functions
    async goto() {
        const response = await this.page.goto(this.pageUrl);
        expect(response?.status()).toBeLessThan(400);
    }

    async waitForLoad() {
        await this.page.waitForURL(this.pageUrl);
        await expect(this.logo).toHaveText('conduit')
    }

    async verifyArticle(article: ArticleDataType) {
        const articleEl = this.page.locator('.article-preview').getByText(article.title)
        await expect(articleEl).toBeVisible()
    }

    async isExsitArticle(title: string) {
        const articleEl = this.page.locator('.article-preview').getByText(title)
        return await articleEl.isVisible()
    }
}