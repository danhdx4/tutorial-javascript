// Bài tập về nhà
// Viết bài test verify Basic form với các nội dung như sau:

// Đi tới link http://localhost:4200/
import { test, expect } from "@playwright/test";
const baseURL = "http://localhost:4200/";
test.beforeEach(async ({ page }) => {
  await page.goto(baseURL);
});

// Click vào btn Forms trên menu bar
// Click vào bnt Form Layouts trên menu bar
test("Verify Basic form", async ({ page }) => {
  const formsMenu = page.getByRole("link", { name: "Forms" });
  await formsMenu.click();
  const formLayoutsMenu = page.getByRole("link", { name: "Form Layouts" });
  await formLayoutsMenu.click();

  // Verify Basic form với các nội dung
  const basicFormCard = page
    .locator("nb-card")
    .filter({ hasText: "Basic form" });
  // Trường Email có placeholder là 'Email'
  const emailField = basicFormCard.getByLabel("Email address");
  await expect(emailField).toHaveAttribute("placeholder", "Email");
  // Trường Password có placeholder là 'Password'
  const passwordField = basicFormCard.getByLabel("Password");
  await expect(passwordField).toHaveAttribute("placeholder", "Password");
  // Button Submit có mã màu là rgb(255,61,113)
  const submitButton = basicFormCard.getByRole("button", { name: "SUBMIT" });
  await expect(submitButton).toHaveCSS("background-color", "rgb(255, 61, 113)");
  // Tiến hành filter thông tin Email và Password
  await emailField.fill("anhtp@example.com");
  await passwordField.fill("password123");
  // Verify text hiển thị trong trường email, password như thông tin đã nhập
  await expect(emailField).toHaveValue("anhtp@example.com");
  await expect(passwordField).toHaveValue("password123");
  // Click vào btn Submit
  await submitButton.click();
});
