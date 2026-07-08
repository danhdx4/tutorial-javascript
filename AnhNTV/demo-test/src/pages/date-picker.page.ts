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
  }

  async openRangePicker() {
    await this.rangeInput.click();
  }

  private buildRange(daysAhead: number) {
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
  }

  async expectRangeValue(expected: string) {
    await expect(this.rangeInput).toHaveValue(expected);
  }
}