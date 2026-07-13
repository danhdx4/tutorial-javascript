# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: working.with.api.spec.ts >> Mock Create Article
- Location: tests\working.with.api.spec.ts:3:5

# Error details

```
Error: Register failed: {"errors":{"username":["has already been taken"]}}

expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test('Mock Create Article', async ({ page, request }) => {
  4   |   const timestamp = Date.now();
  5   |   const email = `playwright-${timestamp}@example.com`;
  6   |   const password = 'Test123456!';
  7   |   const username = 'playwrightuser';
  8   | 
  9   |   // 1. Đăng ký tài khoản mới để tránh lỗi credentials cũ
  10  |   const registerResponse = await request.post(
  11  |     'https://conduit-api.bondaracademy.com/api/users',
  12  |     {
  13  |       data: {
  14  |         user: {
  15  |           username,
  16  |           email,
  17  |           password
  18  |         }
  19  |       }
  20  |     }
  21  |   );
  22  | 
  23  |   const registerText = await registerResponse.text();
  24  |   console.log('Register Status:', registerResponse.status());
  25  |   console.log('Register Response:', registerText);
  26  | 
> 27  |   expect(registerResponse.ok(), `Register failed: ${registerText}`).toBeTruthy();
      |                                                                     ^ Error: Register failed: {"errors":{"username":["has already been taken"]}}
  28  | 
  29  |   // 2. Login bằng tài khoản vừa tạo
  30  |   const loginResponse = await request.post(
  31  |     'https://conduit-api.bondaracademy.com/api/users/login',
  32  |     {
  33  |       data: {
  34  |         user: {
  35  |           email,
  36  |           password
  37  |         }
  38  |       }
  39  |     }
  40  |   );
  41  | 
  42  |   const loginText = await loginResponse.text();
  43  |   console.log('Login Status:', loginResponse.status());
  44  |   console.log('Login Response:', loginText);
  45  | 
  46  |   expect(loginResponse.ok(), `Login failed: ${loginText}`).toBeTruthy();
  47  | 
  48  |   const loginBody = JSON.parse(loginText);
  49  |   const token = loginBody.user.token;
  50  | 
  51  |   // 3. Set token vào localStorage trước khi mở page
  52  |   await page.addInitScript((tokenValue) => {
  53  |     window.localStorage.setItem('jwtToken', tokenValue);
  54  |   }, token);
  55  | 
  56  |   // 4. Mock auth user + create article
  57  |   await page.route('**/api/user', async (route) => {
  58  |     await route.fulfill({
  59  |       status: 200,
  60  |       contentType: 'application/json',
  61  |       body: JSON.stringify({
  62  |         user: {
  63  |           username,
  64  |           email,
  65  |           bio: null,
  66  |           image: '',
  67  |           following: false
  68  |         }
  69  |       })
  70  |     });
  71  |   });
  72  | 
  73  |   await page.route('**/api/articles', async (route) => {
  74  |     if (route.request().method() !== 'POST') {
  75  |       await route.continue();
  76  |       return;
  77  |     }
  78  | 
  79  |     const requestBody = route.request().postDataJSON();
  80  |     console.log('Request Body:', requestBody);
  81  | 
  82  |     await route.fulfill({
  83  |       status: 201,
  84  |       contentType: 'application/json',
  85  |       body: JSON.stringify({
  86  |         article: {
  87  |           slug: 'mock-playwright',
  88  |           title: requestBody.article.title,
  89  |           description: requestBody.article.description,
  90  |           body: requestBody.article.body,
  91  |           tagList: requestBody.article.tagList ?? [],
  92  |           createdAt: new Date().toISOString(),
  93  |           updatedAt: new Date().toISOString(),
  94  |           favorited: false,
  95  |           favoritesCount: 0,
  96  |           author: {
  97  |             username,
  98  |             image: '',
  99  |             following: false
  100 |           }
  101 |         }
  102 |       })
  103 |     });
  104 |   });
  105 | 
  106 |   // 5. Mở Editor
  107 |   await page.goto('https://conduit.bondaracademy.com/editor', {
  108 |     waitUntil: 'domcontentloaded'
  109 |   });
  110 | 
  111 |   // 6. Kiểm tra editor đã mở
  112 |   await expect(page.getByPlaceholder('Article Title')).toBeVisible({ timeout: 20000 });
  113 | 
  114 |   // 7. Nhập dữ liệu
  115 |   await page.getByPlaceholder('Article Title').fill('Playwright Mock API');
  116 |   await page.getByPlaceholder("What's this article about?").fill('Learn Mock API');
  117 |   await page.getByPlaceholder('Write your article (in markdown)').fill('This article is created by mock API.');
  118 |   await page.getByPlaceholder('Enter tags').fill('playwright');
  119 | 
  120 |   // 8. Publish
  121 |   await page.getByRole('button', { name: 'Publish Article' }).click();
  122 | 
  123 |   // 9. Verify
  124 |   await expect(page).toHaveURL(/mock-playwright/);
  125 |   await expect(page.getByRole('heading')).toContainText('Playwright Mock API');
  126 | });
```