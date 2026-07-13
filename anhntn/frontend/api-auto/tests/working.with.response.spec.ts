import { test, expect } from "@playwright/test";
import tags from "../test-data/tags.json";
import articles from '../test-data/articles.json'

test.beforeEach(async ({ page }) => {
  await page.goto("https://conduit.bondaracademy.com/");
});

test("has title", async ({ page }) => {
  await expect(page.locator(".navbar-brand")).toHaveText("conduit");
});

test("Mocking API - Tags API", async ({ page }) => {
  // Working with API
  // 1. Chặn yêu cầu API
  await page.route("**/api/tags", async (route) => {

    // 2. Tạo phản hồi giả - mocking API
    await route.fulfill({
      body: JSON.stringify(tags),
    });
  });

  const popularTagsList = page.locator('.col-md-3')
  await expect(popularTagsList.getByText("Zensho Holding")).toBeVisible()
})

/** Bai tap ve nha
Tạo mock cho API get dữ liệu bài viết https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0 với các thông tin như sau:
- Giả lập chỉ trả về 2 bài viết
- Sửa các thông tin sau trong bài viết đầu:
  - title
  - description
 */
test("Mocking API - Articles API", async ({ page }) => {
  const mockedArticles = {
    ...articles,
    articles: articles.articles.slice(0, 2).map((article, index) => {
      if (index === 0) {
        return {
          ...article,
          title: "Playwright Mocked Article Title",
          description: "Playwright Mocked Article Description",
        };
      }

      return article;
    }),
    articlesCount: 2,
  };

  // Working with API
  // 1. Chặn yêu cầu API
  await page.route('**/articles*', async (route) => {

    // 2. Tạo phản hồi giả - mocking API
    await route.fulfill({
      body: JSON.stringify(mockedArticles),
    });
  });

  await expect(page.locator('app-article-preview')).toHaveCount(2)

  const firstArticle = page.locator('app-article-preview').first()
  await expect(firstArticle.locator('h1')).toHaveText('Playwright Mocked Article Title')
  await expect(firstArticle.locator('p')).toHaveText('Playwright Mocked Article Description')
})

test('Modify API response - Articles API', async ({ page }) => {
  // Working with API - Modify response (not full mock)
  // 1. Chặn yêu cầu API
  await page.route('**/articles*', async (route) => {
    // 2. Gửi request thật và lấy response gốc
    const response = await route.fetch();
    const responseBody = await response.json();

    // 3. Sửa thông tin bài viết đầu tiên trong response thật
    responseBody.articles[0].title = 'Playwright Modified Article Title';
    responseBody.articles[0].description = 'Playwright Modified Article Description';

    // 4. Trả về response đã được sửa
    await route.fulfill({
      response,
      body: JSON.stringify(responseBody),
    });
  });

  const firstArticle = page.locator('app-article-preview').first();
  await expect(firstArticle.locator('h1')).toHaveText('Playwright Modified Article Title');
  await expect(firstArticle.locator('p')).toHaveText('Playwright Modified Article Description');
})