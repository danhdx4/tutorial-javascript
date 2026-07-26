// @ts-nocheck
import { Page } from "playwright/test";

export class EditorPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openNewArticleForm() {
    await this.page.getByRole("link", { name: " New Article " }).click();
  }

  async createArticle(title: string, description: string, body: string, tags: string) {
    await this.page.getByPlaceholder("Article Title").fill(title);
    await this.page.getByPlaceholder("What's this article about?").fill(description);
    await this.page.getByPlaceholder("Write your article (in markdown)").fill(body);
    await this.page.getByPlaceholder("Enter tags").fill(tags);

    const createResponsePromise = this.page.waitForResponse("**/api/articles/");
    await this.page.getByRole("button", { name: " Publish Article " }).click();
    const createResponse = await createResponsePromise;
    const responseBody = await createResponse.json();

    return responseBody.article.slug as string;
  }
}
