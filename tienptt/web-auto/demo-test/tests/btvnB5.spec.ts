import { test, expect } from '@playwright/test';

// // BTVN buổi 5
// Thực hiện các step và các bài kiểm tra sau:

// 1. Đi tới link: http://localhost:4200/auth/login
// 2. Lên kịch bản test verify cho các case màn hình Login. Gợi ý:

// - Trạng thái khởi tạo: email, password có placeholder, checkbox ko được chheck, btn login disable
// - Nhập đủ email, password hợp lệ
//   => Verify thông tin phản ánh đúng, btn Login được enable
// - Nhập thiếu email hoặc password
//   => Verify hiển thị msg yêu cầu nhập, btn Login disable
// - Nhập email sai định dạng
//   => Verify hiển thị msg thông báo email không hợp lệ, btn Login disable
// - Nhập password không hợp lệ
//   => Verìy hiển thị msg thông báo password không hợp lệ, btn Login disable
test.describe('Login Layout', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/auth/login');
  });

  test('TC01 - Check title', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Login' })
    ).toBeVisible();
  });
  // TC03 - Check Email Label & Placeholder
  test('TC02 - Check Email field', async ({ page }) => {
    await expect(page.getByText('Email address:')).toBeVisible();

    const email = page.getByPlaceholder('Email address');
    await expect(email).toBeVisible();
    await expect(email).toHaveAttribute('placeholder', 'Email address'
    );
  });

  // TC04 - Check Password Label & Placeholder
  test('TC03 - Check Password field', async ({ page }) => {
    await expect(page.getByText('Password:')).toBeVisible();

    const password = page.getByPlaceholder('Password');
    await expect(password).toBeVisible();
    await expect(password).toHaveAttribute('placeholder', 'Password');
  });

  // TC04 - Check Forgot Password Link
  test('TC05 - Check Forgot Password link', async ({ page }) => {
    await expect(page.getByText('Forgot Password?')).toBeVisible();
  });

  // TC05 - Check Remember me Checkbox
  test('TC06 - Check Remember me checkbox', async ({ page }) => {
    await expect(
      page.getByRole('checkbox')).toBeVisible();

    await expect(page.getByText('Remember me')).toBeVisible();
    const rememberMeCheckbox = page.getByRole('checkbox');
    await expect(rememberMeCheckbox).toBeVisible();
    await expect(rememberMeCheckbox).not.toBeChecked();
  });

  // TC06 - Check Login Button
  test('TC07 - Check LOG IN button', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'LOG IN' })).toBeVisible();
  });
  test('TC8- Check LOG IN button is disabled by default', async ({ page }) => {
    const loginButton = page.getByRole('button', { name: 'LOG IN' });
    await expect(loginButton).toBeDisabled();
  });
  // TC07 - Check Social Login Section
  test('TC09 - Check social login text', async ({ page }) => {
    await expect(
      page.getByText('or enter with:')
    ).toBeVisible();
  });

  // check click Forgot Password? di chuyển đến màn hình Forgot Password
  test('TC10 - Verify Forgot Password page', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Forgot Password?' });
    await expect(link).toBeVisible();
    await link.click();
    console.log(await page.url());
    //Lanh note: Chưa có assertion kiểm tra page derect đến đúng page chưa, e thêm vào nhé.
  });

  // check nhập password , k nhập email button login disable
  test('TC11 - Login button is disabled when only Password is entered', async ({ page }) => {
    const passwordInput = page.getByPlaceholder('Password');
    const loginButton = page.getByRole('button', { name: 'LOG IN' });

    await passwordInput.fill('123456');

    await expect(loginButton).toBeDisabled();
  });
  // check nhập email, ko nhập password button disable
  test('TC12 - Login button is disabled when only Email is entered', async ({ page }) => {
    //await page.goto('http://localhost:4200/auth/login');

    const emailInput = page.getByPlaceholder('Email address');
    const loginButton = page.getByRole('button', { name: 'LOG IN' });
    await emailInput.fill('tienptt@gmail.com');
    await expect(loginButton).toBeDisabled();
  });

  // check nhập email sai định dạng, show messge lỗi 
  test('TC13 - Show error message when email format is invalid', async ({ page }) => {
    // Nhập email sai định dạng
    await page.getByPlaceholder('Email address').fill('abc');

    // Nhập password hợp lệ
    await page.getByPlaceholder('Password').fill('123456');

    // Click nút LOG IN
    await page.getByRole('button', { name: 'LOG IN' }).click();

    // Kiểm tra thông báo lỗi
    await expect(
      page.getByText('Email should be the real one!')
    ).toBeVisible();
  });

  // check email,pass hợp lệ  button login enable, vào màn hình pw-test

  test('TC14 - Login success', async ({ page }) => {
    //await page.goto('http://localhost:4200/auth/login');

    await page.getByPlaceholder('Email address').fill('test@gmail.com');
    await page.getByPlaceholder('Password').fill('123456');

    const loginButton = page.getByRole('button', { name: 'LOG IN' });
    await expect(loginButton).toBeEnabled();

    await loginButton.click();

    await expect(page).toHaveURL(/iot-dashboard/);
    await expect(page.getByText('IOT Dashboard')).toBeVisible();
  });
  //check validate trường passowrd < 4 kí tự
  test('TC15- Password < 4 ki tu', async ({ page }) => {
    //await page.goto('http://localhost:4200/auth/login');

    await page.getByPlaceholder('Email address').fill('tienptt@gmail.com');
    await page.getByPlaceholder('Password').fill('123');

    const loginButton = page.getByRole('button', { name: 'LOG IN' });

    await expect(loginButton).toBeDisabled();
  });
  //check validate trường passowrd = 4 kí tự
  test('TC16- Password =4 kitu', async ({ page }) => {
    await page.goto('http://localhost:4200/auth/login');

    await page.getByPlaceholder('Email address').fill('test@gmail.com');
    await page.getByPlaceholder('Password').fill('1234');

    const loginButton = page.getByRole('button', { name: 'LOG IN' });

    await expect(loginButton).toBeEnabled();
  });
  //check validate trường passowrd = 50 kí tự
  test('TC17- Password =50 ki tu', async ({ page }) => {
    //await page.goto('http://localhost:4200/auth/login');
    const longPassword = 'a'.repeat(50);
    await page.getByPlaceholder('Email address').fill('test@gmail.com');
    await page.getByPlaceholder('Password').fill(longPassword);
    const loginButton = page.getByRole('button', { name: 'LOG IN' });

    await expect(loginButton).toBeEnabled();
  });
  //check validate trường passowrd >50  kí tự
  test('TC18- Password > 50 characters', async ({ page }) => {
    const emailInput = page.getByPlaceholder('Email address');
    const passwordInput = page.getByPlaceholder('Password');
    const loginButton = page.getByRole('button', { name: 'LOG IN' });

    await emailInput.fill('test@gmail.com');

    await passwordInput.fill('a'.repeat(51));

    const actualValue = await passwordInput.inputValue();
    expect(actualValue.length).toBeLessThanOrEqual(50);

    await expect(loginButton).toBeEnabled();
  });
});
