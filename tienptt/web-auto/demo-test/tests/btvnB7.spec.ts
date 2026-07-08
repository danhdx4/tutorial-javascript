import { test, expect } from '@playwright/test';
// 1. Vào link 'http://localhost:4200/pages/forms/datepicker'
// 2. Chọn form input range-datepicker
// 3. Chọn khoảng thời gian từ ngày hiện tại tới cách đó 5 ngày.

// - Ví dụ: today = 28/6/2026 => range '28/6/2026 - 2/7/2026'

test('Bai tap ve nha buoi 7', async ({ page }) => {
  await page.goto('http://localhost:4200/pages/forms/datepicker');

  const rangePicker = page.getByPlaceholder('Range Picker');
  await rangePicker.click();

  // Ngày hiện tại
  const today = new Date();

  
  // Ngày sau 5 ngày
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + 5);
  const futureDay = futureDate.getDate().toString();
  const futureMonth = futureDate.toLocaleString('en-US', { month: 'long',});
  const futureYear = futureDate.getFullYear();
  const expectedMonthYear = `${futureMonth} ${futureYear}`;
  const calendarMonthYear = page.locator('nb-calendar-view-mode');


  // Chọn ngày bắt đầu
  await page.locator('.day-cell.ng-star-inserted').getByText(today.getDate().toString(), { exact: true }).click();

  // Nếu ngày kết thúc ở tháng khác thì bấm next month
  while (!(await calendarMonthYear.textContent()) ?.includes(expectedMonthYear)) 
    {
    await page.locator('button.next-month').click();
  }
  // Chọn ngày kết thúc
  await page.locator('.day-cell.ng-star-inserted').getByText(futureDay, { exact: true }).click();
  await expect(rangePicker).not.toBeEmpty();
});