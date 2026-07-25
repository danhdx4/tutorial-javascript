import { APIRequestContext, expect } from "@playwright/test";
import { API_URL, ArticleInput, AUTH } from "../utils/constants";

type LoginResponse = {
  user: {
    token: string;
  };
};

type CreateArticleResponse = {
  article: {
    slug: string;
  };
};

export class ConduitApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async login(email = AUTH.email, password = AUTH.password): Promise<string> {
    const response = await this.request.post(`${API_URL}/users/login`, {
      data: {
        user: {
          email,
          password,
        },
      },
    });

    expect(response.status()).toBe(200);
    const body = (await response.json()) as LoginResponse;
    return body.user.token;
  }

  async createArticle(token: string, article: ArticleInput): Promise<string> {
    const response = await this.request.post(`${API_URL}/articles`, {
      data: {
        article,
      },
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    expect(response.status()).toBe(201);
    const body = (await response.json()) as CreateArticleResponse;
    return body.article.slug;
  }

  async deleteArticle(token: string, slug: string): Promise<void> {
    const response = await this.request.delete(`${API_URL}/articles/${slug}`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    expect(response.status()).toBe(204);
  }
}
