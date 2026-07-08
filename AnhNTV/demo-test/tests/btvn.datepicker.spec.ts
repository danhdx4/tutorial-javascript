import { test } from '@playwright/test';
import { DatePickerPage } from '../src/pages/date-picker.page';

test('date picker', async ({ page }) => {
  const datePicker = new DatePickerPage(page);

  await datePicker.goto();
  const expected = await datePicker.selectRange(5);
  await datePicker.expectRangeValue(expected);
});