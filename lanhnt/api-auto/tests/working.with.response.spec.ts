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
  // Working with API
  // 1. Chặn yêu cầu API
  await page.route('**/articles*', async (route) => {

    // 2. Tạo phản hồi giả - mocking API
    await route.fulfill({
      body: JSON.stringify(articles),
    });
  });

  const firstArticle = page.locator('app-article-preview').first()
  //verify the title of the article
  await expect(firstArticle.locator('h1')).toHaveText('XuanNT1')
})

test('Modify API response - Articles API', async ({ page }) => {
  await page.route('**/articles*', async (route) => {

    // lấy API thật
    const response = await route.fetch()
    const body = await response.json()
  
    // chỉ lấy 2 bài
    body.articles = body.articles.slice(0, 2)
  
    
    body.articles[0].title = "XuanNT1"
    body.articles[0].description = "Nguyễn Thị Xuân 1"
  
    body.articles[1].title = "XuanNT2"
    body.articles[1].description = "Nguyễn Thị Xuân 2"
  
    // trả lại response mới
    await route.fulfill({
      body: JSON.stringify(body),
    })
  })
  
  const articlesList = page.locator('app-article-preview')
  
  // verify bài 1
  await expect(articlesList.nth(0).locator('h1')).toHaveText('XuanNT1')
  
  // verify bài 2
  await expect(articlesList.nth(1).locator('h1')).toHaveText('XuanNT2')
})