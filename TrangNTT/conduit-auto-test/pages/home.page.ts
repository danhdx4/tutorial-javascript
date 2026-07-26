import { Page } from '@playwright/test';

export class HomePage {
  readonly newArticleButton;

  constructor(private page: Page) {
    this.newArticleButton = page.getByRole('link', {
      name: ' New Article ',
    });
  }

  async clickNewArticle(): Promise<void> {
    await this.newArticleButton.click();
  }
}