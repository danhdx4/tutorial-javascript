import { expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class ArticlePage extends BasePage {
  articleTitle = this.page.locator("app-article-meta + div h1");
  deleteArticleBtn = this.page.getByRole("button", { name: "Delete Article" }).first();

  async expectArticleTitle(title: string) {
    await expect(this.articleTitle).toHaveText(title);
  }

  async deleteArticle() {
    await this.deleteArticleBtn.click();
  }
}
