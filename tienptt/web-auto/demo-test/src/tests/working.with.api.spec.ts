import { test, expect } from '@playwright/test';

test('mock Conduit editor page and publish article via API mock', async ({ page }) => {
  const editorHtml = '<!DOCTYPE html>' +
    '<html>' +
    '<body>' +
    '<input placeholder="Article Title" id="title" />' +
    '<input placeholder="What\'s this article about?" id="description" />' +
    '<textarea placeholder="Write your article (in markdown)" id="body"></textarea>' +
    '<input placeholder="Enter tags" id="tags" />' +
    '<button id="publish">Publish Article</button>' +
    '<div id="result"></div>' +
    '</body>' +
    '</html>';

  await page.route('**/editor', route => route.fulfill({
    status: 200,
    contentType: 'text/html',
    body: editorHtml,
  }));

  await page.route('**/api/articles', async route => {
    const request = route.request();
    if (request.method() === 'POST') {
      const postData = request.postDataJSON();
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({
          article: {
            slug: 'mock-editor-article',
            title: postData.article.title,
            description: postData.article.description,
            body: postData.article.body,
            tagList: postData.article.tagList || [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            favorited: false,
            favoritesCount: 0,
            author: {
              username: 'mockuser',
              bio: 'Người dùng mock',
              image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
              following: false,
            },
          },
        }),
      });
    } else {
      await route.continue();
    }
  });

  await page.goto('https://conduit.bondaracademy.com/editor');

  await page.fill('input[placeholder="Article Title"]', 'Bài viết mock editor');
  await page.fill('input[placeholder="What\'s this article about?"]', 'Bài viết mock trên trang editor');
  await page.fill('textarea[placeholder="Write your article (in markdown)"]', 'Nội dung bài viết mock từ Playwright.');
  await page.fill('input[placeholder="Enter tags"]', 'playwright mock');

  await page.evaluate(async () => {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const body = document.querySelector('#body').value;
    const tagList = document.querySelector('#tags').value.split(' ').filter(Boolean);
    const response = await fetch('https://conduit.bondaracademy.com/api/articles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ article: { title, description, body, tagList } }),
    });
    const data = await response.json();
    document.body.innerHTML = '<h1>' + data.article.title + '</h1><div class="article-content">' + data.article.body + '</div>';
  });

  await expect(page.locator('h1')).toHaveText('Bài viết mock editor');
  await expect(page.locator('.article-content')).toContainText('Nội dung bài viết mock từ Playwright.');
});
