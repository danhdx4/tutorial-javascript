import { Locator, Page as PlaywrightPage } from "@playwright/test";
import { BasePage } from "./base.page";

export class HomePage extends BasePage {

    readonly newArticleBtn: Locator;

    constructor(page: PlaywrightPage) {
        super(page);

        this.newArticleBtn = page.getByRole("link", { name: "New Article" });
    }

    async clickNewArticle() {
        await this.newArticleBtn.click();
    }
}