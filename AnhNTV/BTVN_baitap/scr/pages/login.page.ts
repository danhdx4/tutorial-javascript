import { expect, Page as PlaywrightPage } from "@playwright/test";
import { Page } from "./base.page";
import { PageUrl } from "../untils/constants"; 
export class LoginPage extends Page {
  readonly pageUrl = PageUrl.LOGIN;

  constructor(page: PlaywrightPage) {
    super(page);
  }
<<<<<<< HEAD

  // Chứa Locators
=======
//dùng để xử lý đăng nhập
  // Locators
>>>>>>> eb1242e (add)
  readonly emailTextbox = this.page.getByPlaceholder("Email");
  readonly passwordTextbox = this.page.getByPlaceholder("Password");
  readonly loginButton = this.page.getByRole("button", {
    name: "Sign in",
  });

  // Mở trang Login
  async goto(): Promise<void> {
    await this.page.goto(this.pageUrl);
  }

  // Đăng nhập bằng emai và password
  async login(email: string, password: string): Promise<void> {
    await this.emailTextbox.fill(email);
    await this.passwordTextbox.fill(password);

    await Promise.all([
      this.page.waitForURL("**/"),
      this.loginButton.click(),
    ]);
  }

  // Kiểm tra đăng nhập thành công
  async verifyLoginSuccess(): Promise<void> {
    await expect(
      this.page.getByRole("link", { name: "New Article" })
    ).toBeVisible({ timeout: 15000 });
  }
}