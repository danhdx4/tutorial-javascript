import { test, expect } from "../fixtures/auth.fixture";
import { ArticleApi } from "../api/article.api";
import { ArticlePage } from "../page/article.page";

let token = "";
let slug = "";

test.beforeEach(async ({ request }) => {
  const articleApi = new ArticleApi(request);

  // Login API
  const loginResponse = await articleApi.login(
    "tienptt1998@gmail.com",
    "123456789"
  );

  token = loginResponse.user.token;

  // Tạo bài bằng API
  const title = `Delete Article Test ${Date.now()}`;

  const createResponse = await articleApi.createArticle(
    token,
    title,
    "Description test",
    "Body test",
    ["playwright"]
  );

  slug = createResponse.article.slug;
});

test("Delete Article successfully", async ({ page }) => {
  const articlePage = new ArticlePage(page);

  // Mở đúng bài vừa tạo
  await page.goto(`https://conduit.bondaracademy.com/article/${slug}`);

  // Kiểm tra đã vào đúng bài
  await expect(articlePage.articleTitle).toBeVisible();

  // Xóa bài
  await articlePage.clickDeleteArticle();

  // Kiểm tra đã rời khỏi trang article
  await expect(page).not.toHaveURL(/\/article\//);
});