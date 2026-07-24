import { Locator, Page } from '@playwright/test';
import { PageUrl } from '../utils/constants';

export class ArticlePage {
  readonly page: Page;

  // Locator
  readonly articleTitle: Locator;
  readonly articleDescription: Locator;
  readonly articleBody: Locator;
  readonly articleTag: Locator;
  readonly publishButton: Locator;
  readonly deleteButton: Locator;
  readonly homeButton: Locator;
  readonly newArticleButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.articleTitle = page.getByPlaceholder('Article Title');

    this.articleDescription = page.getByPlaceholder(
      "What's this article about?"
    );

    this.articleBody = page.getByPlaceholder(
      'Write your article (in markdown)'
    );

    this.articleTag = page.getByPlaceholder('Enter tags');

    this.publishButton = page.getByRole('button', {
      name: 'Publish Article',
    });

    this.deleteButton = page.getByRole('button', {
      name: 'Delete Article',
    });

    this.homeButton = page.getByRole('link', {
      name: 'Home',
    });

    this.newArticleButton = page.getByRole('link', {
      name: 'New Article',
    });
  }

  // Mở trang Home
  async gotoHome() {
    await this.page.goto(PageUrl.HOME_URL);
  }

  // Mở trang tạo bài viết
  async gotoNewArticle() {
    await this.page.goto(PageUrl.NEW_ARTICLE_URL);
  }

  // Hoặc click menu New Article
  async clickNewArticle() {
    await this.newArticleButton.click();
  }

  // Tạo bài viết
  async createArticle(
    title: string,
    description: string,
    body: string,
    tag: string
  ) {
    await this.articleTitle.fill(title);

    await this.articleDescription.fill(description);

    await this.articleBody.fill(body);

    await this.articleTag.fill(tag);

    await this.publishButton.click();
  }

  // Xóa bài viết
  async deleteArticle() {
    await this.deleteButton.click();
  }
}