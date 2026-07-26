# Web & API Auto Class

# Buổi 1: Installation

## Nội Dung Cần Đạt

- Cài đặt đầy đủ môi trường: Node.js, VS Code, Git
- Khởi tạo dự án Playwright bằng lệnh: <code>npm init playwright@latest</code>
- Hiểu cấu trúc thư mục và ý nghĩa các file sinh ra sau khi init
- Chạy test bằng CLI với các lệnh cơ bản và annotation (skip/only)
- Tự tạo thư mục personal/web-auto và init project Playwright thành công

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

## Nội Dung Cần Đạt

- Cài đặt extension Playwright Test for VS Code và chạy test bằng extension
- Cài đặt ứng dụng pw-practice-app bằng <code>npm i --force</code>
- Khởi chạy app tại localhost:4200 bằng lệnh <code>npm start</code>
- Viết và chạy bài test xác nhận app hoạt động thành công trên localhost:4200

## Install Test Appilication

- Tại thư mục pw-practice-app của dự án
  - Install project: npm i --force
    - Ý nghĩa: Ép npm cài package bất chấp một số cảnh báo hoặc xung đột.
  - Command run app: npm start
    - Localhost: 4200

## Test Execution Test With UI

Install extension: Playwright Test for VS Code

### Run test with extension

- Run all test
- Run từng file test or từng bài test
- Chọn test theo trình duyệt
- Debug
- Test với headed và headless

# Buổi 3: Locator

## Nội Dung Cần Đạt

- Hiểu về cấu trúc DOM của web
- Định vị phần tử bằng common locator
- Định vị phần tử bằng built-in locator
- Sử dụng Filter & Chaining để định vị phần tử phức tạp

## Giới thiệu về DOM

Xem thêm trong slide tham khảo

## Common Locator

Các loại thường dùng

- Sử dụng tagName
  - page.locator("input");
- Sử dụng ID
  - page.locator('#inputEmail1')
- Sử dụng Class
  - page.locator('.shape-rectangle')
- Sử dụng XPath
  - page.locator('//button[text()="Sign in"]')

## Built-in Locator

