import { test, expect } from '@playwright/test';

test("assertions", async ({ page }) => {
    // General assertions

    // Locator assertion

    // Soft assertion
});

test("extracting values", async ({ page }) => {
    // Thẻ input: inputValue()
    // Text: innerText() hoặc textContent() cho single text, allTextContents() cho all text values
    // Thuộc tính: getAttribute()

    // single test value textContent()// innerText()
    const basicForm = page.locator("nb-card").filter({ hasText: "Basic form" });
    const buttonText = await basicForm.locator("button").textContent();
    expect(buttonText).toEqual("Submit");

    // all text values
    const allRadioButtonsLabels = await page
        .locator("nb-radio")
        .allTextContents();
    expect(allRadioButtonsLabels).toContain("Option 1");

    // input value
    const emailField = basicForm.getByRole("textbox", { name: "Email" });
    await emailField.fill("test@test.com");
    const emailValue = await emailField.inputValue();
    expect(emailValue).toEqual("test@test.com");

    // attribute
    const placeholderValue = await emailField.getAttribute("placeholder");
    expect(placeholderValue).toEqual("Email");
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
    // await page.waitForLoadState("networkidle"); //Đợi cho đến khi không có kết nối mạng nào được thực hiện trong ít nhất 500 mili giây.

    await expect(page.locator('#content')).toHaveText("Data loaded with AJAX get request.", { timeout: 20000 })
});