import { test, expect } from '@playwright/test';

// beforeEach là hook của Playwright.
// Nó sẽ chạy trước mỗi test (test()) trong file hiện tại.
// test('Test A', async ({ page }) => {
//     // chạy sau beforeEach
// })
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/pages/forms/layouts')
})

// input fields
test("input fields", async ({ page }) => {
  const gridForm = page.locator('nb-card').filter({hasText: 'Using the Grid'});
  const inputEmailGridForm = gridForm.getByRole('textbox', {name: 'Email'});
  // fill(): điền nhanh một giá trị vào trường input
  // await inputEmail.fill('xuannt2.test@gmail.com');

  // clear(): xoá nội dung của trường
  // await inputEmail.clear();

  // pressSequentially(): gõ từng kí tự
  await inputEmailGridForm.pressSequentially('xuannt2.test@gmail.com', {delay: 150});

  // inputValue: trích xuất giá trị từ 1 trường input
  const inputValue = await inputEmailGridForm.inputValue();
  expect(inputValue).toEqual('xuannt2.test@gmail.com');
  await expect(inputEmailGridForm).toHaveValue('xuannt2.test@gmail.com');
});

// Radio Buttons
test("Radio Buttons", async ({ page }) => {
  const gridForm = page.locator('nb-card').filter({hasText: 'Using the Grid'});
  const radioButton1 = gridForm.getByRole('radio', {name: "Option 1"});
  // check(): check vào radio button
  await radioButton1.check({force: true});

  // uncheck(): uncheck radio button: dùng cho checkbox, radio ko có lựa chọn uncheck

  // isChecked(): kiểm tra radio button có đang được check không => return boolean
  // const radioButton2 = gridForm.getByRole('radio', {name: 'Option 2'});
  // await radioButton2.check({force: true});
  // expect(await radioButton1.isChecked(),).toBeFalsy();
  // expect(await radioButton2.isChecked(),).toBeTruthy();

  // isUnchecked(): kiểm tra radio button có đang uncheck không

  // toBeChecked(): kiểm tra radio button có đang được check không (assertion)
  // cách Playwright khuyến nghị:
  expect(radioButton1).toBeChecked();
});

// Lists and Dropdowns
test("Lists and Dropdowns", async ({ page }) => {
    const dropdownButton = page.locator('nb-select');
    await dropdownButton.click({});

    const optionList = page.locator('.option-list nb-option');
    await optionList.filter({hasText: 'Dark'}).click();

    const header = page.locator('nb-layout-header');
    await expect(header).toHaveCSS('background-color', 'rgb(34, 43, 69)');
});

// ## Bài tập về nhà
// Thực hiện các step và các bài kiểm tra sau:

// 1. Đi tới link: http://localhost:4200/auth/login
// 2. Lên kịch bản test verify cho các case màn hình Login. Gợi ý:

// - Trạng thái khởi tạo: email, password có placeholder, checkbox ko được chheck, btn login disable
// - Nhập đủ email, password hợp lệ
//   => Verify thông tin phản ánh đúng, btn Login được enable
// - Nhập thiếu email hoặc password
//   => Verify hiển thị msg yêu cầu nhập, btn Login disable
// - Nhập email sai định dạng
//   => Verify hiển thị msg thông báo email không hợp lệ, btn Login disable
// - Nhập password không hợp lệ
//   => Verìy hiển thị msg thông báo password không hợp lệ, btn Login disable