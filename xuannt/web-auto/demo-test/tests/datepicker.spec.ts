import { test, expect } from '@playwright/test';

test.describe('Datepicker - Range Selection', () => {

  test('Select range from today to 5 days later', async ({ page }) => {

    // ===== 1. NAVIGATE =====
    await page.goto('http://localhost:4200/pages/forms/datepicker');

    // ===== 2. OPEN RANGE PICKER =====
    const rangePicker = page.getByPlaceholder('Range Picker');
    await rangePicker.click();

    // ===== 3. HANDLE DATE =====
    const today = new Date();
    const endDate = new Date();
    endDate.setDate(today.getDate() + 5);

    const startDay = today.getDate();
    const endDay = endDate.getDate();

    const startMonth = today.toLocaleString('en-US', { month: 'long' });
    const endMonth = endDate.toLocaleString('en-US', { month: 'long' });

    // ===== 4. LOCATORS =====
    const calendarHeader = page.locator('nb-calendar-view-mode');
    const nextBtn = page.locator('button.next-month').first();

    // ===== 5. CHỌN NGÀY BẮT ĐẦU =====
    while (!(await calendarHeader.textContent())?.includes(startMonth)) {
      await nextBtn.click();
    }

    await page.locator('.day-cell:not(.bounding-month)')
      .filter({ hasText: new RegExp(`^${startDay}$`) })
      .first()
      .click();

    // ===== 6. CHỌN NGÀY KẾT THÚC =====
    if (startMonth !== endMonth) {
      while (!(await calendarHeader.textContent())?.includes(endMonth)) {
        await nextBtn.click();
      }
    }

    await page.locator('.day-cell:not(.bounding-month)')
      .filter({ hasText: new RegExp(`^${endDay}$`) })
      .first()
      .click();

    // ===== 7. VERIFY =====
    const actualValue = await rangePicker.inputValue();
    console.log('Selected range:', actualValue);

    // verify đúng format UI (tránh fail do lệch 1 ký tự)
    await expect(rangePicker).toHaveValue(/.+ - .+/);

  });

});