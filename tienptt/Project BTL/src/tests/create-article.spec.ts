import { test, expect } from "../fixtures/auth.fixture";
import { HomePage } from "../page/home.page";
import { EditorPage } from "../page/editor.page";
import { ArticleApi } from "../api/article.api";

let token = "";
let slug = "";

test.beforeEach(async ({ request }) => {
  // Login API để lấy token
  const articleApi = new ArticleApi(request);

  const loginResponse = await articleApi.login(
    "tienptt1998@gmail.com",
    "123456789"
  );

  token = loginResponse.user.token;
});

test.afterEach(async ({ request }) => {
  if (slug) {
    const articleApi = new ArticleApi(request);

    await articleApi.deleteArticle(token, slug);
  }
});

test("Create Article successfully", async ({ page }) => {
  const homePage = new HomePage(page);
  const editorPage = new EditorPage(page);

  // Tạo title không bị trùng
  const articleTitle = `Automation Test Article ${Date.now()}`;

  const description =
    "Article created by Playwright automation";

  const body =
    "This is a test article created for automation testing";

  const tag = "playwright";

  // Click New Article
  await homePage.clickNewArticle();

  // Tạo bài viết
  await editorPage.createArticle(
    articleTitle,
    description,
    body,
    tag
  );

  // Chờ chuyển sang trang chi tiết bài viết
  await page.waitForURL("**/article/**");

  // Lưu slug để afterEach xóa bằng API
  slug = page.url().split("/article/")[1];

  // Verify tiêu đề
  await expect(page.locator("h1")).toHaveText(articleTitle);
});