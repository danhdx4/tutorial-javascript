
import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/login.page';
import { HomePage } from '../page/home.page';

test.describe('Login feature should work correctly', () => {
    test.beforeEach(async ({ page }) => {
        // Navigate to login screen
        const loginPage = new LoginPage(page)
        await loginPage.goto()
    })

    test('User should login successfully with a correct credential', async ({ page }) => {
        const emailValue = 'test@test.com'
        const passwordValue = '123456'
        const loginPage = new LoginPage(page)

        // input data
        await loginPage.fillCredential(emailValue, passwordValue)

        // assertion
        // login button is enable
        await loginPage.verifySubmitBtn('enable')
        await loginPage.loginBtn.click()

        // navigate to Home screen
        const homePage = new HomePage(page)
        await homePage.waitForLoad()
    })

    test('User should login fail without email and password', async ({ page }) => {
        const emailValue = ''
        const passwordValue = ''
        const loginPage = new LoginPage(page)

        // input data for email and assertion
        await loginPage.fillCredential(emailValue, passwordValue)
        await loginPage.loginBtn.click({ force: true })

        // asssertion
        await loginPage.verifyErrMsg('email', 'Email is required!')
        await loginPage.verifyErrMsg('password', 'Password is required!')
        await loginPage.verifySubmitBtn('disable')
    })

    test('User should login fail with invalid email', async ({ page }) => {
        const emailValue = 'test@'
        const passwordValue = '123456'
        const loginPage = new LoginPage(page)

        // input data for email and assertion
        await loginPage.fillCredential(emailValue, passwordValue)
        await loginPage.loginBtn.click({ force: true })

        // asssertion
        await loginPage.verifyErrMsg('email', 'Email should be the real one!')
        await loginPage.verifySubmitBtn('disable')
    })

    test('User should login fail with invalid password', async ({ page }) => {
        const emailValue = 'test@test.com'
        const passwordValue = '123'
        const loginPage = new LoginPage(page)

        // input data for email and assertion
        await loginPage.fillCredential(emailValue, passwordValue)
        await loginPage.loginBtn.click({ force: true })

        // asssertion
        await loginPage.verifyErrMsg('password', 'Password should contain from 4 to 50 characters')
        await loginPage.verifySubmitBtn('disable')
    })

    // gioi han ki tu   
test('User should login with password contains 4 characters', async ({ page }) => {
    const emailValue = 'test@test.com'
    const passwordValue = '1234'
    const loginPage = new LoginPage(page)

    // input data
    await loginPage.fillCredential(emailValue, passwordValue)

    // assertion
    //await loginPage.verifySubmitBtn('enable')
    await loginPage.verifySubmitBtn('enable');
})

// giới hạn 50 kí tự

test('User should login with password contains 50 characters', async ({ page }) => {
    const emailValue = 'test@test.com'
    const passwordValue = 'a'.repeat(50)
    const loginPage = new LoginPage(page)

    // input data
    await loginPage.fillCredential(emailValue, passwordValue)

    // assertion
    await loginPage.verifySubmitBtn('enable')
})

// dài hơn 50 kí tự 
/*test('User should login fail with password greater than 50 characters', async ({ page }) => {
    const emailValue = 'test@test.com'
    const passwordValue = 'a'.repeat(51)
    const loginPage = new LoginPage(page)

    // input data
    await loginPage.fillCredential(emailValue, passwordValue)
    await loginPage.loginBtn.click({ force: true })

    // assertion
    await loginPage.verifyErrMsg(
        'password',
        'Password should contain from 4 to 50 characters'
    )
    await loginPage.verifySubmitBtn('disable')
}) 

*/
// chekc nhập email
test('User should login fail when only email is entered', async ({ page }) => {
    const emailValue = 'test@test.com'
    const passwordValue = ''
    const loginPage = new LoginPage(page)

    await loginPage.fillCredential(emailValue, passwordValue)
    await loginPage.loginBtn.click({ force: true })

    await loginPage.verifyErrMsg(
        'password',
        'Password is required!'
    )

    await loginPage.verifySubmitBtn('disable')
})

// chi nhập có password
test('User should login fail when only password is entered', async ({ page }) => {
    const emailValue = ''
    const passwordValue = '123456'
    const loginPage = new LoginPage(page)

    await loginPage.fillCredential(emailValue, passwordValue)
    await loginPage.loginBtn.click({ force: true })

    await loginPage.verifyErrMsg(
        'email',
        'Email is required!'
    )
    await loginPage.verifySubmitBtn('disable')
})
})
