// Viết bài test verify Basic form với các nội dung như sau:

// 1. Đi tới link http://localhost:4200/
// 2. Click vào btn Forms trên menu bar
// 3. Click vào bnt Form Layouts trên menu bar
// 4. Verify Basic form với các nội dung

// - Trường Email có placeholder là 'Email'
// - Trường Password có placeholder là 'Password'
// - Button Submit có mã màu là rgb(255,61,113)

// 5. Tiến hành filter thông tin Email và Password
// 6. Verify text hiển thị trong trường email, password như thông tin đã nhập
// 7. Click vào btn Submit

import test, { expect } from "@playwright/test";

test("Basic form", async ({page}) => {
await page.goto('http://localhost:4200/')
const titleForms = page.locator('.menu-item').filter({hasText: 'Forms'});
await titleForms.click();
const titleFormsLayout = titleForms.filter({hasText: 'Form Layouts'});
await Promise.all([
  page.waitForURL('**/pages/forms/layouts'),
  titleFormsLayout.click()
]);
const basicForm = page.locator('nb-card').filter({ hasText: 'Basic form' });
const emailAddress = basicForm.getByRole("textbox", { name: "Email" });

await emailAddress.fill('abc@gmail.com')
const emailValue = await emailAddress.inputValue();
expect(emailValue).toEqual('abc@gmail.com');

const placeholderValue = await emailAddress.getAttribute('placeholder');
expect(placeholderValue).toEqual('Email');

const password = basicForm.getByRole("textbox", { name: "Password" });
await password.fill('1234')
const passwordValue = await password.inputValue();
expect(passwordValue).toEqual('1234');

const placeholderValue1 = await password.getAttribute('placeholder');
expect(placeholderValue1).toEqual('Password');

const btn = basicForm.getByRole("button", { name: "Submit" });
expect(btn).toHaveCSS('background-color', 'rgb(255, 61, 113)');
await btn.click()

})
