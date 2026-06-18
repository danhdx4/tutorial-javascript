/**## Bài tập về nhà

Thực hiện các step và các bài kiểm tra sau:

1. Đi tới link: http://localhost:4200/auth/login
2. Lên kịch bản test verify cho các case màn hình Login. Gợi ý:

- Trạng thái khởi tạo: email, password có placeholder, checkbox ko được chheck, btn login disable
- Nhập đủ email, password hợp lệ
  => Verify thông tin phản ánh đúng, btn Login được enable
- Nhập thiếu email hoặc password
  => Verify hiển thị msg yêu cầu nhập, btn Login disable
- Nhập email sai định dạng
  => Verify hiển thị msg thông báo email không hợp lệ, btn Login disable
- Nhập password không hợp lệ
  => Verìy hiển thị msg thông báo password không hợp lệ, btn Login disable */




import { test, expect } from '@playwright/test';

test.describe('Login screen verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/auth/login');
  });

  test('should show initial login page state', async ({ page }) => {
    const emailInput = page.getByPlaceholder('Email address');
    const passwordInput = page.getByPlaceholder('Password');
    const loginButton = page.getByRole('button', { name: 'Log In' });
    const rememberCheckbox = page.locator('nb-checkbox', { hasText: 'Remember me' }).locator('input[type="checkbox"]');

    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(loginButton).toBeDisabled();
    await expect(rememberCheckbox).not.toBeChecked();
  });

  test('should enable login button when email and password are valid', async ({ page }) => {
    const emailInput = page.getByPlaceholder('Email address');
    const passwordInput = page.getByPlaceholder('Password');
    const loginButton = page.getByRole('button', { name: 'Log In' });

    await emailInput.fill('test@example.com');
    await passwordInput.fill('Password123');

    await expect(emailInput).toHaveValue('test@example.com');
    await expect(passwordInput).toHaveValue('Password123');
    await expect(loginButton).toBeEnabled();
  });

  test('should show required field messages and keep login button disabled when fields are empty', async ({ page }) => {
    const emailInput = page.getByPlaceholder('Email address');
    const passwordInput = page.getByPlaceholder('Password');
    const loginButton = page.getByRole('button', { name: 'Log In' });

    await emailInput.click();
    await passwordInput.click();
    await emailInput.click();

    await expect(page.getByText('Email is required!')).toBeVisible();
    await expect(page.getByText('Password is required!')).toBeVisible();
    await expect(loginButton).toBeDisabled();
  });

  test('should keep login disabled when email and password are empty and login is clicked', async ({ page }) => {
    const loginButton = page.getByRole('button', { name: 'Log In' });

    await expect(loginButton).toBeDisabled();
    await expect(loginButton).toHaveAttribute('disabled', '');
    await expect(page).toHaveURL(/\/auth\/login$/);
  });

  test('should show invalid email message when email format is wrong', async ({ page }) => {
    const emailInput = page.getByPlaceholder('Email address');
    const passwordInput = page.getByPlaceholder('Password');
    const loginButton = page.getByRole('button', { name: 'Log In' });

    await emailInput.fill('invalid-email');
    await passwordInput.click();

    await expect(page.getByText('Email should be the real one!')).toBeVisible();
    await expect(loginButton).toBeDisabled();
  });

  test('should show invalid password message when password is too short', async ({ page }) => {
    const emailInput = page.getByPlaceholder('Email address');
    const passwordInput = page.getByPlaceholder('Password');
    const loginButton = page.getByRole('button', { name: 'Log In' });

    await emailInput.fill('test@example.com');
    await passwordInput.fill('pas');
    await emailInput.click();

    await expect(page.getByText('Password should contain')).toBeVisible();
    await expect(loginButton).toBeDisabled();
  });
});
