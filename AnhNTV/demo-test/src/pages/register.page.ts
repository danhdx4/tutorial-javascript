import { Page, expect } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('http://localhost:4200/auth/register', { waitUntil: 'domcontentloaded' });
    await expect(this.page.getByRole('heading', { name: 'Register' })).toBeVisible();
  }

  async fillFullName(name: string) {
    const input = this.page.locator('input[placeholder="Full name"]');
    await input.fill(name);
    await input.blur();
  }

  async fillEmail(email: string) {
    const input = this.page.locator('input[placeholder="Email address"]');
    await input.fill(email);
    await input.blur();
  }

  async fillPassword(password: string) {
    const input = this.page.locator('input[placeholder="Password"]');
    await input.fill(password);
    await input.blur();
  }

  async fillConfirmPassword(password: string) {
    const input = this.page.locator('input[placeholder="Confirm Password"]');
    await input.fill(password);
    await input.blur();
  }

  async agreeTerms() {
    await this.page.locator('label').filter({ hasText: 'Agree to Terms' }).click();
  }

  async submit() {
    const button = this.page.locator('button:has-text("Register")');
    await expect(button).toBeVisible();
    await button.click();
  }

  async getErrorMessage() {
    return this.page.locator('.caption.status-danger, .error-message');
  }
};
