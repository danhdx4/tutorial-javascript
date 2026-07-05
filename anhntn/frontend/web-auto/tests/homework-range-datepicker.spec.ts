/**## Bài tập về nhà

1. Vào link 'http://localhost:4200/pages/forms/datepicker'
2. Chọn form input range-datepicker
3. Chọn khoảng thời gian từ ngày hiện tại tới cách đó 5 ngày. */

import { test, expect } from '@playwright/test'

test('Select range datepicker: from today to 5 days later', async ({ page }) => {
  // Navigate to datepicker page
  await page.goto('http://localhost:4200/pages/forms/datepicker')

  // Get the range-datepicker input field
  const rangePickerField = page.getByPlaceholder('Range Picker')

  // Click to open the date picker
  await rangePickerField.click()
  await page.waitForLoadState('networkidle')
  await page.waitForTimeout(300)

  // Tính toán ngày động (hôm nay và hôm nay + 5)
  const today = new Date()
  const endDate = new Date()
  endDate.setDate(today.getDate() + 5)

  const startDay = today.getDate().toString()
  const endDay = endDate.getDate().toString()
  const startMonthLong = today.toLocaleString('en-US', { month: 'long' })
  const endMonthLong = endDate.toLocaleString('en-US', { month: 'long' })
  const startMonthShort = today.toLocaleString('en-US', { month: 'short' })
  const endMonthShort = endDate.toLocaleString('en-US', { month: 'short' })
  const year = today.getFullYear()

  const expectedStartDate = `${startMonthShort} ${startDay}, ${year}`
  const expectedEndDate = `${endMonthShort} ${endDay}, ${year}`
  const expectedRangeValue = `${expectedStartDate} - ${expectedEndDate}`

  console.log('Expected range:', expectedRangeValue)

  // Get calendar view mode element
  const calendarMonthAndYearField = page.locator('nb-calendar-view-mode')

  // Navigate to start month if needed
  while (!(await calendarMonthAndYearField.textContent())?.includes(startMonthLong) ||
         !(await calendarMonthAndYearField.textContent())?.includes(year.toString())) {
    const nextButton = page.locator('button.next-month').first()
    await nextButton.click()
    await page.waitForTimeout(300)
  }

  // Click start date (hôm nay)
  await page
    .locator('[class="day-cell ng-star-inserted"]')
    .filter({ hasText: new RegExp(`^${startDay}$`) })
    .first()
    .click()
  await page.waitForTimeout(300)

  // Navigate to end month if different from start month
  if (startMonthLong !== endMonthLong) {
    while (!(await calendarMonthAndYearField.textContent())?.includes(endMonthLong)) {
      const nextButton = page.locator('button.next-month').first()
      await nextButton.click()
      await page.waitForTimeout(300)
    }
  }

  // Click end date (hôm nay + 5)
  await page
    .locator('[class="day-cell ng-star-inserted"]')
    .filter({ hasText: new RegExp(`^${endDay}$`) })
    .first()
    .click()
  await page.waitForTimeout(500)

  // Verify the range has been selected correctly
  await expect(rangePickerField).toHaveValue(expectedRangeValue)
  console.log('✓ Success! Range selected:', expectedRangeValue)
})
