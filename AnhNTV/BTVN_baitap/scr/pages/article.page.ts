import { expect, Page } from "@playwright/test";

export class ArticlePage {
  constructor(private page: Page) {}
  //Các thao tác liên quan đến bài viết
  //Tạo bài viết mới gồm: Title, description, body
  //tạo bài viết và thao tác với bài viết

  async createArticle(title: string, description: string, body: string) {
    await this.page.getByText("New Article").click();
    await this.page.getByPlaceholder("Article Title").fill(title);
    await this.page.getByPlaceholder("What's this article about?").fill(description);
    await this.page.getByPlaceholder("Write your article (in markdown)").fill(body);

    await Promise.all([
      this.page.waitForURL("**/article/**"),
      this.page.getByRole("button", { name: "Publish Article" }).click(),
    ]);
  }
//Kiểm tra bài viết đã được tạo
  async verifyArticle(title: string) {
    await expect(this.page.getByRole("heading", { name: title })).toBeVisible();
  }
//Xóa bài viết
  async deleteArticle() {
    await this.page.getByRole("button", { name: "Delete Article" }).click();
  }
}
