import { Page as PlaywrightPage, expect } from "@playwright/test";
import { basePage } from "./base.page";
import { PageUrl } from "../utils/constants";
import { RecordDataType } from "../test-data/records.data";


export class RecordPage extends basePage {
    readonly pageUrl: string;
    constructor(page: PlaywrightPage) {
        super(page);
        this.pageUrl = PageUrl.HOME_URL;
    }

    newArticleButton = this.page.getByRole('link', { name: ' New Article ' });
    titleInput = this.page.getByPlaceholder('Article Title');
    descriptionInput = this.page.getByPlaceholder("What's this article about?");
    bodyInput = this.page.getByPlaceholder("Write your article (in markdown)");
    tagsInput = this.page.getByPlaceholder("Enter tags");
    publishArticleButton = this.page.getByRole('button', { name: ' Publish Article ' });
    deleteArticleButton = this.page.locator(".banner").getByRole("button", { name: " Delete Article " });

    async goto() {
        const response = await this.page.goto(this.pageUrl);
        expect(response?.status()).toBeLessThan(400);
    }

    async waitForLoad() {
        await this.page.waitForURL(this.pageUrl);
    }

    async createNewArticle(data: RecordDataType) {
        await this.newArticleButton.click();
        await this.titleInput.fill(data.title);
        await this.descriptionInput.fill(data.description);
        await this.bodyInput.fill(data.body);
        await this.tagsInput.fill(data.tags);
        const [response] = await Promise.all([
            this.page.waitForResponse((response) =>
                response.url() ===
                "https://conduit-api.bondaracademy.com/api/articles/" &&
                response.request().method() === "POST"
            ),
            this.publishArticleButton.click(),
        ]);

        expect(response.status()).toBe(201);

        const body = await response.json();

        return body.article.slug;
    }

    async getArticleSlug() {
        const createAritcleResponse = await this.page.waitForResponse(
            "https://conduit-api.bondaracademy.com/api/articles/",
        );
        const createAritcleResponseBody = await createAritcleResponse.json();
        return createAritcleResponseBody.article.slug;
    }

    async verifyArticleExists(title: string, description: string) {
        await this.goto();
        await this.waitForLoad();
        await expect(
            this.page.locator("app-article-preview h1", { hasText: title }),
        ).toBeVisible();
        await expect(
            this.page.locator("app-article-preview p", {
                hasText: description,
            }),
        ).toBeVisible();
    }

    async deleteArticleByAPI(slug: string, accessToken: string) {
        const deleteArticleResponse = await this.page.request.delete(
            `https://conduit-api.bondaracademy.com/api/articles/${slug}`,
            {
                headers: {
                    Authorization: `Token ${accessToken}`,
                },
            },
        );
        expect(deleteArticleResponse.status()).toEqual(204);
    }

    async verifyArticleDeleted(title: string, description: string) {
        await this.goto();
        await this.waitForLoad();
        expect(
            this.page.locator("app-article-preview h1", { hasText: title }),
        ).not.toBeVisible();
        expect(
            this.page.locator("app-article-preview p", {
                hasText: description,
            }),
        ).not.toBeVisible();
    }

    async createArticleByAPI(data: RecordDataType, accessToken: string) {
        const response = await this.page.request.post(
            "https://conduit-api.bondaracademy.com/api/articles/",
            {
                headers: {
                    Authorization: `Token ${accessToken}`,
                },
                data: {
                    article: {
                        title: data.title,
                        description: data.description,
                        body: data.body,
                        tagList: [data.tags],
                    },
                },
            },
        );

        expect(response.status()).toEqual(201);

        const body = await response.json();

        return body.article.slug;
    }
    async gotoArticle(slug: string) {
        const response = await this.page.goto(
            `https://conduit.bondaracademy.com/article/${slug}`
        );

        expect(response?.status()).toBeLessThan(400);
    }

    async deleteArticleByUI() {
    const [response] = await Promise.all([
        this.page.waitForResponse(
            (response) =>
                response.request().method() === "DELETE" &&
                response.url().includes("/api/articles/")
        ),
        this.deleteArticleButton.click(),
    ]);

    expect(response.status()).toBe(204);
}

}