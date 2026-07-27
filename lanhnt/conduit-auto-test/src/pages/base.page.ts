import { Locator, Page as PlaywrightPage } from "@playwright/test";

export class Page {
    readonly page: PlaywrightPage;
    readonly homeBtn: Locator;

    constructor(page: PlaywrightPage) {
        this.page = page;
        this.homeBtn = page.getByRole('link', { name: ' Home ' });
    }

    /** Common Functions */
}