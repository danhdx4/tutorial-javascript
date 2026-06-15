import test from "@playwright/test";

test("Common Locators", async ({ page }) => {
  // goto http://localhost:4200/pages/forms/layouts
  await page.goto("http://localhost:4200/pages/forms/layouts");
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
  await page.goto("http://localhost:4200/pages/forms/layouts");
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
  await page.goto("http://localhost:4200/pages/forms/layouts");
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
  await page.goto("http://localhost:4200/pages/forms/layouts");
  // Email
  const emailInput = page
    .locator("nb-card")
    .filter({ hasText: "Using the Grid" })
    .getByLabel("Email"); // lọc ra nb-card có text là Using the Grid rồi lấy ra input có label là Email trong nb-card đó
  await emailInput.fill("AnhTP@example.com"); // fill vào input email
  // Password
  const passwordInput = page
    .locator("nb-card")
    .filter({ hasText: "Using the Grid" })
    .getByLabel("Password"); // lọc ra nb-card có text là Using the Grid rồi lấy ra input có label là Password trong nb-card đó
  await passwordInput.fill("123456"); // fill vào input password
  // Option1
  const option1Input = page
    .locator("nb-card")
    .filter({ hasText: "Using the Grid" })
    .getByLabel("Option1"); // lọc ra nb-card có text là Using the Grid rồi lấy ra input có label là Option1 trong nb-card đó

  // Option2
  // const option2Input = page.getByLabel("Option2");
  // // Disabled Option
  // const disabledOptionInput = page.getByLabel("Disabled Option");
  // Sign In Btn
  const signInButton = page
    .locator("nb-card")
    .filter({ hasText: "Using the Grid" })
    .getByRole("button", { name: "Sign In" });
  await signInButton.click();
  // const submitButton = page
  //   .locator("nb-card")
  //   .filter({ hasText: "Basic form" })
  //   .getByRole("button", { name: "SUBMIT" }); // lọc ra nb-card có text là Basic form rồi lấy ra button có name là SUBMIT trong nb-card đó
});

test("Locator for Basic form", async ({ page }) => {
  await page.goto("http://localhost:4200/pages/forms/layouts");
  // Email input
  const emailInputBasic = page
    .locator("nb-card")
    .filter({ hasText: "Basic form" })
    .getByLabel("Email address");
  await emailInputBasic.fill("AnhTP2@exam.com");
  // Password input
  const passwordInputBasic = page
    .locator("nb-card")
    .filter({ hasText: "Basic form" })
    .getByLabel("Password");
  await passwordInputBasic.fill("123456");
  // Check me out checkbox
  const checkboxBasic = page
    .locator("nb-card")
    .filter({ hasText: "Basic form" })
    .getByLabel("Check me out");
  await checkboxBasic.check({ force: true });
  // Submit Btn
  const submitButtonBasic = page
    .locator("nb-card")
    .filter({ hasText: "Basic form" })
    .getByRole("button", { name: "SUBMIT" });
  await submitButtonBasic.click();
});

test("Locator for Form without labels", async ({ page }) => {
  // goto http://localhost:4200/pages/forms/layouts
  await page.goto("http://localhost:4200/pages/forms/layouts");
  // Recipients input
  const recipientsInput = page
    .locator("nb-card")
    .filter({ hasText: "Form without labels" })
    .getByPlaceholder("Recipients");
  await recipientsInput.fill("AnhTP3@example.com");
  // Subject input
  const subjectInput = page
    .locator("nb-card")
    .filter({ hasText: "Form without labels" })
    .getByPlaceholder("Subject");
  await subjectInput.fill("AnhTP Test Subject");
  // Message input
  const messageInput = page
    .locator("nb-card")
    .filter({ hasText: "Form without labels" })
    .getByPlaceholder("Message");
  await messageInput.fill("This is a test message. From AnhTP");
  // Send Btn
  const sendButton = page
    .locator("nb-card")
    .filter({ hasText: "Form without labels" })
    .getByRole("button", { name: "Send" });
  await sendButton.click();
});

test("Locator for Block form", async ({ page }) => {
  // goto http://localhost:4200/pages/forms/layouts
  await page.goto("http://localhost:4200/pages/forms/layouts");
  // Frist Name input
  const firstNameInput = page
    .locator("nb-card")
    .filter({ hasText: "Block form" })
    .getByPlaceholder("First Name");
  await firstNameInput.fill("Anh");
  // Last Name input
  const lastNameInput = page
    .locator("nb-card")
    .filter({ hasText: "Block form" })
    .getByPlaceholder("Last Name");
  await lastNameInput.fill("Tran");
  // Email input
  const emailInputBlock = page
    .locator("nb-card")
    .filter({ hasText: "Block form" })
    .getByPlaceholder("Email");
  await emailInputBlock.fill("AnhTP4@example.com");
  //Website input
  const websiteInput = page
    .locator("nb-card")
    .filter({ hasText: "Block form" })
    .getByPlaceholder("Website");
  await websiteInput.fill("https://anhtp.autotraining.com");
  // Submit Btn
  const signUpButton = page
    .locator("nb-card")
    .filter({ hasText: "Block form" })
    .getByRole("button", { name: "SUBMIT" });
  await signUpButton.click();
});

test("Locator for Horizontal form", async ({ page }) => {
  // goto http://localhost:4200/pages/forms/layouts
  await page.goto("http://localhost:4200/pages/forms/layouts");
  // Email input
  const emailInputHorizontal = page
    .locator("nb-card")
    .filter({ hasText: "Horizontal form" })
    .getByLabel("Email");
  await emailInputHorizontal.fill("AnhTP5@example.com");
  // Password input
  const passwordInputHorizontal = page
    .locator("nb-card")
    .filter({ hasText: "Horizontal form" })
    .getByLabel("Password");
  await passwordInputHorizontal.fill("123456");
  // Remember me checkbox
  const rememberMeCheckbox = page
    .locator("nb-card")
    .filter({ hasText: "Horizontal form" })
    .getByLabel("Remember me");
  await rememberMeCheckbox.check({ force: true });
  // Sign In Btn
  const signInButtonHorizontal = page
    .locator("nb-card")
    .filter({ hasText: "Horizontal form" })
    .getByRole("button", { name: "Sign in" });
  await signInButtonHorizontal.click();
});

test("Locator for Inline form", async ({ page }) => {
  // goto http://localhost:4200/pages/forms/layouts
  await page.goto("http://localhost:4200/pages/forms/layouts");
  // Text input
  const textInputInline = page
    .locator("nb-card")
    .filter({ hasText: "Inline form" })
    .getByPlaceholder("Jane Doe");
  await textInputInline.fill("Tran Phuong Anh");
  // Email input
  const emailInputInline = page
    .locator("nb-card")
    .filter({ hasText: "Inline form" })
    .getByPlaceholder("Email");
  await emailInputInline.fill("AnhTP0@example.com");
  // Remember me checkbox
  const rememberMeCheckboxInline = page
    .locator("nb-card")
    .filter({ hasText: "Inline form" })
    .getByLabel("Remember me");
  await rememberMeCheckboxInline.check({ force: true });
  // Submit Btn
  const submitButtonInline = page
    .locator("nb-card")
    .filter({ hasText: "Inline form" })
    .getByRole("button", { name: "SUBMIT" });
  await submitButtonInline.click();
});
