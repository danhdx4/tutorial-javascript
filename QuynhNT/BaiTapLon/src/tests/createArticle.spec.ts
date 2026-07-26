import { test, expect } from "../fixtures/auth.fixture";
import { ArticlePage } from "../page/article.page";
import { articleData } from "../data/article.data";
import { deleteArticle } from "../api/article.api";

let slug = "";

test.afterEach(async ({ request }) => {
  // delete article sau khi test xong, để tránh dữ liệu rác, xóa đúng bài
  if (!slug) return; // nếu !slug thì return luôn không gọi delete API nữa
  await deleteArticle(request, slug);
});
test("Create article", async ({ page }) => {
  const articlePage = new ArticlePage(page);
  const responsePromise = page.waitForResponse(
    // bắt đầu lắng nghe response, có respon thì mới thực hiện tiếp
    (response) =>
      response.url().includes("/api/articles") &&
      response.request().method() === "POST" &&
      response.status() === 201,
  );
  await articlePage.createArticle(articleData);
  const response = await responsePromise; // lấy respon vừa nhận được
  expect(response.ok()).toBeTruthy(); // verifu xem bài biết có được tạo thành công hay không
  const body = await response.json();
  slug = body.article.slug; // lưu lại slug của bài viết vừa tạo để xóa sau khi test xong
  await articlePage.verifyArticle(articleData.title);
});
