import { test, expect } from '@playwright/test';

test('Mock Create Article', async ({ page, request }) => {
  const timestamp = Date.now();
  const randomSuffix = Math.floor(Math.random() * 100000);
  const email = `playwright-${timestamp}-${randomSuffix}@example.com`;
  const password = 'Test123456!';
  const username = `playwrightuser${timestamp}${randomSuffix}`;

  // 1. Đăng ký tài khoản mới để tránh lỗi credentials cũ
  const registerResponse = await request.post(
    'https://conduit-api.bondaracademy.com/api/users',
    {
      data: {
        user: {
          username,
          email,
          password
        }
      }
    }
  );

  const registerText = await registerResponse.text();
  console.log('Register Status:', registerResponse.status());
  console.log('Register Response:', registerText);

  expect(registerResponse.ok(), `Register failed: ${registerText}`).toBeTruthy();

  // 2. Login bằng tài khoản vừa tạo
  const loginResponse = await request.post(
    'https://conduit-api.bondaracademy.com/api/users/login',
    {
      data: {
        user: {
          email,
          password
        }
      }
    }
  );

  const loginText = await loginResponse.text();
  console.log('Login Status:', loginResponse.status());
  console.log('Login Response:', loginText);

  expect(loginResponse.ok(), `Login failed: ${loginText}`).toBeTruthy();

  const loginBody = JSON.parse(loginText);
  const token = loginBody.user.token;

  // 3. Set token vào localStorage trước khi mở page
  await page.addInitScript((tokenValue) => {
    window.localStorage.setItem('jwtToken', tokenValue);
  }, token);

  // 4. Mock auth user + create article
  await page.route('**/api/user', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        user: {
          username,
          email,
          bio: null,
          image: '',
          following: false
        }
      })
    });
  });

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
            username,
            image: '',
            following: false
          }
        }
      })
    });
  });

  // 5. Mở Editor
  await page.goto('https://conduit.bondaracademy.com/editor', {
    waitUntil: 'domcontentloaded'
  });

  // 6. Kiểm tra editor đã mở
  await expect(page.getByPlaceholder('Article Title')).toBeVisible({ timeout: 20000 });

  // 7. Nhập dữ liệu
  await page.getByPlaceholder('Article Title').fill('Playwright Mock API');
  await page.getByPlaceholder("What's this article about?").fill('Learn Mock API');
  await page.getByPlaceholder('Write your article (in markdown)').fill('This article is created by mock API.');
  await page.getByPlaceholder('Enter tags').fill('playwright');

  // 8. Publish
  await page.getByRole('button', { name: 'Publish Article' }).click();

  // 9. Verify
  await expect(page).toHaveURL(/mock-playwright/);
  await expect(page.getByRole('heading')).toContainText('Playwright Mock API');
});