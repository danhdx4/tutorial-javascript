# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: working.with.api.spec.ts >> Mock Create Article
- Location: tests\working.with.api.spec.ts:3:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test('Mock Create Article', async ({ page, request }) => {
  4   | 
  5   |   // Login bằng API
  6   |   const loginResponse = await request.post(
  7   |     'https://conduit-api.bondaracademy.com/api/users/login',
  8   |     {
  9   |       data: {
  10  |         user: {
  11  |           email: 'lanh@zensho.com',
  12  |           password: '123456789'
  13  |         }
  14  |       }
  15  |     }
  16  |   );
  17  | 
  18  |   // In thông tin response để debug
  19  |   console.log('Login Status:', loginResponse.status());
  20  | 
  21  |   const responseText = await loginResponse.text();
  22  |   console.log('Login Response:', responseText);
  23  | 
  24  |   // Nếu login thất bại thì dừng test ngay
> 25  |   expect(loginResponse.ok()).toBeTruthy();
      |                              ^ Error: expect(received).toBeTruthy()
  26  | 
  27  |   // Parse response
  28  |   const loginBody = JSON.parse(responseText);
  29  |   const token = loginBody.user.token;
  30  | 
  31  |   // Lưu token trước khi mở website
  32  |   await page.addInitScript((token) => {
  33  |     localStorage.setItem('jwtToken', token);
  34  |   }, token);
  35  | 
  36  |   // Mock Create Article
  37  |   await page.route('**/api/articles', async (route) => {
  38  | 
  39  |     if (route.request().method() !== 'POST') {
  40  |       await route.continue();
  41  |       return;
  42  |     }
  43  | 
  44  |     const requestBody = route.request().postDataJSON();
  45  | 
  46  |     console.log('Request Body:', requestBody);
  47  | 
  48  |     await route.fulfill({
  49  |       status: 201,
  50  |       contentType: 'application/json',
  51  |       body: JSON.stringify({
  52  |         article: {
  53  |           slug: 'mock-playwright',
  54  |           title: requestBody.article.title,
  55  |           description: requestBody.article.description,
  56  |           body: requestBody.article.body,
  57  |           tagList: requestBody.article.tagList ?? [],
  58  |           createdAt: new Date().toISOString(),
  59  |           updatedAt: new Date().toISOString(),
  60  |           favorited: false,
  61  |           favoritesCount: 0,
  62  |           author: {
  63  |             username: loginBody.user.username,
  64  |             image: '',
  65  |             following: false
  66  |           }
  67  |         }
  68  |       })
  69  |     });
  70  | 
  71  |   });
  72  | 
  73  |   // Mở Editor
  74  |   await page.goto('https://conduit.bondaracademy.com/editor');
  75  | 
  76  |   // Kiểm tra đã vào được Editor
  77  |   await expect(page.getByPlaceholder('Article Title')).toBeVisible();
  78  | 
  79  |   // Nhập dữ liệu
  80  |   await page.getByPlaceholder('Article Title')
  81  |     .fill('Playwright Mock API');
  82  | 
  83  |   await page.getByPlaceholder("What's this article about?")
  84  |     .fill('Learn Mock API');
  85  | 
  86  |   await page.getByPlaceholder('Write your article (in markdown)')
  87  |     .fill('This article is created by mock API.');
  88  | 
  89  |   await page.getByPlaceholder('Enter tags')
  90  |     .fill('playwright');
  91  | 
  92  |   // Publish
  93  |   await page.getByRole('button', {
  94  |     name: 'Publish Article'
  95  |   }).click();
  96  | 
  97  |   // Verify
  98  |   await expect(page).toHaveURL(/mock-playwright/);
  99  | 
  100 |   await expect(page.getByRole('heading'))
  101 |     .toContainText('Playwright Mock API');
  102 | 
  103 | });
```