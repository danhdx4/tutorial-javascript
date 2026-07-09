# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: date.picker.spec.ts >> date picker - form
- Location: src\tests\date.picker.spec.ts:5:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:4200/pages/forms/datepicker
Call log:
  - navigating to "http://localhost:4200/pages/forms/datepicker", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: localhost
      - text: refused to connect.
    - generic [ref=e10]:
      - paragraph [ref=e11]: "Try:"
      - list [ref=e12]:
        - listitem [ref=e13]: Checking the connection
        - listitem [ref=e14]:
          - link "Checking the proxy and the firewall" [ref=e15] [cursor=pointer]:
            - /url: "#buttons"
    - generic [ref=e16]: ERR_CONNECTION_REFUSED
  - generic [ref=e17]:
    - button "Reload" [ref=e19] [cursor=pointer]
    - button "Details" [ref=e20] [cursor=pointer]
```

# Test source

```ts
  1  | import { Page as PlaywrightPage, expect } from "@playwright/test";
  2  | import { Page } from "./base.page";
  3  | import { PageUrl } from "../utils/constants";
  4  | 
  5  | export class DatePickerPage extends Page {
  6  |     readonly pageUrl: string;
  7  | 
  8  |     // Khởi tạo dữ liệu ban đầu cho object
  9  |     constructor(page: PlaywrightPage) {
  10 |         super(page);
  11 |         this.pageUrl = PageUrl.DATE_PICKER_URL;
  12 |     }
  13 | 
  14 |     /** Locators */
  15 |     get formPickerField() { return this.page.getByPlaceholder("Form Picker"); }
  16 |     get rangePickerField() { return this.page.getByPlaceholder("Range Picker"); }
  17 |     get calendarContainer() { return this.page.locator("nb-calendar"); }
  18 |     get calendarMonthAndYearField() { return this.page.locator("nb-calendar-view-mode"); }
  19 |     get nextBtn() { return this.page.locator("button.next-month"); }
  20 | 
  21 |     //Action & Assertion functions
  22 |     async goto() {
> 23 |         const response = await this.page.goto(this.pageUrl);
     |                                          ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:4200/pages/forms/datepicker
  24 |         expect(response?.status()).toBeLessThan(400);
  25 |     }
  26 | 
  27 |     async waitForLoad() {
  28 |         await this.page.waitForURL(this.pageUrl);
  29 |         await expect(super.logo).toHaveText("PW-test");
  30 |     }
  31 | 
  32 |     async chooseTargetDate(date: string, monthYear: string) {
  33 |         while (
  34 |             !(await this.calendarMonthAndYearField.textContent())?.includes(monthYear)
  35 |         ) {
  36 |             await this.nextBtn.click();
  37 |         }
  38 |         const targetDate = this.page.locator(".day-cell.ng-star-inserted:not(.bounding-month)").getByText(date, { exact: true });
  39 |         await targetDate.click();
  40 |     }
  41 | }
```