Các hàm định vị phần tử được viết riêng cho playwright
Link: [https://playwright.dev/docs/locators](https://playwright.dev/docs/locators)

- getByRole()
  - page.getByRole('button', { name: 'Sign in' })
- getByText()
  - page.getByText('Option 1')
- getByLabel()
  - page.getByLabel('Email')
- getByPlaceholder()
  - page.getByPlaceholder('Jane Doe')

## Filter & Chaining

### Filter

Định vị phần tử dựa vào lọc các thuộc tính con của nó

- page.locator('nb-card') .filter({ hasText: 'Using the Grid' })

### Chaining

Định vị phần tử dựa vào thuộc tính div cha của nó

- page.locator('.using-grid') .locator('button')

## Bài tập thực hành

Vào page layout URL: http://localhost:4200/pages/forms/layouts

Định vị các phần tử trong các form:

- Inline form
- Using thr Grid
- Basic form
- Form without lables
- Block form
- Horizontal form

# Buổi 4: Assertion & Auto-Waiting

## Nội Dung Cần Đạt

- Hiểu mục đích của assertion trong auto test
- Biết sử dụng `expect()` để kiểm tra text, value, attribute và trạng thái phần tử
- Phân biệt được hard assertion, soft assertion và khi nào nên dùng từng loại
- Hiểu cơ chế auto-waiting của Playwright trong các hành động và assertion

## Assertions

Link: https://playwright.dev/docs/test-assertions

Assertions là xác minh kết quả thực tế của ứng dụng có khớp với kết quả mong đợi hay không.

### General assertions

- General Assertion dùng để kiểm tra các giá trị tĩnh hoặc dữ liệu chung không trực tiếp nằm trên UI (như biến, chuỗi, số, trạng thái API).
- Đặc điểm: Thực hiện ngay lập tức (đồng bộ) mà không có cơ chế auto-waiting hay retry lại.

### Locator assertion

- Đây là loại assertion được thiết kế chuyên biệt cho các phần tử UI.
- Đặc điểm: Tự động chờ đợi (Auto-waiting) phần tử xuất hiện và sẵn sàng trong DOM. Nó sẽ liên tục thử lại (retry) điều kiện cho đến khi đạt được hoặc hết thời gian chờ mặc định (default expection_timeout = 5s)

### Soft Assertion

- Mặc định, khi một lệnh assertion thất bại (fail), Playwright sẽ dừng ngay lập tức file test đó (Hard Assertion).
- Tuy nhiên, Soft Assertion cho phép test tiếp tục chạy dù có lỗi, giúp bạn kiểm tra được nhiều bước hơn trong một lần chạy.
- Đặc điểm: Nếu lệnh này fail, nó sẽ không dừng test mà chỉ đánh dấu (mark) test đó là thất bại và báo lỗi vào cuối kịch bản.

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

## Extracting Values

- Việc Extracting Values (lấy giá trị) trong Playwright phụ thuộc vào loại phần tử bạn muốn lấy
- Các phương pháp phổ biến nhất bao gồm:
  - Thẻ input: inputValue()
  - Text: innerText() hoặc textContent() cho single text, allTextContents() cho all text values
  - Thuộc tính: getAttribute()

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

  // attribute
  const placeholderValue = await emailField.getAttribute("placeholder");
  expect(placeholderValue).toEqual("Email");
});
```

## Auto-Waiting

Link: https://playwright.dev/docs/actionability

- Auto-waiting trong Playwright là cơ chế tự động đợi các phần tử (elements) trên trang web đạt đến trạng thái "có thể hành động" (actionability) trước khi thực hiện các thao tác như click, điền form, v.v..
- Các trạng thái Playwright tự động chờ:
  - Attached: Đã gắn vào DOM.
  - Visible: Đã hiển thị trên màn hình.
  - Stable: Đã ổn định, không còn hoạt động animation.
  - Enabled: Đã được bật (không bị disabled).
  - Receiving Events: Có thể nhận sự kiện (không bị che khuất bởi phần tử khác).

```ts
test("Auto waiting", async ({ page }) => {
  // goto http://localhost:4200/pages/forms/layouts
  await page.goto("http://localhost:4200/pages/forms/layouts");

  // Form without labels
  const formWithoutLabels = page
    .locator("nb-card")
    .filter({ hasText: "Form without labels" });
  const recipients = page.getByPlaceholder("Recipients");
  const subject = page.getByPlaceholder("Subject");
  const msg = page.getByPlaceholder("Message");
  const sendBtn = page.getByRole("button", { name: "SEND" });

  await recipients.fill("test abc");
  await subject.fill("test abc");
  await msg.fill("test abc");
  await sendBtn.click();
});
```

```ts
test("alternative waits", async ({ page }) => {
  await page.goto("http://www.uitestingplayground.com/ajax");

  const triggerBtn = page.getByRole("button", {
    name: "Button Triggering AJAX Request",
  });
  await triggerBtn.click();

  await page.waitForSelector("#content");
  // await page.waitForResponse('http://www.uitestingplayground.com/ajaxdata')
  // await page.waitForLoadState("networkidle"); //Đợi cho đến khi không có kết nối mạng nào được thực hiện trong ít nhất 500 mili giây.

  await expect(page.locator("#content")).toHaveText(
    "Data loaded with AJAX get request.",
  );
});
```

## Timeouts (tham khảo)

Link: https://playwright.dev/docs/test-timeouts
Xem thêm silde

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

## Bài tập về nhà

Viết bài test verify Basic form với các nội dung như sau:

1. Đi tới link http://localhost:4200/
2. Click vào btn Forms trên menu bar
3. Click vào bnt Form Layouts trên menu bar
4. Verify Basic form với các nội dung

- Trường Email có placeholder là 'Email'
- Trường Password có placeholder là 'Password'
- Button Submit có mã màu là rgb(255,61,113)

5. Tiến hành filter thông tin Email và Password
6. Verify text hiển thị trong trường email, password như thông tin đã nhập
7. Click vào btn Submit

# Buổi 5, 6, 7: UI Components

# Buổi 5

## Input Fields

Các hàm sử dụng:

- fill(): điền nhanh một giá trị vào trường input
- clear(): xoá nội dung của trường
- pressSequentially(): gõ từng kí tự
- inputValue: trích xuất giá trị từ 1 trường input

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

## Radio Buttons

Các hàm sử dụng:

- check(): check vào radio button
- uncheck(): uncheck radio button
- isChecked(): kiểm tra radio button có đang được check không => return boolean
- isUnchecked(): kiểm tra radio button có đang uncheck không
- toBeChecked(): kiểm tra radio button có đang được check không (assertion)

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

## Checkboxes

Các hàm sử dụng:

- check(): check vào radio button
- uncheck(): uncheck radio button
- isChecked(): kiểm tra radio button có đang được check không => return boolean
- isUnchecked(): kiểm tra radio button có đang uncheck không
- toBeChecked(): kiểm tra radio button có đang được check không (assertion)

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

## Lists and Dropdowns

```ts
test("lists and dropdowns", async ({ page }) => {
  const dropDownMenu = page.locator("ngx-header nb-select");
  await dropDownMenu.click();

  const optionList = page.locator("nb-option-list nb-option");
  await optionList.filter({ hasText: "Cosmic" }).click();

  const header = page.locator("nb-layout-header");
  await expect(header).toHaveCSS("background-color", "rgb(50, 50, 89)");
});
```

## Bài tập về nhà

Thực hiện các step và các bài kiểm tra sau:

1. Đi tới link: http://localhost:4200/auth/login
2. Lên kịch bản test verify cho các case màn hình Login. Gợi ý:

- Trạng thái khởi tạo: email, password có placeholder, checkbox ko được chheck, btn login disable
- Nhập đủ email, password hợp lệ
  => Verify thông tin phản ánh đúng, btn Login được enable
- Nhập thiếu email hoặc password
  => Verify hiển thị msg yêu cầu nhập, btn Login disable
- Nhập email sai định dạng
  => Verify hiển thị msg thông báo email không hợp lệ, btn Login disable
- Nhập password không hợp lệ
  => Verìy hiển thị msg thông báo password không hợp lệ, btn Login disable

# Buổi 6

## Nội dung cần đạt

- Hiểu và sử dụng được các hàm cho dialog
- Biết cách tìm kiếm row trên table
- Tương tác với các row trên table

## Dialog

Link: https://playwright.dev/docs/api/class-dialog
Link thực hành: n

Dialog là các popup native của trình duyệt được tạo bởi JavaScript như:

- alert()
- confirm()
- prompt()

Các hàm sử dụng:

- Khi muốn bấm OK: dialog.accept()
- Khi muốn bấm Cancel: await dialog.dismiss();
- Lấy nội dung msg: const message = dialog.message();
- Xác định loại dialog: dialog.type();
- Lấy giá trị mặc định của ô input trong prompt: dialog.defaultValue()

```ts
const { chromium } = require("playwright"); // Or 'firefox' or 'webkit'.

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.dismiss();
  });
  await page.evaluate(() => alert("1"));
  await browser.close();
})();
```

## Web Tables

Dữ liệu được hiển thị dưới dạng bảng. Trong Auto test xử lý:

- Tìm một row
- Tìm một cell
- Chỉnh sửa dữ liệu
- Xoá dữ lệu
- Verify dữ liệu hiển thị
- Làm việc với phân trang

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

## Bài tập về nhà

Vào link http://localhost:4200/pages/tables/smart-table

- Tìm kiếm row có id = 11
- Thực hiện xoá row này. (Gợi ý dùng dialog confirm)

# Buổi 7: Date Picker

## Nội dung cần đạt

- Chọn ngày trong Date Picker
- Chọn ngày động (ví dụ: hôm nay + 30 ngày, + 1 năm)
- Viết vòng lặp để điều hướng calendar
- Hiểu khi nào dùng Date của JavaScript

Date Picker là component cho phép người dùng chọn ngày tháng.

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
  let newDate = date.setDate(date.getDate() + 3);

  const expectedDate = date.getDate().toString();
  const expectedMonthShort = date.toLocaleString("en-US", { month: "short" });
  const expectedMonthLong = date.toLocaleString("en-US", { month: "long" });
  const expectedYear = date.getFullYear();
  const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;
  const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`;
  console.log(`
        date = ${date},
        newDate = ${newDate},
        expectedDate = ${expectedDate},
        expectedMonthShort = ${expectedMonthShort},
        expectedMonthLong = ${expectedMonthLong},
        expectedYear = ${expectedYear},
        dateToAssert = ${dateToAssert},
        expectedMonthAndYear = ${expectedMonthAndYear}
        `);

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

