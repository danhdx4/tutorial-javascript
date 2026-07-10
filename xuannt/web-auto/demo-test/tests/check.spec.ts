import { test, expect } from '@playwright/test';

test.describe('Login Page Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/auth/login');
  });

  //  1. Verify UI ban đầu

  test('Verify initial UI', async ({ page }) => {

    // Title + subtitle
    await expect(page.getByText('Login')).toBeVisible();
    await expect(page.getByText('Hello! Log in with your email.')).toBeVisible();

    // Input Email
    const emailInput = page.getByPlaceholder('Email address');
    await expect(emailInput).toBeVisible();

    // Input Password
    const passwordInput = page.getByPlaceholder('Password');
    await expect(passwordInput).toBeVisible();

    // Checkbox
    await expect(page.getByText('Remember me')).toBeVisible();

    // Button Login (disable ban đầu)
    const loginBtn = page.getByRole('button', { name: 'LOG IN' });
    await expect(loginBtn).toBeDisabled();

    // Button back (icon)
    await expect(page.locator('a').first()).toBeVisible();
  });

  //  2. Nhập đúng dữ liệu

  test('Valid email & password', async ({ page }) => {

    const emailInput = page.getByPlaceholder('Email address');
    const passwordInput = page.getByPlaceholder('Password');
    const loginBtn = page.getByRole('button', { name: 'LOG IN' });

    await emailInput.fill('xuannguyen2003ha@gmail.com');
    await passwordInput.fill('Xuan1234@');

    await expect(emailInput).toHaveValue('xuannguyen2003ha@gmail.com');
    await expect(passwordInput).toHaveValue('Xuan1234@');

    await expect(loginBtn).toBeEnabled();

    // Lanh note: Em nên thêm action click vào button Login và verify page direct tới nữa nha
  });

  //  3. Thiếu email

  test('Missing email', async ({ page }) => {

    const passwordInput = page.getByPlaceholder('Password');
    const loginBtn = page.getByRole('button', { name: 'LOG IN' });

    await passwordInput.fill('Xuan1234@');

    await expect(loginBtn).toBeDisabled();

    // ✅ Fix selector chính xác
    await expect(page.getByText('Email is required!')).toBeVisible();
  });

  //  4. Thiếu password

  test('Missing password', async ({ page }) => {

    const emailInput = page.getByPlaceholder('Email address');
    const loginBtn = page.getByRole('button', { name: 'LOG IN' });

    await emailInput.fill('xuannguyen2003ha@gmail.com');

    await expect(loginBtn).toBeDisabled();

    await expect(page.getByText('Password is required!')).toBeVisible();
  });

  //  5. Email sai định dạng

  test('Invalid email format', async ({ page }) => {

    const emailInput = page.getByPlaceholder('Email address');
    const passwordInput = page.getByPlaceholder('Password');
    const loginBtn = page.getByRole('button', { name: 'LOG IN' });

    await emailInput.fill('xuan123');
    await passwordInput.fill('Xuan1234@');

    await expect(loginBtn).toBeDisabled();

    await expect(page.getByText('Email should be the real one!')).toBeVisible();
  });

  //  6. Password không hợp lệ

  test('Invalid password', async ({ page }) => {

    const emailInput = page.getByPlaceholder('Email address');
    const passwordInput = page.getByPlaceholder('Password');
    const loginBtn = page.getByRole('button', { name: 'LOG IN' });

    await emailInput.fill('xuannguyen2003ha@gmail.com');
    await passwordInput.fill('123');

    await expect(loginBtn).toBeDisabled();

    await expect(page.getByText('Password should contain from 4 to 50 characters')).toBeVisible();
  });

});

