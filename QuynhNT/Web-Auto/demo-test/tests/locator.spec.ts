// Vào page layout URL: http://localhost:4200/pages/forms/layouts

// Định vị các phần tử trong các form:

// Inline form
import test from "@playwright/test";
test("Locator for Inline form", async ({ page }) => {
  await page.goto("http://localhost:4200/pages/forms/layouts");
  const nameInputInline = page
    .locator("nb-card")
    .filter({ hasText: "Inline form" })
    .getByPlaceholder("Jane Doe");
  await nameInputInline.fill("QuynhNT");
  const emailInputInline = page
    .locator("nb-card")
    .filter({ hasText: "Inline form" })
    .getByPlaceholder("Email");
  await emailInputInline.fill("quynhnguyenattt@gmail.com");
  const rememberMeCheckbox = page
    .locator("nb-card")
    .filter({ hasText: "Inline form" })
    .getByRole("checkbox", { name: "Remember me" });
  await rememberMeCheckbox.check({ force: true });
  const signInButton = page
    .locator("nb-card")
    .filter({ hasText: "Inline form" })
    .getByRole("button", { name: "SUBMIT" });
  await signInButton.click();
});
// Using thr Grid
test("Locator for Using the Grid", async ({ page }) => {
  await page.goto("http://localhost:4200/pages/forms/layouts");
  const emailInputGrid = page
    .locator("nb-card")
    .filter({ hasText: "Using the Grid" })
    .getByPlaceholder("Email");
  await emailInputGrid.fill("quynhnguyenattt@gmail.com");
  const passwordInputGird = page
    .locator("nb-card")
    .filter({ hasText: "Using the Grid" })
    .getByPlaceholder("Password");
  await passwordInputGird.fill("123456");
  const radioButtonGrid = page.locator("nb-card").getByLabel("Option 2");
  await radioButtonGrid.check({ force: true });
  const signinButtonGird = page
    .locator("nb-card")
    .filter({ hasText: "Using the Grid" })
    .getByRole("button", { name: "SIGN IN" });
  await signinButtonGird.click();
});
// Basic form
test("Locator for Basic form", async ({ page }) => {
  await page.goto("http://localhost:4200/pages/forms/layouts");
  const emailInputBasic = page
    .locator("nb-card")
    .filter({ hasText: "Basic form" })
    .getByPlaceholder("Email");
  await emailInputBasic.fill("quynhnguyenattt@gmail.com");
  const passwordInputBasic = page
    .locator("nb-card")
    .filter({ hasText: "Basic form" })
    .getByPlaceholder("Password");
  await passwordInputBasic.fill("123456");
  const checkMeCheckboxBasic = page
    .locator("nb-card")
    .filter({ hasText: "Basic form" })
    .getByRole("checkbox", { name: "Check me out" });
  await checkMeCheckboxBasic.check({ force: true });
  const submitButtonBasic = page
    .locator("nb-card")
    .filter({ hasText: "Basic form" })
    .getByRole("button", { name: "SUBMIT" });
  await submitButtonBasic.click();
});
// Form without lables
test("Locator for Form without lables", async ({ page }) => {
  await page.goto("http://localhost:4200/pages/forms/layouts");
  const recipientInputFormWithoutLables = page
    .locator("nb-card")
    .filter({ hasText: "Form without labels" })
    .getByPlaceholder("Recipients");
  await recipientInputFormWithoutLables.fill("Nguyen Quynh");
  const subjectInputFormWithoutLables = page
    .locator("nb-card")
    .filter({ hasText: "Form without labels" })
    .getByPlaceholder("Subject");
  await subjectInputFormWithoutLables.fill("hahahha");
  const messageInputFormWithoutLables = page
    .locator("nb-card")
    .filter({ hasText: "Form without labels" })
    .getByPlaceholder("Message");
  await messageInputFormWithoutLables.fill("abc");
  const sendButtonFormWithoutLables = page
    .locator("nb-card")
    .filter({ hasText: "Form without labels" })
    .getByRole("button", { name: "SEND" });
  await sendButtonFormWithoutLables.click();
});
// Block form
test("Locator for Block form", async ({ page }) => {
  await page.goto("http://localhost:4200/pages/forms/layouts");
  const firstNameInputBlock = page
    .locator("nb-card")
    .filter({ hasText: "Block form" })
    .getByPlaceholder("First Name");
  await firstNameInputBlock.fill("Quynh");
  const lastNameInputBlock = page
    .locator("nb-card")
    .filter({ hasText: "Block form" })
    .getByPlaceholder("Last Name");
  await lastNameInputBlock.fill("Nguyen");
  const emailInputBlock = page
    .locator("nb-card")
    .filter({ hasText: "Block form" })
    .getByPlaceholder("Email");
  await emailInputBlock.fill("quynhnguyenattt@gmail.com");
  const websiteInputBlock = page
    .locator("nb-card")
    .filter({ hasText: "Block form" })
    .getByPlaceholder("Website");
  await websiteInputBlock.fill("http://localhost:4200/pages/forms/layouts");
  const submitButtonBlock = page
    .locator("nb-card")
    .filter({ hasText: "Block form" })
    .getByRole("button", { name: "SUBMIT" });
  await submitButtonBlock.click();
});
// Horizontal form
test("Locator for Horizontal form", async ({ page }) => {
  await page.goto("http://localhost:4200/pages/forms/layouts");
  const emailInputHorizontal = page
    .locator("nb-card")
    .filter({ hasText: "Horizontal form" })
    .getByPlaceholder("Email");
  await emailInputHorizontal.fill("quynhnguyenattt@gmail.com");
  const passwordInputHorizontal = page
    .locator("nb-card")
    .filter({ hasText: "Horizontal form" })
    .getByPlaceholder("Password");
  await passwordInputHorizontal.fill("123456");
  const rememberMeCheckboxHorizontal = page
    .locator("nb-card")
    .filter({ hasText: "Horizontal form" })
    .getByRole("checkbox", { name: "Remember me" });
  await rememberMeCheckboxHorizontal.check({ force: true });
  const signInButtonHorizontal = page
    .locator("nb-card")
    .filter({ hasText: "Horizontal form" })
    .getByRole("button", { name: "SIGN IN" });
  await signInButtonHorizontal.click();
});
