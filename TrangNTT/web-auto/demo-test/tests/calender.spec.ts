import { test, expect } from '@playwright/test';

test('Select range date from today to 5 days later', async ({ page }) => {

  await page.goto(
    'http://localhost:4200/pages/forms/datepicker',
    { waitUntil: 'networkidle' } //Check không còn request mạng nào hoạt động
  );

  // Input thứ 2 là Range Datepicker
  const rangeDatepicker = page.locator('nb-card nb-card-body input').nth(1);

  await expect(rangeDatepicker).toBeVisible();

  const today = new Date();

  const endDate = new Date(today);
  endDate.setDate(today.getDate() + 5);

  const startDay = today.getDate();
  const endDay = endDate.getDate();

  await rangeDatepicker.click();

  // Chọn ngày bắt đầu
  await page.locator('.day-cell')
    .getByText(`${startDay}`, { exact: true })
    .click();

  // Nếu ngày kết thúc nằm ở tháng tiếp theo
  if (
    today.getMonth() !== endDate.getMonth() ||
    today.getFullYear() !== endDate.getFullYear()
  ) {
    await page.locator('[data-name="chevron-right"]').click();
  }

  // Chọn ngày kết thúc
  await page.locator('.day-cell')
    .getByText(`${endDay}`, { exact: true })
    .click();

  // Tạo giá trị mong đợi theo format Nebular
  const expectedStart = today.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const expectedEnd = endDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  await expect(rangeDatepicker).toHaveValue(
    `${expectedStart} - ${expectedEnd}`
  );
});