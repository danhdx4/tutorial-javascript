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
import test, { expect } from "@playwright/test";

test('Login', async ({ page }) => {
    /**
     * Phần test của em nên chia thành từng bài test nhỏ nhé.
     * Không ưu tiên 1 bài test quá dài khi có thể tách được, sẽ hạn chế được test fail gây gián đoạn cả bài test
     * Một số expect chưa có await em thêm vào nhé. Ví dụ line 34
     * 
     */
    await page.goto('http://localhost:4200/auth/login')
    // Locators của các field
    const emailField = page.getByRole('textbox', { name: 'Email address' });
    const passwordField = page.getByRole('textbox', { name: 'Password' });
    const forgotPassword = page.getByText('Forgot Password?');
    const checkboxField = page.getByRole('checkbox', { name: 'Remember me' })
    const btn = page.getByRole('button', { name: 'Log in' });

    // Check trạng thái khởi tạo
    expect(await emailField.getAttribute('placeholder')).toEqual('Email address');
    expect(await passwordField.getAttribute('placeholder')).toEqual('Password');
    expect(await checkboxField.isChecked()).toBeFalsy();
    expect(btn).toBeDisabled();

    // Validate email
    await page.locator('body').click() //email là trường bắt buộc
    expect(page.getByText('Email is required!')).toBeVisible()
    await emailField.fill('abc') //email ko hợp lệ thiếu domain
    expect(page.getByText('Email should be the real one!')).toBeVisible()
    await emailField.fill('@gmail.com') //email ko hợp lệ thiếu local part
    expect(page.getByText('Email should be the real one!')).toBeVisible()
    await emailField.fill('abc@gmail') //email ko hợp lệ thiếu .com
    expect(page.getByText('Email should be the real one!')).toBeVisible()
    await emailField.fill('abcgmail.com') //email ko hợp lệ thiếu @
    expect(page.getByText('Email should be the real one!')).toBeVisible()
    await emailField.fill('abc@gmail@com') //email ko hợp lệ sai domain
    expect(page.getByText('Email should be the real one!')).toBeVisible()
    await emailField.fill('abc@gmail.com') //email hợp lệ
    expect(btn).toBeDisabled()

    // Validate password
    await passwordField.click() //password là trường bắt buộc
    await page.locator('body').click()
    expect(page.getByText('Password is required!')).toBeVisible()
    await passwordField.fill('111') //password ko hợp lệ 
    expect(page.getByText('Password should contain from 4 to 50 characters')).toBeVisible()
    await passwordField.fill('1'.repeat(50) + '22222') //cắt kí tự thứ 51 trở đi
    expect(await passwordField.inputValue()).toEqual('1'.repeat(50))
    await passwordField.fill('1111') //password hợp lệ
    expect(btn).toBeEnabled()

    //Tick checkbox
    await checkboxField.check({ force: true })
    expect(await checkboxField.isChecked()).toBeTruthy()

    // Tap button Login
    await btn.click()
    await expect(page).toHaveURL('http://localhost:4200/pages/iot-dashboard')

    // ----------------------------------------------
    //Đi đến page Forgot Password
    await forgotPassword.click()
    await expect(page).toHaveURL('http://localhost:4200/auth/request-password')
    // Locators của các field
    const emailField1 = page.getByRole('textbox', { name: 'Email address' });
    const btn1 = page.getByRole('button', { name: 'Request Password' });
    const backToLogin = page.locator('.text-link').filter({ hasText: 'Back To Login' });
    const register = page.locator('.text-link').filter({ hasText: 'Register' });
    // Check trạng thái khởi tạo
    expect(await emailField1.getAttribute('placeholder')).toEqual('Email address');
    expect(btn1).toBeDisabled();
    // Validate email
    await page.locator('body').click() //email là trường bắt buộc
    await expect(page.getByText('Email is required!')).toBeVisible()
    await emailField1.fill('abc') // email ko hợp lệ
    expect(page.getByText('Email should be the real one!')).toBeVisible()
    await emailField1.fill('abc@gmail.com') // email hợp lệ
    expect(btn).toBeEnabled()
})