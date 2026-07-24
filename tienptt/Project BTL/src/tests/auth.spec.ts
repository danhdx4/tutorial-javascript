import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/login.page';

test('authenticate', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Mở trang Login
    await loginPage.goto();

    // Đăng nhập
    await loginPage.login(
        'tienptt1998@gmail.com',
        '123456789'
    );

    // Chờ đăng nhập thành công
    await expect(page).toHaveURL('https://conduit.bondaracademy.com/');

    // Lưu trạng thái đăng nhập
    await page.context().storageState({
        path: 'playwright/.auth/user.json',
    });
});