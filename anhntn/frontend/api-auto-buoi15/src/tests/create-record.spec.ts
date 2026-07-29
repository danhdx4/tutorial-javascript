import { test, expect } from '../fixtures/auth-test';
import { EditorPage } from '../pages/editor.page';
import { HomePage } from '../pages/home.page';
import { makeCreateArticleData } from '../test-data/article-data';
import { deleteArticleByApi, getToken, isApiReachable } from '../utils/apiHelpers';

test.describe("Buoi 15 - Tao ban ghi", () => {
  let createdSlug = "";
  let apiReachable = false;

  test.beforeAll(async ({ request }) => {
    apiReachable = await isApiReachable(request);
  });

  test.beforeEach(async () => {
    test.skip(!apiReachable, "Skip because Conduit API is blocked on this network.");
  });

  test.afterEach(async ({ request }) => {
    if (createdSlug) {
      const accessToken = await getToken(request);
      await deleteArticleByApi(request, accessToken, createdSlug);
      createdSlug = "";
    }
  });

  test("TC01 - Tao ban ghi tren browser", async ({ page, login }) => {
    login;
    const now = Date.now();
    const article = makeCreateArticleData(now);

    const editorPage = new EditorPage(page);
    const homePage = new HomePage(page);

    await homePage.goto();
    await editorPage.openNewArticleForm();
    createdSlug = await editorPage.createArticle(
      article.title,
      article.description,
      article.body,
      article.tags,
    );

    await homePage.goto();
    await homePage.openGlobalFeed();
    await homePage.expectArticleVisible(article.title);

    expect(createdSlug.length).toBeGreaterThan(0);
  });
});
