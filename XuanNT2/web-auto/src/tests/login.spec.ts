import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/home.page';

test.describe('Login feature should work correctly', () => {
    test.beforeEach(async ({ page }) => {
        // Navigate to login screen
        const loginPage = new LoginPage(page);
        await loginPage.goto();
    })

    // test('User should login successfully with a correct credential', async ({ page }) => {
    //     const emailValue = 'test@test.com'
    //     const passwordValue = '123456'
    //     const loginPage = new LoginPage(page);

    //     // input data
    //     await loginPage.fillCredential(emailValue, passwordValue)

    //     // assertion
    //     // login button is enable
    //     await loginPage.verifySubmitBtn('enable')
    //     await loginPage.loginBtn.click()

    //     // navigate to Home screen
    //     const homePage = new HomePage(page);
    //     await homePage.waitForLoad();
    // })


    // test('User should login fail without email and password', async ({ page }) => {
    //     const emailValue = ''
    //     const passwordValue = ''
    //     const loginPage = new LoginPage(page)

    //     // input data
    //     await loginPage.fillCredential(emailValue, passwordValue)
    //     await loginPage.loginBtn.click({ force: true })

    //     // assertion
    //     // login button is disable
    //     await loginPage.verifyErrMsg('email', 'Email is required!')
    //     await loginPage.verifyErrMsg('password', 'Password is required!')
    //     await loginPage.verifySubmitBtn('disable')
    // })

    // test('User should login fail with invalid email', async ({ page }) => {
    //     const emailValue = 'test@'
    //     const passwordValue = '123456'
    //     const loginPage = new LoginPage(page)

    //     // input data
    //     await loginPage.fillCredential(emailValue, passwordValue)
    //     await loginPage.loginBtn.click({ force: true })

    //     // assertion
    //     // login button is disable
    //     await loginPage.verifyErrMsg('email', 'Email should be the real one!')
    //     await loginPage.verifySubmitBtn('disable')
    // })

    // test('User should login fail with invalid password', async ({ page }) => {
    //     const emailValue = 'test@test.com'
    //     const passwordValue = '123'
    //     const loginPage = new LoginPage(page);

    //     // input data
    //     await loginPage.fillCredential(emailValue, passwordValue)
    //     await loginPage.loginBtn.click({ force: true })

    //     // assertion
    //     // login button is disable
    //     await loginPage.verifyErrMsg('password', 'Password should contain from 4 to 50 characters')
    //     await loginPage.verifySubmitBtn('disable')
    // })

    // - Nhập đủ email, password hợp lệ
    //   => Verify thông tin phản ánh đúng, btn Login được enable
    test("Verify input: email, password, login button", async ({ page }) => {
        const inputEmailValue = 'xuannt2.test@gmail.com'
        const inputPwdValue = '123456'
        const loginPage = new LoginPage(page)

        // input data
        await loginPage.fillCredential(inputEmailValue, inputPwdValue);

        // assertion
        // login button is enable
        await loginPage.verifySubmitBtn('enable')
        await loginPage.loginBtn.click();

        // navigate to Home screen
        const homePage = new HomePage(page)
        await homePage.waitForLoad()
    });

    // - Nhập thiếu email hoặc password
    //   => Verify hiển thị msg yêu cầu nhập, btn Login disable
    test("Verify input 2: email, password, login button", async ({ page }) => {
        const inputEmailValue = 'xuannt2.test@gmail.com'
        const inputPwdValue = ''
        const loginPage = new LoginPage(page)

        // input data
        await loginPage.fillCredential(inputEmailValue, inputPwdValue)
        await loginPage.loginBtn.click({ force: true })

        // assertion
        // login button is disable
        await loginPage.verifyErrMsg('password', 'Password is required!')
        await loginPage.verifySubmitBtn('disable')
    });

    // - Nhập email sai định dạng
    //   => Verify hiển thị msg thông báo email không hợp lệ, btn Login disable
    test("Verify input email, password incorrect formatting", async ({ page }) => {
        const inputEmailValue = 'xuannt2.test'
        const inputPwdValue = '123456'
        const loginPage = new LoginPage(page)

        // input data
        await loginPage.fillCredential(inputEmailValue, inputPwdValue)
        await loginPage.loginBtn.click({ force: true })

        // assertion
        // login button is disable
        await loginPage.verifyErrMsg('email', 'Email should be the real one!')
        await loginPage.verifySubmitBtn('disable')
    });

    // - Nhập password không hợp lệ
    //   => Verìy hiển thị msg thông báo password không hợp lệ, btn Login disable
    test("Verify input email, password invalid", async ({ page }) => {
        const inputEmailValue = 'xuannt2.test@gmail.com'
        const inputPwdValue = '123'
        const loginPage = new LoginPage(page)

        // input data
        await loginPage.fillCredential(inputEmailValue, inputPwdValue)
        await loginPage.loginBtn.click({ force: true })

        // assertion
        // login button is disable
        await loginPage.verifyErrMsg('password', 'Password should contain from 4 to 50 characters')
        await loginPage.verifySubmitBtn('disable')
    });
})
