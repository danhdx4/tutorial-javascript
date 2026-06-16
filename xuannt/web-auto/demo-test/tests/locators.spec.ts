import test from "@playwright/test";
import { start } from "repl";
import { toUSVString } from "util";

test("Common Locators", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto('http://localhost:4200/pages/forms/layouts')

    // by Tag name nb-card
    page.locator('nb-card')

    // by ID id="inputEmail1"
    page.locator('#inputEmail1')

    // by Class value .shape-rectangle
    page.locator('.shape-rectangle')
    page.locator('.logo')

    // by XPath //*[@id="inputEmail1"]
    page.locator('//*[@id="inputEmail1"]')
})

test("Built-in Locators", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto('http://localhost:4200/pages/forms/layouts')


    // getByRole() button/SEND
    page.getByRole('button', { name: 'SEND' })

    // - getByText() IoT Dashboard
    page.getByText('IoT Dashboard')

    // - getByLabel() Email
    page.getByLabel('Email')

    // - getByPlaceholder() Jane Doe
    page.getByPlaceholder('Jane Doe')
})

test("Filter & Chaining locators", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto('http://localhost:4200/pages/forms/layouts')

    //filter
    page.locator('nb-card').filter({ hasText: 'Using the Grid' })
    page.locator('nb-card').filter({ has: page.getByRole('button', { name: 'SEND' }) })


    //chaining nb-card/button - submit tren Basic form
    page.locator('nb-card').filter({ hasText: 'Basic form' }).getByRole('button', {
        name: 'SUBMIT'
    })
    const basicForm = page.locator('nb-card').filter({ hasText: 'Basic form' })
    const submit = basicForm.getByRole('button', { name: 'SUBMIT' })
    const email = basicForm.getByLabel('Email')
    await email.fill('Test abc')

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
    await page.goto('http://localhost:4200/pages/forms/layouts')
    // Using the grid form
    const usingTheInlineForm = page.locator('nb-card').filter({hasText: 'Inline form'})
    const name = usingTheInlineForm.getByPlaceholder('Jane Doe')
    const email = usingTheInlineForm.getByPlaceholder('Email')
    const tick = usingTheInlineForm.getByRole('checkbox', { name: 'Remember me' })
    const subMitBtn = usingTheInlineForm.getByRole('button', { name: 'SUBMIT' })

    await name.fill('xuannt')
    await email.fill('xuannt')
    await tick.check()
    await subMitBtn.click()
});

test("Basic form", async ({ page }) => {
    await page.goto('http://localhost:4200/pages/forms/layouts')
    // Using the Basic form
    const usingTheBasicForm = page.locator('nb-card').filter({hasText: 'Basic form'})
    const emaiAddr = usingTheBasicForm.getByLabel('Email address')
    const passWord1 = usingTheBasicForm.getByLabel('Email address')
    const tick1 = usingTheBasicForm.getByRole('checkbox',{name: 'Check me out'} )
    const SubMitBt1 = usingTheBasicForm.getByRole('button',{name: 'SUBMIT'})

    await emaiAddr.fill('xuannt')
    await passWord1.fill('xuannt')
    await tick1.check()
    await SubMitBt1.click()

});

test("Form without label", async ({ page }) => {
    await page.goto('http://localhost:4200/pages/forms/layouts')
    // Using the Form without label
    const usingTheFormWithoutLabel = page.locator('nb-card').filter({hasText: 'Form without labels'})
    const recipients = usingTheFormWithoutLabel.getByPlaceholder('Recipients')
    const subject = usingTheFormWithoutLabel.getByPlaceholder('Subject')
    const message = usingTheFormWithoutLabel.getByPlaceholder('Message')
    const sendBtn = usingTheFormWithoutLabel.getByRole('button',{name: 'SEND'})

    await recipients.fill('xuannt')
    await subject.fill('xuannt')
    await message.fill('xuannt')
    await sendBtn.click()
});

test("Block form", async ({ page }) => {
    await page.goto('http://localhost:4200/pages/forms/layouts')
    // Using the Block form
    const usingTheBlockForm = page.locator('nb-card').filter({hasText: 'Block form'})
    const name1 = usingTheBlockForm.getByLabel('First Name')
    const email1 = usingTheBlockForm.getByLabel('Email')
    const submitBtn2 = usingTheBlockForm.getByRole('button',{nam: 'SUBMIT'})

    await name1.fill('xuannt')
    await email1.fill('xuannt')
    await submitBtn2.click()
});

test("Horizontal form", async ({ page }) => {
    await page.goto('http://localhost:4200/pages/forms/layouts')
    // Using the Horizontal form
    const usingTheHorizontalForm = page.locator('nb-card').filter({hasText: 'Horizontal form'})
    const email2 = usingTheHorizontalForm.getByLabel('Emai')
    const passWord2 = usingTheHorizontalForm.getByLabel('Label')
    const tick2 = usingTheHorizontalForm.getByRole('checkbox',{name: 'Remenber me'})
    const signInBtn1 = usingTheHorizontalForm.getByRole('button', {name:'SIGN IN'})

    await email2.fill('xuannt')
    await passWord2.fill('xuannt')
    await tick2.check()
    await signInBtn1.click()
});

