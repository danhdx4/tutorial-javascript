import test from "@playwright/test";

test("Common Locators", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto("http://localhost:4200/pages/forms/layouts");

    // by Tag name nb-card
    page.locator('nb-card');

    // by ID id="inputEmail1"
    page.locator("#inputEmail1");

    // by Class value .shape-rectangle
    page.locator(".shape-rectangle");

    // by XPath //*[@id="inputEmail1"]
    page.locator('//*[@id="inputEmail1"]')
})

test("Built-in Locators", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto("http://localhost:4200/pages/forms/layouts");

    // getByRole() button/SEND
    page.getByRole('button', { name: 'SEND' });

    // - getByText() IoT Dashboard
    page.getByText("IoT Dashboard")

    // - getByLabel() Email
    page.getByLabel('Email')

    // - getByPlaceholder() Jane Doe
    page.getByPlaceholder('Jane Doe');
})

test("Filter & Chaining locators", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto("http://localhost:4200/pages/forms/layouts");

    //filter
    page.locator('nb-card').filter({hasText: 'Using the Grid'})
    page.locator('nb-card').filter({hasText: 'Basic form'})

    //chaining nb-card/button - submit tren Basic form
    // const form = page.locator('nb-card').filter({hasText: 'Using the Grid'});
    // const signinButton = form.getByRole('button', {name: 'SIGN IN'});
    // hover không nhìn được vùng button

    page.locator('nb-card').filter({hasText: 'Using the Grid'}).getByRole('button', {name: 'SIGN IN'})

});

test("Locator for Using the Grid", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto('http://localhost:4200/pages/forms/layouts')

    // Using grid form 
    const usingTheGridForm = page.locator('nb-card').filter({ hasText: 'Using the Grid' })
    const email = usingTheGridForm.getByLabel('Email')
    const password = usingTheGridForm.getByLabel('Password')
    const option1 = usingTheGridForm.getByText('Option 1')
    const option2 = usingTheGridForm.getByText('Option 2')
    const disabledOption = usingTheGridForm.getByRole('checkbox', { name: 'Disabled Option' })
    const signInBtn = usingTheGridForm.getByRole('button', { name: 'Sign in' })

    await email.fill('test abc')
    await password.fill('test abc')
    await option2.check()
    await signInBtn.click()
});

test("Inline form", async ({ page }) => {
    await page.goto('http://localhost:4200/pages/forms/layouts');
    const inlineForm = page.locator('nb-card').filter({hasText: 'Inline form'});
    const inputName = inlineForm.getByPlaceholder('Jane Doe');
    const inputEmail = inlineForm.getByPlaceholder('Email');
    const inputCheck = inlineForm.getByRole('checkbox', {name: 'Remember me'});
    const submitButton = inlineForm.getByRole('button', {name: 'SUBMIT'});

    await inputName.fill('XuanNT');
    await inputEmail.fill('xuannttest@gmail.com');
    await inputCheck.check({force: true});
    await submitButton.click();
});

test("Basic form", async ({ page }) => {
    await page.goto('http://localhost:4200/pages/forms/layouts');
    const basicForm = page.locator('nb-card').filter({hasText: 'Basic form'});
    const basicFormEmail = basicForm.getByLabel('Email address');
    const basicFormPwd = basicForm.getByLabel('Password');
    const basicFormCheck = basicForm.getByRole('checkbox', {name: 'Check me out'});
    const basicFormSubmitButton = basicForm.getByRole('button', {name: 'SUBMIT'});

    await basicFormEmail.fill('xuannt2test@gmail.com');
    await basicFormPwd.fill('123456');
    await basicFormCheck.check({force: true});
    await basicFormSubmitButton.click();
});

test("Form without label", async ({ page }) => {
    await page.goto('http://localhost:4200/pages/forms/layouts');
    const withoutForm = page.locator('nb-card').filter({hasText: 'Form without labels'});
    const withoutFormRecipient = withoutForm.getByPlaceholder('Recipients');
    const withoutFormSubject = withoutForm.getByPlaceholder('Subject');
    const withoutFormMsg = withoutForm.getByPlaceholder('Message');
    const withoutFormButton = withoutForm.getByRole('button', {name: 'SEND'});

    await withoutFormRecipient.fill('XuanNT');
    await withoutFormSubject.fill('Tiêu đề');
    await withoutFormMsg.fill('Tin nhắn');
    await withoutFormButton.click();
});

test("Horizontal form", async ({ page }) => {
    await page.goto('http://localhost:4200/pages/forms/layouts');
    const horizontalForm = page.locator('nb-card').filter({hasText: 'Horizontal form'});
    const horizontalFormEmail = horizontalForm.getByLabel('Email');
    const horizontalFormPwd = horizontalForm.getByLabel('Password');
    const horizontalFormCheck = horizontalForm.getByRole('checkbox', {name: 'Remember me'});
    const horizontalFormButton = horizontalForm.getByRole('button', {name: 'SIGNIN'});

    await horizontalFormEmail.fill('xuannttest@gmail.com');
    await horizontalFormPwd.fill('123456');
    await horizontalFormCheck.check({force: true});
    await horizontalFormButton.click();
});

