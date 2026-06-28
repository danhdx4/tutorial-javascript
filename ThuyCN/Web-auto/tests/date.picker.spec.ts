// 1. Vào link 'http://localhost:4200/pages/forms/datepicker'
// 2. Chọn form input range-datepicker
// 3. Chọn khoảng thời gian từ ngày hiện tại tới cách đó 5 ngày.

// - Ví dụ: today = 28/6/2026 => range '28/6/2026 - 2/7/2026'

import test, {expect} from "@playwright/test";
test ('Date picker', async ({page}) => {
    await page.goto('http://localhost:4200/pages/forms/datepicker')
    const dateRange = page.getByPlaceholder('Range Picker')
    await dateRange.click()

    const today = new Date();
    const pickedDate = new Date(today);
    pickedDate.setDate(today.getDate() + 5);

    console.log(`Today = ${today}, Picked = ${pickedDate}`);

    const startDate = today.getDate().toString();
    const endDate = pickedDate.getDate().toString();
    console.log(`start1 = ${startDate}, end1 = ${endDate}`)
    const expectedStartMonthShort = today.toLocaleString("en-US", { month: "short" });
    const expectedEndMonthShort = pickedDate.toLocaleString("en-US", { month: "short" });
    const expectedStartYear = today.getFullYear();
    const expectedEndYear = pickedDate.getFullYear();
    const dateToAssert = `${expectedStartMonthShort} ${startDate}, ${expectedStartYear} - ${expectedEndMonthShort} ${endDate}, ${expectedEndYear}`;

    await page
    .locator('.range-cell')
    .getByText(startDate, { exact: true })
    .click();

    if (today.getMonth() !== pickedDate.getMonth()) {
    await page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click();
}

    await page
    .locator('.range-cell')
    .getByText(endDate, { exact: true })
    .click();
    await expect (dateRange).toHaveValue(dateToAssert)
})