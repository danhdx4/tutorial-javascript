import { expect, test } from '@playwright/test';

// 2. Lên kịch bản test verify cho các case màn hình Login. Gợi ý:

// - Trạng thái khởi tạo: email, password có placeholder, checkbox ko được chheck, btn login disable
test("initialization state", async ({ page }) => {
    await page.goto('http://localhost:4200/auth/login');

    const emailField = page.getByPlaceholder("Email");
    const emailValue = await emailField.getAttribute("placeholder");
    expect(emailValue).toEqual("Email address");

    const passwordField = page.getByPlaceholder("Password");
    const passwordValue = await passwordField.getAttribute("placeholder");
    expect(passwordValue).toEqual("Password");

    const checkbox = page.getByRole("checkbox", { name: "Remember Me" });
    await expect(checkbox).not.toBeChecked();

    const loginBtn = page.getByRole("button", { name: "Log in" })
    await expect(loginBtn).toBeDisabled();
});

// 2. Lên kịch bản test verify cho các case màn hình Login.
test("Login button enable", async ({ page }) => {
    await page.goto('http://localhost:4200/auth/login');
    const emailField = page.getByPlaceholder("Email");
    const passwordField = page.getByPlaceholder("Password");
    const loginBtn = page.getByRole("button", { name: "Log in" })
    await emailField.fill("abc@gmail.com");
    await passwordField.fill("123456");
    await expect(loginBtn).toBeEnabled();
    await loginBtn.click();
    await expect(page).toHaveURL('http://localhost:4200/pages/iot-dashboard');

});

test('Login button disable', async ({ page }) => {
    await page.goto('http://localhost:4200/auth/login')

    const emailField = page.getByPlaceholder("Email");
    const passwordField = page.getByPlaceholder("Password");
    const loginBtn = page.getByRole("button", { name: "Log in" })

    await emailField.fill("");
    await passwordField.fill("");
    await passwordField.blur();
    await expect(
        page.getByText('Email is required!')
    ).toBeVisible();

    await expect(
        page.getByText('Password is required!')
    ).toBeVisible();
    await expect(loginBtn).toBeDisabled();

})

test('Invalid email password', async ({ page }) => {
    await page.goto('http://localhost:4200/auth/login')

    const emailField = page.getByPlaceholder("Email");
    const passwordField = page.getByPlaceholder("Password");
    const loginBtn = page.getByRole("button", { name: "Log in" })

    const testData = [
        'abc',
        'abc@',
        'abc.com',
        'abc@gmail',
        '@gmail.com',
        '@@'
    ]


    for (const email of testData) {
        await emailField.fill(email);
        await emailField.blur();
        await expect(page.getByText('Email should be the real one!')).toBeVisible();
    }

    const testPassword = [
        'a',
        'ab',
        'abc',
    ]

    for(const password of testPassword){
        await passwordField.fill(password);
        await passwordField.blur();
        await expect(page.getByText('Password should contain from 4 to 50 characters')).toBeVisible();
    }
})




