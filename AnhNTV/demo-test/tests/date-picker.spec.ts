// Vào link 'http://localhost:4200/pages/forms/datepicker'
// Chọn form input range-datepicker
// Chọn khoảng thời gian từ ngày hiện tại tới cách đó 5 ngày.
// Ví dụ: today = 28/6/2026 => range '28/6/2026 - 2/7/2026'
import { test, expect } from '@playwright/test';
test("range datepicker - chọn từ hôm nay tới 5 ngày sau", async ({ page }) => {
  // 1. Vào menu Forms
  await page.getByText("Forms").click();

  // 2. Vào mục Datepicker
  await page.getByText("Datepicker").click();

  // 3. Tìm ô input dạng range datepicker (chọn khoảng ngày)
  const rangeInputField = page.getByPlaceholder("Range Picker");

  // 4. Click vào ô input để mở calendar (lịch)
  await rangeInputField.click();

  // 5. Dùng JavaScript Date để lấy ngày hôm nay
  let startDate = new Date(); // hôm nay

  // 6. Tạo ngày kết thúc = hôm nay + 5 ngày
  let endDate = new Date();
  endDate.setDate(startDate.getDate() + 5);

  // 7. Chuẩn bị các giá trị để so sánh và hiển thị
  const startDay = startDate.getDate().toString(); // ngày (1–31)
  const endDay = endDate.getDate().toString();     // ngày (1–31)

  const startMonthShort = startDate.toLocaleString("en-US", { month: "short" }); // ví dụ: Jun
  const endMonthShort = endDate.toLocaleString("en-US", { month: "short" });     // ví dụ: Jul

  const startMonthLong = startDate.toLocaleString("en-US", { month: "long" });   // ví dụ: June
  const endMonthLong = endDate.toLocaleString("en-US", { month: "long" });       // ví dụ: July

  const startYear = startDate.getFullYear(); // ví dụ: 2026
  const endYear = endDate.getFullYear();     // ví dụ: 2026 hoặc 2027

  // 8. Chuẩn bị chuỗi hiển thị mà ta mong đợi trong ô input
  //    Ví dụ: "Jun 28, 2026 - Jul 2, 2026"
  const startDateToAssert = `${startMonthShort} ${startDay}, ${startYear}`;
  const endDateToAssert = `${endMonthShort} ${endDay}, ${endYear}`;
  const rangeToAssert = `${startDateToAssert} - ${endDateToAssert}`;

  // 9. Chuẩn bị chuỗi tháng + năm để so với calendar
  const startMonthAndYear = `${startMonthLong} ${startYear}`;
  const endMonthAndYear = `${endMonthLong} ${endYear}`;

  console.log(`
    startDate = ${startDate},
    endDate = ${endDate},
    startDay = ${startDay},
    endDay = ${endDay},
    startMonthShort = ${startMonthShort},
    endMonthShort = ${endMonthShort},
    startMonthLong = ${startMonthLong},
    endMonthLong = ${endMonthLong},
    startYear = ${startYear},
    endYear = ${endYear},
    rangeToAssert = ${rangeToAssert},
    startMonthAndYear = ${startMonthAndYear},
    endMonthAndYear = ${endMonthAndYear}
  `);

  // 10. Lấy text tháng + năm hiện tại đang hiển thị trên calendar
  let calendarMonthAndYear = await page
    .locator("nb-calendar-view-mode")
    .textContent();

  // 11. Nếu calendar chưa ở đúng tháng/năm của ngày bắt đầu,
  //     thì dùng vòng lặp click nút "chevron-right" để chuyển tháng
  while (!calendarMonthAndYear.includes(startMonthAndYear)) {
    await page
      .locator('nb-calendar-pageable-navigation [data-name="chevron-right"]')
      .click();
    calendarMonthAndYear = await page
      .locator("nb-calendar-view-mode")
      .textContent();
  }

  // 12. Chọn ngày bắt đầu (hôm nay) trên calendar
  await page
    .locator('[class="day-cell ng-star-inserted"]')
    .getByText(startDay, { exact: true })
    .click();

  // 13. Sau khi chọn ngày bắt đầu, calendar có thể vẫn ở cùng tháng
  //     hoặc chuyển sang tháng khác nếu khoảng ngày nằm ở tháng sau.
  //     Ta cần đảm bảo calendar hiển thị đúng tháng/năm của ngày kết thúc.
  calendarMonthAndYear = await page
    .locator("nb-calendar-view-mode")
    .textContent();

  while (!calendarMonthAndYear.includes(endMonthAndYear)) {
    await page
      .locator('nb-calendar-pageable-navigation [data-name="chevron-right"]')
      .click();
    calendarMonthAndYear = await page
      .locator("nb-calendar-view-mode")
      .textContent();
  }

  // 14. Chọn ngày kết thúc (hôm nay + 5 ngày) trên calendar
  await page
    .locator('[class="day-cell ng-star-inserted"]')
    .getByText(endDay, { exact: true })
    .click();

  // 15. Kiểm tra xem ô input đã hiển thị đúng khoảng ngày chưa
  await expect(rangeInputField).toHaveValue(rangeToAssert);
});
