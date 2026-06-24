# Web & API Auto Class

# Buổi 1: Installation

## Config Dev Environment

- Nodejs: [https://nodejs.org/en](https://nodejs.org/en)
- VS Code: https://code.visualstudio.com/
- Git: https://git-scm.com/

## Playwright Installation

Link: [https://playwright.dev/docs/intro](https://playwright.dev/docs/intro)

- Tạo thư mục demo-test
- Run command: npm init playwright@latest
  - Ý nghĩa: Lệnh này dùng để khởi tạo một dự án mới hoặc thêm Playwright vào một dự án hiện có.
- Giải thích ý nghĩa các file, thư mục:
  - Folder node-modules
  - Folder tests
  - Folder test-examples
  - File git-ignore
  - File package.json
  - File package-lock.json
  - File playwright.config.ts

## Test Execution Test With CLI

Note: CLI - Command Line Interface (Giao diện dòng lệnh / chạy lệnh bằng terminal)

Link - CLI: [https://playwright.dev/docs/test-cli](https://playwright.dev/docs/test-cli)

Link - Anotation: [https://playwright.dev/docs/test-annotations](https://playwright.dev/docs/test-annotations)

- Command: npx playwright test
  - Ý nghĩa: _Run all tests_
- Command: npx playwright show-report
  - Ý nghĩa: _Show latest test report_
- Command: npx playwright test --project=chromium
  - Ý nghĩa: _Run tests for a specific project_
- Command: npx playwright test --project=chromium --headed
  - Ý nghĩa: Run tests in headed browsers (default: headless)
- Command: npx playwright test tests/todo-page.spec.ts
  - Ý nghĩa: _Run a single test file_
- Run test with tag:
  - Test.skip
    - Ý nghĩa: Bỏ qua bài test chỉ định
  - Test.only
    - Ý nghĩa: Chỉ chạy bài test chỉ định

# Buổi 2: Run Example Test

## Test Execution Test With UI

Install extension: Playwright Test for VS Code

### Run test with extension

- Run all test
- Run từng file test or từng bài test
- Chọn test theo trình duyệt
- Debug
- Test với headed và headless

### Run test with UI mode

Link: [https://playwright.dev/docs/test-ui-mode](https://playwright.dev/docs/test-ui-mode)

- Command: npx playwrigh test --ui
- Demo
  - Success case
  - Fail case

## Clone Test Appilication
 https://github.com/bondar-artem/pw-practice-app
- URL:
  - Command: Git clone URL
  - Install project: npm i --force
    - Ý nghĩa: Ép npm cài package bất chấp một số cảnh báo hoặc xung đột.
  - Command run app: npm start
    - Localhost: 4200

## Test Structure (21)

Link: [https://playwright.dev/docs/writing-tests](https://playwright.dev/docs/writing-tests)

và [https://playwright.dev/docs/api/class-test#test-describe](https://playwright.dev/docs/api/class-test#test-describe)

- test
  - Lưu ý về promise, page
  - Giới thiệu về các hàm sử dụng page
  - Ví dụ
- test.describe

# Buổi 3: Locator

Note:

- Có 1 bài tập nhỏ thực hành trên lớp
- Hướng dẫn dùng extension pick locator

## Giới thiệu về DOM - 23

Xem thêm trong slide tham khảo

```html
<div id="key" class="parent sibling">
  <button class="child">Click me</button>
</div>
```

```text
Parent element: phần tử bên trên
Child element: phần tử bên trong
Sibling element: phần tử cùng cấp
```

## Locator Syntax Rules - 24

Link: [https://playwright.dev/docs/locators](https://playwright.dev/docs/locators)

Command: npx playwright test --ui

```ts
test("Locator syntax rules", async ({ page }) => {
  // by Tag name
  page.locator("input");

  // by ID
  page.locator("#inputEmail1");

  // by Class value
  page.locator(".shape-rectangle");

  // by attribute
  page.locator('[placeholder="Email"]');

  // by Class value (full)
  page.locator(
    '[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]',
  );

  // combine different selectors
  page.locator('input[placeholder="Email"][nbinput]');

  // by XPath (NOT RECOMMENDED)
  page.locator('//*[@id="inputEmail1"]');

  // by partial text match
  page.locator(':text("Using")');

  // by exact text match
  page.locator(':text-is("Using the Grid")');
});
```

## User-Facing Locators - 25

Link: [https://playwright.dev/docs/api/class-framelocator#frame-locator-get-by-role](https://playwright.dev/docs/api/class-framelocator#frame-locator-get-by-role)

```ts
// User-facing locators
page.getByRole("textbox", { name: "Email" });
page.getByRole("button", { name: "Sign in" });
page.getByText("Using the Grid");
```

[https://app.notion.com](https://app.notion.com)

## Child Element - 26

```ts
test("locating child elements", async ({ page }) => {
  await page.locator('nb-card nb-radio :text-is("Option 1")').click();
  await page
    .locator("nb-card")
    .locator("nb-radio")
    .locator(':text-is("Option 2")')
    .click();

  await page
    .locator("nb-card")
    .getByRole("button", { name: "Sign in" })
    .first()
    .click();

  await page.locator("nb-card").nth(3).getByRole("button").click();
});
```

## Parent Element - 27

```ts
test("locating parent elements", async ({ page }) => {
  await page
    .locator("nb-card", { hasText: "Using the Grid" })
    .getByRole("textbox", { name: "Email" })
    .click();
  await page
    .locator("nb-card", { has: page.locator("#inputEmail1") })
    .getByRole("textbox", { name: "Email" })
    .click();

  await page
    .locator("nb-card")
    .filter({ hasText: "Basic form" })
    .getByRole("textbox", { name: "Email" })
    .click();
  await page
    .locator("nb-card")
    .filter({ has: page.locator(".status-danger") })
    .getByRole("textbox", { name: "Password" })
    .click();

  await page
    .locator("nb-card")
    .filter({ has: page.locator("nb-checkbox") })
    .filter({ hasText: "Sign in" })
    .getByRole("textbox", { name: "Email" })
    .click();

  await page
    .locator(':text-is("Using the Grid")')
    .locator("..")
    .getByRole("textbox", { name: "Email" })
    .click();
});
```

Giới thiệu cơ bản: Hiểu được mối quan hệ parent-child. Dòng 1, 2, cuối

## Reusing Locators

```ts
test("Reusing the locators", async ({ page }) => {
  const basicForm = page.locator("nb-card").filter({ hasText: "Basic form" });
  const emailField = basicForm.getByRole("textbox", { name: "Email" });

  await emailField.fill("test@test.com");
  await basicForm.getByRole("textbox", { name: "Password" }).fill("Welcome123");
  await basicForm.locator("nb-checkbox").click();
  await basicForm.getByRole("button").click();

  await expect(emailField).toHaveValue("test@test.com");
});
```

## Hướng dẫn sử dụng Pick Locator

# Buổi 4: Assertion & Auto-Waiting

## Assertions - 30

```ts
test("assertions", async ({ page }) => {
  const basicFormButton = page
    .locator("nb-card")
    .filter({ hasText: "Basic form" })
    .locator("button");

  // General assertions
  const value = 5;
  expect(value).toEqual(5);

  const text = await basicFormButton.textContent();
  expect(text).toEqual("Submit");

  // Locator assertion
  await expect(basicFormButton).toHaveText("Submit");

  // Soft assertion
  await expect.soft(basicFormButton).toHaveText("Submit5");
  await basicFormButton.click();
});
```

## Extracting Values - 29

```ts
test("extracting values", async ({ page }) => {
  // single test value
  const basicForm = page.locator("nb-card").filter({ hasText: "Basic form" });
  const buttonText = await basicForm.locator("button").textContent();
  expect(buttonText).toEqual("Submit");

  // all text values
  const allRadioButtonsLabels = await page
    .locator("nb-radio")
    .allTextContents();
  expect(allRadioButtonsLabels).toContain("Option 1");

  // input value
  const emailField = basicForm.getByRole("textbox", { name: "Email" });
  await emailField.fill("test@test.com");
  const emailValue = await emailField.inputValue();
  expect(emailValue).toEqual("test@test.com");

  const placeholderValue = await emailField.getAttribute("placeholder");
  expect(placeholderValue).toEqual("Email");
});
```

## Auto-Waiting -31

Link web: https://the-internet.herokuapp.com/dynamic_loading/1 or [http://www.uitestingplayground.com/](http://www.uitestingplayground.com/)

Link: https://playwright.dev/docs/actionability

```ts
test("auto waiting", async ({ page }) => {
  const successButton = page.locator(".bg-success");

  await expect(successButton).toHaveText("Data loaded with AJAX get request.", {
    timeout: 20000,
  });
});
```

```ts
test("alternative waits", async ({ page }) => {
  const successButton = page.locator(".bg-success");

  // await page.waitForSelector('.bg-success')
  // await page.waitForResponse('http://uitestingplayground.com/ajaxdata')
  await page.waitForLoadState("networkidle");

  const text = await successButton.allTextContents();
  expect(text).toContain("Data loaded with AJAX get request.");
});
```

## Timeouts - 32

Kiến thức nâng cao, xem xét bỏ qua

Link: https://playwright.dev/docs/test-timeouts

```ts
// playwright.config.ts
export default defineConfig({
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  use: {
    actionTimeout: 0,
    navigationTimeout: 0,
  },
});
```

⇒ Kết thúc buổi 4

# Buổi 5, 6, 7: UI Components

Phần này quan trọng. Nếu không đủ sẽ chia làm 3 buổi.

## Input Fields - 33

```ts
test.describe("Form Layouts page", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();
  });

  test("input fields", async ({ page }) => {
    const usingTheGridEmailInput = page
      .locator("nb-card", { hasText: "Using the Grid" })
      .getByRole("textbox", { name: "Email" });

    await usingTheGridEmailInput.fill("test@test.com");
    await usingTheGridEmailInput.clear();
    await usingTheGridEmailInput.pressSequentially("test2@test.com", {
      delay: 500,
    });

    const inputValue = await usingTheGridEmailInput.inputValue();
    expect(inputValue).toEqual("test2@test.com");

    await expect(usingTheGridEmailInput).toHaveValue("test2@test.com");
  });
});
```

## Radio Buttons - 34

```ts
test("radio buttons", async ({ page }) => {
  const usingTheGridForm = page.locator("nb-card", {
    hasText: "Using the Grid",
  });

  // await usingTheGridForm.getByLabel('Option 1').check({ force: true })
  await usingTheGridForm
    .getByRole("radio", { name: "Option 1" })
    .check({ force: true });
  const radioStatus = await usingTheGridForm
    .getByRole("radio", { name: "Option 1" })
    .isChecked();
  expect(radioStatus).toBeTruthy();
  await expect(
    usingTheGridForm.getByRole("radio", { name: "Option 1" }),
  ).toBeChecked();

  await usingTheGridForm
    .getByRole("radio", { name: "Option 2" })
    .check({ force: true });
  expect(
    await usingTheGridForm.getByRole("radio", { name: "Option 1" }).isChecked(),
  ).toBeFalsy();
  expect(
    await usingTheGridForm.getByRole("radio", { name: "Option 2" }).isChecked(),
  ).toBeTruthy();
});
```

## Checkboxes - 35

Action: Click, check, uncheck

```ts
test("checkboxes", async ({ page }) => {
  await page.getByText("Modal & Overlays").click();
  await page.getByText("Toastr").click();

  await page
    .getByRole("checkbox", { name: "Hide on click" })
    .uncheck({ force: true });
  await page
    .getByRole("checkbox", { name: "Prevent arising of duplicate toast" })
    .check({ force: true });

  const allBoxes = page.getByRole("checkbox");
  for (const box of await allBoxes.all()) {
    await box.uncheck({ force: true });
    expect(await box.isChecked()).toBeFalsy();
  }
});
```

## Lists and Dropdowns - 36

Làm 1 ví dụ, bài tập về nhà là 1 trong các dropdown còn lại

Khi chữa bài làm bài tập tổng quát, theo vòng for cho tất cả

```ts
test("lists and dropdowns", async ({ page }) => {
  const dropDownMenu = page.locator("ngx-header nb-select");
  await dropDownMenu.click();

  const optionList = page.locator("nb-option-list nb-option");
  await expect(optionList).toHaveText(["Light", "Dark", "Cosmic", "Corporate"]);
  await optionList.filter({ hasText: "Cosmic" }).click();

  const header = page.locator("nb-layout-header");
  await expect(header).toHaveCSS("background-color", "rgb(50, 50, 89)");

  const colors = {
    Light: "rgb(255, 255, 255)",
    Dark: "rgb(34, 43, 69)",
    Cosmic: "rgb(50, 50, 89)",
    Corporate: "rgb(255, 255, 255)",
  };

  await dropDownMenu.click();
  for (const color in colors) {
    await optionList.filter({ hasText: color }).click();
    await expect(header).toHaveCSS("background-color", colors[color]);
    if (color !== "Corporate") {
      await dropDownMenu.click();
    }
  }
});
```

⇒ Kết thúc buổi 5

## Tooltips - 37

// Xem xét bỏ qua phần này

```ts
test("tooltips", async ({ page }) => {
  await page.getByText("Modal & Overlays").click();
  await page.getByText("Tooltip").click();

  const toolTipCard = page.locator("nb-card", {
    hasText: "Tooltip Placements",
  });
  await toolTipCard.getByRole("button", { name: "Top" }).hover();

  page.getByRole("tooltip");
  const tooltip = await page.locator("nb-tooltip").textContent();
  expect(tooltip).toEqual("This is a tooltip");
});
```

## Dialog Boxes - 38

```ts
test("dialog box", async ({ page }) => {
  await page.getByText("Tables & Data").click();
  await page.getByText("Smart Table").click();

  page.on("dialog", (dialog) => {
    expect(dialog.message()).toEqual("Are you sure you want to delete?");
    dialog.accept();
  });

  await page
    .getByRole("table")
    .locator("tr", { hasText: "mdo@gmail.com" })
    .locator(".nb-trash")
    .click();
  await expect(page.locator("table tr").first()).not.toHaveText(
    "mdo@gmail.com",
  );
});
```

## Web Tables - 39,40

```ts
test("web tables", async ({ page }) => {
  await page.getByText("Tables & Data").click();
  await page.getByText("Smart Table").click();

  // 1 get the row by any text in this row
  const targetRow = page.getByRole("row", { name: "twitter@outlook.com" });
  await targetRow.locator(".nb-edit").click();
  await page.locator("input-editor").getByPlaceholder("Age").clear();
  await page.locator("input-editor").getByPlaceholder("Age").fill("35");
  await page.locator(".nb-checkmark").click();

  // 2 get the row based on the value in the specific column
  await page.locator(".ng2-smart-pagination-nav").getByText("2").click();
  const targetRowById = page
    .getByRole("row", { name: "11" })
    .filter({ has: page.locator("td").nth(1).getByText("11") });
  await targetRowById.locator(".nb-edit").click();
  await page.locator("input-editor").getByPlaceholder("E-mail").clear();
  await page
    .locator("input-editor")
    .getByPlaceholder("E-mail")
    .fill("test@test.com");
  await page.locator(".nb-checkmark").click();
  await expect(targetRowById.locator("td").nth(5)).toHaveText("test@test.com");
});
```

⇒ Kết thúc buổi 6

## Date Picker - 41,42

```ts
test("datepicker", async ({ page }) => {
  await page.getByText("Forms").click();
  await page.getByText("Datepicker").click();

  const calendarInputField = page.getByPlaceholder("Form Picker");
  await calendarInputField.click();

  await page
    .locator('[class="day-cell ng-star-inserted"]')
    .getByText("1", { exact: true })
    .click();
  await expect(calendarInputField).toHaveValue("Jun 1, 2023");
});
```

```ts
test("datepicker", async ({ page }) => {
  await page.getByText("Forms").click();
  await page.getByText("Datepicker").click();

  const calendarInputField = page.getByPlaceholder("Form Picker");
  await calendarInputField.click();

  let date = new Date();
  date.setDate(date.getDate() + 500);

  const expectedDate = date.getDate().toString();
  const expectedMonthShort = date.toLocaleString("en-US", { month: "short" });
  const expectedMonthLong = date.toLocaleString("en-US", { month: "long" });
  const expectedYear = date.getFullYear();
  const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;

  let calendarMonthAndYear = await page
    .locator("nb-calendar-view-mode")
    .textContent();
  const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`;

  while (!calendarMonthAndYear.includes(expectedMonthAndYear)) {
    await page
      .locator('nb-calendar-pageable-navigation [data-name="chevron-right"]')
      .click();
    calendarMonthAndYear = await page
      .locator("nb-calendar-view-mode")
      .textContent();
  }

  await page
    .locator('[class="day-cell ng-star-inserted"]')
    .getByText(expectedDate, { exact: true })
    .click();
  await expect(calendarInputField).toHaveValue(dateToAssert);
});
```

## Sliders - 43

// Xem xét bỏ qua phần này - Nếu học tốt thì mới nên đưa vào

```ts
test("sliders", async ({ page }) => {
  // Update attribute
  // const tempGauge = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger circle')
  // await tempGauge.evaluate(node => {
  //   node.setAttribute('cx', '232.630')
  //   node.setAttribute('cy', '232.630')
  // })
  // await tempGauge.click()

  // Mouse movement
  const tempBox = page.locator(
    '[tabtitle="Temperature"] ngx-temperature-dragger',
  );

  await tempBox.scrollIntoViewIfNeeded();

  const box = await tempBox.boundingBox();
  const x = box.x + box.width / 2;
  const y = box.y + box.height / 2;

  await page.mouse.move(x, y);
  await page.mouse.down();
  await page.mouse.move(x + 100, y);
  await page.mouse.move(x + 100, y + 100);
  await page.mouse.up();

  await expect(tempBox).toContainText("30");
});
```

## Drag & Drop with iFrames (cần học)

Link: https://www.globalsqa.com/demo-site/draganddrop/

```ts
test("drag and drop with iframe", async ({ page }) => {
  await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");

  const frame = page.frameLocator('[rel-title="Photo Manager"] iframe');
  await frame
    .locator("li", { hasText: "High Tatras 2" })
    .dragTo(frame.locator("#trash"));

  // more precise control
  await frame.locator("li", { hasText: "High Tatras 4" }).hover();
  await page.mouse.down();
  await frame.locator("#trash").hover();
  await page.mouse.up();

  await expect(frame.locator("#trash li h5")).toHaveText([
    "High Tatras 2",
    "High Tatras 4",
  ]);
});
```

⇒ Kết thúc buổi 7

Hết mục này, bài tập về nhà sẽ là nhập userName, passWord, chọn option rồi ấn Submit

# Buổi 8,9: Page Object Model

Lưu ý: Sẽ cần chỉnh sửa 1 chút

- Tạo basePage để quy định hàm common
- Tạo hàm common waitForLoad() để đảm bảo page được load trước khi thực hiện các action khác

**1 buổi giới thiệu, làm bài demo**

- Giới thiệu về PageObject
- Chia thư mục, tổ chức code tạo class, import khi dùng trong file test
- Tối ưu hóa code cơ bản ở buổi 1
- ⇒ Bài tập về nhà: 1 bài tương tự bài trên lớp

**1 page object buổi 2**

- Datepicker page Object
- Tối ưu hóa code buổi 2 (xem xét bỏ, vì thực tế mình không dùng như này)

⇒ Refactor code

Code mình sẽ không hẳn giống cái này

```text
Framework Architecture
```

## What is Page Objects

Giải thích theo slide - Có thể giải thích simple, vào các phần sau luôn: tối đa 5p

## First Page Object

Thử code export class xem có dùng luôn được không? Mình nghĩ là được

```ts
import { Page } from "@playwright/test";

export class NavigationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async formLayoutsPage() {
    await this.page.getByText("Forms").click();
    await this.page.getByText("Form Layouts").click();
  }
}
```

```ts
import { test, expect } from "@playwright/test";
import { NavigationPage } from "../page-objects/navigationPage";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test("navigate to form page", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  await navigateTo.formLayoutsPage();
});
```

## Navigation Page Object

⇒ Xem xét bỏ qua, hoặc đưa vào mục refactor code

```ts
import { Locator, Page } from "@playwright/test";

export class NavigationPage {
  readonly page: Page;
  readonly formLayoutsMenuItem: Locator;
  readonly datePickerMenuItem: Locator;
  readonly smartTableMenuItem: Locator;
  readonly toastrMenuItem: Locator;
  readonly tooltipMenuItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.formLayoutsMenuItem = page.getByText("Form Layouts");
    this.datePickerMenuItem = page.getByText("Datepicker");
    this.smartTableMenuItem = page.getByText("Smart Table");
    this.toastrMenuItem = page.getByText("Toastr");
    this.tooltipMenuItem = page.getByText("Tooltip");
  }

  async formLayoutsPage() {
    await this.selectGroupMenuItem("Forms");
    await this.formLayoutsMenuItem.click();
  }

  async datepickerPage() {
    await this.selectGroupMenuItem("Forms");
    await this.datePickerMenuItem.click();
  }

  async smartTablePage() {
    await this.selectGroupMenuItem("Tables & Data");
    await this.smartTableMenuItem.click();
  }

  async toastrPage() {
    await this.selectGroupMenuItem("Modal & Overlays");
    await this.toastrMenuItem.click();
  }

  async tooltipPage() {
    await this.selectGroupMenuItem("Modal & Overlays");
    await this.tooltipMenuItem.click();
  }

  private async selectGroupMenuItem(groupItemTitle: string) {
    const groupMenuItem = this.page.getByTitle(groupItemTitle);
    const expandedState = await groupMenuItem.getAttribute("aria-expanded");
    if (expandedState === "false") {
      await groupMenuItem.click();
    }
  }
}
```

## Locators in Page Objects

```ts
test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test("navigate to form page", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  await navigateTo.formLayoutsPage();
  await navigateTo.datepickerPage();
  await navigateTo.smartTablePage();
  await navigateTo.toastrPage();
  await navigateTo.tooltipPage();
});
```

## Parametrized Methods

```ts
import { Locator, Page } from "@playwright/test";

export class FormLayoutsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async submitUsingTheGridFormWithCredentialsAndSelectOption(
    email: string,
    password: string,
    optionText: string,
  ) {
    const usingTheGridForm = this.page.locator("nb-card", {
      hasText: "Using the Grid",
    });
    await usingTheGridForm.getByRole("textbox", { name: "Email" }).fill(email);
    await usingTheGridForm
      .getByRole("textbox", { name: "Password" })
      .fill(password);
    await usingTheGridForm
      .getByRole("radio", { name: optionText })
      .check({ force: true });
    await usingTheGridForm.getByRole("button").click();
  }

  /** This method fills out the Inline form with user details */
  async submitInlineFormWithNameEmailAndCheckbox(
    name: string,
    email: string,
    rememberMe: boolean,
  ) {
    const inlineForm = this.page.locator("nb-card", { hasText: "Inline form" });
    await inlineForm.getByRole("textbox", { name: "Jane Doe" }).fill(name);
    await inlineForm.getByRole("textbox", { name: "Email" }).fill(email);
    if (rememberMe) {
      await inlineForm.getByRole("checkbox").check({ force: true });
    }
    await inlineForm.getByRole("button").click();
  }
}
```

```ts
import { test } from "@playwright/test";
import { NavigationPage } from "../page-objects/navigationPage";
import { FormLayoutsPage } from "../page-objects/formLayoutsPage";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test("parametrized methods", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const onFormLayoutsPage = new FormLayoutsPage(page);

  await navigateTo.formLayoutsPage();
  await onFormLayoutsPage.submitUsingTheGridFormWithCredentialsAndSelectOption(
    "test@test.com",
    "Welcome1",
    "Option 2",
  );
  await onFormLayoutsPage.submitInlineFormWithNameEmailAndCheckbox(
    "John Smith",
    "John@test.com",
    false,
  );
});
```

## Date Picker Page Object

```ts
import { expect, Page } from "@playwright/test";

export class DatepickerPage {
  constructor(private readonly page: Page) {}

  async selectCommonDatePickerDateFromToday(numberOfDaysFromToday: number) {
    const calendarInputField = this.page.getByPlaceholder("Form Picker");
    await calendarInputField.click();
    const dateToAssert = await this.selectDateInTheCalendar(
      numberOfDaysFromToday,
    );
    await expect(calendarInputField).toHaveValue(dateToAssert);
  }

  async selectDatepickerWithRangeFromToday(
    startDayFromToday: number,
    endDayFromToday: number,
  ) {
    const calendarInputField = this.page.getByPlaceholder("Range Picker");
    await calendarInputField.click();
    const dateToAssertStart =
      await this.selectDateInTheCalendar(startDayFromToday);
    const dateToAssertEnd = await this.selectDateInTheCalendar(endDayFromToday);
    const dateToAssert = `${dateToAssertStart} - ${dateToAssertEnd}`;
    await expect(calendarInputField).toHaveValue(dateToAssert);
  }

  private async selectDateInTheCalendar(numberOfDaysFromToday: number) {
    let date = new Date();
    date.setDate(date.getDate() + numberOfDaysFromToday);

    const expectedDate = date.getDate().toString();
    const expectedMonthShort = date.toLocaleString("en-US", { month: "short" });
    const expectedMonthLong = date.toLocaleString("en-US", { month: "long" });
    const expectedYear = date.getFullYear();
    const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;

    let calendarMonthAndYear = await this.page
      .locator("nb-calendar-view-mode")
      .textContent();
    const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`;

    while (!calendarMonthAndYear.includes(expectedMonthAndYear)) {
      await this.page
        .locator('nb-calendar-pageable-navigation [data-name="chevron-right"]')
        .click();
      calendarMonthAndYear = await this.page
        .locator("nb-calendar-view-mode")
        .textContent();
    }

    await this.page
      .locator('[class="day-cell ng-star-inserted"]')
      .getByText(expectedDate, { exact: true })
      .click();
    return dateToAssert;
  }
}
```

```ts
import { test } from "@playwright/test";
import { NavigationPage } from "../page-objects/navigationPage";
import { FormLayoutsPage } from "../page-objects/formLayoutsPage";
import { DatepickerPage } from "../page-objects/datepickerPage";

test("parametrized methods", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const onFormLayoutsPage = new FormLayoutsPage(page);
  const onDatepickerPage = new DatepickerPage(page);

  await navigateTo.formLayoutsPage();
  await onFormLayoutsPage.submitUsingTheGridFormWithCredentialsAndSelectOption(
    "test@test.com",
    "Welcome1",
    "Option 2",
  );
  await onFormLayoutsPage.submitInlineFormWithNameEmailAndCheckbox(
    "John Smith",
    "John@test.com",
    false,
  );
  await navigateTo.datepickerPage();
  await onDatepickerPage.selectCommonDatePickerDateFromToday(10);
  await onDatepickerPage.selectDatepickerWithRangeFromToday(6, 15);
});
```

## Page Object Manager

Xem xét bỏ phần này

```ts
import { Page } from "@playwright/test";
import { NavigationPage } from "../page-objects/navigationPage";
import { FormLayoutsPage } from "../page-objects/formLayoutsPage";
import { DatepickerPage } from "../page-objects/datepickerPage";

export class PageManager {
  private readonly page: Page;
  private readonly navigationPage: NavigationPage;
  private readonly formLayoutsPage: FormLayoutsPage;
  private readonly datepickerPage: DatepickerPage;

  constructor(page: Page) {
    this.page = page;
    this.navigationPage = new NavigationPage(this.page);
    this.formLayoutsPage = new FormLayoutsPage(this.page);
    this.datepickerPage = new DatepickerPage(this.page);
  }

  navigateTo() {
    return this.navigationPage;
  }

  onFormLayoutsPage() {
    return this.formLayoutsPage;
  }

  onDatepickerPage() {
    return this.datepickerPage;
  }
}
```

```ts
import { test } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test("navigate to form page", async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().formLayoutsPage();
  await pm.navigateTo().datepickerPage();
  await pm.navigateTo().smartTablePage();
  await pm.navigateTo().toastrPage();
  await pm.navigateTo().tooltipPage();
});

test("parametrized methods", async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().formLayoutsPage();
  await pm
    .onFormLayoutsPage()
    .submitUsingTheGridFormWithCredentialsAndSelectOption(
      "test@test.com",
      "Welcome1",
      "Option 2",
    );
  await pm
    .onFormLayoutsPage()
    .submitInlineFormWithNameEmailAndCheckbox(
      "John Smith",
      "John@test.com",
      false,
    );
  await pm.navigateTo().datepickerPage();
  await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(10);
  await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(6, 10);
});
```

## Page Object Helper Base

Xem xét bỏ phần này như có note trên đầu

# Buổi 10,11,12: Working With API

[https://playwright.dev/docs/api-testing](https://playwright.dev/docs/api-testing)

Không kết nối được vào trang web bằng máy công ty, mạng công ty.

## What is API

Slide

## Setup New Project

Giải thích về trang web, các API sử dụng, tag network → Fetch/XHR

Sign in → Tạo article → Delete article

Tạo new project → setup ban đầu → code ban đầu

Download Postman

```ts
test.beforeEach(async ({ page }) => {
  await page.goto("https://conduit.bondaracademy.com/");
});

test("has title", async ({ page }) => {
  await expect(page.locator(".navbar-brand")).toHaveText("conduit");
});
```

## Mocking API

```json
{
  "tags": ["automation", "playwright"]
}
```

```ts
import { test, expect } from "@playwright/test";
import tags from "../test-data/tags.json";

test.beforeEach(async ({ page }) => {
  await page.route("**/api/tags", async (route) => {
    await route.fulfill({
      body: JSON.stringify(tags),
    });
  });

  await page.goto("https://angular.realworld.io/");
});

test("has title", async ({ page }) => {
  await expect(page.locator(".navbar-brand")).toHaveText("conduit");
});
```

## Modify API Response

```ts
import { test, expect } from "@playwright/test";
import tags from "../test-data/tags.json";

test.beforeEach(async ({ page }) => {
  await page.route("**/api/tags", async (route) => {
    await route.fulfill({
      body: JSON.stringify(tags),
    });
  });

  await page.route("**/api/articles*", async (route) => {
    const response = await route.fetch();
    const responseBody = await response.json();
    responseBody.articles[0].title = "This is a test title";
    responseBody.articles[0].description = "This is a description";

    await route.fulfill({
      body: JSON.stringify(responseBody),
    });
  });

  await page.goto("https://angular.realworld.io/");
});

test("has title", async ({ page }) => {
  await expect(page.locator(".navbar-brand")).toHaveText("conduit");
  await expect(page.locator("app-article-list h1").first()).toContainText(
    "This is a test title",
  );
  await expect(page.locator("app-article-list p").first()).toContainText(
    "This is a description",
  );
});
```

⇒ Kết thúc buổi 10

## Perform API Request

// Sửa 1 article (đã làm bên trên)

// Delete article vừa sửa

Login tài khoản lấy Token ⇒ Tạo mới 1 article bằng API ⇒ Kiểm tra tồn tại trong tab Global

Xóa article bằng browser ⇒ Kiểm tra ko còn trong tab Global

```ts
test("delete article", async ({ page, request }) => {
  const response = await request.post(
    "https://api.realworld.io/api/users/login",
    {
      data: {
        user: { email: "pwtest@test.com", password: "Welcome1" },
      },
    },
  );

  const responseBody = await response.json();
  const accessToken = responseBody.user.token;
  const articleResponse = await request.post(
    "https://api.realworld.io/api/articles/",
    {
      data: {
        article: {
          tagList: [],
          title: "This is a test title",
          description: "This is a test description",
          body: "This is a test body",
        },
      },
      headers: {
        Authorization: `Token ${accessToken}`,
      },
    },
  );

  expect(articleResponse.status()).toEqual(201);
  await page.getByText("Global Feed").click();
  await page.getByText("This is a test title").click();
  await page.getByRole("button", { name: "Delete Article" }).first().click();
  await page.getByText("Global Feed").click();
  await expect(page.locator("app-article-list h1").first()).not.toContainText(
    "This is a test title",
  );
});
```

BTVN:

Hướng dẫn lấy slugId bằng hàm waitForResponse

Create article bằng browser ⇒ Xóa Article bằng API

⇒ Kết thúc buổi 11

## Intercept Browser API Response

⇒ Đã là bài tập về nhà, đến lớp chỉ chữa bài tập

```ts
test("intercept browser API response", async ({ page, request }) => {
  await page.route("**/api/articles*", async (route) => {
    const response = await route.fetch();
    const responseBody = await response.json();
    responseBody.articles[0].title = "This is a test title";
    responseBody.articles[0].description = "This is a description";

    await route.fulfill({
      body: JSON.stringify(responseBody),
    });
  });

  await page.goto("https://angular.realworld.io/");
  await expect(page.locator(".navbar-brand")).toHaveText("conduit");
  await expect(page.locator("app-article-list h1").first()).toContainText(
    "This is a test title",
  );
  await expect(page.locator("app-article-list p").first()).toContainText(
    "This is a description",
  );
});
```

## Sharing Authentication State

Tạo hàm đăng nhập bằng browser ⇒ Lưu kết quả trong file user.json ⇒ trong Config thêm project setup & setup thêm trong các project sử dụng

```ts
test("delete article", async ({ page, request }) => {
  const response = await request.post(
    "https://api.realworld.io/api/users/login",
    {
      data: {
        user: { email: "pwtest@test.com", password: "Welcome1" },
      },
    },
  );

  const responseBody = await response.json();
  const accessToken = responseBody.user.token;
  const articleResponse = await request.post(
    "https://api.realworld.io/api/articles/",
    {
      data: {
        article: {
          tagList: [],
          title: "This is a test title",
          description: "This is a test description",
          body: "This is a test body",
        },
      },
      headers: {
        Authorization: `Token ${accessToken}`,
      },
    },
  );

  expect(articleResponse.status()).toEqual(201);
  await page.getByText("Global Feed").click();
  await page.getByText("This is a test title").click();
  await page.getByRole("button", { name: "Delete Article" }).first().click();
  await page.getByText("Global Feed").click();
});
```

## API Authentication

Cập nhật accessToken bằng API login, thêm vào config để dùng chung ⇒ Xóa authentication ở các function call API

```ts
import { test as setup } from "@playwright/test";
import user from "../.auth/user.json";
import fs from "fs";

const authFile = ".auth/user.json";

setup("authentication", async ({ request }) => {
  const response = await request.post(
    "https://api.realworld.io/api/users/login",
    {
      data: {
        user: { email: "pwtest@test.com", password: "Welcome1" },
      },
    },
  );

  const responseBody = await response.json();
  const accessToken = responseBody.user.token;
  user.origins[0].localStorage[0].value = accessToken;
  fs.writeFileSync(authFile, JSON.stringify(user));

  process.env["ACCESS_TOKEN"] = accessToken;
});
```

```ts
use: {
  baseURL: 'http://localhost:4200/',
  globalsQaURL: 'https://www.globalsqa.com/demo-site/draganddrop/',
  // baseURL: process.env.DEV === '1' ? 'http://localhost:4200/'
  //   : process.env.STAGING === '1' ? 'http://localhost:4202/'
  //   : 'http://localhost:4201/',
}
```

```ts
test("delete article", async ({ page, request }) => {
  const articleResponse = await request.post(
    "https://api.realworld.io/api/articles/",
    {
      data: {
        article: {
          tagList: [],
          title: "This is a test title",
          description: "This is a test description",
          body: "This is a test body",
        },
      },
    },
  );

  expect(articleResponse.status()).toEqual(201);
  await page.getByText("Global Feed").click();
  await page.getByText("This is a test title").click();
  await page.getByRole("button", { name: "Delete Article" }).first().click();
  await page.getByText("Global Feed").click();
});
```

⇒ Kết thúc buổi 12

# Buổi 13, 14: Nâng Cao

Quay lại Project code thứ 2

## NPM Scripts and CLI Commands

```json
"scripts": {
  "ng": "ng",
  "start": "ng serve",
  "pageObjects-chrome": "npx playwright test usePageObjects.spec.ts --project=chromium",
  "pageObjects-firefox": "npx playwright test usePageObjects.spec.ts --project=firefox",
  "pageObjects-all": "npm run pageObjects-chrome && npm run pageObjects-firefox"
}
```

## Test Data Generator

[https://fakerjs.dev/api/](https://fakerjs.dev/api/)

Sử dụng Faker để gen data

import faker ⇒ Tạo data để điền vào input Form

## Test Retries

Xem xét bỏ qua

```text
Retry OFF
Retry ON
Worker #1
Worker #2
```

```ts
export default defineConfig({
  timeout: 40000,
  globalTimeout: 60000,
  expect: {
    timeout: 2000,
  },
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    trace: "on-first-retry",
  },
});
```

## Parallel Execution

Xem xét bỏ qua

```ts
test("parametrized methods", async ({ page }) => {
  const pm = new PageManager(page);
  const randomFullName = faker.person.fullName();
  const randomEmail = `${randomFullName.replace(" ", "")}${faker.number.int(1000)}@test.com`;

  await pm.navigateTo().formLayoutsPage();
  await pm
    .onFormLayoutsPage()
    .submitUsingTheGridFormWithCredentialsAndSelectOption(
      "test@test.com",
      "Welcome1",
      "Option 2",
    );
  await page.screenshot({ path: "screenshots/formsLayoutsPage.png" });
  const buffer = await page.screenshot();
  console.log(buffer.toString("base64"));
  await pm
    .onFormLayoutsPage()
    .submitInlineFormWithNameEmailAndCheckbox(
      randomFullName,
      randomEmail,
      false,
    );
  await page
    .locator("nb-card", { hasText: "Inline form" })
    .screenshot({ path: "screenshots/inlineForm.png" });
  await pm.navigateTo().datepickerPage();
});
```

## Screenshots and Video

```ts
// playwright.config.ts
export default defineConfig({
  timeout: 40000,
  globalTimeout: 60000,
  expect: {
    timeout: 2000,
  },
  use: {
    video: {
      mode: "on",
      size: { width: 1920, height: 1080 },
    },
  },
});
```

## Environment Variables (66)

Hướng dẫn sử dụng biến môi trường như bài hướng dẫn

Cách thứ 2 theo như Bookingcare. Thiết lập baseURL theo nhiều option

```ts
use: {
  baseURL: 'http://localhost:4200/',
  globalsQaURL: 'https://www.globalsqa.com/demo-site/draganddrop/',
  // baseURL: process.env.DEV === '1' ? 'http://localhost:4200/'
  //   : process.env.STAGING === '1' ? 'http://localhost:4202/'
  //   : 'http://localhost:4201/',
}
```

Xem xét bỏ qua nếu bài bị dài quá

## Configuration File

Giải thích về file config

Global section và Project section

Setup fullscreen trong file config

Sử dụng 1 file config khác cho test

```ts
import { defineConfig, devices } from "@playwright/test";
import type { TestOptions } from "./test-options";

require("dotenv").config();

export default defineConfig<TestOptions>({
  use: {
    globalsQaURL: "https://www.globalsqa.com/demo-site/draganddrop/",
    baseURL: "http://localhost:4200/",
  },
});
```

Xem xét bỏ qua nếu bài bị dài quá

⇒ Kết thúc buổi 13

## Fixture (quan trọng)

Test nhanh hơn với Fixture, so sánh thời gian (dùng luôn ví dụ trong course)

```ts
import { test as base } from "@playwright/test";

type TestOptions = {
  formLayoutsPage: string;
  pageManager: PageManager;
};

export const test = base.extend<TestOptions>({
  globalsQaURL: ["", { option: true }],

  formLayoutsPage: async ({ page }, use) => {
    await page.goto("/");
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();
    await use("");
    console.log("Tear Down");
  },

  pageManager: async ({ page, formLayoutsPage }, use) => {
    const pm = new PageManager(page);
    await use(pm);
  },
});
```

## Project Setup and Teardown

Xem xét bỏ nếu dài

Link tham khảo: [https://playwright.dev/docs/test-projects](https://playwright.dev/docs/test-projects)

Ví dụ: Likes Counter trong API web

Setup: tạo article bằng API

```text
Project setup
```

Project setup

```text
articleSetup
articleCleanup
regression
likeCounter
```

```ts
import { test, expect, request } from "@playwright/test";

test("Like counter increase", async ({ page }) => {
  await page.goto("https://angular.realworld.io/");
  await page.getByText("Global Feed").click();
  const firstLikeButton = page
    .locator("app-article-preview")
    .first()
    .locator("button");
  await expect(firstLikeButton).toContainText("0");
  await firstLikeButton.click();
  await expect(firstLikeButton).toContainText("1");
});
```

```ts
export default defineConfig({
  projects: [
    { name: "setup", testMatch: "auth.setup.ts" },
    {
      name: "articleSetup",
      testMatch: "newArticle.setup.ts",
      dependencies: ["setup"],
      teardown: "articleCleanup",
    },
    {
      name: "articleCleanup",
      testMatch: "articleCleanup.setup.ts",
    },
    {
      name: "regression",
      use: { ...devices["Desktop Chrome"], storageState: ".auth/user.json" },
      dependencies: ["setup"],
    },
    {
      name: "likeCounter",
      testMatch: "likesCounter.spec.ts",
      use: { ...devices["Desktop Chrome"], storageState: ".auth/user.json" },
      dependencies: ["articleSetup"],
    },
  ],
});
```

## Global Setup and Teardown

Xem xét bỏ nếu dài

Link: https://playwright.dev/docs/test-global-setup-teardown

```ts
import { request } from "@playwright/test";
import user from "../.auth/user.json";
import fs from "fs";

const authFile = ".auth/user.json";
const context = await request.newContext();

const responseToken = await context.post(
  "https://api.realworld.io/api/users/login",
  {
    data: {
      user: { email: "pwtest@test.com", password: "Welcome1" },
    },
  },
);

const responseBody = await responseToken.json();
const accessToken = responseBody.user.token;
user.origins[0].localStorage[0].value = accessToken;
fs.writeFileSync(authFile, JSON.stringify(user));
process.env["ACCESS_TOKEN"] = accessToken;

const articleResponse = await context.post(
  "https://api.realworld.io/api/articles/",
  {
    data: {
      article: {
        tagList: [],
        title: "Global Likes test article",
        description: "This is a test description",
        body: "This is a test body",
      },
    },
    headers: {
      Authorization: `Token ${process.env.ACCESS_TOKEN}`,
    },
  },
);

expect(articleResponse.status()).toEqual(201);
```

```ts
export default async function globalTeardown() {
  const context = await request.newContext();
  const deleteArticleResponse = await context.delete(
    `https://api.realworld.io/api/articles/${process.env.SLUGID}`,
    {
      headers: {
        Authorization: `Token ${process.env.ACCESS_TOKEN}`,
      },
    },
  );

  expect(deleteArticleResponse.status()).toEqual(204);
}
```

```ts
extraHTTPHeaders: {
  Authorization: `Token ${process.env.ACCESS_TOKEN}`,
},

globalSetup: require.resolve('./global-setup.ts'),
globalTeardown: require.resolve('./global-teardown.ts'),
```

## Test Tags

Link: https://playwright.dev/docs/test-annotations

```ts
test("navigate to form page", async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().formLayoutsPage();
  await pm.navigateTo().datepickerPage();
  await pm.navigateTo().smartTablePage();
  await pm.navigateTo().toastrPage();
  await pm.navigateTo().tooltipPage();
});

test("parametrized methods", async ({ page }) => {
  const pm = new PageManager(page);
  const randomFullName = faker.person.fullName();
  const randomEmail = `${randomFullName.replace(" ", "")}${faker.number.int(1000)}@test.com`;

  await pm.navigateTo().formLayoutsPage();
  await pm
    .onFormLayoutsPage()
    .submitUsingTheGridFormWithCredentialsAndSelectOption(
      process.env.USERNAME,
      process.env.PASSWORD,
      "Option 2",
    );
  await pm
    .onFormLayoutsPage()
    .submitInlineFormWithNameEmailAndCheckbox(
      randomFullName,
      randomEmail,
      false,
    );
});
```

## Mobile Device Emulator

```ts
projects: [
  {
    name: "mobile",
    use: {
      ...devices["iPhone 13 Pro"],
    },
  },
];
```

```ts
test("input fields", async ({ page }, testInfo) => {
  await page.goto("/");
  if (testInfo.project.name === "mobile") {
    await page.locator(".sidebar-toggle").click();
  }
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
  if (testInfo.project.name === "mobile") {
    await page.locator(".sidebar-toggle").click();
  }

  const usingTheGridEmailInput = page
    .locator("nb-card", { hasText: "Using the Grid" })
    .getByRole("textbox", { name: "Email" });
  await usingTheGridEmailInput.fill("test@test.com");
  await usingTheGridEmailInput.clear();
  await usingTheGridEmailInput.type("test2@test.com");
});
```

## Reporting

// Bỏ qua

## Visual Testing

// Bỏ qua

## Playwright with Docker Container

// Bỏ qua

## GitHub Actions and Argos CI

// Bỏ qua

# Buổi 15: Chữa bài tập lớn

Tạo project 2 bài test độc lập test chức năng trên browser như sau:

1. Tạo bản ghi
2. Delete bản ghi

Yêu cầu:

- Viết code theo POM
- Sử dụng fixture để login
- Sử dụng hook after xóa bài cho test 1 bằng API
- Sử dụng hook before tạo bài cho test 2 bằng API
