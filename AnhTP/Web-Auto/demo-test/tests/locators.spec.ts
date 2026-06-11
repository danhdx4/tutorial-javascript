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

test.only("Locator for Using the Grid", async ({ page }) => {
  // goto http://localhost:4200/pages/forms/layouts
  await page.goto("http://localhost:4200/pages/forms/layouts");
  // Email
  const emailInput = page
    .locator("nb-card")
    .filter({ hasText: "Using the Grid" })
    .getByLabel("Email");
  await emailInput.fill("AnhTP@example.com");
  // Password
  const passwordInput = page
    .locator("nb-card")
    .filter({ hasText: "Using the Grid" })
    .getByLabel("Password");
  await passwordInput.fill("123456");
  // Option1
  const option1Input = page
    .locator("nb-card")
    .filter({ hasText: "Using the Grid" })
    .getByLabel("Option1");
  await option1Input.check(); // check vào Option1
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

// Other form...
