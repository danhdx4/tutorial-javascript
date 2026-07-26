import { Page } from '@playwright/test';

export class ArticlePage {
  readonly title;
  readonly deleteButton;

  constructor(private page: Page) {
    this.title = page.locator('h1');

    this.deleteButton = page.locator('button.btn-outline-danger').filter({
      hasText: 'Delete Article',
    }).first();
  }

  async deleteArticle(): Promise<void> {
    await this.deleteButton.click();
  }
}