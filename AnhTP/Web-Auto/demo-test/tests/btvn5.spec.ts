// Thực hiện các step và các bài kiểm tra sau:
import { test, expect } from "@playwright/test";

// 1. Đi tới link: http://localhost:4200/auth/login
test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/auth/login");
});

// 2. Lên kịch bản test verify cho các case màn hình Login. Gợi ý:

// - Trạng thái khởi tạo: email, password có placeholder, checkbox ko được chheck, btn login disable
test("verify login initial state", async ({ page }) => {
  const emailInput = page.getByPlaceholder("Email");
  const passwordInput = page.getByPlaceholder("Password");
  const rememberMeCheckbox = page.getByRole("checkbox", {
    name: "Remember me",
  });
  const loginButton = page.getByRole("button", { name: "LOG IN" });

  const placeholderValue = await emailInput.getAttribute("placeholder");
  console.log(placeholderValue);
  expect(placeholderValue).toEqual("Email address");

  const passwordPlaceholderValue =
    await passwordInput.getAttribute("placeholder");
  console.log(passwordPlaceholderValue);
  expect(passwordPlaceholderValue).toEqual("Password");

  await expect(emailInput).toBeVisible();
  await expect(passwordInput).toBeVisible();
  await expect(rememberMeCheckbox).not.toBeChecked();
  await expect(loginButton).toBeDisabled();
});

// - Nhập đủ email, password hợp lệ
//   => Verify thông tin phản ánh đúng, btn Login được enable
test("verify login with valid email and password", async ({ page }) => {
  const emailInput = page.getByPlaceholder("Email");
  const passwordInput = page.getByPlaceholder("Password");
  const loginButton = page.getByRole("button", { name: "LOG IN" });

  await emailInput.fill("anhtp@example.com");
  await passwordInput.fill("Password123");
  expect(await emailInput.inputValue()).toEqual("anhtp@example.com");
  expect(await passwordInput.inputValue()).toEqual("Password123");
  await expect(loginButton).toBeEnabled();

  await loginButton.click();
  //await expect(page).toHaveURL("http://localhost:4200/dashboard");
});

// - Nhập thiếu email hoặc password
//   => Verify hiển thị msg yêu cầu nhập, btn Login disable
test("verify login with missing email", async ({ page }) => {
  const emailInput = page.getByPlaceholder("Email");
  const passwordInput = page.getByPlaceholder("Password");
  const loginButton = page.getByRole("button", { name: "LOG IN" });

  await emailInput.fill("");
  await passwordInput.fill("Password123");
  expect(await emailInput.inputValue()).toEqual("");
  expect(await passwordInput.inputValue()).toEqual("Password123");
  await expect(loginButton).toBeDisabled();
});

test("verify login with missing password", async ({ page }) => {
  const emailInput = page.getByPlaceholder("Email");
  const passwordInput = page.getByPlaceholder("Password");
  const loginButton = page.getByRole("button", { name: "LOG IN" });

  await emailInput.fill("anhtp@example.com");
  await passwordInput.fill("");
  expect(await emailInput.inputValue()).toEqual("anhtp@example.com");
  expect(await passwordInput.inputValue()).toEqual("");
  await expect(loginButton).toBeDisabled();
});

// - Nhập email sai định dạng
//   => Verify hiển thị msg thông báo email không hợp lệ, btn Login disable
test("verify login with invalid email format", async ({ page }) => {
  const emailInput = page.getByPlaceholder("Email");
  const msgInvalidEmail = page.locator(
    "#input-email + p.caption.status-danger",
  ); // locator p.caption.status-danger có sibling là #input-email
  const passwordInput = page.getByPlaceholder("Password");
  const loginButton = page.getByRole("button", { name: "LOG IN" });

  await emailInput.fill("anhtp");
  await passwordInput.fill("Password123");
  expect(await emailInput.inputValue()).toEqual("anhtp");
  expect(await passwordInput.inputValue()).toEqual("Password123");
  await expect(msgInvalidEmail).toBeVisible();
  console.log(await msgInvalidEmail.textContent());
  // await expect.any(msgInvalidEmail).toHaveText("Email should be the real one!");
  await expect(loginButton).toBeDisabled();
});

// - Nhập password không hợp lệ
//   => Verify hiển thị msg thông báo password không hợp lệ, btn Login disable
test("verify login with invalid password", async ({ page }) => {
  const emailInput = page.getByPlaceholder("Email");
  const passwordInput = page.getByPlaceholder("Password");
  const msgInvalidPassword = page.locator(
    ".form-control-group:has(#input-password) p.caption.status-danger",
  ); // locator cha là .form-control-group có chứa #input-password, sau đó tìm p.caption.status-danger bên trong locator cha đó
  const loginButton = page.getByRole("button", { name: "LOG IN" });

  await emailInput.fill("anhtp@example.com");
  await passwordInput.fill("123");
  await passwordInput.blur(); // blur() là hàm mất focus khỏi input, thường được dùng để trigger validation khi người dùng nhập xong mà không click vào button
  expect(await emailInput.inputValue()).toEqual("anhtp@example.com");
  expect(await passwordInput.inputValue()).toEqual("123");
  await expect(msgInvalidPassword).toBeVisible();
  console.log(await msgInvalidPassword.textContent());
  await expect(loginButton).toBeDisabled();
});
