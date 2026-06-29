import { expect, test } from '@playwright/test';

test("date picket", async ({ page }) => {
    await page.goto('http://localhost:4200/pages/forms/datepicker');

    const formRange = page.getByPlaceholder("Range Picker");
    await formRange.click();

    let date = new Date();

    const expectedDate = date.getDate().toString();
    const expectedMonthShort = date.toLocaleString("en-US", { month: "short" });
    const expectedMonthLong = date.toLocaleString("en-US", { month: "long" });
    const expectedYear = date.getFullYear();
    const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;
    const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`;

    await page
        .locator('[class="range-cell day-cell today ng-star-inserted"]')
        .getByText(expectedDate, { exact: true })
        .click();

    let endDate = new Date();
    endDate.setDate(endDate.getDate() + 5);

     const expectedEndDate = endDate.getDate().toString();
    const expectedEndMonthShort = endDate.toLocaleString("en-US", { month: "short" });
    const expectedEndMonthLong = endDate.toLocaleString("en-US", { month: "long" });
    const expectedEndYear = endDate.getFullYear();
    const dateToAssertEnd = `${expectedEndMonthShort} ${expectedEndDate}, ${expectedEndYear}`;
    if (date.getMonth() === endDate.getMonth() && date.getFullYear() === endDate.getFullYear()) {
        await page.locator('.day-cell').getByText(expectedEndDate, { exact: true }).click();
    } else {
        await page.locator('.next-month').click();
        await page.locator('.day-cell').getByText(expectedEndDate, { exact: true }).click();
    }

    await expect(formRange).toHaveValue(dateToAssert + " - " + dateToAssertEnd);
})
