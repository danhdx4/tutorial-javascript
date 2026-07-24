import { test, expect } from "../fixtures/simple-auth.fixture";
import { ArticleData, ConduitPage } from "../src/pages/conduit.page";

const API_URL = "https://conduit-api.bondaracademy.com/api";
const APP_URL = "https://conduit.bondaracademy.com";

function buildArticle(prefix: string): ArticleData {
  const id = `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  return {
    title: `${prefix} title ${id}`,
    description: `${prefix} description ${id}`,
    body: `${prefix} body ${id}`,
    tag: "playwright",
  };
}

test.describe("Test 1 - Tạo bản ghi", () => {
  let createdSlug = "";

  // after: xoa bai test 1 bang API
  test.afterEach(async ({ page }) => {
    if (!createdSlug) {
      return;
    }

    await page.evaluate(
      async ({ apiUrl, slug }) => {
        const token = localStorage.getItem("jwtToken");
        await fetch(`${apiUrl}/articles/${slug}`, {
          method: "DELETE",
          headers: {
            Authorization: `Token ${token}`,
          },
        });
      },
      { apiUrl: API_URL, slug: createdSlug },
    );

    createdSlug = "";
  });

  test("Tao article tren browser", async ({ page }) => {
    const conduitPage = new ConduitPage(page);
    const data = buildArticle("create");

    const createResponsePromise = page.waitForResponse(
      (res) =>
        res.url().includes("/api/articles") &&
        res.request().method() === "POST" &&
        res.status() === 201,
    );

    await conduitPage.createArticleOnUI(data);

    const createResponse = await createResponsePromise;
    const body = await createResponse.json();
    createdSlug = body.article.slug as string;
  });
});

test.describe("Test 2 - Delete bản ghi", () => {
  let articleTitle = "";
  let articleSlug = "";

  // before: tao bai cho test 2 bang API
  test.beforeEach(async ({ page }) => {
    const data = buildArticle("delete");
    articleTitle = data.title;

    const created = await page.evaluate(
      async ({ apiUrl, article }) => {
        const token = localStorage.getItem("jwtToken");
        const response = await fetch(`${apiUrl}/articles`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({
            article: {
              title: article.title,
              description: article.description,
              body: article.body,
              tagList: [article.tag],
            },
          }),
        });

        const body = await response.json();
        return {
          status: response.status,
          slug: body.article?.slug ?? "",
        };
      },
      { apiUrl: API_URL, article: data },
    );

    expect(created.status).toBe(201);
    articleSlug = created.slug;
    await page.reload();
  });

  // cleanup de test doc lap ngay ca khi UI delete fail
  test.afterEach(async ({ page }) => {
    if (!articleSlug) {
      return;
    }

    await page.evaluate(
      async ({ apiUrl, slug }) => {
        const token = localStorage.getItem("jwtToken");
        const check = await fetch(`${apiUrl}/articles/${slug}`, {
          method: "GET",
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        if (check.status === 200) {
          await fetch(`${apiUrl}/articles/${slug}`, {
            method: "DELETE",
            headers: {
              Authorization: `Token ${token}`,
            },
          });
        }
      },
      { apiUrl: API_URL, slug: articleSlug },
    );
  });

  test("Delete article tren browser", async ({ page }) => {
    const conduitPage = new ConduitPage(page);

    await page.goto(`${APP_URL}/article/${articleSlug}`);
    await conduitPage.deleteCurrentArticleOnUI();
    await page.goto(APP_URL);
    await expect(page.locator("app-article-list h1", { hasText: articleTitle })).toHaveCount(0);
    articleSlug = "";
  });
});
