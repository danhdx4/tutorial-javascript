///import { test, expect } from '@playwright/test';

// test.beforeEach(async ({ page }) => {
//     await page.goto('http://localhost:4200/pages/forms/layouts')
// })

// test("input fields", async ({ page }) => {
//     const usingTheGridEmailInput = page
//         .locator("nb-card", { hasText: "Using the Grid" })
//         .getByRole("textbox", { name: "Email" });

//     await usingTheGridEmailInput.fill("test@test.com");
//     await usingTheGridEmailInput.clear();
//     await usingTheGridEmailInput.pressSequentially("test2@test.com", {
//         delay: 500,
//     });

//     const inputValue = await usingTheGridEmailInput.inputValue();
//     expect(inputValue).toEqual("test2@test.com");

//     await expect(usingTheGridEmailInput).toHaveValue("test2@test.com");
// });

// test("radio buttons", async ({ page }) => {
//     const usingTheGridForm = page.locator("nb-card", {
//         hasText: "Using the Grid",
//     });

//     // await usingTheGridForm.getByLabel('Option 1').check({ force: true })
//     const radio1 = usingTheGridForm
//         .getByRole("radio", { name: "Option 1" })
//     await radio1.check({ force: true });
//     // const radioStatus = await usingTheGridForm
//     //     .getByRole("radio", { name: "Option 1" })
//     //     .isChecked();

//     // console.log("Radio status: ", radioStatus);
//     // expect(radioStatus).toBeTruthy();
//     // // expect(radioStatus).toBeFalsy()

//     await expect(radio1).toBeChecked();
// });

// test('checkboxs', async ({ page }) => {
//     // check()

//     // uncheck()

//     // isChecked()

//     // isUnchecked()

//     // toBeChecked()
// })

// test("lists and dropdowns", async ({ page }) => {
//     const dropdownList = page.locator('.appearance-outline')

//     // await page.locator('nb-option').filter({ hasText: 'Dark' }).click()

//     // //assertion
//     const header = page.locator('nb-layout-header')
//     // await expect(header).toHaveCSS('background-color', 'rgb(34, 43, 69)')

//     const colors: Record<string, string> = {
//         Light: "rgb(255, 255, 255)",
//         Dark: "rgb(34, 43, 69)",
//         Cosmic: "rgb(50, 50, 89)",
//         Corporate: "rgb(255, 255, 255)",
//     };

//     // const optionList = await page.locator('nb-option').allTextContents()
//     // console.log(optionList)

//     await dropdownList.click()
//     for (const color in colors) {
//         console.log(color)
//         await page.locator('nb-option').filter({ hasText: color }).click()
//         await expect(header).toHaveCSS('background-color', colors[color])
//         if (color !== "Corporate") {
//             await dropdownList.click()
//         }
//     }

// });


//BTVN Đi tới link: http://localhost:4200/auth/login
// Lên kịch bản test verify cho các case màn hình Login. Gợi ý:
// Trạng thái khởi tạo: email, password có placeholder, checkbox ko được chheck, btn login disable
// Nhập đủ email, password hợp lệ => Verify thông tin phản ánh đúng, btn Login được enable
// Nhập thiếu email hoặc password => Verify hiển thị msg yêu cầu nhập, btn Login disable
// Nhập email sai định dạng => Verify hiển thị msg thông báo email không hợp lệ, btn Login disable
// Nhập password không hợp lệ => Verìy hiển thị msg thông báo password không hợp lệ, btn Login disable


import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/auth/login');
  });

  // Case Login thành công
  test('Case 1: Login thành công', async ({ page }) => {
    const emailInput = page.getByPlaceholder('Email address');
    const passwordInput = page.getByPlaceholder('Password');
    const loginButton = page.getByRole('button', { name: 'LOG IN' });

    await emailInput.fill('vananh@gmail.com');
    await passwordInput.fill('Abc123!');
    await loginButton.click();

    await expect(page).toHaveURL('http://localhost:4200/pages/forms/layouts');
    // Lanh note: C chạt thử case này sẽ bị fail. Nguyên nhân là nó sẽ coi như em click vào màn hình nên sẽ validate trường email. Lần thứ 2 e click vào link này mới redirect được.
    // Chỗ này là em tìm ra bug này =))

    await expect(page.getByText('Layouts')).toBeVisible();
  });

  // Case Forgot Password mở đúng trang
  test('Case 2: Click Forgot Password mở sang trang Forgot Password', async ({ page }) => {
    const forgotPasswordLink = page.getByRole('link', { name: 'Forgot Password?' });
    await forgotPasswordLink.click();

    await expect(page).toHaveURL('http://localhost:4200/auth/request-password');
    await expect(page.getByRole('heading', { name: 'Forgot Password' })).toBeVisible();
  });

  // Case Email sai định dạng
  test('Case 3: Email sai định dạng', async ({ page }) => {
    const emailInput = page.getByPlaceholder('Email address');
    const passwordInput = page.getByPlaceholder('Password');
    const loginButton = page.getByRole('button', { name: 'LOG IN' });

    await emailInput.fill('vananhgmail.com');
    await passwordInput.fill('Abc123!');
    await loginButton.click();

    await expect(page.getByText(Email should be the real one!)).toBeVisible(); // Lanh note: em dùng text đúng theo web của mình để pass nha 'Email should be the real one!'
    await expect(page).toHaveURL('http://localhost:4200/auth/login');
  });

  // Case Email chưa đăng ký
  test('Case 4: Email chưa đăng ký', async ({ page }) => {
    const emailInput = page.getByPlaceholder('Email address');
    const passwordInput = page.getByPlaceholder('Password');
    const loginButton = page.getByRole('button', { name: 'LOG IN' });

    await emailInput.fill('khacemail@gmail.com');
    await passwordInput.fill('Abc123!');
    await loginButton.click();

    await expect(page.getByText(/Email.*chưa.*được.*đăng.*ký/i)).toBeVisible();
    await expect(page).toHaveURL('http://localhost:4200/auth/login');
  });

  // Case Password sai
  test('Case 5: Password sai', async ({ page }) => {
    const emailInput = page.getByPlaceholder('Email address');
    const passwordInput = page.getByPlaceholder('Password');
    const loginButton = page.getByRole('button', { name: 'LOG IN' });

    await emailInput.fill('vananh@gmail.com');
    await passwordInput.fill('saiPass');
    await loginButton.click();

    await expect(page.getByText(/Password.*không.*hợp.*lệ/i)).toBeVisible();
    await expect(page).toHaveURL('http://localhost:4200/auth/login');
  });
});
