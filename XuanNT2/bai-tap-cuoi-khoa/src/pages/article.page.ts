import { Page, expect } from "@playwright/test";
import { PageUrl } from "../utils/constants";
export class ArticlePage {
  constructor(private page: Page) {}
  // Action
  async goto() {
    const response = await this.page.goto(PageUrl.HOMEPAGE_URL);
    expect(response?.status()).toBeLessThan(400);
  }

  // Creat article
  async createArticle(title: string, description: string, message: string) {
    await this.page.getByRole("link", { name: " New Article " }).click();
    await this.page.getByPlaceholder("Article Title").fill(title);
    await this.page
      .getByPlaceholder("What's this article about?")
      .fill(description);
    await this.page
      .getByPlaceholder("Write your article (in markdown)")
      .fill(message);
    await this.page.getByRole("button", { name: " Publish Article " }).click();
  }

  // Delete article
  async deleteArticle() {
    await this.page
      .getByRole("button", { name: " Delete Article " })
      .first()
      .click();
  }
}
