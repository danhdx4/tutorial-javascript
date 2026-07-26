import { test } from "../fixtures/login.fixture";
import { ArticlePage } from "../pages/article.page";
import { ArticleApi } from "../api/article.api";

let slug = "";
let accessToken = "";

test.beforeEach(async ({ login, request }) => {
  accessToken = await login.evaluate(
    () => window.localStorage.getItem("jwtToken")!,
  );

  const articleApi = new ArticleApi(request);
  const random = Math.floor(Math.random() * 100);
  const title = `Xóa bài viết ${random}`;

  const response = await articleApi.createArticle(accessToken, title);
  console.log(response);

  slug = response.article.slug;
});

test("Delete Article", async ({ login }) => {
  const articlePage = new ArticlePage(login);

  await login.goto(`https://conduit.bondaracademy.com/article/${slug}`);

  await articlePage.deleteArticle();
});
