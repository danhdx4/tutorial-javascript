import { test } from "../fixtures/login.fixture";
import { ArticlePage } from "../pages/article.page";
import { ArticleApi } from "../api/article.api";

let slug = "";
let accessToken = "";

test.afterEach(async ({ request }) => {
  const articleApi = new ArticleApi(request);
  await articleApi.deleteArticle(accessToken, slug);
});

// Creat article
// test("Create Article", async ({ login }) => {
//   const articlePage = new ArticlePage(login);
//   await articlePage.goto();
//   await articlePage.createArticle(
//     "Tiêu đề bài test 1",
//     "Mô tả bài test 1",
//     "Nội dung bài test 1",
//   );
// });

test("Create Article", async ({ login }) => {
  const articlePage = new ArticlePage(login);

  accessToken = await login.evaluate(
    () => window.localStorage.getItem("jwtToken")!,
  );

  const random = Math.floor(Math.random() * 100);
  const title = `Tiêu đề bài viết ${random}`;

  slug = title.toLowerCase().replace(/\s+/g, "-");

  await articlePage.goto();

  await articlePage.createArticle(
    title,
    `Mô tả bài ${random}`,
    `Nội dung bài ${random}`,
  );
});
