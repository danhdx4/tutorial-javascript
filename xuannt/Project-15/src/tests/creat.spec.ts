import { test, expect } from '../fixtures/auth.fixture';
import { EditorPage } from '../pages/editor.page';

test('Tạo thành công bài viết mới trên UI', async ({ authenticatedPage }) => {
  const editorPage = new EditorPage(authenticatedPage);

  // PHẢI CÓ DÒNG NÀY: Mở trang soạn thảo bài viết
  await authenticatedPage.goto('https://conduit.bondaracademy.com/#/editor');

  await editorPage.createArticle({
    title: `Bài viết mới ${Date.now()}`,
    description: 'Mô tả bài viết',
    body: 'Nội dung bài viết'
  });

  await expect(authenticatedPage).toHaveURL(/.*\/article\//);
});