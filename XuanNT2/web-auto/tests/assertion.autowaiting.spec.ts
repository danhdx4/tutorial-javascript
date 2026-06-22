import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'node:dns';
test.beforeEach(async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto('http://localhost:4200/pages/forms/layouts')

})

test("assertions", async ({ page }) => {
    // General assertions
    const vualue = 5
    expect(vualue).toEqual(5);

    const basicForm = page.locator("nb-card").filter({ hasText: "Basic form" });
    const button = basicForm.getByRole("button");
    const buttonText = await button.textContent();
    expect(buttonText).toEqual("Submit");

    // Locator assertion
    await expect(button).toHaveText("Submit");

    // Soft assertion
    // await expect.soft(button).toHaveText("Submit");

    // await button.click()
});

test("extracting values", async ({ page }) => {
    // Thẻ input: inputValue()
    // Text: innerText() hoặc textContent() cho single text, allTextContents() cho all text values
    // Thuộc tính: getAttribute()

    // single test value textContent()// innerText()
    const basicForm = page.locator("nb-card").filter({ hasText: "Basic form" });
    const button = basicForm.getByRole("button");
    const buttonText = await basicForm.locator("button").textContent();
    expect(buttonText).toEqual("Submit");

    // all text values
    const allRadioButtonsLabels = await page
        .locator("nb-radio")
        .allTextContents();
    console.log(allRadioButtonsLabels);
    expect(allRadioButtonsLabels).toContain("Option 1");

    // input value
    const emailField = basicForm.getByRole("textbox", { name: "Email" });
    await emailField.fill("test@test.com");
    const emailValue = await emailField.inputValue();
    // console.log(emailValue);
    expect(emailValue).toEqual("test@test.com");

    // attribute
    const placeholderValue = await emailField.getAttribute("placeholder");
    expect(placeholderValue).toEqual("Email");
    const buttonClass = await button.getAttribute('class')
    console.log(buttonClass)
    expect(buttonClass).toContain("status-danger")
});

test("Auto waiting", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto('http://localhost:4200/pages/forms/layouts')

    // Form without labels
    const formWithoutLabels = page.locator('nb-card').filter({ hasText: 'Form without labels' })
    const recipients = page.getByPlaceholder('Recipients')
    const subject = page.getByPlaceholder('Subject')
    const msg = page.getByPlaceholder('Message')
    const sendBtn = page.getByRole('button', { name: "SEND" })

    await recipients.fill('test abc')
    await subject.fill('test abc')
    await msg.fill('test abc')
    await sendBtn.click()
});

test("alternative waits", async ({ page }) => {
    await page.goto('http://www.uitestingplayground.com/ajax')

    const triggerBtn = page.getByRole('button', { name: 'Button Triggering AJAX Request' })
    await triggerBtn.click()

    // await page.waitForSelector('#content')
    // await page.waitForResponse('http://www.uitestingplayground.com/ajaxdata')
    await page.waitForLoadState("networkidle"); //Đợi cho đến khi không có kết nối mạng nào được thực hiện trong ít nhất 500 mili giây.

    // await expect(page.locator('#content')).toHaveText("Data loaded with AJAX get request.", { timeout: 20000 });
    await expect(page.locator('#content')).toHaveText("Data loaded with AJAX get request.");
})

test("Link", async ({ page }) => {
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
    
    // 1,2,3
    await page.goto('http://localhost:4200');
    const locatorLink = page.locator('nb-menu');
    locatorLink.getByRole('link', {name: 'Forms'}).click();
    locatorLink.getByRole('link', {name: 'Form Layouts'}).click();
    
    // 4
    const basicForm = page.locator('nb-card').filter({hasText: 'Basic form'});
    const inputEmail = basicForm.getByRole('textbox', {name: 'Email'});
    const inputEmailPlaceholder = await inputEmail.getAttribute('placeholder');
    expect(inputEmailPlaceholder).toEqual('Email');
    
    const inputPwd = basicForm.getByRole('textbox', {name: 'Password'});
    const inputPwdPlaceholder = await inputPwd.getAttribute('placeholder');
    expect(inputPwdPlaceholder).toEqual('Password');

    const btnSubmit = basicForm.getByRole('button', {name: 'SUBMIT'});
    await expect(btnSubmit).toHaveCSS('background-color', 'rgb(255, 61, 113)');

    // 5
    await inputEmail.fill('xuannt.test@gmail.com');
    await inputPwd.fill('123456');

    // 6
    expect(inputEmail).toHaveValue('xuannt.test@gmail.com');
    expect(inputPwd).toHaveValue('123456');

    // 7
    await btnSubmit.click();
});