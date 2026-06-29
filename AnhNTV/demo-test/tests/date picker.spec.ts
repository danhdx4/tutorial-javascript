// Vào link 'http://localhost:4200/pages/forms/datepicker'
// Chọn form input range-datepicker
// Chọn khoảng thời gian từ ngày hiện tại tới cách đó 5 ngày.
// Ví dụ: today = 28/6/2026 => range '28/6/2026 - 2/7/2026'
import { test, expect } from '@playwright/test';
test('date picker', async ({ page }) => {
    // navigate to date picker page
    await page.goto('http://localhost:4200/pages/forms/datepicker')
    const formPickerField = page.getByPlaceholder('Range Picker')

    await formPickerField.click()
    const calendarContainer = page.locator('nb-calendar')
    let calendarMonthAndYearField = page.locator("nb-calendar-view-mode")

    // Choose the specific date in the month
    // await page.locator('[class="day-cell ng-star-inserted"]').getByText('1', { exact: true }).click()
    // await expect(formPickerField).toHaveValue('Jun 1, 2026')

    // Choose dynamic date in the month
    let date = new Date();
    const pickedDate = new Date(date);
    pickedDate.setDate(date.getDate() + 5);

    const startdate = date.getDate().toString();
    const enddate = pickedDate.getDate().toString();

    const expectedStartMonth = date.toLocaleString("en-US", { month: "short" });
    const expectedEndMonth = pickedDate.toLocaleString("en-US", { month: "short" });

    const expectedStartMonthLong = date.toLocaleString("en-US", { month: "long" });
    const expectedEndMonthLong = pickedDate.toLocaleString("en-US", { month: "long" });

    const expectedStartYear = date.getFullYear();
    const expectedEndYear = pickedDate.getFullYear();

    const dateToAssert = `${expectedStartMonth} ${startdate}, ${expectedStartYear} - ${expectedEndMonth} ${enddate}, ${expectedEndYear}`;
   
    // console.log(`
    //       date = ${date},
    //       newDate = ${date.setDate(date.getDate() + 5)},
    //       expectedDate = ${expectedDate},
    //       expectedMonthShort = ${expectedMonthShort},
    //       expectedMonthLong = ${expectedMonthLong},
    //       expectedYear = ${expectedYear},
    //       dateToAssert = ${dateToAssert},
    //       expectedMonthAndYear = ${expectedMonthAndYear}
    //       `);
await page.locator('.range-cell.day-cell.ng-star-inserted').getByText(startdate, {exact: true}).click();
if (date.getMonth() !== pickedDate.getMonth()){
await page.locator('.next-month').click()};

await page.locator('.range-cell.day-cell.ng-star-inserted').getByText(enddate, {exact: true}).click();
    await expect (formPickerField).toHaveValue(dateToAssert);
});