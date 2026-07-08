import { test } from '@playwright/test';
import { DatepickerComponent } from '../page/date.picker.page';
import { getDateFromToday } from '../utils/helper';

test('date picker', async ({ page }) => {
    const datePicker = new DatepickerComponent(page);
    const targetDate = getDateFromToday(100);

    await datePicker.goto();
    await datePicker.openDatePicker();
    await datePicker.targetDate(100);
    await datePicker.verifySelectedDate(targetDate.dateMonthYear);
});

test('range picker', async ({ page }) => {
    const rangePicker = new DatepickerComponent(page);
    const startRange = getDateFromToday(0)
    const targetRange = getDateFromToday(100);
    await rangePicker.goto();
    await rangePicker.openRangeForm();
    await rangePicker.rangeDate(0,100);
    await rangePicker.verifyRangeDate(startRange.dateMonthYear,targetRange.dateMonthYear)
});