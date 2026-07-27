import { Page as PlaywrightPage, expect } from "@playwright/test";
import { Page } from "./base.page";
import { PageUrl } from "../utils/constants";
import { ArticleDataType } from "../utils/type";

export class EditorPage extends Page {
    readonly pageUrl: string;

    constructor(page: PlaywrightPage) {
        super(page);
        this.pageUrl = PageUrl.EDITOR_URL;
    }

    /** Locators */
    articleTitleInput = this.page.locator('input[placeholder="Article Title"]');
    articleDescriptionInput = this.page.locator('input[placeholder="What\'s this article about?"]');
    articleContentInput = this.page.locator('textarea[placeholder="Write your article (in markdown)"]');
    articleTagInput = this.page.locator('input[placeholder="Enter tags"]');
    publicArticleBtn = this.page.getByRole('button', { name: 'Publish Article' });
    errorMessages = this.page.locator('.error-messages li');

    //Action & Assertion functions
    async goto() {
        const response = await this.page.goto(this.pageUrl);
        expect(response?.status()).toBeLessThan(400);
    }

    async waitForLoad() {
        await this.page.waitForURL(this.pageUrl);
        await expect(this.publicArticleBtn).toBeVisible();
    }

    async fillArticleInfo(article: ArticleDataType) {
        await this.articleTitleInput.fill(article.title);
        await this.articleDescriptionInput.fill(article.description);
        await this.articleContentInput.fill(article.body);

        for (const tag of article.tagList ?? []) {
            await this.articleTagInput.fill(tag);
            await this.articleTagInput.press('Enter');
        }
    }

    async assertValidationError(message: string) {
        await expect(this.page).toHaveURL(this.pageUrl);
        await expect(this.errorMessages.filter({ hasText: message })).toBeVisible();
    }
}