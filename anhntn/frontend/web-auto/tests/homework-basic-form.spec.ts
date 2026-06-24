/**## Bài tập về nhà

Viết bài test verify Basic form với các nội dung như sau:

1. Đi tới link http://localhost:4200/
2. Click vào btn Forms trên menu bar
3. Click vào bnt Form Layouts trên menu bar
4. Verify Basic form với các nội dung

- Trường Email có placeholder là 'Email'
- Trường Password có placeholder là 'Password'
- Button Submit có mã màu là rgb(255,61,113)

5. Tiến hành filter thông tin Email và Password
6. Verify text hiển thị trong trường email, password như thông tin đã nhập
7. Click vào btn Submit */
import { test, expect } from '@playwright/test';

test('Verify Basic form on Form Layouts page', async ({ page }) => {
  await page.goto('/');

  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();

  const basicFormCard = page.locator('nb-card', { hasText: 'Basic form' });
  const emailInput = basicFormCard.getByPlaceholder('Email');
  const passwordInput = basicFormCard.getByPlaceholder('Password');
  const submitButton = basicFormCard.getByRole('button', { name: 'Submit' });

  await expect(emailInput).toHaveAttribute('placeholder', 'Email');
  await expect(passwordInput).toHaveAttribute('placeholder', 'Password');
  await expect(submitButton).toHaveCSS('background-color', 'rgb(255, 61, 113)');

  const expectedEmail = 'test@example.com';
  const expectedPassword = 'Password123';

  await emailInput.fill(expectedEmail);
  await passwordInput.fill(expectedPassword);

  await expect(emailInput).toHaveValue(expectedEmail);
  await expect(passwordInput).toHaveValue(expectedPassword);

  await submitButton.click();
});
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