import { APIRequestContext, expect } from "@playwright/test";
export class ArticleApi {
  constructor(private request: APIRequestContext) {}
  // Creat article api
  async createArticle(accessToken: string, title: string) {
    const createArticleResponse = await this.request.post(
      `https://conduit-api.bondaracademy.com/api/articles/`,
      {
        headers: {
          Authorization: `Token ${accessToken}`,
        },
        data: {
          article: {
            title,
            description: "The description for article",
            body: "Message in body",
            tagList: ["XuanNT", "Auto Test"],
          },
        },
      },
    );
    return await createArticleResponse.json();
  }

  // Delete article api
  async deleteArticle(accessToken: string, slug: string) {
    const deleteArticleResponse = await this.request.post(
      `https://conduit-api.bondaracademy.com/api/articles/${slug}`,
      {
        headers: {
          Authorization: `Token ${accessToken}`,
        },
        // data:
        // {
        //     "article":
        //     {
        //         title,
        //         "description": "The description for article",
        //         "body": "Message in body",
        //         "tagList": ["XuanNT", "Auto Test"]
        //     }
        // }
      },
    );
  }
}
