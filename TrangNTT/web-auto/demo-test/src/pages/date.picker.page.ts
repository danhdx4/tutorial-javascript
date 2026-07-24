import { Page as PlaywrightPage, expect } from "@playwright/test";
import { basePage } from "./base.page";
import { PageUrl } from "../utils/constants";

export class DatePickerPage extends basePage {
  readonly pageUrl: string;

  constructor(page: PlaywrightPage) {
    super(page);
    this.pageUrl = PageUrl.DATE_PICKER_URL;
  }

  /** Locators */

  rangeDatePicker = this.page.locator("nb-card nb-card-body input").nth(1);

  nextMonthBtn = this.page.locator('[data-name="chevron-right"]');

  dayCell = this.page.locator(".day-cell");

  /** Action */

  async goto() {
    const response = await this.page.goto(this.pageUrl, {
      waitUntil: "networkidle",
    });

    await expect(response?.status()).toBeLessThan(400);
  }

  async waitForLoad() {
    await this.page.waitForURL(this.pageUrl);
    await expect(this.rangeDatePicker).toBeVisible();
  }

  async openRangeDatePicker() {
    await this.rangeDatePicker.click();
  }

  async selectDay(day: number) {
    await this.dayCell.getByText(`${day}`, { exact: true }).click();
    // Lanh note: Hàm này sẽ chọn sai ngày nếu có nhiều 2 ngày trùng nhau trong 1 tháng. Ví dụ: 1/7 và 1/8
  }

  async nextMonth() {
    await this.nextMonthBtn.click();
    // Lanh note:  các hàm chỉ gọi 1 action thì không cần thêm hàm 
  }

  async selectRangeDate(startDate: Date, endDate: Date) {
    await this.openRangeDatePicker();

    await this.selectDay(startDate.getDate());

    if (
      startDate.getMonth() !== endDate.getMonth() ||
      startDate.getFullYear() !== endDate.getFullYear()
    ) {
      await this.nextMonth();
    }

    await this.selectDay(endDate.getDate());
  }

  async verifySelectedDate(startDate: Date, endDate: Date) {
    const expectedStart = startDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    const expectedEnd = endDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    await expect(this.rangeDatePicker).toHaveValue(
      `${expectedStart} - ${expectedEnd}`,
    );
  }
}
