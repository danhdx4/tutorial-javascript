import { Page as PlaywrightPage, expect } from "@playwright/test";
import { Page } from "./base.page";
import { PageUrl } from "../utils/constants";

export class DatePickerPage extends Page {
  readonly pageUrl: string;

  // Khởi tạo dữ liệu ban đầu cho object
  constructor(page: PlaywrightPage) {
    super(page);
    this.pageUrl = PageUrl.DATE_PICKER_URL;
  }

  /** Locators */
  formRangerPicker = this.page.getByPlaceholder("Range Picker");

  calendarMonthAndYearField = this.page.locator("nb-calendar-view-mode");

  nextMonthButton = this.page.locator("button.next-month");

  dayCell = this.page.locator(".day-cell:not(.bounding-month)");

  //================ FUNCTIONS =================

  async goto() {
    await this.page.goto(this.pageUrl);
  }

  async openRangePicker() {
    await this.formRangerPicker.click();
    // Lanh note:  các hàm chỉ gọi 1 action thì không cần thêm hàm
  }

  async selectStartDate(date: string) {
    await this.dayCell.getByText(date, { exact: true }).click();
    // Lanh note: Hàm này sẽ chọn sai ngày nếu có nhiều 2 ngày trùng nhau trong 1 tháng. Ví dụ: 1/7 và 1/8
  }

  async gotoExpectedMonth(expectedMonthAndYear: string) {
    while (
      !(await this.calendarMonthAndYearField.textContent())?.includes(
        expectedMonthAndYear,
      )
    ) {
      await this.nextMonthButton.click();
    }
  }

  async selectEndDate(date: string) {
    await this.dayCell.getByText(date, { exact: true }).click();
  }

  // Lanh note: hàm selectStartDate và selectEndDate có thể gộp lại thành 1 hàm selectDate(date: string) để tái sử dụng code

  async verifyRange(expectedValue: string) {
    await expect(this.formRangerPicker).toHaveValue(expectedValue);
    // Lanh note: hàm này không có ý nghĩa.
  }
}
