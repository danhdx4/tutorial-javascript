import { expect, Page as PlaywrightPage } from "@playwright/test";
import { Page } from "./base.page";
import { PageUrl } from "../utils/constants";
import { RegisterData } from "../test_data/register.data";
export class RegisterPage extends Page {
  readonly pageUrl: string;
  constructor(page: PlaywrightPage) {
    super(page);
    this.pageUrl = PageUrl.REGISTER_URL;
  }
  titleInput = this.page.locator("#title");
  fullNameInput = this.page.getByPlaceholder("Full Name");
  emailInput = this.page.getByPlaceholder("Email address");
  passwordInput = this.page.locator("#input-password");
  repeatPasswordInput = this.page.locator("#input-re-password");
  checkbox = this.page.locator(".custom-checkbox");
  registerButton = this.page.getByRole("button", { name: "REGISTER" });
  async goto() {
    const response = await this.page.goto(this.pageUrl);
    expect(response?.status()).toBeLessThan(400);
  }
  async waitForPageLoad() {
    await this.page.waitForURL(this.pageUrl);
    await expect(this.titleInput).toHaveText("Register");
  }
  async fillForm(data: RegisterData) {
    await this.fullNameInput.fill(data.fullname);
    await this.emailInput.fill(data.email);
    await this.passwordInput.fill(data.password);
    await this.repeatPasswordInput.fill(data.confirm);
    if (data.agree) {
      await this.checkbox.check();
    }
  }
  async verifyErrMsg(msg: string) {
    const errMsg = this.page.locator(".caption.status-danger");
    await this.repeatPasswordInput.blur();
    if (msg) {
      await expect(errMsg).toHaveText(msg);
    } else {
      await expect(errMsg).not.toBeVisible();
    }
  }

  async verifyRegisterBtnState(state: boolean) {
    if (state) {
      await expect(this.registerButton).toBeEnabled();
    } else {
      await expect(this.registerButton).toBeDisabled();
    }
  }
}
