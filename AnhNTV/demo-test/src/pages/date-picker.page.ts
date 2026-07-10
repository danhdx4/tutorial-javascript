import { expect, Locator, Page } from '@playwright/test';

export class DatePickerPage {
  readonly rangeInput: Locator;
  readonly nextMonthButton: Locator;
  readonly dayCells: Locator;

  constructor(private page: Page) {
    this.rangeInput = page.getByPlaceholder('Range Picker');
    this.nextMonthButton = page.locator('.next-month');
    this.dayCells = page.locator('.range-cell.day-cell.ng-star-inserted');
  }

  async goto() {
    await this.page.goto('http://localhost:4200/pages/forms/datepicker');
    // Lanh note: Em đã định nghĩa baseURL trong file config rồi, thì không cần gọi ra đây nữa
    // Nên đưa URL vào biến constants để tái sử dụng code, tránh hardcode
  }

  async openRangePicker() {
    await this.rangeInput.click();
    // Lanh note:  các hàm chỉ gọi 1 action thì không cần thêm hàm
  }

  private buildRange(daysAhead: number) {
    // Lanh note: hàm này không phụ thuộc vào class, nên có thể tách ra thành 1 helper function để tái sử dụng code
    const start = new Date();
    const end = new Date(start);
    end.setDate(start.getDate() + daysAhead);

    const expected =
      `${start.toLocaleString('en-US', { month: 'short' })} ${start.getDate()}, ${start.getFullYear()} - ` +
      `${end.toLocaleString('en-US', { month: 'short' })} ${end.getDate()}, ${end.getFullYear()}`;

    return { start, end, expected };
  }

  async selectRange(daysAhead: number): Promise<string> {
    const { start, end, expected } = this.buildRange(daysAhead);

    await this.openRangePicker();

    await this.dayCells
      .getByText(start.getDate().toString(), { exact: true })
      .click();

    if (
      start.getMonth() !== end.getMonth() ||
      start.getFullYear() !== end.getFullYear()
    ) {
      await this.nextMonthButton.click();
    }

    await this.dayCells
      .getByText(end.getDate().toString(), { exact: true })
      .click();

    return expected;
    // Lanh note: chị chưa hiểu expected này để làm gì, nếu là để verify thì nên đưa vào hàm verifyRangeValue
  }

  async expectRangeValue(expected: string) {
    await expect(this.rangeInput).toHaveValue(expected);
    // Lanh note: hàm này không có ý nghĩa, vì expected là giá trị mà em vừa chọn, nên chắc chắn nó sẽ bằng nhau
  }
}