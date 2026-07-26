import { Page as PlaywrightPage, expect } from "@playwright/test";
import { Page } from "./base.page";
import { PageUrl } from "../utils/constants";

export class CreateArticle extends Page {
    readonly pageUrl: string;

    constructor(page: PlaywrightPage) {
        super(page);
        this.pageUrl = PageUrl.CREATE_ARTICLES;
    }

    titleField = this.page.getByPlaceholder("Article Title");
    descriptionField = this.page.getByPlaceholder("What's this article about?");
    bodyField = this.page.getByPlaceholder("Write your article (in markdown)");
    tagsField = this.page.getByPlaceholder("Enter tags");
    pushBtn = this.page.getByRole("button", { name: "Publish Article" });

    async pgoto() {
        const response = await this.page.goto(this.pageUrl);
        expect(response?.status()).toBeLessThan(400);
    }

    async createArticle(data: { title: string; description: string; body: string; tags: string }) {
        await this.titleField.waitFor({ state: "visible" });
        await this.titleField.fill(data.title);
        await this.descriptionField.fill(data.description);
        await this.bodyField.fill(data.body);
        await this.tagsField.fill(data.tags);
        await this.pushBtn.click();

        const response = await this.page.waitForResponse("https://conduit-api.bondaracademy.com/api/articles/");
        const responseBody = await response.json();
        return responseBody.article.slug;
    }
}