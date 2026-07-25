import { Locator, Page as PlaywrightPage } from "@playwright/test";
import { BasePage } from "./base.page";

export class EditorPage extends BasePage {

    readonly articleTitle: Locator;
    readonly aboutArticle: Locator;
    readonly articleBody: Locator;
    readonly articleTags: Locator;
    readonly publishBtn: Locator;

    constructor(page: PlaywrightPage) {
        super(page);

        this.articleTitle = this.page.getByPlaceholder("Article Title");
        this.aboutArticle = this.page.getByPlaceholder("What's this article about?");
        this.articleBody = this.page.getByPlaceholder("Write your article (in markdown)");
        this.articleTags = this.page.getByPlaceholder("Enter tags");
        this.publishBtn = this.page.getByRole("button", {
            name: "Publish Article",
        });
    }

    async createArticle(
        title: string,
        description: string,
        body: string,
        tag: string
    ) {
        await this.articleTitle.fill(title);
        await this.aboutArticle.fill(description);
        await this.articleBody.fill(body);
        await this.articleTags.fill(tag);
        await this.publishBtn.click();
    }
}