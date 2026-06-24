import test from "@playwright/test";
const baseURL = "http://localhost:4200/pages/forms/layouts";

test("Common Locators", async ({ page }) => {
  // goto http://localhost:4200/pages/forms/layouts
  await page.goto(baseURL);
  // by Tag name nb-card
  page.locator("nb-card");
  // by ID id="inputEmail1"
  page.locator("#inputEmail1");
  // by Class value .shape-rectangle
  page.locator(".shape-rectangle");
  // by XPath //*[@id="inputEmail1"]
  page.locator('//*[@id="inputEmail1"]');
});

test("Built-in Locators", async ({ page }) => {
  // goto http://localhost:4200/pages/forms/layouts
  await page.goto(baseURL);
  // getByRole() button/SEND
  page.getByRole("button", { name: "SEND" });
  //   page.getByRole("button"); lấy ra tất cả button
  //   page.getByRole("button").nth(0); // lấy ra button đầu tiên
  //   page.getByRole("button").nth(1); // lấy ra button thứ 2
  //   page.getByRole("button", { name: "SEND" }).nth(2); // lấy ra button thứ 3 có name là SEND
  // - getByText() IoT Dashboard
  page.getByText("IoT Dashboard");
  // - getByLabel() Email
  page.getByLabel("Email");
  // - getByPlaceholder() First Name
  page.getByPlaceholder("First Name"); // lấy ra input có placeholder là First Name
  page.getByPlaceholder("First Name").nth(0); // lấy ra input có placeholder là First Name đầu tiên
  // - getByAltText() Angular Logo
  page.getByAltText("Angular Logo"); // lấy ra img có alt text là Angular Logo
});

test("Filter & Chaining locators", async ({ page }) => {
  // goto http://localhost:4200/pages/forms/layouts
  await page.goto(baseURL);
  //filter
  page.locator("nb-card").filter({ hasText: "Using the Grid" }); // lọc ra nb-card có text là Using the Grid
  //chaining nb-card/button
  page
    .locator("nb-card")
    .filter({ hasText: "Using the Grid" })
    .getByRole("button", { name: "Sign in" }); // lọc ra nb-card có text là Using the Grid rồi lấy ra button có name là Sign in trong nb-card đó
});

test("Locator for Using the Grid", async ({ page }) => {
  // goto http://localhost:4200/pages/forms/layouts
  await page.goto(baseURL);
  const usingTheGridCard = page
    .locator("nb-card")
    .filter({ hasText: "Using the Grid" }); // lọc ra nb-card có text là Using the Grid rồi gán vào biến usingTheGridCard
  // Email
  const emailInput = usingTheGridCard.getByLabel("Email");
  await emailInput.fill("AnhTP@example.com"); // fill vào input email
  // Password
  const passwordInput = usingTheGridCard.getByLabel("Password");
  await passwordInput.fill("123456"); // fill vào input password
  // Option1
  const option1Input = usingTheGridCard.getByLabel("Option1"); // lọc ra nb-card có text là Using the Grid rồi lấy ra input có label là Option1 trong nb-card đó

  // Option2
  // const option2Input = usingTheGridCard.getByLabel("Option2");
  // // Disabled Option
  // const disabledOptionInput = usingTheGridCard.getByLabel("Disabled Option");
  // Sign In Btn
  const signInButton = usingTheGridCard.getByRole("button", {
    name: "Sign In",
  });
  await signInButton.click();
  // const submitButton = page
  //   .locator("nb-card")
  //   .filter({ hasText: "Basic form" })
  //   .getByRole("button", { name: "SUBMIT" }); // lọc ra nb-card có text là Basic form rồi lấy ra button có name là SUBMIT trong nb-card đó
});

test("Locator for Basic form", async ({ page }) => {
  await page.goto(baseURL);
  const basicFormCard = page
    .locator("nb-card")
    .filter({ hasText: "Basic form" }); // lọc ra nb-card có text là Basic form rồi gán vào biến basicFormCard
  // Email input
  const emailInputBasic = basicFormCard.getByLabel("Email address");
  await emailInputBasic.fill("AnhTP2@exam.com");
  // Password input
  const passwordInputBasic = basicFormCard.getByLabel("Password");
  await passwordInputBasic.fill("123456");
  // Check me out checkbox
  const checkboxBasic = basicFormCard.getByLabel("Check me out");
  await checkboxBasic.check({ force: true });
  // Submit Btn
  const submitButtonBasic = basicFormCard.getByRole("button", {
    name: "SUBMIT",
  });
  await submitButtonBasic.click();
});

