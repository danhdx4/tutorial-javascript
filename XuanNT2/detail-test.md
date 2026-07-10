Install
- Giải thích ý nghĩa các file, thư mục:
  - Folder node-modules --> thư mục chứa toàn bộ các thư viện (packages) mà dự án cần sử dụng.
  - Folder tests --> Đây là nơi chứa các file test chính của dự án.
  - Folder test-examples  -->Thư mục này chứa các ví dụ mẫu do Playwright tạo sẵn.
    (Mục đích: Hướng dẫn cách viết test. Minh họa các tính năng của Playwright.
    Sau khi đã quen với Playwright, bạn có thể: Xóa thư mục này. Hoặc giữ lại để tham khảo.)
  - File git-ignore  -->Đây là file quy định những file/thư mục Git sẽ bỏ qua.
  - File package.json
  - File package-lock.json
  - File playwright.config.ts  -->Đây là file cấu hình trung tâm của Playwright.

@playwright/test
1. test() --> Định nghĩa một test case
  test('login successfully', async ({ page }) => {
    // test logic
  });

2. expect() --> Assertion API (xác nhận API)
  await expect(page.locator('h1')).toContainText('Welcome');
  await expect(page).toHaveURL(/dashboard/);
  await expect(button).toBeVisible();

3. Fixtures --> Fixture phổ biến nhất là page
  test('example', async ({ page }) => {
    await page.goto('/');
  });
  Ngoài ra còn có:
    test('api test', async ({ request }) => {
      const response = await request.get('/users');
    });
  Các fixture thường dùng:
    page	Tab trình duyệt
    browser	Browser instance
    context	Browser context
    request	API testing
    browserName	Tên browser hiện tại
  3.1 Locators: Playwright khuyến nghị dùng locator thay vì CSS selector trực tiếp.
    3.1.1: Theo role
      page.getByRole('button', {
        name: 'Submit'
      });
    3.1.2: Theo text
      page.getByText('Login');
    3.1.3: Theo label
      page.getByLabel('Email');
    3.1.4: Theo placeholder
      page.getByPlaceholder('Enter email');
    3.1.5: Theo test id
      page.getByTestId('submit-btn');
    Ví dụ:
      await page
        .getByRole('button', { name: 'Login' })
        .click();
  3.2 Auto Waiting: Một điểm mạnh của Playwright là tự động chờ phần tử sẵn sàng:
    await page.getByRole('button').click();
    Playwright sẽ tự đợi:
      Element xuất hiện
      Visible
      Enabled
      Stable
    Thông thường không cần:
      await page.waitForTimeout(5000);
  3.3 Cấu hình
    import { defineConfig } from '@playwright/test';
    export default defineConfig({
      testDir: './tests',
      use: {
        baseURL: 'https://myapp.com',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
      }
    });
    Sử dụng:
      await page.goto('/login'); --? Playwright tự ghép với baseURL.
      Chạy nhiều browser
        projects: [
          {
            name: 'chromium',
            use: { browserName: 'chromium' },
          },
          {
            name: 'firefox',
            use: { browserName: 'firefox' },
          },
          {
            name: 'webkit',
            use: { browserName: 'webkit' },
          },
        ]
      Chạy riêng:
        npx playwright test --project=chromium
  3.4 Mock API
    await page.route('**/api/users', async route => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify([
          { id: 1, name: 'John' }
        ])
      });
    });
  3.5 API Testing
    Không cần browser
      import { test, expect } from '@playwright/test';
      test('get users', async ({ request }) => {
        const response = await request.get(
          'https://api.example.com/users'
        );
        expect(response.ok()).toBeTruthy();
      });
  3.6 Parallel Testing
    Không cần browser:
      import { test, expect } from '@playwright/test';
      test('get users', async ({ request }) => {
        const response = await request.get(
          'https://api.example.com/users'
        );
        expect(response.ok()).toBeTruthy();
      });
  3.7 Parallel Testing
    Mặc định Playwright chạy song song:
      export default defineConfig({
        workers: 4
      });
  3.8 Hooks
    test.beforeEach(async ({ page }) => {
      await page.goto('/login');
    });
    test.afterEach(async ({ page }) => {
      // cleanup
    });