// Bài tập về nhà

// 1. Vào link 'http://localhost:4200/pages/forms/datepicker'
// 2. Chọn form input range-datepicker
// 3. Chọn khoảng thời gian từ ngày hiện tại tới cách đó 5 ngày.

// - Ví dụ: today = 28/6/2026 => range '28/6/2026 - 2/7/2026'

import { test, expect } from "@playwright/test";

test("Selected date calendar - pick current date + 15", async ({ page }) => {
  await page.goto("http://localhost:4200/pages/extra-components/calendar");

  const selectedDateCalendarContainer = page
    .locator("div.calendar-container")
    .filter({
      has: page.locator("span.subtitle", { hasText: "Selected date:" }),
    })
    .first();

  const monthYearButton = selectedDateCalendarContainer.locator(
    "nb-calendar-view-mode button",
  );

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 15);

  const targetMonthAndYear = targetDate.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  while (!(await monthYearButton.textContent())?.includes(targetMonthAndYear)) {
    await selectedDateCalendarContainer.locator("button.next-month").click();
  }

  await selectedDateCalendarContainer
    .locator("nb-calendar-day-cell:not(.bounding-month)")
    .filter({
      has: page
        .locator("div.cell-content")
        .filter({ hasText: new RegExp(`^\\s*${targetDate.getDate()}\\s*$`) }),
    })
    .first()
    .click();

  const expectedSelectedDate = targetDate.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  await expect(
    selectedDateCalendarContainer.locator("span.subtitle"),
  ).toContainText(`Selected date: ${expectedSelectedDate}`);
});

test("Selected range calendar - start today+3 end start+100", async ({
  page,
}) => {
  await page.goto("http://localhost:4200/pages/extra-components/calendar");

  const selectedRangeCalendarContainer = page
    .locator("div.calendar-container")
    .filter({
      has: page.locator("span.subtitle", { hasText: "Selected range:" }),
    })
    .first();

  const monthYearButton = selectedRangeCalendarContainer.locator(
    "nb-calendar-view-mode button",
  );

  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 3);
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 100);

  const pickRangeDate = async (targetDate: Date) => {
    const targetMonthAndYear = targetDate.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });

    while (
      !(await monthYearButton.textContent())?.includes(targetMonthAndYear)
    ) {
      await selectedRangeCalendarContainer.locator("button.next-month").click();
    }

    await selectedRangeCalendarContainer
      .locator("nb-calendar-range-day-cell:not(.bounding-month)")
      .filter({
        has: page
          .locator("div.cell-content")
          .filter({ hasText: new RegExp(`^${targetDate.getDate()}$`) }),
      })
      .first()
      .click();
  };

  await pickRangeDate(startDate);
  await pickRangeDate(endDate);

  const expectedStartDate = startDate.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const expectedEndDate = endDate.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  await expect(
    selectedRangeCalendarContainer.locator("span.subtitle"),
  ).toContainText(`Selected range: ${expectedStartDate} - ${expectedEndDate}`);
});