test("Locator for Form without labels", async ({ page }) => {
  // goto http://localhost:4200/pages/forms/layouts
  await page.goto(baseURL);
  const formWithoutLabelsCard = page
    .locator("nb-card")
    .filter({ hasText: "Form without labels" }); // lọc ra nb-card có text là Form without labels rồi gán vào biến formWithoutLabelsCard
  // Recipients input
  const recipientsInput = formWithoutLabelsCard.getByPlaceholder("Recipients");
  await recipientsInput.fill("AnhTP3@example.com");
  // Subject input
  const subjectInput = formWithoutLabelsCard.getByPlaceholder("Subject");
  await subjectInput.fill("AnhTP Test Subject");
  // Message input
  const messageInput = formWithoutLabelsCard.getByPlaceholder("Message");
  await messageInput.fill("This is a test message. From AnhTP");
  // Send Btn
  const sendButton = formWithoutLabelsCard.getByRole("button", {
    name: "Send",
  });
  await sendButton.click();
});

test("Locator for Block form", async ({ page }) => {
  // goto http://localhost:4200/pages/forms/layouts
  await page.goto(baseURL);
  const blockFormCard = page
    .locator("nb-card")
    .filter({ hasText: "Block form" }); // lọc ra nb-card có text là Block form rồi gán vào biến blockFormCard

  // Frist Name input
  const firstNameInput = blockFormCard.getByPlaceholder("First Name");
  await firstNameInput.fill("Anh");
  // Last Name input
  const lastNameInput = blockFormCard.getByPlaceholder("Last Name");
  await lastNameInput.fill("Tran");
  // Email input
  const emailInputBlock = blockFormCard.getByPlaceholder("Email");
  await emailInputBlock.fill("AnhTP4@example.com");
  //Website input
  const websiteInput = blockFormCard.getByPlaceholder("Website");
  await websiteInput.fill("https://anhtp.autotraining.com");
  // Submit Btn
  const signUpButton = blockFormCard.getByRole("button", { name: "SUBMIT" });
  await signUpButton.click();
});

test("Locator for Horizontal form", async ({ page }) => {
  // goto http://localhost:4200/pages/forms/layouts
  await page.goto(baseURL);
  const horizontalFormCard = page
    .locator("nb-card")
    .filter({ hasText: "Horizontal form" }); // lọc ra nb-card có text là Horizontal form rồi gán vào biến horizontalFormCard
  // Email input
  const emailInputHorizontal = horizontalFormCard.getByLabel("Email");
  await emailInputHorizontal.fill("AnhTP5@example.com");
  // Password input
  const passwordInputHorizontal = horizontalFormCard.getByLabel("Password");
  await passwordInputHorizontal.fill("123456");
  // Remember me checkbox
  const rememberMeCheckbox = horizontalFormCard.getByLabel("Remember me");
  await rememberMeCheckbox.check({ force: true });
  // Sign In Btn
  const signInButtonHorizontal = horizontalFormCard.getByRole("button", {
    name: "Sign in",
  });
  await signInButtonHorizontal.click();
});

test("Locator for Inline form", async ({ page }) => {
  // goto http://localhost:4200/pages/forms/layouts
  await page.goto(baseURL);
  const inlineFormCard = page
    .locator("nb-card")
    .filter({ hasText: "Inline form" }); // lọc ra nb-card có text là Inline form rồi gán vào biến inlineFormCard
  // Text input
  const textInputInline = inlineFormCard.getByPlaceholder("Jane Doe");
  await textInputInline.fill("Tran Phuong Anh");
  // Email input
  const emailInputInline = inlineFormCard.getByPlaceholder("Email");
  await emailInputInline.fill("AnhTP0@example.com");
  // Remember me checkbox
  const rememberMeCheckboxInline = inlineFormCard.getByLabel("Remember me");
  await rememberMeCheckboxInline.check({ force: true });
  // Submit Btn
  const submitButtonInline = inlineFormCard.getByRole("button", {
    name: "SUBMIT",
  });
  await submitButtonInline.click();
});
