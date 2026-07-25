import { test, expect } from "@playwright/test";
import { LoginPage } from "../page/login.page";

// Nhập đủ email, password hợp lệ
test("Nhập đủ email, password hợp lệ", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.fillEmail("abc@gmail.com");
  await loginPage.fillPassword("123456");

  await expect(loginPage.emailField).toHaveValue("abc@gmail.com");
  await expect(loginPage.passwordField).toHaveValue("123456");
  await expect(loginPage.loginButton).toBeEnabled()
});

// Nhập thiếu email hoặc password
test("Nhập thiếu email hoặc password", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.fillEmail("abc@gmail.com");
  await loginPage.fillPassword("");

  await page.locator('body').click()
  await expect(page.getByText('Password is required!')).toBeVisible()
  await expect(loginPage.loginButton).toBeDisabled()
});

// Nhập email sai định dạng
test("Nhập email sai định dạng", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.fillEmail("abc"); //email ko hợp lệ thiếu domain
//   await loginPage.fillEmail('@gmail.com') //email ko hợp lệ thiếu local part
//   await loginPage.fillEmail('abc@gmail') //email ko hợp lệ thiếu .com
//   await loginPage.fillEmail('abcgmail.com') //email ko hợp lệ thiếu @
//   await loginPage.fillEmail('abc@gmail@com') //email ko hợp lệ sai domain
  await page.locator('body').click()
  await expect(page.getByText('Email should be the real one!')).toBeVisible()
  await expect(loginPage.loginButton).toBeDisabled()
});

// Nhập password không hợp lệ
test("Nhập password không hợp lệ", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.fillEmail("abc@gmail.com");
  await loginPage.fillPassword("111"); 
   
  await page.locator('body').click()
  await expect(page.getByText('Password should contain from 4 to 50 characters')).toBeVisible()
  await expect(loginPage.loginButton).toBeDisabled()
});