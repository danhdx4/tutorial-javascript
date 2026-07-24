import { Page as PlaywrightPage } from "@playwright/test";

export class BasePage {
  constructor(protected readonly page: PlaywrightPage) {}
}
