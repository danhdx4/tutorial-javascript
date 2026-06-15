// Vào page layout URL: http://localhost:4200/pages/forms/layouts

// Định vị các phần tử trong các form:

// Inline form
import test from "@playwright/test";
test("Locator for Inline form", async ({ page }) => {
  await page.goto("http://localhost:4200/pages/forms/layouts");
  const InputInline = page
    .locator("nb-card")
    .filter({ hasText: "Inline form" });
  //name
  const nameInputInline = InputInline.getByPlaceholder("Jane Doe");
  await nameInputInline.fill("QuynhNT");
  //mail
  const emailInputInline = InputInline.getByPlaceholder("Email");
  await emailInputInline.fill("quynhnguyenattt@gmail.com");
  //checkbox
  const rememberMeCheckbox = InputInline.getByRole("checkbox", {
    name: "Remember me",
  });
  await rememberMeCheckbox.check({ force: true });
  //butotn sign in
  const signInButton = InputInline.getByRole("button", { name: "SUBMIT" });
  await signInButton.click();
});
// Using thr Grid
test("Locator for Using the Grid", async ({ page }) => {
  await page.goto("http://localhost:4200/pages/forms/layouts");
  const InputGrid = page
    .locator("nb-card")
    .filter({ hasText: "Using the Grid" });
  //email
  const emailInputGrid = InputGrid.getByPlaceholder("Email");
  await emailInputGrid.fill("quynhnguyenattt@gmail.com");
  //password
  const passwordInputGird = InputGrid.getByPlaceholder("Password");
  await passwordInputGird.fill("123456");
  //radio button
  const radioButtonGrid = InputGrid.getByLabel("Option 2");
  await radioButtonGrid.check({ force: true });
  //button sign in
  const signinButtonGird = InputGrid.getByRole("button", { name: "SIGN IN" });
  await signinButtonGird.click();
});
// Basic form
test("Locator for Basic form", async ({ page }) => {
  await page.goto("http://localhost:4200/pages/forms/layouts");
  const InputBasic = page.locator("nb-card").filter({ hasText: "Basic form" });
  //email
  const emailInputBasic = InputBasic.getByPlaceholder("Email");
  await emailInputBasic.fill("quynhnguyenattt@gmail.com");
  //password
  const passwordInputBasic = InputBasic.getByPlaceholder("Password");
  await passwordInputBasic.fill("123456");
  //checkbox
  const checkMeCheckboxBasic = InputBasic.getByRole("checkbox", {
    name: "Check me out",
  });
  await checkMeCheckboxBasic.check({ force: true });
  //button submit
  const submitButtonBasic = InputBasic.getByRole("button", { name: "SUBMIT" });
  await submitButtonBasic.click();
});
// Form without lables
test("Locator for Form without lables", async ({ page }) => {
  await page.goto("http://localhost:4200/pages/forms/layouts");
  const InputFormWithoutLables = page
    .locator("nb-card")
    .filter({ hasText: "Form without labels" });
  //recipient
  const recipientInputFormWithoutLables =
    InputFormWithoutLables.getByPlaceholder("Recipients");
  await recipientInputFormWithoutLables.fill("Nguyen Quynh");
  //subject
  const subjectInputFormWithoutLables =
    InputFormWithoutLables.getByPlaceholder("Subject");
  await subjectInputFormWithoutLables.fill("hahahha");
  //message
  const messageInputFormWithoutLables =
    InputFormWithoutLables.getByPlaceholder("Message");
  await messageInputFormWithoutLables.fill("abc");
  //button send
  const sendButtonFormWithoutLables = InputFormWithoutLables.getByRole(
    "button",
    { name: "SEND" },
  );
  await sendButtonFormWithoutLables.click();
});
// Block form
test("Locator for Block form", async ({ page }) => {
  await page.goto("http://localhost:4200/pages/forms/layouts");
  const InputBlock = page.locator("nb-card").filter({ hasText: "Block form" });
  //first name
  const firstNameInputBlock = InputBlock.getByPlaceholder("First Name");
  await firstNameInputBlock.fill("Quynh");
  //last name
  const lastNameInputBlock = InputBlock.getByPlaceholder("Last Name");
  await lastNameInputBlock.fill("Nguyen");
  //email
  const emailInputBlock = InputBlock.getByPlaceholder("Email");
  await emailInputBlock.fill("quynhnguyenattt@gmail.com");
  //website
  const websiteInputBlock = InputBlock.getByPlaceholder("Website");
  await websiteInputBlock.fill("http://localhost:4200/pages/forms/layouts");
  //button submit
  const submitButtonBlock = InputBlock.getByRole("button", { name: "SUBMIT" });
  await submitButtonBlock.click();
});
// Horizontal form
test("Locator for Horizontal form", async ({ page }) => {
  await page.goto("http://localhost:4200/pages/forms/layouts");
  const InputHorizontal = page
    .locator("nb-card")
    .filter({ hasText: "Horizontal form" });
  //email
  const emailInputHorizontal = InputHorizontal.getByPlaceholder("Email");
  await emailInputHorizontal.fill("quynhnguyenattt@gmail.com");
  //password
  const passwordInputHorizontal = InputHorizontal.getByPlaceholder("Password");
  await passwordInputHorizontal.fill("123456");
  //checkbox
  const rememberMeCheckboxHorizontal = InputHorizontal.getByRole("checkbox", {
    name: "Remember me",
  });
  await rememberMeCheckboxHorizontal.check({ force: true });
  //button sign in
  const signInButtonHorizontal = InputHorizontal.getByRole("button", {
    name: "SIGN IN",
  });
  await signInButtonHorizontal.click();
});
