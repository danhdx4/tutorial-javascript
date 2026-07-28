import { test, expect } from "../fixtures/auth.fixture";
import { ArticlePage } from "../page/article.page";
import { articleData } from "../data/article.data";
import { deleteArticle } from "../api/article.api";

let slug = "";

test.afterEach(async ({ request }) => {

  if (!slug) return;
  await deleteArticle(request, slug);
});
test("Create article", async ({ page }) => {
  const articlePage = new ArticlePage(page);
  const responsePromise = page.waitForResponse(
    (response) =>
      response.url().includes("/api/articles") &&
      response.request().method() === "POST" &&
      response.status() === 201,
  );
  await articlePage.createArticle(articleData);
  const response = await responsePromise;
  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  slug = body.article.slug;
  await articlePage.verifyArticle(articleData.title);
});
