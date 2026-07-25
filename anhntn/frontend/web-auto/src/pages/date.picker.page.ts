import { Page as PlaywrightPage, expect, Locator } from "@playwright/test";
import { Page } from "./base.page";
import { PageUrl } from "../utils/constants";

export class DatePickerPage extends Page {
    readonly pageUrl: string;

    constructor(page: PlaywrightPage) {
        super(page);
        this.pageUrl = PageUrl.DATE_PICKER_URL;
    }

    /** Locators */
    // Lanh note: Em tham khảo cách khai báo Locator trong folder code của chị nhé. Không cần phải khai báo qua hàm thế này
    get formPickerField(): Locator {
        return this.page.getByPlaceholder("Form Picker");
    }

    get rangePickerField(): Locator {
        return this.page.getByPlaceholder("Range Picker");
    }

    get calendarMonthAndYearField(): Locator {
        return this.page.locator("nb-calendar-view-mode");
    }

    get nextBtn(): Locator {
        return this.page.locator("button.next-month");
    }

    /** Action & Assertion functions */
    async goto() {
        const response = await this.page.goto(this.pageUrl);
        expect(response?.status()).toBeLessThan(400);
    }

    async waitForLoad() {
        await this.page.waitForURL(this.pageUrl);
        await expect(super.logo).toHaveText("PW-test");
    }

    async chooseTargetDate(date: string, monthYear: string) {
        while (!(await this.calendarMonthAndYearField.textContent())?.includes(monthYear)) {
            await this.nextBtn.click();
        }

        const targetDate = this.page
            .locator(".day-cell.ng-star-inserted:not(.bounding-month)")
            .getByText(date, { exact: true });

        await targetDate.click();
    }
}
