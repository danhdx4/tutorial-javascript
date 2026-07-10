import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/pages/forms/layouts");
});

test("input fields", async ({ page }) => {
  const usingTheGridEmailInput = page
    .locator("nb-card", { hasText: "Using the Grid" })
    .getByRole("textbox", { name: "Email" });
  // fill() là hàm nhập dữ liệu vào input, nó sẽ xóa dữ liệu cũ trước khi nhập dữ liệu mới
  await usingTheGridEmailInput.fill("test@test.com");
  // clear() là hàm xóa dữ liệu trong input
  await usingTheGridEmailInput.clear();
  // pressSequentially() là hàm input từng ký tự một, có thể delay giữa các ký tự
  await usingTheGridEmailInput.pressSequentially("test2@test.com", {
    delay: 500,
  });

  const inputValue = await usingTheGridEmailInput.inputValue();
  expect(inputValue).toEqual("test2@test.com");

  await expect(usingTheGridEmailInput).toHaveValue("test2@test.com");
});

test("radio buttons", async ({ page }) => {
  const usingTheGridForm = page.locator("nb-card", {
    hasText: "Using the Grid",
  });

  // await usingTheGridForm.getByLabel('Option 1').check({ force: true })
  await usingTheGridForm
    .getByRole("radio", { name: "Option 1" })
    .check({ force: true }); //check() là hàm click vào radio button, nếu radio button bị disabled thì sẽ báo lỗi, nếu muốn click vào radio button bị disabled thì phải dùng { force: true }
  const radioStatus = await usingTheGridForm
    .getByRole("radio", { name: "Option 1" })
    .isChecked(); //isChecked() là hàm kiểm tra radio button có được chọn hay không, trả về true hoặc false
  expect(radioStatus).toBeTruthy(); //toBeTruthy() là hàm kiểm tra giá trị có phải là true hay không, nếu giá trị là true thì test sẽ pass, nếu giá trị là false thì test sẽ fail
  await expect(
    usingTheGridForm.getByRole("radio", { name: "Option 1" }),
  ).toBeChecked(); //toBeChecked() là hàm kiểm tra radio button có được chọn hay không, nếu được chọn thì test sẽ pass, nếu không được chọn thì test sẽ fail

  await usingTheGridForm
    .getByRole("radio", { name: "Option 2" })
    .check({ force: true });
  expect(
    await usingTheGridForm.getByRole("radio", { name: "Option 1" }).isChecked(),
  ).toBeFalsy(); //toBeFalsy() là hàm kiểm tra giá trị có phải là false hay không, nếu giá trị là false thì test sẽ pass, nếu giá trị là true thì test sẽ fail
  await expect(
    usingTheGridForm.getByRole("radio", { name: "Option 1" }),
  ).not.toBeChecked(); //not.toBeChecked() là hàm kiểm tra radio button có được chọn hay không, nếu không được chọn thì test sẽ pass, nếu được chọn thì test sẽ fail
  expect(
    await usingTheGridForm.getByRole("radio", { name: "Option 2" }).isChecked(),
  ).toBeTruthy();
});

test("checkboxes", async ({ page }) => {
  await page.getByText("Modal & Overlays").click();
  await page.getByText("Toastr").click();

  await page
    .getByRole("checkbox", { name: "Hide on click" })
    .uncheck({ force: true }); //uncheck() là hàm click vào checkbox để bỏ chọn, nếu checkbox bị disabled thì sẽ báo lỗi, nếu muốn click vào checkbox bị disabled thì phải dùng { force: true }
  await page
    .getByRole("checkbox", { name: "Prevent arising of duplicate toast" })
    .check({ force: true }); //check() là hàm click vào checkbox để chọn, nếu checkbox bị disabled thì sẽ báo lỗi, nếu muốn click vào checkbox bị disabled thì phải dùng { force: true }

  const allBoxes = page.getByRole("checkbox");
  for (const box of await allBoxes.all()) {
    await box.uncheck({ force: true });
    expect(await box.isChecked()).toBeFalsy(); //toBeFalsy() là hàm kiểm tra giá trị có phải là false hay không, nếu giá trị là false thì test sẽ pass, nếu giá trị là true thì test sẽ fail
  }
});

