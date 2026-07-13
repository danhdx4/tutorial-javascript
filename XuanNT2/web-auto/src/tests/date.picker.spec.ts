import { test, expect } from "@playwright/test";
import { DatePickerPage } from "../pages/date.picker.page";
import { getDateHander } from "../utils/helper";

test('date picker', async ({ page }) => {
    // navigate to date picker page
    const datePickerPage = new DatePickerPage(page)
    const count = 500;
    await datePickerPage.goto()
    await datePickerPage.formPickerFeild.click();

    // Choose dynamic date in the month
    const targetDate = getDateHander(count);
    await datePickerPage.chooseTargetDate(targetDate.date, targetDate.monthYear);
    await expect(datePickerPage.formPickerFeild).toHaveValue(
        targetDate.dateMonthYear,
    );
});

test('date picker - range', async ({ page }) => {
    const datePickerPage = new DatePickerPage(page);
    const count = 20;
    // navigate to date picker page
    await datePickerPage.goto();
    await datePickerPage.formPickerFeild.click();

    const today = getDateHander(0);
    const end = getDateHander(count);

    const rangeDateToAssert = `${today.dateMonthYear} - ${end.dateMonthYear}`;

    // Trigger date picker
    await datePickerPage.rangePickerField.click();

    // Choose today
    await datePickerPage.chooseTargetDate(today.date, today.monthYear);

    // Choose end date
    await datePickerPage.chooseTargetDate(end.date, end.monthYear);

    await expect(datePickerPage.rangePickerField).toHaveValue(rangeDateToAssert);
})