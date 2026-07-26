import { Page } from "@playwright/test";
import { ApiUrl, PageUrl } from "../utils/constants";
export class LoginPage {
  constructor(private page: Page) {}
  async login(email: string, password: string) {
    await this.page.goto(PageUrl.HOMEPAGE_URL);
    await this.page.getByRole("link", { name: " Sign in " }).click();
    const reponsePromise = this.page.waitForResponse(ApiUrl.LOGIN_API);
    await this.page.getByPlaceholder("Email").fill(email);
    await this.page.getByPlaceholder("Password").fill(password);
    await this.page.getByRole("button", { name: " Sign in " }).click();
    await reponsePromise;
    await this.page.reload();
  }
}
