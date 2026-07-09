import { Page as PlaywrightPage, expect } from "@playwright/test";
import { Page } from "./base.page";
import { PageUrl } from "../utils/constants";

export class DatePickerPage extends Page {
    readonly pageUrl: string;

    // Khởi tạo dữ liệu ban đầu cho object
    constructor(page: PlaywrightPage) {
        super(page);
        this.pageUrl = PageUrl.DATE_PICKER_URL;
    }

    /** Locators */
    logo = this.page.locator('.logo')
    formPickerField = this.page.getByPlaceholder('Form Picker')
    calendarContainer = this.page.locator('nb-calendar')
    calendarMonthAndYearField = this.page.locator("nb-calendar-view-mode")
    nextBtn= this.page.locator('button.next-month')
    



    //Action & Assertion functions
    async goto() {
        const response = await this.page.goto(this.pageUrl);
        expect(response?.status()).toBeLessThan(400);
    }

    async waitForLoad() {
        await this.page.waitForURL(this.pageUrl);
        await expect(this.logo).toHaveText('PW-test')
    }
}