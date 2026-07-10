import { Page as PlaywrightPage, expect } from "@playwright/test";
import { Page } from "./base.page";
import { PageUrl } from "../utils/constants";

export class DatePickerPage extends Page {
    readonly pageUrl: string;

    // Khoi tao du lieu ban dau cho object
    constructor(page: PlaywrightPage) {
        super(page);
        this.pageUrl = PageUrl.DATE_PICKER_URL;
    }

    /** Locators */
    logo = this.page.locator('.logo')

    // Ham hanh dong va xac nhan
    async goto() {
        const response = await this.page.goto(this.pageUrl);
        expect(response?.status()).toBeLessThan(400);
    }

    async waitForLoad() {
        await this.page.waitForURL(this.pageUrl);
        await expect(this.logo).toHaveText('PW-test')
    }

    // Cac picker selector
    formPickerField = this.page.getByPlaceholder('Form Picker')
    rangePickerField = this.page.getByPlaceholder('Range Picker')

    // Chon mot ngay cu the theo so ngay va thang-nam (vi du 'July 2026')
    async chooseTargetDate(date: string, monthYear: string) {
        const header = this.page.locator('nb-calendar-view-mode')
        while (!(await header.textContent())?.includes(monthYear)) {
            await this.page.locator('button.next-month').click()
        }
        await this.page.locator('.day-cell').getByText(date, { exact: true }).click()
    }

    // Chon khoang thoi gian dua tren hai object Date
    async selectRange(startDate: Date, endDate: Date) {
        await this.rangePickerField.click()
        const startMonthYear = `${startDate.toLocaleString('en-US', { month: 'long' })} ${startDate.getFullYear()}`
        const endMonthYear = `${endDate.toLocaleString('en-US', { month: 'long' })} ${endDate.getFullYear()}`

        // dieu huong toi ngay bat dau va click
        await this.chooseTargetDate(String(startDate.getDate()), startMonthYear)

        // dieu huong toi ngay ket thuc va click
        await this.chooseTargetDate(String(endDate.getDate()), endMonthYear)

        return this.rangePickerField
    }
}