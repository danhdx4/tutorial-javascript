import { test, expect } from '@playwright/test';

test("assertions", async ({ page }) => {
    await page.goto('http://localhost:4200/pages/forms/layouts')
    const basicFormButton = page
        .locator("nb-card")
        .filter({ hasText: "Basic form" })
        .locator("button");

    // General assertions
    const value = 5;
    expect(value).toEqual(5);

    const text = await basicFormButton.textContent();
    expect(text).toEqual("Submit");

    // Locator assertion
    await expect(basicFormButton).toHaveText("Submit");

    // Soft assertion
    await expect.soft(basicFormButton).toHaveText("Submit");
    await basicFormButton.click();
});


test("extracting values", async ({ page }) => {
    // single test value
    await page.goto('http://localhost:4200/pages/forms/layouts')
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
    expect.soft(emailValue).toEqual("test@test.com");
    console.log("Email value: ", emailValue);

    // attribute
    const placeholderValue = await emailField.getAttribute("placeholder");
    expect(placeholderValue).toEqual("Email");
});

test("Auto waiting", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto("http://localhost:4200/pages/forms/layouts");

    // Form without labels
    const formWithoutLabels = page
        .locator("nb-card")
        .filter({ hasText: "Form without labels" });
    const recipients = page.getByPlaceholder("Recipients");
    const subject = page.getByPlaceholder("Subject");
    const msg = page.getByPlaceholder("Message");
    const sendBtn = page.getByRole("button", { name: "SEND" });

    await recipients.fill("test abc");
    await subject.fill("test abc");
    await msg.fill("test abc");
    await sendBtn.click();
});

test("alternative waits", async ({ page }) => {
    await page.goto("http://www.uitestingplayground.com/ajax");

    const triggerBtn = page.getByRole("button", {
        name: "Button Triggering AJAX Request",
    });
    await triggerBtn.click();

    await page.waitForSelector("#content");
    // await page.waitForResponse('http://www.uitestingplayground.com/ajaxdata')
    // await page.waitForLoadState("networkidle"); //Đợi cho đến khi không có kết nối mạng nào được thực hiện trong ít nhất 500 mili giây.

    await expect(page.locator("#content")).toHaveText(
        "Data loaded with AJAX get request.",
    );
});

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

test("Basic form", async ({ page }) => {
    await page.goto("http://localhost:4200");

    const form = page.getByTitle('Forms');
    await form.click()

    const formLayout = page.getByTitle('Form Layouts');
    await formLayout.click()

    const basicFormButton = page
        .locator("nb-card")
        .filter({ hasText: "Basic form" });

    const emailField = basicFormButton.getByRole("textbox", { name: "Email" });
    const emailValue = await emailField.getAttribute("placeholder");
    expect(emailValue).toEqual("Email");
    console.log(emailValue);
    
    const passwordField = basicFormButton.getByRole("textbox", {name : "Password"});
    const passwordValue = await passwordField.getAttribute("placeholder");
    expect(passwordValue).toEqual("Password")

    const submitButton = basicFormButton.getByRole("button", {name : "Submit"});
    await expect(submitButton).toHaveCSS("background-color", "rgb(255, 61, 113)")
    
    await emailField.fill("abc@gmail.com")
    await passwordField.fill("123456")
    const emailTest = await emailField.inputValue();
    expect(emailTest).toEqual("abc@gmail.com")
    await submitButton.click();
});
