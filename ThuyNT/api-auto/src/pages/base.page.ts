import { Page as PlaywrightPage } from "@playwright/test";

export class basePage {
  readonly page: PlaywrightPage;

    constructor(page: PlaywrightPage) {
        this.page = page;
    }
}
