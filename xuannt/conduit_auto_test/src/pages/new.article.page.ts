import { Page as PlaywrightPage, expect } from "@playwright/test";
import { Page } from "./base.page";
import { PageUrl } from "../utils/constants";

export class NewArticle extends Page {
    readonly pageUrl: string;

    constructor(page: PlaywrightPage) {
        super(page);
        this.pageUrl = PageUrl.CREAT_NEW_ARTICLES;
    }
    //Định vị phần tử
    TitleInput = this.page.locator('input[placeholder="Article Title"]');
    DescriptionInput = this.page.locator('input[placeholder="What\'s this article about?"]');
    BodyInput = this.page.locator('textarea[placeholder="Write your article (in markdown)"]');
    TagsInput = this.page.locator('input[placeholder="Enter tags"]');
    BtnSubmit= this.page.locator('button[type="button"]', { hasText: 'Publish Article' });
    async pgoto() {
        const response = await this.page.goto(this.pageUrl);
        expect(response?.status()).toBeLessThan(400);

        
    
    }

    async createArticle(data: { title: string; description: string; body: string; tags: string }) {
        await this.TitleInput.waitFor({ state: "visible" });
        await this.TitleInput.fill(data.title);
        await this.DescriptionInput.fill(data.description);
        await this.BodyInput.fill(data.body);
        await this.TagsInput.fill(data.tags);
        await this.BtnSubmit.click();

        const response = await this.page.waitForResponse("https://conduit-api.bondaracademy.com/api/articles/");
        const responseBody = await response.json();
        return responseBody.article.slug;
    }
}