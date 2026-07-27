import { Page as PlaywrightPage, expect } from "@playwright/test";
import { Page } from "./base.page";
import { PageUrl } from "../utils/constants";
import { ArticleDataType } from "../utils/type";

export class DetailArticlePage extends Page {
    readonly pageUrl: string;

    constructor(page: PlaywrightPage) {
        super(page);
        this.pageUrl = PageUrl.DETAIL_ARTICLE_URL;
    }

    /** Locators */
    articleTitle = this.page.locator('h1');
    articleContent = this.page.locator('.article-content p').first();
    deleteBtn = this.page.locator('.banner').getByRole('button', { name: ' Delete Article ' })

    async goto(slug: string) {
        const response = await this.page.goto(`${this.pageUrl}${slug}`);
        expect(response?.status()).toBeLessThan(400);
    }

    async waitForLoad() {
        await this.page.waitForURL(/.*\/article\/.*/);
        await expect(this.articleTitle).toBeVisible();
    }

    async assertArticleDetails(article: ArticleDataType) {
        expect(this.page.url()).toContain('https://conduit.bondaracademy.com/article/');
        await expect(this.articleTitle).toHaveText(article.title);
        await expect(this.articleContent).toContainText(article.body);
        for (const tag of article.tagList ?? []) {
            await expect(this.page.locator('.tag-list').getByText(tag)).toBeVisible()
        }
    }

    getArticleSlug() {
        const slug = new URL(this.page.url()).pathname.split("/").pop();
        if (!slug) {
            throw new Error(`Could not extract article slug from URL: ${this.page.url()}`);
        }
        return slug;
    };
};
