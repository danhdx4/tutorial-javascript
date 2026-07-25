import { Locator, Page as PlaywrightPage } from "@playwright/test";
import { BasePage } from "./base.page";


export class ArticlePage extends BasePage {

    readonly articleTitle: Locator;
    readonly deleteArticleBtn: Locator;

    constructor(page: PlaywrightPage) {

        super(page);

        // Tiêu đề bài viết
        this.articleTitle = page.locator("h1");
        // Nút Delete Article trong trang detail
        this.deleteArticleBtn = page .getByRole("button", {name: "Delete Article"}).first();

    }
    async clickDeleteArticle() {
        await this.deleteArticleBtn.click();

    }

}