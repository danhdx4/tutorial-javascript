import { Page as PlaywrightPage, expect } from "@playwright/test";

export class LoginPage {
    readonly page: PlaywrightPage;
  constructor(page: PlaywrightPage) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("http://localhost:4200/auth/login");
  }

  public get emailField() {
    return this.page.getByRole("textbox", { name: "Email address" });
  }

  public get passwordField() {
    return this.page.getByRole("textbox", { name: "Password" });
  }

  public get forgotPasswordLink() {
    return this.page.getByText("Forgot Password?");
  }

  public get rememberMeCheckbox() {
    return this.page.getByRole("checkbox", { name: "Remember me" });
  }

  public get loginButton() {
    return this.page.getByRole("button", { name: "Log in" });
  }


  async expectInitialState() {
    expect(await this.emailField.getAttribute("placeholder")).toEqual("Email address");
    expect(await this.passwordField.getAttribute("placeholder")).toEqual("Password");
    expect(await this.rememberMeCheckbox.isChecked()).toBeFalsy();
    await expect(this.loginButton).toBeDisabled();
  }

  async fillEmail(email: string) {
    await this.emailField.fill(email);
  }

  async fillPassword(password: string) {
    await this.passwordField.fill(password);
  }

  async submitLogin() {
    await this.loginButton.click();
  }

  async login(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.rememberMeCheckbox.check({ force: true });
    await this.submitLogin();
  }

  async openForgotPassword() {
    await this.forgotPasswordLink.click();
    await expect(this.page).toHaveURL("http://localhost:4200/auth/request-password");
  }
}