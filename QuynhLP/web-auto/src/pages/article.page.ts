import { expect, Page as PlaywrightPage } from "@playwright/test";
import { Page } from "./base.page";

export class ArticlePage extends Page {
  constructor(page: PlaywrightPage) {
    super(page);
  }

  // Mở trang chủ
  async openHome() {
    await this.page.goto("https://conduit.bondaracademy.com/");
  }

  // Đăng nhập bằng UI
  async login(email: string, password: string) {
    await this.page.getByRole("link", { name: /sign in/i }).click();
    await this.page.getByPlaceholder("Email").fill(email);
    await this.page.getByPlaceholder("Password").fill(password);
    await this.page.getByRole("button", { name: /sign in/i }).click();
    await expect(this.page.getByRole("link", { name: /sign in/i })).not.toBeVisible();
  }

  // Tạo bài mới bằng browser
  async createArticle(title: string) {
    await this.page.getByRole("link", { name: /new article/i }).click();
    await this.page.getByPlaceholder("Article Title").fill(title);
    await this.page.getByPlaceholder("What's this article about?").fill("demo");
    await this.page.getByPlaceholder("Write your article (in markdown)").fill("demo");
    await this.page.getByRole("button", { name: /publish article/i }).click();
  }

  // Xóa bài bằng browser
  async deleteArticle(title: string) {
    await this.page.getByRole("link", { name: /global feed/i }).click();
    await this.page.getByRole("link", { name: title }).first().waitFor({ state: "visible" });
    await this.page.getByRole("link", { name: title }).first().click();

    await this.page.getByRole("button", { name: /delete article/i }).waitFor({ state: "visible" });
    await this.page.getByRole("button", { name: /delete article/i }).click();
  }
}