## Bài tập về nhà

1. Vào link 'http://localhost:4200/pages/forms/datepicker'
2. Chọn form input range-datepicker
3. Chọn khoảng thời gian từ ngày hiện tại tới cách đó 5 ngày.

- Ví dụ: today = 28/6/2026 => range '28/6/2026 - 2/7/2026'

# Buổi 8,9: Page Object Model

Link: https://playwright.dev/docs/pom

## Nội dung cần đạt

1. Hiểu Page Object Model là gì và tại sao cần sử dụng

- Nhược điểm khi viết locator trực tiếp trong test.
- Các vấn đề: code lặp, khó bảo trì, locator thay đổi phải sửa nhiều nơi.

2. Hiểu cấu trúc một Page Object

- Constructor.
- Khai báo page.
- Định nghĩa locator.
- Định nghĩa action (method).

3. Tách locator khỏi test

- Chuyển các locator vào class Page.
- Giữ test chỉ chứa business flow.

4. Đóng gói các thao tác thành method

- Ví dụ:
  - login()
  - searchProduct()
  - selectDate()

5. Viết test sử dụng Page Object

## Page Object Model là gì?

- Page Object là một design pattern trong Automation Testing, trong đó mỗi trang (hoặc một phần lớn của trang web) được biểu diễn bằng một class. Class này chịu trách nhiệm:
  - Chứa các locator của trang.
  - Cung cấp các method để thao tác với trang.
  - Che giấu chi tiết implementation khỏi test case.

