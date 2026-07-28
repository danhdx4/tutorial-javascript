import { test, expect } from "../fixtures/auth.fixture";
import { articleData } from "../data/article.data";
import { createArticle } from "../api/article.api";
import { ArticlePage } from "../page/article.page";
import { PageUrl } from "../utils/constants";

let slug = "";
test.beforeEach(async ({ request }) => {
  const article = await createArticle(request, articleData);
  slug = article.slug;
});
test("Delete article", async ({ page }) => {
  const articlePage = new ArticlePage(page);
  await page.goto(`${PageUrl.BASE_URL}/article/${slug}`);
  await articlePage.deleteArticle();
  await expect(page).toHaveURL(PageUrl.BASE_URL);
});