test("BTVN Range date picker", async ({ page }) => {
  // navigate to date picker page
  await page.goto("http://localhost:4200/pages/forms/datepicker");
  const formPickerField = page.getByPlaceholder("Range Picker");

  await formPickerField.click();
  const rangeCalendar = page.locator("nb-calendar-range");
  //rangeCalendar là element chứa calendar range picker, trong đó có 2 calendar, 1 calendar là start date và 1 calendar là end date
  const calendarMonthAndYearField = rangeCalendar.locator(
    "nb-calendar-view-mode button",
  );

  // Khai báo startDate là ngày hiện tại + 2 ngày và endDate là ngày hiện tại + 35 ngày
  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 2);
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 100);

  const expectedStartDate = startDate.getDate().toString(); // hàm lấy ra ngày của startDate
  const expectedStartMonthShort = startDate.toLocaleString("en-US", {
    month: "short",
  }); // hàm lấy ra tháng của startDate theo định dạng ngắn (ví dụ: Jan, Feb, Mar, ...)
  const expectedStartMonthLong = startDate.toLocaleString("en-US", {
    month: "long",
  }); // hàm lấy ra tháng của startDate theo định dạng dài (ví dụ: January, February, March, ...)
  const expectedStartYear = startDate.getFullYear(); // hàm lấy ra năm của startDate
  const dateToAssertStart = `${expectedStartMonthShort} ${expectedStartDate}, ${expectedStartYear}`; // hàm tạo ra chuỗi ngày tháng năm của startDate theo định dạng "MMM dd, yyyy" (ví dụ: Jan 01, 2022)
  const expectedStartMonthAndYear = `${expectedStartMonthLong} ${expectedStartYear}`; // hàm tạo ra chuỗi tháng năm của startDate theo định dạng "MMMM yyyy" (ví dụ: January 2022)

  const expectedEndDate = endDate.getDate().toString(); // hàm lấy ra ngày của endDate
  const expectedEndMonthShort = endDate.toLocaleString("en-US", {
    month: "short",
  }); // hàm lấy ra tháng của endDate theo định dạng ngắn (ví dụ: Jan, Feb, Mar, ...)
  const expectedEndMonthLong = endDate.toLocaleString("en-US", {
    month: "long",
  }); // hàm lấy ra tháng của endDate theo định dạng dài (ví dụ: January, February, March, ...)
  const expectedEndYear = endDate.getFullYear(); // hàm lấy ra năm của endDate
  const dateToAssertEnd = `${expectedEndMonthShort} ${expectedEndDate}, ${expectedEndYear}`; // hàm tạo ra chuỗi ngày tháng năm của endDate theo định dạng "MMM dd, yyyy" (ví dụ: Jan 01, 2022)
  const expectedEndMonthAndYear = `${expectedEndMonthLong} ${expectedEndYear}`; // hàm tạo ra chuỗi tháng năm của endDate theo định dạng "MMMM yyyy" (ví dụ: January 2022)

  console.log(`
          startDate = ${startDate},
          endDate = ${endDate},
          expectedStartDate = ${expectedStartDate},
          expectedStartMonthShort = ${expectedStartMonthShort},
          expectedStartMonthLong = ${expectedStartMonthLong},
          expectedStartYear = ${expectedStartYear},
          dateToAssertStart = ${dateToAssertStart},
          expectedStartMonthAndYear = ${expectedStartMonthAndYear},
          expectedEndDate = ${expectedEndDate},
          expectedEndMonthShort = ${expectedEndMonthShort},
          expectedEndMonthLong = ${expectedEndMonthLong},
          expectedEndYear = ${expectedEndYear},
          dateToAssertEnd = ${dateToAssertEnd},
          expectedEndMonthAndYear = ${expectedEndMonthAndYear}
          result = ${dateToAssertStart} - ${dateToAssertEnd}
          `);
  // hàm pickDate sẽ nhận vào một targetDate và thực hiện các bước để chọn ngày đó trong calendar range picker
  const pickDate = async (targetDate: Date) => {
    const targetMonthAndYear = targetDate.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });

    // Điều hướng đến đúng tháng/năm đang cần chọn.
    while (
      !(await calendarMonthAndYearField.textContent())?.includes(
        targetMonthAndYear,
      )
    ) {
      await rangeCalendar.locator("button.next-month").click(); // Click vào button next-month cho đến khi text content của element calendarMonthAndYearField chứa targetMonthAndYear
    }
    // Chọn ngày trong tháng hiện tại.
    await rangeCalendar
      .locator("nb-calendar-range-day-cell:not(.bounding-month)")
      .filter({
        has: page
          .locator("div.cell-content")
          .filter({ hasText: new RegExp(`^${targetDate.getDate()}$`) }), // Lọc ra các cell có text content là ngày cần chọn, ví dụ: nếu targetDate là 28/6/2026 thì sẽ lọc ra các cell có text content là "28"
      })
      .first()
      .click(); // Click vào cell đầu tiên trong danh sách các cell đã lọc ra, vì có thể có nhiều cell có cùng text content (ví dụ: 28/6/2026 và 28/7/2026 đều có text content là "28") và click vào cell đó để chọn ngày.
  };
  // pickDate sẽ được gọi hai lần, một lần cho startDate và một lần cho endDate
  // Click chọn Start Date, sau đó chọn End Date.
  await pickDate(startDate); // pickDate sẽ thực hiện các bước để chọn startDate trong calendar range picker
  await pickDate(endDate); // pickDate sẽ thực hiện các bước để chọn endDate trong calendar range picker

  // Assert giá trị của form input range-datepicker
  await expect(formPickerField).toHaveValue(
    `${dateToAssertStart} - ${dateToAssertEnd}`,
  ); // check giá trị của form input range-datepicker có đúng với giá trị mong đợi hay không, nếu đúng thì test case pass, nếu sai thì test case fail
});
