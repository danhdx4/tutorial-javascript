import { test, expect } from '../fixtures/auth.fixture';
import { ArticlePage } from '../pages/article.page';

test('Xóa thành công bài viết vừa tạo trên UI', async ({ authenticatedPage, authenticatedRequest }) => {
  // 1. Tạo bài viết qua API bằng đúng Token của User hiện tại
  const newArticleRes = await authenticatedRequest.post('https://conduit-api.bondaracademy.com/api/articles', {
    data: {
      article: {
        title: `Bài viết cần xóa ${Date.now()}`,
        description: 'Mô tả bài viết',
        body: 'Nội dung bài viết'
      }
    }
  });

  const articleData = await newArticleRes.json();
  const slug = articleData.article.slug;

  // 2. Mở trực tiếp trang chi tiết bài viết đó trên UI
  await authenticatedPage.goto(`https://conduit.bondaracademy.com/#/article/${slug}`);

  // 3. Tiến hành xóa (lúc này nút Delete Article đã xuất hiện do đúng tác giả)
  const articlePage = new ArticlePage(authenticatedPage);
  await articlePage.deleteArticle();

  await expect(authenticatedPage).toHaveURL('https://conduit.bondaracademy.com/');
});