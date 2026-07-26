import { expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class HomePage extends BasePage {
  newArticleLink = this.page.getByRole("link", { name: "New Article" });
  globalFeedTab = this.page.getByRole("button", { name: "Global Feed" });

  articleTitleInFeed(title: string) {
    return this.page.locator("app-article-list h1", { hasText: title });
  }

  async openNewArticleEditor() {
    await this.newArticleLink.click();
  }

  async goToGlobalFeed() {
    await this.globalFeedTab.click();
  }

  async openArticleByTitle(title: string) {
    const article = this.articleTitleInFeed(title).first();
    await expect(article).toBeVisible();
    await article.click();
  }
}
