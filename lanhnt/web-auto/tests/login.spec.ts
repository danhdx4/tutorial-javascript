import { test, expect } from '@playwright/test';

test.describe('Login feature should work correctly', () => {
    test.beforeEach(async ({ page }) => {
        // Navigate to login screen
        await page.goto('http://localhost:4200/auth/login')
    })

    test('User should login successfully with a correct credential', async ({ page }) => {
        const emailValue = 'test@test.com'
        const passwordValue = '123456'

        const emailField = page.getByLabel('Email address:')
        const passwordField = page.getByLabel('Password:')
        const loginBtn = page.getByRole('button', { name: ' Log In ' })

        // input data
        await emailField.fill(emailValue)
        await passwordField.fill(passwordValue)

        // assertion
        // login button is enable
        await expect(loginBtn).toHaveCSS('background-color', "rgb(51, 102, 255)")
        await loginBtn.click()

        // navigate to Home screen
        await page.waitForURL('http://localhost:4200/pages/iot-dashboard')
    })


    test('User should login fail without email and password', async ({ page }) => {
        const emailValue = ''
        const passwordValue = ''

        const emailField = page.getByLabel('Email address:')
        const passwordField = page.getByLabel('Password:')
        const loginBtn = page.getByRole('button', { name: ' Log In ' })
        const emailMsg = page.locator('.form-control-group').filter({ hasText: 'Email address:' }).locator('.caption.status-danger')
        const passwordMsg = page.locator('.form-control-group').filter({ hasText: 'Password:' }).locator('.caption.status-danger')

        // input data for email and assertion
        await emailField.fill(emailValue)
        await page.locator('body').click()
        await expect(emailMsg).toBeVisible()
        await expect(emailMsg).toHaveText('Email is required!')

        // input data for password and assertion
        await passwordField.fill(passwordValue)
        await page.locator('body').click()
        await expect(passwordMsg).toBeVisible()
        await expect(passwordMsg).toHaveText('Password is required!')

        // assertion
        // login button is disable
        await expect(loginBtn).toHaveCSS('background-color', "rgba(143, 155, 179, 0.24)")
    })

    test('User should login fail with invalid email', async ({ page }) => {
        const emailValue = 'test@'
        const passwordValue = '123456'

        const emailField = page.getByLabel('Email address:')
        const passwordField = page.getByLabel('Password:')
        const loginBtn = page.getByRole('button', { name: ' Log In ' })
        const emailMsg = page.locator('.form-control-group').filter({ hasText: 'Email address:' }).locator('.caption.status-danger')
        const passwordMsg = page.locator('.form-control-group').filter({ hasText: 'Password:' }).locator('.caption.status-danger')

        // input invalid email and assertion
        await emailField.fill(emailValue)
        await page.locator('body').click()
        await expect(emailMsg).toBeVisible()
        await expect(emailMsg).toHaveText('Email should be the real one!')

        // input password
        await passwordField.fill(passwordValue)

        // assertion
        // login button is disable
        await expect(loginBtn).toHaveCSS('background-color', "rgba(143, 155, 179, 0.24)")
    })

    test('User should login fail with invalid password', async ({ page }) => {
        const emailValue = 'test@test.com'
        const passwordValue = '123'

        const emailField = page.getByLabel('Email address:')
        const passwordField = page.getByLabel('Password:')
        const loginBtn = page.getByRole('button', { name: ' Log In ' })
        const emailMsg = page.locator('.form-control-group').filter({ hasText: 'Email address:' }).locator('.caption.status-danger')
        const passwordMsg = page.locator('.form-control-group').filter({ hasText: 'Password:' }).locator('.caption.status-danger')

        // input email
        await emailField.fill(emailValue)

        // input invalid password and assertion
        await passwordField.fill(passwordValue)
        await page.locator('body').click()
        await expect(passwordMsg).toBeVisible()
        await expect(passwordMsg).toHaveText('Password should contain from 4 to 50 characters')

        // assertion
        // login button is disable
        await expect(loginBtn).toHaveCSS('background-color', "rgba(143, 155, 179, 0.24)")
    })
})