test("lists and dropdowns", async ({ page }) => {
  const dropDownMenu = page.locator("ngx-header nb-select");
  await dropDownMenu.click(); //click() là hàm click vào element, nếu element bị disabled thì sẽ báo lỗi, nếu muốn click vào element bị disabled thì phải dùng { force: true }

  const optionList = page.locator("nb-option-list nb-option");
  await optionList.filter({ hasText: "Cosmic" }).click(); //filter() là hàm lọc element theo điều kiện, hasText: "Cosmic" là điều kiện lọc, click() là hàm click vào element, nếu element bị disabled thì sẽ báo lỗi, nếu muốn click vào element bị disabled thì phải dùng { force: true }

  const header = page.locator("nb-layout-header");
  await expect(header).toHaveCSS("background-color", "rgb(50, 50, 89)"); //toHaveCSS() là hàm kiểm tra element có thuộc tính CSS hay không, nếu có thì test sẽ pass, nếu không có thì test sẽ fail

  const colors: Record<string, string> = {
    Light: "rgb(255, 255, 255)",
    Dark: "rgb(34, 43, 69)",
    Cosmic: "rgb(50, 50, 89)",
    Corporate: "rgb(255, 255, 255)",
  };
});

test("dialogs", async ({ page }) => {
  // Navigate to Dialog demo URL
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  const resultTxt = page.locator("#result");
  const alertTriggerBtn = page.getByRole("button", {
    name: "Click for JS Alert",
  });
  const confirmTriggerBtn = page.getByRole("button", {
    name: "Click for JS Confirm",
  });
  const promtTriggerBtn = page.getByRole("button", {
    name: "Click for JS Prompt",
  });

  // bắt sự kiện dialog cần khai báo trước khi click vào button trigger dialog, nếu không sẽ bị lỗi "dialog is not handled"
  page.on("dialog", async (dialog) => {
    console.log("Check message text: ", dialog.message());
    console.log("Check dialog type: ", dialog.type());
    await dialog.accept();
    // await dialog.dismiss();
    // await dialog.accept("AnhTP Input");
  });

  // Dialog dạng Alert
  await alertTriggerBtn.click();
  await expect(resultTxt).toHaveText("You successfully clicked an alert");

  // Dialog dạng Confirm
  // await confirmTriggerBtn.click();
  // await expect(resultTxt).toHaveText("You clicked: Cancel");

  // Dialog dạng Prompt input text
  // await promtTriggerBtn.click();
  // await expect(resultTxt).toHaveText("You entered: AnhTP Input");
});

test("web tables", async ({ page }) => {
  // Navigate to Smart Table Page
  await page.getByText("Tables & Data").click();
  await page.getByText("Smart Table").click();

  /**
   * 1 get the row by any text in this row
   * Tìm kiếm row có text twitter@outlook.com
   * clear data ở cột Age, và nhập giá trị mới
   * verify kết quả nhận được
   */

  // const targetRow = page.getByRole('row', { name: 'twitter@outlook.com' })
  // await targetRow.locator('.nb-edit').click()
  // await page.locator('input-editor').getByPlaceholder('Age').clear()
  // await page.locator('input-editor').getByPlaceholder('Age').fill('999')
  // await page.locator('.nb-checkmark').click()

  /**
   * 2 get the row based on the value in the specific column
   * Tìm kiếm row có id = 27
   * clear data ở cột Email và nhập giá trị mới
   * verify kết quả tìm được
   */

  const targetRowById = page
    .getByRole("row")
    .filter({ has: page.locator("td").nth(1).getByText("27") });
  const nextBtn = page.locator(".ng2-smart-page-link.page-link.page-link-next");

  let found = false;
  while (!found) {
    console.log("checkly: ", await targetRowById.count());
    if (await targetRowById.count()) {
      //todo
      console.log("I found it!!!!");

      await targetRowById.locator(".nb-edit").click();
      await page.locator("input-editor").getByPlaceholder("E-mail").clear();
      await page
        .locator("input-editor")
        .getByPlaceholder("E-mail")
        .fill("anhtp@test.com");
      await page.locator(".nb-checkmark").click();
      break;
    }
    await nextBtn.click();
  }
});

