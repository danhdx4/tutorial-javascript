import { APIRequestContext } from "@playwright/test";

export class ConduitApi {
  constructor(private request: APIRequestContext) {}

  async login(email: string, password: string) {
    const res = await this.request.post("https://conduit-api.bondaracademy.com/api/users/login", {
      data: { user: { email, password } },
    });
    const body = await res.json();
    return body.user.token as string;
  }

  async deleteArticle(slug: string, token: string) {
    await this.request.delete(`https://conduit-api.bondaracademy.com/api/articles/${slug}`, {
      headers: { Authorization: `Token ${token}` },
    });
  }
}