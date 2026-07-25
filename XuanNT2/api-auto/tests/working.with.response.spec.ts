import { test, expect } from "@playwright/test";
import tags from "../test-data/tags.json"
import articles from "../test-data/article.json"

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
  await expect(popularTagsList.getByText("XuanNT Test 1.1")).toBeVisible()
})

/** Bai tap ve nha
Tạo mock cho API get dữ liệu bài viết https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0 với các thông tin như sau:
- Giả lập chỉ trả về 2 bài viết
- Sửa các thông tin sau trong bài viết đầu:
  - title
  - description
 */
test("Mocking API - Articles API", async ({ page }) => {
  // Working with API

  // lấy db từ serve
  // const reponse = await route.fetch();
  // const body = await reponse.json();
  // console.log(body);

  // clone DB
  const articleClone = structuredClone(articles);

  // cắt danh sách, giữ lại 2 bài viết đầu
  articleClone.articles = articleClone.articles.splice(0,2);
  articleClone.articlesCount = 2;

  // sửa thông tin bài viết đầu
  articleClone.articles[0].title = "XuanNT title 1.1"
  articleClone.articles[0].description = "XuanNT description 1.1"

  // 1. Chặn yêu cầu API
  await page.route('**/api/articles*', async (route) => {

    // 2. Tạo phản hồi giả - mocking API
    await route.fulfill({
      body: JSON.stringify(articleClone),
    });
  });

  //verify the title,description of the article
  await expect(page.getByText('XuanNT title 1.1')).toBeVisible();
  await expect(page.getByText('XuanNT description 1.1')).toBeVisible();
})

// test('Modify API response - Articles API', async ({ page }) => {
//   // todo
// })