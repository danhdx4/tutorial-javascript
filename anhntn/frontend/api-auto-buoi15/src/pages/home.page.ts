// @ts-nocheck
import { expect, Locator, Page } from "playwright/test";
import { APP_URL } from "../utils/constants";

export class HomePage {
  readonly page: Page;
  readonly globalFeedTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.globalFeedTab = page.getByRole("button", { name: " Global Feed " });
  }

  async goto() {
    await this.page.goto(APP_URL);
  }

  async openGlobalFeed() {
    await this.globalFeedTab.click();
  }

  async openArticleByTitle(title: string) {
    await this.page.getByRole("link", { name: title }).first().click();
  }

  async expectArticleVisible(title: string) {
    await expect(this.page.locator("app-article-preview h1", { hasText: title })).toBeVisible();
  }

  async expectArticleNotVisible(title: string) {
    await expect(this.page.locator("app-article-preview h1", { hasText: title })).not.toBeVisible();
  }
}
