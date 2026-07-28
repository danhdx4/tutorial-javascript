import { expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class ArticlePage extends BasePage {
  get newArticle() {
    return this.page.getByRole("link", {
      name: "New Article",
    });
  }
  get title() {
    return this.page.getByPlaceholder("Article Title");
  }
  get description() {
    return this.page.getByPlaceholder("What's this article about?");
  }
  get body() {
    return this.page.getByPlaceholder("Write your article (in markdown)");
  }
  get tag() {
    return this.page.getByPlaceholder("Enter tags");
  }
  get publishButton() {
    return this.page.getByRole("button", {
      name: "Publish Article",
    });
  }

  async createArticle(article: {
    title: string;
    description: string;
    body: string;
    tag: string;
  }) {
    await this.newArticle.click();
    await this.title.fill(article.title);
    await this.description.fill(article.description);
    await this.body.fill(article.body);
    await this.tag.fill(article.tag);
    await this.publishButton.click();
  }
  async verifyArticle(title: string) {
    await expect(this.page.getByRole("heading", { level: 1 })).toHaveText(
      title,
    );
  }
  async deleteArticle() {
    await this.page
      .locator(".article-actions")
      .getByRole("button", {
        name: "Delete Article",
      })
      .click();
  }
}
