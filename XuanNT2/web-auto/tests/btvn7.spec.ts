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
  endDate.setDate(endDate.getDate() + 5);

  // click current date
  await page.locator('.day-cell').getByText('29', { exact: true }).click();

  // check month, year
  if (startDate.getMonth() === endDate.getMonth() && startDate.getFullYear() === endDate.getFullYear()) {
    await page.locator('.day-cell').getByText(endDate.getDate().toString(), { exact: true }).click();
  } else {
    const btnNext = page.locator('.next-month');
    await btnNext.click();
    await page.locator('.day-cell').getByText(endDate.getDate().toString(), { exact: true }).click();
  }
});