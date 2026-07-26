import { Page as PlaywrightPage, expect } from "@playwright/test";
import { Page } from "./base.page";

export class ArticlePage extends Page {
    constructor(page: PlaywrightPage) {
        super(page);
    }

    async openArticleByTitle(title: string) {
        await this.page.locator("app-article-preview").filter({ hasText: title }).first().click();
    }

    async deleteArticle() {
        await this.page.getByRole("button", { name: /delete/i }).click();
        await this.page.waitForLoadState("networkidle");
    }

    async expectArticleRemoved(title: string) {
        await expect(this.page.locator("app-article-preview").filter({ hasText: title })).toHaveCount(0);
    }
}
