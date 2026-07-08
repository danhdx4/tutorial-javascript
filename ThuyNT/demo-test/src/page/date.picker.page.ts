import { Page as PlaywrightPage, expect } from "@playwright/test";
import { basePage } from "./base.page";
import { PageUrl } from "../utils/constants";
import { getDateFromToday } from "../utils/helper";

export class DatepickerComponent extends basePage {
    readonly pageUrl: string;

    constructor(page: PlaywrightPage) {
        super(page);
        this.pageUrl = PageUrl.DATE_PICKER_URL;
    }

    logo = this.page.locator('.logo');
    formPicker = this.page.getByPlaceholder("Form Picker");
    rangeForm = this.page.getByPlaceholder("Range Picker");
    dayContainer = this.page.locator('.day-cell');
    calendarContainer = this.page.locator('nb-calendar');
    calendarMonthAndYearField = this.page.locator('nb-calendar-view-mode');
    nextBtn = this.page.locator('button.next-month');

    async goto() {
        const response = await this.page.goto(this.pageUrl);
        expect(response?.status()).toBeLessThan(400);
    }

    async waitForLoad() {
        await this.page.waitForURL(this.pageUrl);
        await expect(this.logo).toHaveText('PW-test');
    }

    async openDatePicker() {
        await this.formPicker.click();
    }

    async openRangeForm() {
        await this.rangeForm.click()
    }

    async targetDate(dateCount: number) {
        const targetDate = getDateFromToday(dateCount);

        while (!(await this.calendarMonthAndYearField.textContent())?.includes(targetDate.monthyear)) {
            await this.nextBtn.click();
        }
        await this.dayContainer.getByText(targetDate.expectedDate, { exact: true }).click();

    }

    async verifySelectedDate(expectedValue: string) {
        await expect(this.formPicker).toHaveValue(expectedValue);
    }

    async rangeDate(startDate : number, endDate: number){
        const today = getDateFromToday(startDate);
        await this.dayContainer.getByText(today.expectedDate, { exact: true }).click();

        const end = getDateFromToday(endDate);
        while (!(await this.calendarMonthAndYearField.textContent())?.includes(end.monthyear)) {
            await this.nextBtn.click();
        }
        await this.dayContainer.getByText(end.expectedDate, { exact: true }).click();
    }

    async verifyRangeDate(startValue: String, endValue){
        await expect(this.rangeForm).toHaveValue(startValue + " - " + endValue);
    }
}