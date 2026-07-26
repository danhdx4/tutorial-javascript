import { request, test, expect } from '@playwright/test';
import { test as loginTest, expect as loginExpect } from '../fixtures/login.fixture';
import { createArticle } from '../utils/api.helper';
import { API_URL, BASE_URL } from '../utils/constants';
import { ArticlePage } from '../pages/article.page';

let article: any;
let slug: string;

loginTest.beforeEach(async ({ login }) => {
  const page = login;

  article = await createArticle({
    title: `Delete ${Date.now()}`,
    description: 'description',
    body: 'body',
    tag: 'delete',
  });

  slug = article.article.slug;

  await page.goto(BASE_URL);
  await page.locator(`a.preview-link[href="/article/${slug}"]`).waitFor({ state: 'visible' });
});

loginTest('Delete article successfully', async ({ login }) => {
  const page = login;
  const articlePage = new ArticlePage(page);

  await page.locator(`a.preview-link[href="/article/${slug}"]`).click();
  await loginExpect(page).toHaveURL(new RegExp(`/article/${slug}$`));

  await articlePage.deleteArticle();
  await loginExpect(page).toHaveURL(BASE_URL);

  const apiContext = await request.newContext();
  const response = await apiContext.get(`${API_URL}/articles?limit=10&offset=0`);
  const body = await response.json();
  const remainingArticles = body.articles ?? [];
  const isArticlePresent = remainingArticles.some(
    (item: { slug?: string }) => item.slug === slug
  );

  loginExpect(isArticlePresent).toBeFalsy();
});