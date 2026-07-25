import { test, expect } from "@playwright/test";


// Lanh note: hàm getDateInfoFromToday và selectDate có thể tách ra thành 1 file helper.ts để tái sử dụng code
function getDateInfoFromToday(offset: number) {
    const date = new Date();
    date.setDate(date.getDate() + offset);

    const day = date.getDate().toString();
    const monthShort = date.toLocaleString("en-US", { month: "short" });
    const monthLong = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    return {
        day,
        monthYear: `${monthLong} ${year}`,
        dateToAssert: `${monthShort} ${day}, ${year}`,
    };
}

async function selectDate(page: import("@playwright/test").Page, day: string, monthYear: string) {
    const calendarMonthAndYearField = page.locator("nb-calendar-view-mode");

    while (!(await calendarMonthAndYearField.textContent())?.includes(monthYear)) {
        await page.locator("button.next-month").click();
    }

    await page
        .locator(".day-cell.ng-star-inserted:not(.bounding-month)")
        .getByText(day, { exact: true })
        .click();
}

test('date picker', async ({ page }) => {
    // navigate to date picker page
    await page.goto('http://localhost:4200/pages/forms/datepicker')
    const formPickerField = page.getByPlaceholder('Form Picker')

    await formPickerField.click()
    const calendarContainer = page.locator('nb-calendar')
    let calendarMonthAndYearField = page.locator("nb-calendar-view-mode")

    // Choose the specific date in the month
    // await page.locator('[class="day-cell ng-star-inserted"]').getByText('1', { exact: true }).click()
    // await expect(formPickerField).toHaveValue('Jun 1, 2026')

    // Choose dynamic date in the month
    let date = new Date();
    date.setDate(date.getDate() + 500);

    const expectedDate = date.getDate().toString();
    const expectedMonthShort = date.toLocaleString("en-US", { month: "short" });
    const expectedMonthLong = date.toLocaleString("en-US", { month: "long" });
    const expectedYear = date.getFullYear();
    const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;
    const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`;
    console.log(`
          date = ${date},
          newDate = ${date.setDate(date.getDate() + 500)},
          expectedDate = ${expectedDate},
          expectedMonthShort = ${expectedMonthShort},
          expectedMonthLong = ${expectedMonthLong},
          expectedYear = ${expectedYear},
          dateToAssert = ${dateToAssert},
          expectedMonthAndYear = ${expectedMonthAndYear}
          `);

    // await page.locator('[class="day-cell ng-star-inserted"]').getByText(expectedDate, { exact: true }).click()
    // await expect(formPickerField).toHaveValue(dateToAssert)

    while (!(await calendarMonthAndYearField.textContent())?.includes(expectedMonthAndYear)) {
        await page.locator('button.next-month').click()
        // await page.locator("nb-calendar-view-mode").textContent();
    }

    await page.locator('[class="day-cell ng-star-inserted"]').getByText(expectedDate, { exact: true }).click()
    await expect(formPickerField).toHaveValue(dateToAssert)
})

/**
 *
1. Vào link 'http://localhost:4200/pages/forms/datepicker'
2. Chọn form input range-datepicker
3. Chọn khoảng thời gian từ ngày hiện tại tới cách đó 250 ngày.
- Ví dụ: today = 28/6/2026 => range '28/6/2026 - 2/7/2026'
 */

test('date picker - range', async ({ page }) => {
    // navigate to date picker page
    await page.goto('http://localhost:4200/pages/forms/datepicker')

    // Choose from day a to day b (a and b are offsets from today)
    const a = 5
    const b = 20
    const fromDate = getDateInfoFromToday(a)
    const toDate = getDateInfoFromToday(b)

    const rangeDateToAssert = `${fromDate.dateToAssert} - ${toDate.dateToAssert}`
        console.log(`
            a = ${a},
            b = ${b},
            fromDay = ${fromDate.day},
            fromMonthYear = ${fromDate.monthYear},
            fromDateToAssert = ${fromDate.dateToAssert},
            toDay = ${toDate.day},
            toMonthYear = ${toDate.monthYear},
            toDateToAssert = ${toDate.dateToAssert},
            rangeDateToAssert = ${rangeDateToAssert}
            `)

    // Trigger date picker
    const rangePickerField = page.getByPlaceholder('Range Picker')
    await rangePickerField.click()

    // Choose start date (a)
    await selectDate(page, fromDate.day, fromDate.monthYear)

    // Choose end date (b)
    await selectDate(page, toDate.day, toDate.monthYear)

    console.log('checkly: ', rangeDateToAssert)
    await expect(rangePickerField).toHaveValue(rangeDateToAssert)
})

test('date picker - range from day a to day b (new case)', async ({ page }) => {
    // navigate to date picker page
    await page.goto('http://localhost:4200/pages/forms/datepicker')

    // a and b are offsets from today
    const a = 2
    const b = 12
    const startDate = getDateInfoFromToday(a)
    const endDate = getDateInfoFromToday(b)
    const expectedRange = `${startDate.dateToAssert} - ${endDate.dateToAssert}`
        console.log(`
            a = ${a},
            b = ${b},
            startDay = ${startDate.day},
            startMonthYear = ${startDate.monthYear},
            startDateToAssert = ${startDate.dateToAssert},
            endDay = ${endDate.day},
            endMonthYear = ${endDate.monthYear},
            endDateToAssert = ${endDate.dateToAssert},
            expectedRange = ${expectedRange}
            `)

    const rangePickerField = page.getByPlaceholder('Range Picker')
    await rangePickerField.click()

    // choose from date a to date b
    await selectDate(page, startDate.day, startDate.monthYear)
    await selectDate(page, endDate.day, endDate.monthYear)

    await expect(rangePickerField).toHaveValue(expectedRange)
})

