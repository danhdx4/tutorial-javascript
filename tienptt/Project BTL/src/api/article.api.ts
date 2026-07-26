import { APIRequestContext } from "@playwright/test";
export class ArticleApi {

    constructor(private request: APIRequestContext) {}

    async login(email: string, password: string) {

        const response = await this.request.post(
            "https://conduit-api.bondaracademy.com/api/users/login",
            {
                data: {
                    user: {
                        email,
                        password,
                    },
                },
            }
        );

        return await response.json();
    }


    async createArticle(
        token: string,
        title: string,
        description: string,
        body: string,
        tagList: string[] = []
    ) {

        const response = await this.request.post(
            "https://conduit-api.bondaracademy.com/api/articles",
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
                data: {
                    article: {
                        title,
                        description,
                        body,
                        tagList,
                    },
                },
            }
        );

        return await response.json();
    }


    async deleteArticle(token: string, slug: string) {

        return await this.request.delete(
            `https://conduit-api.bondaracademy.com/api/articles/${slug}`,
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            }
        );
    }
}