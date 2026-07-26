import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  readonly signInLink;
  readonly emailTextbox;
  readonly passwordTextbox;
  readonly signInButton;

  constructor(page: Page) {
    super(page);

    this.signInLink = page.getByRole('link', { name: ' Sign in ' });
    this.emailTextbox = page.getByPlaceholder('Email');
    this.passwordTextbox = page.getByPlaceholder('Password');
    this.signInButton = page.getByRole('button', { name: ' Sign in ' });
  }

  async login(email: string, password: string): Promise<void> {
    await this.signInLink.click();
    await this.emailTextbox.fill(email);
    await this.passwordTextbox.fill(password);
    await this.signInButton.click();
  }
}