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
    // const buttonText = await button.textContent();
    // expect(buttonText).toEqual("Submit");

    // Locator assertion
    // await expect(button).toHaveText("Submit1");

    // Soft assertion
    await expect.soft(button).toHaveText("Submit1");

    await button.click()
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


//BTVN buổi 4 
// Viết bài test verify Basic form với các nội dung như sau:

// Đi tới link http://localhost:4200/
// Click vào btn Forms trên menu bar
// Click vào bnt Form Layouts trên menu bar
// Verify Basic form với các nội dung
// Trường Email có placeholder là 'Email'
// Trường Password có placeholder là 'Password'
// Button Submit có mã màu là rgb(255,61,113)
// Tiến hành filter thông tin Email và Password
// Verify text hiển thị trong trường email, password như thông tin đã nhập
// Click vào btn Submit


test(" Verify Basic form", async ({ page }) => {
    await page.goto('http://localhost:4200/')
    const forms = page.locator('nb-menu').filter({
        hasText: 'Forms'
    });
    // Click vào btn Forms trên menu bar
    const buttonForms = forms.getByRole("link", { name: 'Forms' })
    await buttonForms.click();
    // Click vào bnt Form Layouts trên menu bar
    const buttonFormLayouts = forms.getByRole("link", { name: 'Form Layouts' })
    await buttonFormLayouts.click();
    // Verify Basic form với các nội dung
    // Trường Email có placeholder là 'Email'
    const basicForm = page.locator('nb-card').filter({
        hasText: 'Basic form'
    });
    // Lấy input email trong Basic form
    const inputEmaillocator = basicForm.getByPlaceholder('Email');
    const imputEmail = await inputEmaillocator.getAttribute('placeholder');

    // Kiểm tra placeholder Email
    await expect(imputEmail).toEqual("Email");
    console.log("placeholder Email = ", imputEmail);

    // Trường Password có placeholder là 'Password'
    const inputPasswordLocator = basicForm.getByPlaceholder('Password');
    const inputPassword = await inputPasswordLocator.getAttribute('placeholder');
    // Kiểm tra placeholder password
    await expect(inputPassword).toEqual("Password");
    console.log("placeholder Password =", inputPassword);

    // Button Submit có mã màu là rgb(255,61,113)
    const buttonSubmit = basicForm.getByRole("button", { name: "SUBMIT" });
    await expect(buttonSubmit).toHaveCSS("background-color", "rgb(255, 61, 113)");

    // Tiến hành filter thông tin Email và Password
    await inputEmaillocator.fill("vananh@gmail.com");
    await inputPasswordLocator.fill("1234567");

    // Verify text hiển thị trong trường email, password như thông tin đã nhập
    await expect(imputEmail).toEqual("Email");
    console.log("Input email =", "vananh@gmail.com");

    await expect(inputPassword).toEqual("Password");
    console.log("Input Password =", "1234567");

    /**
     * Lanh note:
     *  biến inputEmail, password để lấy ra value của thuộc tính PlaceHolder -> Assertion này ko đúng vào yêu cầu
     * phần console.log: phần log này ko có ý nghĩa vì ko có tham số đầu vào
     */


    // Click vào btn Submit
    await buttonSubmit.click();

});