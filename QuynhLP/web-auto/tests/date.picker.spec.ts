import { test, expect } from "@playwright/test";

/**
 *
1. Vào link 'http://localhost:4200/pages/forms/datepicker'
2. Chọn form input range-datepicker
3. Chọn khoảng thời gian từ ngày hiện tại tới cách đó 250 ngày.
- Ví dụ: today = 28/6/2026 => range '28/6/2026 - 2/7/2026'
 */

test('date picker', async ({ page }) => {
    // navigate to date picker page
    await page.goto('http://localhost:4200/pages/forms/datepicker')

    // Get range date (today - end date)
    // get today info
    let today = new Date()
    const todayDate = today.getDate().toString()
    const thisMonthShort = today.toLocaleString("en-US", { month: "short" });
    const thisYear = today.getFullYear();
    const todayToAssert = `${thisMonthShort} ${todayDate}, ${thisYear}`;

    // get end date info (5 days from today)
    let date = new Date();
    date.setDate(date.getDate() + 250);
    const endDate = date.getDate().toString();
    const endMonthShort = date.toLocaleString("en-US", { month: "short" });
    const endMonthLong = date.toLocaleString("en-US", { month: "long" });
    const endYear = date.getFullYear();
    const endDateToAssert = `${endMonthShort} ${endDate}, ${endYear}`;
    const endMonthAndYear = `${endMonthLong} ${endYear}`;

    const rangeDateToAssert = `${todayToAssert} - ${endDateToAssert}`

    // Trigger date picker
    const rangePickerField = page.getByPlaceholder('Range Picker')
    await rangePickerField.click()

    // Choose today
    await page.locator('.today').click()

    // Choose end date
    let calendarMonthAndYearField = page.locator("nb-calendar-view-mode")
    while (!(await calendarMonthAndYearField.textContent())?.includes(endMonthAndYear)) {
        await page.locator('button.next-month').click()
    }

    console.log('checkly: ', rangeDateToAssert)
    await page.locator('[class="range-cell day-cell ng-star-inserted"]').getByText(endDate, { exact: true }).click()
    await expect(rangePickerField).toHaveValue(rangeDateToAssert)
})