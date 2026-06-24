import test, { expect, Locator, Page } from "@playwright/test";
export class LoginPage {
  private page: Page;
  passwordTextbox: Locator;
  emailTextbox: Locator;
  rememberMeCheckbox: Locator;
  loginButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.passwordTextbox = this.page.getByPlaceholder("Password");
    this.emailTextbox = this.page.getByPlaceholder("Email address");
    this.rememberMeCheckbox = this.page.getByRole("checkbox", {
      name: "Remember me",
    });
    this.loginButton = this.page.getByRole("button", {
      name: "LOG IN",
    });
  }
  async goto() {
    await this.page.goto("http://localhost:4200/auth/login");
  }
}
test(`Verify Title Login`, async ({ page }) => {
  //Title Login
  await page.goto("http://localhost:4200/auth/login");

  // Lanh note: Case này sẽ ko có ý nghĩa vì e định vị bằng text, rồi lại verify bằng chính text đó thì luôn pass nha
  // Ví dụ e dùng id để định vị như cách sau: 
  // const locatortitleLogin = page.locator("#title")
  const locatortitleLogin = page.getByText("Login");
  await expect(locatortitleLogin).toHaveText("Login");
  await expect(locatortitleLogin).toHaveCSS("color", "rgb(34, 43, 69)");
  //Subtitle Login
  const locatorsubtitleLogin = page.getByText("Hello! Log in with your email.");
  await expect(locatorsubtitleLogin).toHaveText(
    "Hello! Log in with your email.",
  );
  await expect(locatorsubtitleLogin).toHaveCSS("color", "rgb(34, 43, 69)");
});
test(`Verify page Login in state default `, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  //email trông và hiển thị pplaceholder
  await expect(loginPage.emailTextbox).toBeFocused();
  await expect(loginPage.emailTextbox).toHaveValue("");
  await expect(loginPage.emailTextbox).toHaveAttribute(
    "placeholder",
    "Email address",
  );
  //pw trông và hiển thị placeholder
  await expect(loginPage.passwordTextbox).toHaveValue("");
  await expect(loginPage.passwordTextbox).toHaveAttribute(
    "placeholder",
    "Password",
  );
  //checkbox remember me mặc định chưa được check
  await expect(loginPage.rememberMeCheckbox).not.toBeChecked();
  //button login mặc định ở trạng thái disable
  await expect(loginPage.loginButton).toBeDisabled();
  await expect(loginPage.loginButton).toHaveCSS(
    "background-color",
    "rgba(143, 155, 179, 0.24)",
  );
});
test(`Show error when outfocus textboxemail`, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.emailTextbox.focus();
  await page.locator("body").click();
  await expect(page.getByText("Email is required")).toBeVisible();
});
test(`Show error for invalid email format test`, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.emailTextbox.fill("test");
  await page.locator("body").click();
  await expect(page.getByText("Email should be the real one!")).toBeVisible();
});
test(`Show error for invalid email format test@`, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.emailTextbox.fill("test@");
  await page.locator("body").click();
  await expect(page.getByText("Email should be the real one!")).toBeVisible();
});
test(`Show error for invalid email format test@gmail`, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.emailTextbox.fill("test@gmail");
  await page.locator("body").click();
  await expect(page.getByText("Email should be the real one!")).toBeVisible();
});
test(`Show error for invalid email format test@gmail.`, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.emailTextbox.fill("test@gmail.");
  await page.locator("body").click();
  await expect(page.getByText("Email should be the real one!")).toBeVisible();
});
test(`Show error for invalid email format test@@gmail.`, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.emailTextbox.fill("test@@gmail.");
  await page.locator("body").click();
  await expect(page.getByText("Email should be the real one!")).toBeVisible();
});
test(`Show error for invalid email format @test@gmail.`, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.emailTextbox.fill("@test@gmail.");
  await page.locator("body").click();
  await expect(page.getByText("Email should be the real one!")).toBeVisible();
});
test(`validate email success`, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.emailTextbox.fill("test@gmail.com");
  await page.locator("body").click();
  await expect(page.getByText("Email is required!")).not.toBeVisible();
});
test(`Show error when outfocus textboxpassword`, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.passwordTextbox.focus();
  await page.locator("body").click();
  await expect(page.getByText("Password is required")).toBeVisible();
});
test(`Show error when input less than 4 characters`, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.passwordTextbox.fill("123");
  await page.locator("body").click();
  await expect(
    page.getByText("Password should contain from 4 to 50 characters"),
  ).toBeVisible();
});
test(`Show error when input more than 50 characters`, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.passwordTextbox.fill("a".repeat(51));
  await page.locator("body").click();
  await expect(
    page.getByText("Password should contain from 4 to 50 characters"),
  ).toBeVisible();
});
test(`validate password success`, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.passwordTextbox.fill("123456");
  await page.locator("body").click();
  await expect(
    page.getByText("Password should contain from 4 to 50 characters"),
  ).not.toBeVisible();
});
test(`input valid email, input valid password`, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.emailTextbox.fill("test@gmail.com");
  await loginPage.passwordTextbox.fill("123456");
  await loginPage.rememberMeCheckbox.check();
  await expect(loginPage.loginButton).toBeEnabled();
  await expect(loginPage.loginButton).toHaveCSS(
    "background-color",
    "rgb(51, 102, 255)",
  );
});
test(`login success`, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.emailTextbox.fill("test@gmail.com");
  await loginPage.passwordTextbox.fill("123456");
  await loginPage.loginButton.click();
  await expect(page).toHaveURL("http://localhost:4200/pages/iot-dashboard");
});
