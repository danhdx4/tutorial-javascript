// Bài tập về nhà
// Viết bài test verify Basic form với các nội dung như sau:

// Đi tới link http://localhost:4200/
import { test, expect } from "@playwright/test";
const baseURL = "http://localhost:4200/";
test.beforeEach(async ({ page }) => {
  await page.goto(baseURL);
  const formsMenu = page.getByRole("link", { name: "Forms" });
  await formsMenu.click();
  const formLayoutsMenu = page.getByRole("link", { name: "Form Layouts" });
  await formLayoutsMenu.click();
});

// Click vào btn Forms trên menu bar
// Click vào bnt Form Layouts trên menu bar
test("Verify Basic form", async ({ page }) => {
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

test("Verify Inline form", async ({ page }) => {
  const inlineFormCard = page
    .locator("nb-card")
    .filter({ hasText: "Inline form" });
  // Text input
  const textInputInline = inlineFormCard.getByPlaceholder("Jane Doe");
  await textInputInline.fill("Tran Phuong Anh");
  await expect(textInputInline).toHaveValue("Tran Phuong Anh");
  // Email input
  const emailInputInline = inlineFormCard.getByPlaceholder("Email");
  await emailInputInline.fill("anhtp@example.com");
  await expect(emailInputInline).toHaveValue("anhtp@example.com");
  // Remember me checkbox
  const rememberMeCheckboxInline = inlineFormCard.getByLabel("Remember me");
  await rememberMeCheckboxInline.check({ force: true });
  // Submit Btn
  const submitButtonInline = inlineFormCard.getByRole("button", {
    name: "SUBMIT",
  });
  await submitButtonInline.click();
});

test("Verify Using the Grid", async ({ page }) => {
  const usingGridCard = page
    .locator("nb-card")
    .filter({ hasText: "Using the Grid" });
  // Email input
  const emailInputGrid = usingGridCard.getByLabel("Email");
  await emailInputGrid.fill("anhtp@example.com");
  await expect(emailInputGrid).toHaveValue("anhtp@example.com");
  // Password input
  const passwordInputGrid = usingGridCard.getByLabel("Password");
  await passwordInputGrid.fill("password123");
  await expect(passwordInputGrid).toHaveValue("password123");
  // Radio selection
  const radioOption1 = usingGridCard.getByLabel("Option 1");
  await radioOption1.check({ force: true });
  await expect(radioOption1).toBeChecked();
  // Sign in Btn
  const signInButtonGrid = usingGridCard.getByRole("button", {
    name: "Sign in",
  });
  await signInButtonGrid.click();
});

test("Verify Horizontal form", async ({ page }) => {
  const horizontalFormCard = page
    .locator("nb-card")
    .filter({ hasText: "Horizontal form" });
  // Email input
  const emailInputHorizontal = horizontalFormCard.getByLabel("Email");
  await emailInputHorizontal.fill("anhtp@example.com");
  await expect(emailInputHorizontal).toHaveValue("anhtp@example.com");
  // Password input
  const passwordInputHorizontal = horizontalFormCard.getByLabel("Password");
  await passwordInputHorizontal.fill("password123");
  await expect(passwordInputHorizontal).toHaveValue("password123");
  // Remember me checkbox
  const rememberMeCheckbox = horizontalFormCard.getByLabel("Remember me");
  await rememberMeCheckbox.check({ force: true });
  await expect(rememberMeCheckbox).toBeChecked();
  // Sign in Btn
  const signInButtonHorizontal = horizontalFormCard.getByRole("button", {
    name: "Sign in",
  });
  const buttonClass = await signInButtonHorizontal.getAttribute("class");
  await expect.soft(buttonClass).toContain("size-small");
  await signInButtonHorizontal.click();
});

test("Verify Block form", async ({ page }) => {
  const blockFormCard = page
    .locator("nb-card")
    .filter({ hasText: "Block form" });
  // Frist Name placeholder
  const firstNamePlaceholder = blockFormCard.getByPlaceholder("First Name");
  await expect(firstNamePlaceholder).toHaveAttribute(
    "placeholder",
    "First Name",
  );
  // Last Name placeholder
  const lastNamePlaceholder = blockFormCard.getByPlaceholder("Last Name");
  await expect(lastNamePlaceholder).toHaveAttribute("placeholder", "Last Name");
  const emailPlaceholder = blockFormCard.getByPlaceholder("Email");
  await expect(emailPlaceholder).toHaveAttribute("placeholder", "Email");
  const websitePlaceholder = blockFormCard.getByPlaceholder("Website");
  await expect(websitePlaceholder).toHaveAttribute("placeholder", "Website");
  // Submit Btn
  const submitButton = blockFormCard.getByRole("button", { name: "SUBMIT" });
  await expect.soft(submitButton).toHaveText("Submit");
  await submitButton.click();
});
