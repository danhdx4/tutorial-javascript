import { test, expect } from "@playwright/test";
import { getDateFromToday } from "../utils/helper";
import { DatePickerPage } from "../pages/date.picker.page";

test("date picker - form", async ({ page }) => {
    const datePickerPage = new DatePickerPage(page);
    const count = 100;
    // navigate to date picker page
    await datePickerPage.goto();
    await datePickerPage.formPickerField.click();

    const targetDate = getDateFromToday(count);
    console.log("checkly>>>>>>>", targetDate);

    await datePickerPage.chooseTargetDate(targetDate.date, targetDate.monthyear);
    await expect(datePickerPage.formPickerField).toHaveValue(
        targetDate.dateMonthYear,
    );
});

test("date picker - range", async ({ page }) => {
    const datePickerPage = new DatePickerPage(page);
    const count = 20;
    // navigate to date picker page
    await datePickerPage.goto();
    await datePickerPage.formPickerField.click();

    const today = getDateFromToday(0);
    const end = getDateFromToday(count);

    const rangeDateToAssert = `${today.dateMonthYear} - ${end.dateMonthYear}`;

    // Trigger date picker
    await datePickerPage.rangePickerField.click();

    // Choose today
    await datePickerPage.chooseTargetDate(today.date, today.monthyear);

    // Choose end date
    await datePickerPage.chooseTargetDate(end.date, end.monthyear);

    await expect(datePickerPage.rangePickerField).toHaveValue(rangeDateToAssert);
});