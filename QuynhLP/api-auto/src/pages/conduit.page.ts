import { expect, Page } from "@playwright/test";

export type ArticleData = {
  title: string;
  description: string;
  body: string;
  tag: string;
};

export class ConduitPage {
  constructor(private readonly page: Page) {}

  async gotoHome() {
    await this.page.goto("https://conduit.bondaracademy.com/");
  }

  async login(email: string, password: string) {
    await this.page.getByRole("link", { name: "Sign in" }).click();
    await this.page.getByPlaceholder("Email").fill(email);
    await this.page.getByPlaceholder("Password").fill(password);
    await this.page.getByRole("button", { name: "Sign in" }).click();
    await expect(this.page.getByRole("link", { name: "New Article" })).toBeVisible();
  }

  async createArticleOnUI(data: ArticleData) {
    await this.page.getByRole("link", { name: "New Article" }).click();
    await this.page.getByPlaceholder("Article Title").fill(data.title);
    await this.page.getByPlaceholder("What's this article about?").fill(data.description);
    await this.page.getByPlaceholder("Write your article (in markdown)").fill(data.body);
    await this.page.getByPlaceholder("Enter tags").fill(data.tag);
    await this.page.getByPlaceholder("Enter tags").press("Enter");
    await this.page.getByRole("button", { name: "Publish Article" }).click();
    await expect(this.page.getByRole("button", { name: "Delete Article" }).first()).toBeVisible();
  }

  async openArticleFromGlobalFeed(title: string) {
    await this.page.getByRole("button", { name: "Global Feed" }).click();
    await this.page.locator("app-article-list h1", { hasText: title }).first().click();
  }

  async deleteCurrentArticleOnUI() {
    await this.page.getByRole("button", { name: "Delete Article" }).first().click();
  }

  async expectArticleNotInGlobalFeed(title: string) {
    await this.page.getByRole("button", { name: "Global Feed" }).click();
    await expect(this.page.locator("app-article-list h1", { hasText: title })).toHaveCount(0);
  }
}
