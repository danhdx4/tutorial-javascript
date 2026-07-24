import { expect, Locator, Page } from '@playwright/test';
import { buildRange } from '../helpers/date.helper';

export class DatePickerPage {
  readonly rangeInput: Locator;
  readonly nextMonthButton: Locator;
  readonly dayCells: Locator;

  constructor(private page: Page) {
    this.rangeInput = page.getByPlaceholder('Range Picker');
    this.nextMonthButton = page.locator('.next-month');
    this.dayCells = page.locator('.range-cell.day-cell.ng-star-inserted');
  }

  async goto(): Promise<void> {
    await this.page.goto('/pages/forms/datepicker');
  }

  // async openRangePicker() {
  //   await this.rangeInput.click();==> AnhNTV: bỏ
  //   Lanh note: các hàm chỉ gọi 1 action thì không cần thêm hàm

  async selectRange(daysAhead: number): Promise<string> {
    const { start, end, expected } = buildRange(daysAhead);

    // mở range picker trực tiếp thay vì tạo hàm riêng
    await this.rangeInput.click();

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
    // Trả lời: Đúng, expected chỉ có ý nghĩa khi dùng để verify. Nếu không verify thì việc return expected không cần thiết.
    // Tuy nhiên em vẫn giữ để test có thể dùng expected ở ngoài nếu cần.
  }

  // async expectRangeValue(expected: string) {
  //   await expect(this.rangeInput).toHaveValue(expected); ==> Bỏ
  //   Lanh note: hàm này không có ý nghĩa, vì expected là giá trị mà em vừa chọn, nên chắc chắn nó sẽ bằng nhau
  //
  // }

  async expectRangeValue(expected: string) {
    await expect(this.rangeInput).toHaveValue(expected);
  }
};