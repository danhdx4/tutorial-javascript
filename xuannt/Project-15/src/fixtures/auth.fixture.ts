import { test as base, Page, APIRequestContext } from '@playwright/test';

type MyFixtures = {
  authenticatedUser: { email: string; token: string };
  authenticatedPage: Page;
  authenticatedRequest: APIRequestContext;
};

export const test = base.extend<MyFixtures>({
  // 1. Tạo 1 User duy nhất cho mỗi đợt chạy test và lấy Token
  authenticatedUser: async ({ request }, use) => {
    const randomId = Math.floor(100000 + Math.random() * 900000); // 6 số để không bị quá 20 ký tự
    const testUser = {
      username: `user_${randomId}`,
      email: `user_${randomId}@gmail.com`,
      password: 'Password123!'
    };

    const registerRes = await request.post('https://conduit-api.bondaracademy.com/api/users', {
      data: { user: testUser }
    });

    const regBody = await registerRes.json();
    const token = regBody.user?.token;

    if (!token) {
      throw new Error(`Đăng ký tài khoản thất bại: ${JSON.stringify(regBody)}`);
    }

    await use({ email: testUser.email, token });
  },

  // 2. Tái sử dụng Token của chính User trên cho API Context
  authenticatedRequest: async ({ authenticatedUser }, use) => {
    const authContext = await base.request.newContext({
      extraHTTPHeaders: {
        'Authorization': `Token ${authenticatedUser.token}`
      }
    });

    await use(authContext);
  },

  // 3. Tái sử dụng Token của chính User trên cho Browser UI Page
  authenticatedPage: async ({ page, authenticatedUser }, use) => {
    // Mở trang trước để khởi tạo LocalStorage domain
    await page.goto('https://conduit.bondaracademy.com/');

    // Gán đúng Token của chính User đã tạo vào LocalStorage
    await page.evaluate((jwt) => {
      window.localStorage.setItem('jwtToken', jwt);
      window.localStorage.setItem('idToken', jwt);
    }, authenticatedUser.token);

    await page.reload({ waitUntil: 'networkidle' });

    await use(page);
  }
});

export { expect } from '@playwright/test';