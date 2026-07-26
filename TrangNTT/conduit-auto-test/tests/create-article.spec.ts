import { test, expect } from '../fixtures/login.fixture';
import { HomePage } from '../pages/home.page';
import { EditorPage } from '../pages/editor.page';
import { deleteArticle } from '../utils/api.helper';

let slug: string | undefined;
let token: string | undefined;

test.afterEach(async () => {
  if (slug && token) {
    await deleteArticle(slug, token);
    slug = undefined;
    token = undefined;
  }
});

test('Create article successfully', async ({ login }) => {
  const page = login;

  token = undefined;

  const homePage = new HomePage(page);
  const editorPage = new EditorPage(page);

  const title = `Playwright ${Date.now()}`;

  await homePage.clickNewArticle();

  await editorPage.createArticle({
    title,
    description: 'Automation Testing',
    body: 'Playwright JavaScript',
    tag: 'playwright',
  });

  await expect(page).toHaveURL(/\/article\//);
  await expect(page.locator('h1')).toHaveText(title);

  const match = page.url().match(/\/article\/([^/?#]+)/);
  slug = match ? match[1] : undefined;
});