import { Page, Locator } from '@playwright/test';

export class ArticlePage {
  readonly page: Page;
  readonly articleTitle: Locator;
  readonly deleteButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.articleTitle = page.getByRole('heading');
    this.deleteButton = page.getByRole('button', { name: 'Delete Article' }).first();
  }

  async deleteArticle() {
    await this.deleteButton.click();
  }
}