import { Page } from "playwright/test";
import { APP_URL } from "../utils/constants";

export class ArticlePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoBySlug(slug: string) {
    await this.page.goto(`${APP_URL}/article/${slug}`);
  }

  async deleteArticleByBrowser() {
    await this.page.locator(".banner").getByRole("button", { name: " Delete Article " }).click();
    await this.page.waitForResponse("**/api/articles/*");
  }
}
