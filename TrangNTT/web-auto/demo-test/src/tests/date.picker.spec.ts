import { test } from "@playwright/test";
import { DatePickerPage } from "../pages/date.picker.page";

test.describe("Date Picker", () => {

    test.beforeEach(async ({ page }) => {

        const datePickerPage = new DatePickerPage(page);

        await datePickerPage.goto();

        await datePickerPage.waitForLoad();

    });

    test("Select range date from today to 5 days later", async ({ page }) => {

        const datePickerPage = new DatePickerPage(page);

        const startDate = new Date();

        const endDate = new Date(startDate);

        endDate.setDate(startDate.getDate() + 5);

        await datePickerPage.selectRangeDate(startDate, endDate);

        await datePickerPage.verifySelectedDate(startDate, endDate);

    });

});