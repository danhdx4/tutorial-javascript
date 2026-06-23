import { test, expect } from '@playwright/test';

// ## Bài tập về nhà
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

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/auth/login')
})

// 2. Lên kịch bản test verify cho các case màn hình Login
test("Verify start: email, password, checkbox", async ({ page }) => {
  const loginForm = page.locator('nb-card').filter({hasText: 'Login'});

  const inputEmail = loginForm.getByRole('textbox', {name: 'Email address'});
  const inputEmailPlaceholder = await inputEmail.getAttribute('placeholder');
  expect(inputEmailPlaceholder).toEqual('Email address');

  const inputPwd = loginForm.getByRole('textbox', {name: 'Password'});
  const inputPwdPlaceholder = await inputPwd.getAttribute('placeholder');
  expect(inputPwdPlaceholder).toEqual('Password');

  const checkbox = loginForm.getByRole('checkbox', {name: 'Remember me'});
  await expect(checkbox).not.toBeChecked();

  const loginBtn = loginForm.getByRole('button', {name: 'LOG IN'});
  await expect(loginBtn).toHaveAttribute('aria-disabled', 'true');
  // hoặc buttondisable, Playwright có matcher chuyên dụng: await expect(loginBtn).toBeDisabled();
});

// - Nhập đủ email, password hợp lệ
//   => Verify thông tin phản ánh đúng, btn Login được enable
test("Verify input: email, password, login button", async ({ page }) => {
  const loginForm = page.locator('nb-card').filter({hasText: 'Login'});

  const inputEmail = loginForm.getByRole('textbox', {name: 'Email address'});
  await inputEmail.pressSequentially('xuannt2.test@gmail.com', {delay: 150});
  const inputEmailValue = await inputEmail.inputValue();
  expect(inputEmailValue).toEqual('xuannt2.test@gmail.com');

  const inputPwd = loginForm.getByRole('textbox', {name: 'Password'});
  await inputPwd.pressSequentially('123456', {delay: 100});
  const inputPwdValue = await inputPwd.inputValue();
  expect(inputPwdValue).toEqual('123456');

  const loginBtn = loginForm.getByRole('button', {name: 'LOG IN'});
  await expect(loginBtn).toHaveAttribute('aria-disabled', 'false');
  // hoặc await expect(loginBtn).toBeEnabled();
});

// - Nhập thiếu email hoặc password
//   => Verify hiển thị msg yêu cầu nhập, btn Login disable
test("Verify input 2: email, password, login button", async ({ page }) => {
  const loginForm = page.locator('nb-card').filter({hasText: 'Login'});

  const inputEmail = loginForm.getByRole('textbox', {name: 'Email address'});
  await inputEmail.pressSequentially('xuannt2.test@gmail.com', {delay: 150});
  const inputEmailValue = await inputEmail.inputValue();
  expect(inputEmailValue).toEqual('xuannt2.test@gmail.com');
  // empty email
  // await inputEmail.pressSequentially('', {delay: 150});
  // const inputEmailValue = await inputEmail.inputValue();
  // expect(inputEmailValue).toEqual('');

  const inputPwd = loginForm.getByRole('textbox', {name: 'Password'});
  // await inputPwd.pressSequentially('123456', {delay: 100});
  // const inputPwdValue = await inputPwd.inputValue();
  // expect(inputPwdValue).toEqual('123456');
  // empty pwd
  await inputPwd.pressSequentially('', {delay: 100});
  const inputPwdValue = await inputPwd.inputValue();
  expect(inputPwdValue).toEqual('');

  const loginBtn = loginForm.getByRole('button', {name: 'LOG IN'});
  await expect(loginBtn).toHaveAttribute('aria-disabled', 'true');
  // hoặc await expect(loginBtn).toBeDisabled();
});

// - Nhập email sai định dạng
//   => Verify hiển thị msg thông báo email không hợp lệ, btn Login disable
test("Verify input email, password incorrect formatting", async ({ page }) => {
  const loginForm = page.locator('nb-card').filter({hasText: 'Login'});

  const inputEmail = loginForm.getByRole('textbox', {name: 'Email address'});
  await inputEmail.pressSequentially('xuannt2.test', {delay: 150});
  await page.locator('body').click();
  const inputEmailValue = await inputEmail.inputValue();
  expect(inputEmailValue).toEqual('xuannt2.test');

  const inputPwd = loginForm.getByRole('textbox', {name: 'Password'});
  await inputPwd.pressSequentially('123456', {delay: 100});
  const inputPwdValue = await inputPwd.inputValue();
  expect(inputPwdValue).toEqual('123456');

  // show message
  const msg = page.locator('.caption.status-danger');
  await expect(msg).toBeVisible();
  await expect(msg).toHaveText('Email should be the real one!');

  const loginBtn = loginForm.getByRole('button', {name: 'LOG IN'});
  await expect(loginBtn).toHaveAttribute('aria-disabled', 'true');
  // hoặc await expect(loginBtn).toBeDisabled();
});

// - Nhập password không hợp lệ
//   => Verìy hiển thị msg thông báo password không hợp lệ, btn Login disable
test("Verify input email, password invalid", async ({ page }) => {
  const loginForm = page.locator('nb-card').filter({hasText: 'Login'});

  const inputEmail = loginForm.getByRole('textbox', {name: 'Email address'});
  await inputEmail.pressSequentially('xuannt2.test@gmail.com', {delay: 150});
  const inputEmailValue = await inputEmail.inputValue();
  expect(inputEmailValue).toEqual('xuannt2.test@gmail.com');

  const inputPwd = loginForm.getByRole('textbox', {name: 'Password'});
  await inputPwd.pressSequentially('123', {delay: 100});
  await page.locator('body').click();
  const inputPwdValue = await inputPwd.inputValue();
  expect(inputPwdValue).toEqual('123');

  // show message
  const msg = page.locator('p.caption.status-danger');
  await expect(msg).toBeVisible();
  await expect(msg).toHaveText('Password should contain from 4 to 50 characters');

  const loginBtn = loginForm.getByRole('button', {name: 'LOG IN'});
  await expect(loginBtn).toHaveAttribute('aria-disabled', 'true');
  // hoặc await expect(loginBtn).toBeDisabled();
});