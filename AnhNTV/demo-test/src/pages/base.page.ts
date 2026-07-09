import { Locator, Page as PlaywrightPage } from "@playwright/test";

export class Page {
    readonly page: PlaywrightPage;

    constructor(page: PlaywrightPage) {
        this.page = page;
    }

    /** Common Locators */
    get logo(): Locator {
        return this.page.locator(".logo");
    }

    get fromPickerField(): Locator {
        return this.page.getByPlaceholder("From Picker");
    }

    get calenderContainer(): Locator {
        return this.page.locator("nb-calendar-container");
    }

    get calendarMonthAndYearField(): Locator {
        return this.page.locator("nb-calendar-view-mode");
    }

    get nextButton(): Locator {
        return this.page.locator("button.next-month").first();
    }

    get targetDate(): Locator {
        return this.page.locator('[class="day-cell ng-star-inserted"]');
    }

    /** Common Functions */
}