import { test, expect } from '@playwright/test';

test('mock Conduit editor page and publish article', async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem('jwt', 'mock-token');
  });

  await page.route('https://conduit.bondaracademy.com/api/user', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        user: {
          email: 'mockuser@test.com',
          token: 'mock-token',
          username: 'mockuser',
          bio: 'Người dùng mock',
          image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        },
      }),
    });
  });

  await page.route('https://conduit.bondaracademy.com/api/articles', async route => {
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

  await page.route('https://conduit.bondaracademy.com/api/articles/mock-editor-article', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        article: {
          slug: 'mock-editor-article',
          title: 'Bài viết mock editor',
          description: 'Bài viết mock trên trang editor',
          body: 'Nội dung bài viết mock từ Playwright.',
          tagList: ['playwright', 'mock'],
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
  });

  await page.goto('https://conduit.bondaracademy.com/editor');

  await page.fill('input[placeholder="Article Title"]', 'Bài viết mock editor');
  await page.fill('input[placeholder="What\'s this article about?"]', 'Bài viết mock trên trang editor');
  await page.fill('textarea[placeholder="Write your article (in markdown)"]', 'Nội dung bài viết mock từ Playwright.');
  await page.fill('input[placeholder="Enter tags"]', 'playwright mock');

  await Promise.all([
    page.waitForURL('**/article/mock-editor-article'),
    page.click('button:has-text("Publish Article")'),
  ]);

  await expect(page.locator('h1')).toHaveText('Bài viết mock editor');
  await expect(page.locator('.article-content')).toContainText('Nội dung bài viết mock từ Playwright.');
});
