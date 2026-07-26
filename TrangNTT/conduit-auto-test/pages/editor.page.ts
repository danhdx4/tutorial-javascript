import { Page } from '@playwright/test';

export interface ArticleData {
  title: string;
  description: string;
  body: string;
  tag: string;
}

export class EditorPage {
  readonly titleTextbox;
  readonly descriptionTextbox;
  readonly bodyTextbox;
  readonly tagTextbox;
  readonly publishButton;

  constructor(private page: Page) {
    this.titleTextbox = page.getByPlaceholder('Article Title');
    this.descriptionTextbox = page.getByPlaceholder(
      "What's this article about?"
    );
    this.bodyTextbox = page.locator('textarea');
    this.tagTextbox = page.getByPlaceholder('Enter tags');
    this.publishButton = page.getByRole('button', {
      name: 'Publish Article',
    });
  }

  async createArticle(article: ArticleData): Promise<void> {
    await this.titleTextbox.fill(article.title);
    await this.descriptionTextbox.fill(article.description);
    await this.bodyTextbox.fill(article.body);
    await this.tagTextbox.fill(article.tag);
    await this.publishButton.click();
  }
}