import { expect, type Page } from '@playwright/test';

export class basePage {
  constructor(public page: Page) {}

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async expectUrl(url: string) {
    await expect(this.page).toHaveURL(url);
  }
}