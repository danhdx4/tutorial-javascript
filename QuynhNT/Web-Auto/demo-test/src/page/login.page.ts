import { Page as PlaywrightPage, expect } from "@playwright/test";
import { Page } from "./base.page";
import { PageUrl } from "../utils/constants";

export class LoginPage extends Page {
  readonly pageUrl: string;

  // Khởi tạo dữ liệu ban đầu cho object
  constructor(page: PlaywrightPage) {
    super(page);
    this.pageUrl = PageUrl.LOGIN_URL;
  }

  /** Locators */
  emailField = this.page.getByLabel("Email address:");
  passwordField = this.page.getByLabel("Password:");
  loginBtn = this.page.getByRole("button", { name: " Log In " });
  emailErrormsg = this.page
    .locator(".form-control-group")
    .filter({ hasText: "Email address:" })
    .locator(".caption.status-danger");
  passwordErrormsg = this.page
    .locator(".form-control-group")
    .filter({ hasText: "Password:" })
    .locator(".caption.status-danger");

  //Action & Assertion functions
  async goto() {
    const response = await this.page.goto(this.pageUrl);
    expect(response?.status()).toBeLessThan(400);
  }

  async waitForLoad() {
    await this.page.waitForURL(this.pageUrl);
    await expect(this.page).toHaveTitle(
      "playwright-test-admin Demo Application",
    );
  }

  async fillCredential(email: string, password: string) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
  }

  async verifyErrMsg(field: "email" | "password", msg: string) {
    const textField = field === "email" ? "Email address:" : "Password:";
    const errMsg = this.page
      .locator(".form-control-group")
      .filter({ hasText: `${textField}` })
      .locator(".caption.status-danger");
    await expect(errMsg).toHaveText(msg);
  }

  async verifySubmitBtn(isStatus: "enable" | "disable") {
    const colorValue =
      isStatus === "enable" ? "rgb(51, 102, 255)" : "rgba(143, 155, 179, 0.24)";
    await expect(this.loginBtn).toHaveCSS("background-color", colorValue);
  }
}
