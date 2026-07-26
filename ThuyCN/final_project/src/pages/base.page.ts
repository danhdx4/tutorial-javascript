import { Page as PlaywrightPage } from "@playwright/test";

export class Page {
    readonly page: PlaywrightPage;

    constructor(page: PlaywrightPage) {
        this.page = page;
    }
}