import { expect } from "@playwright/test";
import { APP_URL } from "../utils/constants";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
  signInLink = this.page.getByRole("link", { name: "Sign in" });
  emailInput = this.page.getByPlaceholder("Email");
  passwordInput = this.page.getByPlaceholder("Password");
  submitBtn = this.page.getByRole("button", { name: "Sign in" });

  async goto() {
    await this.page.goto(APP_URL);
  }

  async login(email: string, password: string) {
    await this.signInLink.click();
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitBtn.click();
  }

  async expectLoggedIn() {
    await expect(this.page.getByRole("link", { name: "New Article" })).toBeVisible();
  }
}
