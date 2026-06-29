import test, { expect } from "@playwright/test";
test(`verify Date Picker`, async ({ page }) => {
  await page.goto("http://localhost:4200/pages/forms/datepicker");
  const formRangerPicker = page.getByPlaceholder("Range Picker");
  await formRangerPicker.click();
  const calendarMonthAndYearField = page.locator("nb-calendar-view-mode");

  const currentDate = new Date();
  const featureDate = new Date(currentDate);
  featureDate.setDate(currentDate.getDate() + 5);

  const expectedDateCurrent = currentDate.getDate().toString();
  const expectFutureDate = featureDate.getDate().toString();

  const expectedMonthCurentShort = currentDate.toLocaleString("en-US", {
    month: "short",
  });
  const expectFutureMonthShort = featureDate.toLocaleString("en-US", {
    month: "short",
  });

  const expectedMonthCurrentLong = currentDate.toLocaleString("en-US", {
    month: "long",
  });
  const expectFutureMonthLong = featureDate.toLocaleString("en-US", {
    month: "long",
  });

  const expectedCurrentYear = currentDate.getFullYear();
  const expectFutureYear = featureDate.getFullYear();

  // Tháng cần hiển thị để chọn ngày kết thúc
  const expectedMonthAndYear = `${expectFutureMonthLong} ${expectFutureYear}`;
  const datetoAssert = `${expectedMonthCurentShort} ${expectedDateCurrent}, ${expectedCurrentYear} - ${expectFutureMonthShort} ${expectFutureDate}, ${expectFutureYear}`;
  console.log(
    `Ngay hien tai: ${expectedDateCurrent}
    Tháng hiện tại: ${expectedMonthCurentShort}
    Năm hiện tại: ${expectedCurrentYear}
    Ngày tương lai: ${expectFutureDate}
    Tháng tương lai: ${expectFutureMonthShort}
    Năm tương lai: ${expectFutureYear}
    Bộ ngày đúng sau khi chọn: ${datetoAssert}`,
  );
  // Chọn ngày bắt đầu
  await page
    .locator(".day-cell:not(.bounding-month)") //Chọn tất cả các ô ngày thuộc tháng hiện tại, bỏ qua các ngày của tháng trước hoặc tháng sau.
    .getByText(expectedDateCurrent, { exact: true })
    .click();

  // Chỉ chuyển tháng nếu ngày kết thúc ở tháng khác
  while (
    !(await calendarMonthAndYearField.textContent())?.includes(
      expectedMonthAndYear,
    )
  ) {
    await page.locator("button.next-month").click();
  }

  // Chọn ngày kết thúc
  await page
    .locator(".day-cell:not(.bounding-month)")
    .getByText(expectFutureDate, { exact: true })
    .click();

  // Verify
  await expect(formRangerPicker).toHaveValue(datetoAssert);
});
