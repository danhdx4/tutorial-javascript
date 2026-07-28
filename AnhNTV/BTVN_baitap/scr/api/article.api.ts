import { APIRequestContext, expect } from "@playwright/test";
import { ArticleData } from "../test_data/article.data";

export class ArticleApi {

    constructor(private request: APIRequestContext) {}

    async createArticle(article: ArticleData) {//Tạo bài viết qua API Post

        const response = await this.request.post(
            "https://conduit-api.bondaracademy.com/api/articles",
            {
                data: {
                    article
                }
            }
        );

        expect(response.ok()).toBeTruthy();

        return await response.json();
    }

    async deleteArticle(slug: string, token: string) {//Xóa bài viết qua Deleted

        const response = await this.request.delete(
            `https://conduit-api.bondaracademy.com/api/articles/${slug}`,
            {
                headers: {
                    Authorization: `Token ${token}`
                }
            }
        );

        console.log("Delete status:", response.status());

        expect(response.ok()).toBeTruthy();
    }
}