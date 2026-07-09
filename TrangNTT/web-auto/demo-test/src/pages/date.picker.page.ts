import { Page as PlaywrightPage, expect } from "@playwright/test";
import { basePage } from "./base.page";
import { PageUrl } from "../utils/constants";

export class DatePickerPage extends basePage {

    readonly pageUrl: string;

    constructor(page: PlaywrightPage) {
        super(page);
        this.pageUrl = PageUrl.DATE_PICKER_URL;
    }

    /** Locators */

    rangeDatePicker = this.page.locator('nb-card nb-card-body input').nth(1);

    nextMonthBtn = this.page.locator('[data-name="chevron-right"]');

    dayCell = this.page.locator('.day-cell');

    /** Action */

    async goto() {
        const response = await this.page.goto(this.pageUrl, {
            waitUntil: "networkidle",
        });

        await expect(response?.status()).toBeLessThan(400);
    }

    async waitForLoad() {
        await this.page.waitForURL(this.pageUrl);
        await expect(this.rangeDatePicker).toBeVisible();
    }

    async openRangeDatePicker() {
        await this.rangeDatePicker.click();
    }

    async selectDay(day: number) {
        await this.dayCell
            .getByText(`${day}`, { exact: true })
            .click();
    }

    async nextMonth() {
        await this.nextMonthBtn.click();
    }

    async selectRangeDate(startDate: Date, endDate: Date) {

        await this.openRangeDatePicker();

        await this.selectDay(startDate.getDate());

        if (
            startDate.getMonth() !== endDate.getMonth() ||
            startDate.getFullYear() !== endDate.getFullYear()
        ) {
            await this.nextMonth();
        }

        await this.selectDay(endDate.getDate());
    }

    async verifySelectedDate(startDate: Date, endDate: Date) {

        const expectedStart = startDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });

        const expectedEnd = endDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });

        await expect(this.rangeDatePicker).toHaveValue(
            `${expectedStart} - ${expectedEnd}`
        );
    }

}