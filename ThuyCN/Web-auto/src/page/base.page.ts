import { Locator, Page as PlaywrightPage, expect } from "@playwright/test";

export class Page {
  readonly page: PlaywrightPage;
  readonly logoutButton: Locator;

  constructor(page: PlaywrightPage, locator: Locator) {
    this.page = page;
    this.logoutButton = locator;
  }
}