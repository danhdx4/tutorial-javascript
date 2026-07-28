import { test, expect } from "../fixtures/auth.fixture";
import { ArticlePage } from "../pages/article.page";
import { articleData } from "../test_data/article.data";

test("Xóa bản ghi", async ({ page }) => {
  const articlePage = new ArticlePage(page);

  await articlePage.createArticle(//tạo bài viết
    articleData.title,
    articleData.description,
    articleData.body
  );

  await articlePage.verifyArticle(articleData.title);//Xác nhận bài viết đã được tạo thành công
  await articlePage.deleteArticle();

  await expect(page.getByText(articleData.title)).toHaveCount(0);
});
