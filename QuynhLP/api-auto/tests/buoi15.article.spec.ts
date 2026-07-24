import { test, expect } from "../fixtures/auth.fixture";
import { ConduitApiClient } from "../src/api/conduit.api";
import { ArticlePage } from "../src/pages/article.page";
import { EditorPage } from "../src/pages/editor.page";
import { HomePage } from "../src/pages/home.page";
import { buildArticleData, type ArticleInput } from "../src/utils/constants";

type PublishResponse = {
  article: {
    slug: string;
  };
};

test.describe("Buoi 15 - Test 1: Create record", () => {
  let createdSlug: string | undefined;

  test.afterEach(async ({ request, authToken }) => {
    if (!createdSlug) {
      return;
    }

    const apiClient = new ConduitApiClient(request);
    await apiClient.deleteArticle(authToken, createdSlug);
    createdSlug = undefined;
  });

  test("Create article on browser", async ({ page }) => {
    const articleData = buildArticleData("create");
    const homePage = new HomePage(page);
    const editorPage = new EditorPage(page);
    const articlePage = new ArticlePage(page);

    await homePage.openNewArticleEditor();

    const publishResponsePromise = page.waitForResponse(
      (response) =>
        response.url().includes("/api/articles") &&
        response.request().method() === "POST" &&
        response.status() === 201,
    );

    await editorPage.publishArticle(articleData);

    const publishResponse = await publishResponsePromise;
    const publishBody = (await publishResponse.json()) as PublishResponse;
    createdSlug = publishBody.article.slug;

    await articlePage.expectArticleTitle(articleData.title);
  });
});

test.describe("Buoi 15 - Test 2: Delete record", () => {
  let articleData: ArticleInput;
  let articleSlug: string;

  test.beforeEach(async ({ request, authToken, page }) => {
    articleData = buildArticleData("delete");
    const apiClient = new ConduitApiClient(request);
    articleSlug = await apiClient.createArticle(authToken, articleData);
    await page.reload();
  });

  test.afterEach(async ({ request, authToken }) => {
    if (!articleSlug) {
      return;
    }

    const apiClient = new ConduitApiClient(request);
    const result = await request.get(
      `https://conduit-api.bondaracademy.com/api/articles/${articleSlug}`,
      {
        headers: {
          Authorization: `Token ${authToken}`,
        },
      },
    );

    if (result.status() === 200) {
      await apiClient.deleteArticle(authToken, articleSlug);
    }

    articleSlug = "";
  });

  test("Delete article on browser", async ({ page }) => {
    const homePage = new HomePage(page);
    const articlePage = new ArticlePage(page);

    await homePage.goToGlobalFeed();
    await homePage.openArticleByTitle(articleData.title);
    await articlePage.deleteArticle();

    await homePage.goToGlobalFeed();
    await expect(homePage.articleTitleInFeed(articleData.title)).toHaveCount(0);
  });
});
