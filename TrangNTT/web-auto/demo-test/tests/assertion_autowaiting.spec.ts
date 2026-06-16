// Viết bài test verify Basic form với các nội dung như sau:

// Đi tới link http://localhost:4200/
// Click vào btn Forms trên menu bar
// Click vào bnt Form Layouts trên menu bar
// Verify Basic form với các nội dung
// Trường Email có placeholder là 'Email'
// Trường Password có placeholder là 'Password'
// Button Submit có mã màu là rgb(255,61,113)
// Tiến hành filter thông tin Email và Password
// Verify text hiển thị trong trường email, password như thông tin đã nhập
// Click vào btn Submit

import { test, expect } from '@playwright/test';

test('Verify Basic Form', async ({ page }) => {

    // Đi tới trang
    await page.goto('http://localhost:4200');

    // Click Forms
    await page.getByText('Forms').click();

    // Click Form Layouts
    await page.getByText('Form Layouts').click();

    // Xác định Basic Form
    const basicForm = page.locator('nb-card', {
        has: page.locator('nb-card-header', { hasText: 'Basic form' })
    });
    console.log(await basicForm.innerText());

    // Verify placeholder Email
    const emailField = basicForm.getByPlaceholder('Email');
    await expect(emailField).toHaveAttribute('placeholder', 'Email');

    // Verify placeholder Password
    const passwordField = basicForm.getByPlaceholder('Password');
    await expect(passwordField).toHaveAttribute('placeholder', 'Password');

    // Verify màu button Submit
    const submitButton = basicForm.getByRole('button', { name: 'Submit' });

    await expect(submitButton).toHaveCSS(
        'background-color',
        'rgb(255, 61, 113)'
    );

    // Nhập Email và Password
    const email = 'test@gmail.com';
    const password = '123456';

    await emailField.fill(email);
    await passwordField.fill(password);

    // Verify dữ liệu đã nhập
    await expect(emailField).toHaveValue(email);
    await expect(passwordField).toHaveValue(password);

    // Click Submit
    await submitButton.click();
});