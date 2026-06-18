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