// 1. Vào link 'http://localhost:4200/pages/forms/datepicker'
// 2. Chọn form input range-datepicker
// 3. Chọn khoảng thời gian từ ngày hiện tại tới cách đó 5 ngày.

// - Ví dụ: today = 28/6/2026 => range '28/6/2026 - 2/7/2026'
test("Form date picker - specific date", async ({ page }) => {
  // navigate to date picker page
  await page.goto("http://localhost:4200/pages/forms/datepicker");
  const formPickerField = page.getByPlaceholder("Form Picker");

  await formPickerField.click();
  const calendarContainer = page.locator("nb-calendar");
  let calendarMonthAndYear = await page
    .locator("nb-calendar-view-mode")
    .textContent();

  // Choose the specific date in the month
  await page
    .locator('[class="day-cell ng-star-inserted"]')
    .getByText("21", { exact: true })
    .click();
  await expect(formPickerField).toHaveValue("Jun 21, 2026");
  // Choose dynamic date in the month
});

test("Form date picker - dynamic date", async ({ page }) => {
  // navigate to date picker page
  await page.goto("http://localhost:4200/pages/forms/datepicker");
  const formPickerField = page.getByPlaceholder("Form Picker");

  await formPickerField.click();
  const calendarContainer = page.locator("nb-calendar");
  let calendarMonthAndYear = await page
    .locator("nb-calendar-view-mode")
    .textContent();

  // Choose the specific date in the month

  // Choose dynamic date in the month
  let date = new Date();
  date.setDate(date.getDate() - 5); // subtract 5 days from the current date

  const expectedDate = date.getDate().toString();
  const expectedMonthShort = date.toLocaleString("en-US", { month: "short" });
  const expectedMonthLong = date.toLocaleString("en-US", { month: "long" });
  const expectedYear = date.getFullYear();
  const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;
  const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`;
  console.log(`
        date = ${date},
        newDate = ${date.setDate(date.getDate() - 5)},
        expectedDate = ${expectedDate},
        expectedMonthShort = ${expectedMonthShort},
        expectedMonthLong = ${expectedMonthLong},
        expectedYear = ${expectedYear},
        dateToAssert = ${dateToAssert},
        expectedMonthAndYear = ${expectedMonthAndYear}
        `);

  await page
    .locator('[class="day-cell ng-star-inserted"]')
    .getByText(expectedDate, { exact: true })
    .click();
  await expect(formPickerField).toHaveValue(dateToAssert);
});

test("Date picker next month", async ({ page }) => {
  // navigate to date picker page
  await page.goto("http://localhost:4200/pages/forms/datepicker");
  const formPickerField = page.getByPlaceholder("Form Picker");

  await formPickerField.click();
  const calendarContainer = page.locator("nb-calendar");
  let calendarMonthAndYearField = page.locator("nb-calendar-view-mode");

  // Choose dynamic date in the month
  let date = new Date();
  date.setDate(date.getDate() + 365);

  const expectedDate = date.getDate().toString();
  const expectedMonthShort = date.toLocaleString("en-US", { month: "short" });
  const expectedMonthLong = date.toLocaleString("en-US", { month: "long" });
  const expectedYear = date.getFullYear();
  const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;
  const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`;
  console.log(`
          date = ${date},
          newDate = ${date.setDate(date.getDate() + 365)},
          expectedDate = ${expectedDate},
          expectedMonthShort = ${expectedMonthShort},
          expectedMonthLong = ${expectedMonthLong},
          expectedYear = ${expectedYear},
          dateToAssert = ${dateToAssert},
          expectedMonthAndYear = ${expectedMonthAndYear}
          `);

  // hàm while() sẽ lặp lại cho đến khi điều kiện trong while() là false, nếu điều kiện là true thì sẽ tiếp tục lặp lại
  // điều kiện hàm while là click vào button next-month cho đến khi text content của element calendarMonthAndYearField chứa expectedMonthAndYear
  while (
    !(await calendarMonthAndYearField.textContent())?.includes(
      expectedMonthAndYear,
    )
  ) {
    await page.locator("button.next-month").click();
  }

  await page
    .locator('[class="day-cell ng-star-inserted"]')
    .getByText(expectedDate, { exact: true })
    .click();
  await expect(formPickerField).toHaveValue(dateToAssert);
});
