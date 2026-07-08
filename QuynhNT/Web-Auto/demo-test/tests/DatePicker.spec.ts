import test from "@playwright/test";

import { DatePickerPage } from "../src/page/datepicker.page";

import { getRangeDate } from "../src/utils/helper";

test("Verify Date Picker", async ({ page }) => {
  const datePicker = new DatePickerPage(page);

  const {
    expectedDateCurrent,
    expectFutureDate,
    expectedMonthAndYear,
    datetoAssert,
  } = getRangeDate(5);

  await datePicker.goto();

  await datePicker.openRangePicker();

  await datePicker.selectStartDate(expectedDateCurrent);

  await datePicker.gotoExpectedMonth(expectedMonthAndYear);

  await datePicker.selectEndDate(expectFutureDate);

  await datePicker.verifyRange(datetoAssert);
});
