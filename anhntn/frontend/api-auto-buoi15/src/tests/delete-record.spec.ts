import { test } from '../fixtures/auth-test';
import { ArticlePage } from '../pages/article.page';
import { HomePage } from '../pages/home.page';
import { makeDeleteSeedArticleData } from '../test-data/article-data';
import { createArticleByApi, getToken, isApiReachable } from '../utils/apiHelpers';

test.describe("Buoi 15 - Delete ban ghi", () => {
  let seededSlug = "";
  let seededTitle = "";
  let apiReachable = false;

  test.beforeAll(async ({ request }) => {
    apiReachable = await isApiReachable(request);
  });

  test.beforeEach(async () => {
    test.skip(!apiReachable, "Skip because Conduit API is blocked on this network.");
  });

  test.beforeEach(async ({ request }) => {
    const now = Date.now();
    const seedArticleData = makeDeleteSeedArticleData(now);
    seededTitle = seedArticleData.title;
    const accessToken = await getToken(request);

    const seededArticle = await createArticleByApi(request, accessToken, seedArticleData);

    seededSlug = seededArticle.slug;
  });

  test("TC02 - Delete ban ghi tren browser", async ({ page, login }) => {
    login;
    const articlePage = new ArticlePage(page);
    const homePage = new HomePage(page);

    await articlePage.gotoBySlug(seededSlug);
    await articlePage.deleteArticleByBrowser();

    await homePage.goto();
    await homePage.openGlobalFeed();
    await homePage.expectArticleNotVisible(seededTitle);
  });
});
