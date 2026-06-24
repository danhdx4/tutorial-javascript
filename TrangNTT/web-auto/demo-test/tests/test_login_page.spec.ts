// tests/login.spec.js
import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/auth/login');
  });

  test('Trạng thái khởi tạo', async ({ page }) => {
    const emailInput = page.locator('input[name="email"]');
    const passwordInput = page.locator('input[name="password"]');
    const checkbox = page.locator('input[type="checkbox"]');
    const loginBtn = page.locator('button[type="submit"]');

    await expect(emailInput).toHaveAttribute('placeholder', 'Email');
    await expect(passwordInput).toHaveAttribute('placeholder', 'Password');
    await expect(checkbox).not.toBeChecked();
    await expect(loginBtn).toBeDisabled();
  });

  test('Nhập đủ email, password hợp lệ', async ({ page }) => {
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="password"]', 'ValidPassword123');
    const loginBtn = page.locator('button[type="submit"]');
    await expect(loginBtn).toBeEnabled();
  });

  test('Nhập thiếu email hoặc password', async ({ page }) => {
    await page.fill('input[name="email"]', '');
    await page.fill('input[name="password"]', 'ValidPassword123');
    const loginBtn = page.locator('button[type="submit"]');
    await expect(page.locator('.error-msg')).toContainText('Vui lòng nhập email');
    await expect(loginBtn).toBeDisabled();
  });

  test('Nhập email sai định dạng', async ({ page }) => {
    await page.fill('input[name="email"]', 'invalid-email');
    await page.fill('input[name="password"]', 'ValidPassword123');
    const loginBtn = page.locator('button[type="submit"]');
    await expect(page.locator('.error-msg')).toContainText('Email không hợp lệ');
    await expect(loginBtn).toBeDisabled();
  });

  test('Nhập password không hợp lệ', async ({ page }) => {
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="password"]', '123'); // giả sử password phải >= 6 ký tự
    const loginBtn = page.locator('button[type="submit"]');
    await expect(page.locator('.error-msg')).toContainText('Password không hợp lệ');
    await expect(loginBtn).toBeDisabled();
  });
});