- Nói đơn giản:
  - Test case chỉ mô tả "người dùng làm gì", còn Page Object biết "làm như thế nào".

- Thư mục:
  - src/pages: chứa các class định nghĩa các page
  - src/tests: chứa các testcase theo kịch bản test
  - utils: chứa các files định nghĩa các function helper, constaints, types...

### Tạo Class Base Page

```ts
import { Locator, Page as PlaywrightPage, expect } from "@playwright/test";

export class Page {
  readonly page: PlaywrightPage;
  readonly logoutButton: Locator;

  constructor(page: PlaywrightPage) {
    this.page = page;

    /** Common Locators */

    /** Common Functions */
  }
}
```

### Tạo Class cho từng Page

```ts
import { Page as PlaywrightPage, expect } from "@playwright/test";
import { Page } from "./base.page";
import { PageUrl } from "../utils/constants";

export class LoginPage extends Page {
  readonly pageUrl: string;

  // Khởi tạo dữ liệu ban đầu cho object
  constructor(page: PlaywrightPage) {
    super(page);
    this.pageUrl = PageUrl.LOGIN_URL;
  }

  /** Locators */
  emailField = this.page.getByLabel("Email address:");
  passwordField = this.page.getByLabel("Password:");
  loginBtn = this.page.getByRole("button", { name: " Log In " });

  //Action & Assertion functions
  async goto() {
    const response = await this.page.goto(this.pageUrl);
    expect(response?.status()).toBeLessThan(400);
  }

  async waitForLoad() {
    await this.page.waitForURL(this.pageUrl);
    await expect(this.page).toHaveTitle(
      "playwright-test-admin Demo Application",
    );
  }
}
```

### Tạo utils/constaint

```ts
export enum PageUrl {
  LOGIN_URL = "/auth/login",
  HOME_URL = "/pages/iot-dashboard",
}
```

### Sửa file script theo page object

