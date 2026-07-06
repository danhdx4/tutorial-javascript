import { test, expect } from '@playwright/test';

// 1. Vào link 'http://localhost:4200/pages/forms/datepicker'
// 2. Chọn form input range-datepicker
// 3. Chọn khoảng thời gian từ ngày hiện tại tới cách đó 5 ngày.

test('Date Picker', async ({ page }) => {
  await page.goto('http://localhost:4200/pages/forms/datepicker');
  const formRangePickerField = page.getByPlaceholder('Range Picker');
  await formRangePickerField.click();

  // Lấy ngày hiện tại.
  const startDate = new Date();

  // tới sau 5 ngày 
  const endDate = new Date();
  // endDate.setDate(endDate.getDate() + 5);
  endDate.setDate(endDate.getDate() + 29);

  // click current date
  const currentDateText = startDate.getDate().toString();
  await page.locator('.day-cell').getByText(currentDateText, { exact: true }).click();

  // check month, year
  while (startDate.getMonth() !== endDate.getMonth() || startDate.getFullYear() !== endDate.getFullYear()) {
    const btnNext = page.locator('.next-month');
    await btnNext.click();
    startDate.setMonth(startDate.getMonth() + 1)
  }
  const endDateText = endDate.getDate().toString();
  await page.locator('[class="range-cell day-cell ng-star-inserted"]').getByText(endDateText, { exact: true }).click();
});