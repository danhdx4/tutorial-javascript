import { test, expect } from '@playwright/test';

test('Mock Create Article', async ({ page, request }) => {

  // Login bằng API
  const loginResponse = await request.post(
    'https://conduit-api.bondaracademy.com/api/users/login',
    {
      data: {
        user: {
          email: 'lanh@zensho.com',
          password: '123456789'
        }
      }
    }
  );

  // In thông tin response để debug
  console.log('Login Status:', loginResponse.status());

  const responseText = await loginResponse.text();
  console.log('Login Response:', responseText);

  // Nếu login thất bại thì dừng test ngay
  expect(loginResponse.ok()).toBeTruthy();

  // Parse response
  const loginBody = JSON.parse(responseText);
  const token = loginBody.user.token;

  // Lưu token trước khi mở website
  await page.addInitScript((token) => {
    localStorage.setItem('jwtToken', token);
  }, token);

  // Mock Create Article
  await page.route('**/api/articles', async (route) => {

    if (route.request().method() !== 'POST') {
      await route.continue();
      return;
    }

    const requestBody = route.request().postDataJSON();

    console.log('Request Body:', requestBody);

    await route.fulfill({
      status: 201,
      contentType: 'application/json',
      body: JSON.stringify({
        article: {
          slug: 'mock-playwright',
          title: requestBody.article.title,
          description: requestBody.article.description,
          body: requestBody.article.body,
          tagList: requestBody.article.tagList ?? [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          favorited: false,
          favoritesCount: 0,
          author: {
            username: loginBody.user.username,
            image: '',
            following: false
          }
        }
      })
    });

  });

  // Mở Editor
  await page.goto('https://conduit.bondaracademy.com/editor');

  // Kiểm tra đã vào được Editor
  await expect(page.getByPlaceholder('Article Title')).toBeVisible();

  // Nhập dữ liệu
  await page.getByPlaceholder('Article Title')
    .fill('Playwright Mock API');

  await page.getByPlaceholder("What's this article about?")
    .fill('Learn Mock API');

  await page.getByPlaceholder('Write your article (in markdown)')
    .fill('This article is created by mock API.');

  await page.getByPlaceholder('Enter tags')
    .fill('playwright');

  // Publish
  await page.getByRole('button', {
    name: 'Publish Article'
  }).click();

  // Verify
  await expect(page).toHaveURL(/mock-playwright/);

  await expect(page.getByRole('heading'))
    .toContainText('Playwright Mock API');

});