1. Login Page
2. Form Layout Page
3. Date Picker Page
4. Smart Table Page

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
  logo = this.page.locator(".logo");
  formPickerField = this.page.getByPlaceholder("Form Picker");
  rangePickerField = this.page.getByPlaceholder("Range Picker");
  calendarContainer = this.page.locator("nb-calendar");
  calendarMonthAndYearField = this.page.locator("nb-calendar-view-mode");
  nextBtn = this.page.locator("button.next-month");

  //Action & Assertion functions
  async goto() {
    const response = await this.page.goto(this.pageUrl);
    expect(response?.status()).toBeLessThan(400);
  }

  async waitForLoad() {
    await this.page.waitForURL(this.pageUrl);
    await expect(this.logo).toHaveText("PW-test");
  }

  async chooseTargetDate(date: string, monthYear: string) {
    while (
      !(await this.calendarMonthAndYearField.textContent())?.includes(monthYear)
    ) {
      await this.nextBtn.click();
    }
    const targetDate = this.page
      .locator(".day-cell.ng-star-inserted")
      .getByText(date, { exact: true });
    await targetDate.click();
  }
}
```

```ts
export function getDateFromToday(count: number) {
  let date = new Date();
  date.setDate(date.getDate() + count);

  const expectedDate = date.getDate().toString();
  const expectedMonthShort = date.toLocaleString("en-US", { month: "short" });
  const expectedMonthLong = date.toLocaleString("en-US", { month: "long" });
  const expectedYear = date.getFullYear();
  const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;
  const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`;

  return {
    date: expectedDate,
    dateMonthYear: dateToAssert,
    monthYear: expectedMonthAndYear,
  };
}
```

```ts
import { test, expect } from "@playwright/test";
import { getDateFromToday } from "../utils/helper";
import { DatePickerPage } from "../pages/date.picker.page";

test("date picker", async ({ page }) => {
  const datePickerPage = new DatePickerPage(page);
  const count = 100;
  // navigate to date picker page
  await datePickerPage.goto();
  await datePickerPage.formPickerField.click();

  const targetDate = getDateFromToday(count);
  console.log("checkly>>>>>>>", targetDate);

  await datePickerPage.chooseTargetDate(targetDate.date, targetDate.monthYear);
  await expect(datePickerPage.formPickerField).toHaveValue(
    targetDate.dateMonthYear,
  );
});

test("date picker - range", async ({ page }) => {
  const datePickerPage = new DatePickerPage(page);
  const count = 20;
  // navigate to date picker page
  await datePickerPage.goto();
  await datePickerPage.formPickerField.click();

  const today = getDateFromToday(0);
  const end = getDateFromToday(count);
  console.log("checkly>>>>>>>", end);

  const rangeDateToAssert = `${today.dateMonthYear} - ${end.dateMonthYear}`;

  // Trigger date picker
  await datePickerPage.rangePickerField.click();

  // Choose today
  await datePickerPage.chooseTargetDate(today.date, today.monthYear);

  // Choose end date
  await datePickerPage.chooseTargetDate(end.date, end.monthYear);

  await expect(datePickerPage.rangePickerField).toHaveValue(rangeDateToAssert);
});

test("checkly", async ({ page }) => {
  console.log("checkly >>>>>>>>>>", getDateFromToday(100));
});
```

## Bài tập về nhà

Tạo kịch bản test page Register sử dụng Page Object Model.
Gợi ý:

- Tạo class RegisterPage trong lanhnt/web-auto/src/pages/register.page.ts
- Tạo script test với các case sau:
  - Nhập thông tin hợp lệ => đăng kí user thành công
  - Bỏ trống các trường bắt buộc
  - Nhập sai định dạng email
  - Nhập sai định dạng password
  - Nhập password và confirm password ko match

# Buổi 10,11,12: Working With API

- [https://playwright.dev/docs/api-testing](https://playwright.dev/docs/api-testing)

- Không kết nối được vào trang web bằng máy công ty, mạng công ty.

## What is API

- Slide

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

# Buổi 13: Fixtures

Link: https://playwright.dev/docs/test-fixtures

## Fixtures là gì?

- Fixture là cơ chế của Playwright dùng để chuẩn bị và quản lý tài nguyên (resource) mà một test cần trước khi chạy, đồng thời tự động dọn dẹp sau khi test kết thúc.

## Built-in Fixture

- Là các fixutures đã có sẵn trong Playwright. Ví dụ:
  - page
  - browser
  - context
  - request
  - browserName

## Fixtures hoạt động như nào?

Fixture được tạo trước khi test chạy và tự động teardown sau khi test kết thúc, kể cả khi test thất bại.

```
Test Runner
      │
      ▼
Phân tích test cần gì

      │
      ▼

Setup Fixture

      │
      ▼

Run Test

      │
      ▼

Teardown Fixture
```

## Khi nào nên dùng Fixture

Nên dùng Fixture khi:

✅ Login
✅ Khởi tạo API Client
✅ Page Object
✅ Chuẩn bị dữ liệu test
✅ Kết nối Database
✅ Cleanup dữ liệu

## Customize Fixtures

```ts
//apiHelpers
import { APIRequestContext } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

export const getToken = async (request: APIRequestContext) => {
  const response = await request.post(
    "https://conduit-api.bondaracademy.com/api/users/login",
    {
      data: { user: { email: "lanh.zensho@test.com", password: "123456789" } },
    },
  );
  const responseBody = await response.json();

  const authDirPath = path.join(__dirname, "..", ".auth");
  fs.mkdirSync(authDirPath, { recursive: true });

  const filePath = path.join(authDirPath, "user.json");
  fs.writeFileSync(filePath, JSON.stringify(responseBody));

  return responseBody.user.token;
};
```

```ts
//fixture/auth-test.ts
import { test as base, expect } from "@playwright/test";
import { getToken } from "../utils/apiHelpers";

type AuthTestOptions = {
  loginByToken: void;
  login: void;
};

export const test = base.extend<AuthTestOptions>({
  login: async function ({ page }, use) {
    await page.goto("https://conduit.bondaracademy.com/");

    // login with the credentical
    await page.getByRole("link", { name: " Sign in " }).click();
    await page.getByPlaceholder("Email").fill("lanh.zensho@test.com");
    await page.getByPlaceholder("Password").fill("123456789");
    await page.getByRole("button", { name: " Sign in " }).click();
    await expect(
      page.getByRole("link", { name: " Sign in " }),
    ).not.toBeVisible();
    await use();
  },

  loginByToken: [
    async ({ page, request }, use) => {
      const token = await getToken(request);
      await page.goto("https://conduit.bondaracademy.com/");

      // 	Phương thức Playwright để thực thi JavaScript code trong context của browser (không phải Node.js)
      await page.evaluate((token) => {
        localStorage.setItem("jwtToken", token);
      }, token);
      await page.reload();

      // Chạy test | Chuyển giao quyền
      await use();

      // Cleanup (sau khi test xong)
      await page.evaluate(() => localStorage.clear());
    },
    { auto: true },
  ],
});
export { expect } from "@playwright/test";
```

- Note: Thứ tự trình bày: Tạo src, fixtures/auth-test.ts, helpers/apiHelpers.ts, test/checkly.spec.ts, working.with.request.spec.ts, demo tính số giây thực hiện

# Buổi 14: Test Data Management in Testing

[https://fakerjs.dev/api/](https://fakerjs.dev/api/)

## Nguyên tắc quản lý data

- Không hard code dữ liệu
- Data test phải độc lập với dữ liệu có sẵn
- Dọn dẹp data test sau mỗi lần test

```ts
import { faker } from "@faker-js/faker";

export interface RegisterDataType {
  username: string;
  email: string;
  password: string;
}

// object có key là string, value là RegisterDataType
export const registerData: Record<string, RegisterDataType> = {
  success: {
    username: "lanh zensho",
    email: "lanh.zensho@test.com",
    password: "123456789",
  },
  emptypassword: {
    username: "lanh zensho",
    email: "lanh.zensho@test.com",
    password: "",
  },
};

// create base data
export const baseData = {
  username: faker.person.fullName(),
  email: `${faker.person.fullName().replace(" ", "")}.${faker.number.int(1000)}.@test.com`,
  password: "123456789",
};
```

# Buổi 15: Chữa bài tập lớn

Tạo project 2 bài test độc lập test chức năng trên browser như sau:

1. Tạo bản ghi
2. Delete bản ghi

Yêu cầu:

- Viết code theo POM
- Sử dụng fixture để login
- Sử dụng hook after xóa bài cho test 1 bằng API
- Sử dụng hook before tạo bài cho test 2 bằng API
