import { Page, Locator } from '@playwright/test';

export interface ArticlePayload {
  title: string;
  description: string;
  body: string;
  tagList?: string[];
}

export class EditorPage {
  readonly page: Page;
  readonly titleInput: Locator;
  readonly descriptionInput: Locator;
  readonly bodyInput: Locator;
  readonly publishButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleInput = page.getByPlaceholder('Article Title');
    this.descriptionInput = page.getByPlaceholder("What's this article about?");
    this.bodyInput = page.getByPlaceholder('Write your article (in markdown)');
    this.publishButton = page.getByRole('button', { name: 'Publish Article' });
  }

  async navigate() {
    await this.page.goto('/editor');
  }

  async createArticle(data: ArticlePayload) {
    await this.titleInput.fill(data.title);
    await this.descriptionInput.fill(data.description);
    await this.bodyInput.fill(data.body);
    await this.publishButton.click();
  }
}