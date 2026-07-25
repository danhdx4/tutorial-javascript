import test from "@playwright/test";

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
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto('http://localhost:4200/pages/forms/layouts')

    const lineFrom = page.locator('nb-card').filter({ hasText: 'Inline form' })
    const name = lineFrom.getByPlaceholder('Jane Doe')
    const email = lineFrom.getByPlaceholder('Email')
    const checkbox = lineFrom.getByRole('checkbox')
    const submitBtn = lineFrom.getByRole('button', { name: 'SUBMIT' })

    await name.fill('Lanh NT')
    await email.fill('test@test.com')
    await checkbox.check({ force: true })
    // await lineFrom.locator('nb-checkbox').click()
    await submitBtn.click()
});

test("Basic form", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto('http://localhost:4200/pages/forms/layouts')

    // Basic form 
    const basicFrom = page.locator('nb-card').filter({ hasText: 'Basic form' })
    const email = basicFrom.getByLabel('Email')
    const password = basicFrom.getByLabel('Password')
    const checkbox = basicFrom.getByRole('checkbox')
    const submitBtn = basicFrom.getByRole('button', { name: 'SUBMIT' })

    await email.fill('test abc')
    await password.fill('test abc')
    await checkbox.check({ force: true })
    await submitBtn.click()
});

test("Form without labels", async ({ page }) => {
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

test("Block form", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto('http://localhost:4200/pages/forms/layouts')

    // Block Form
    const blockFrom = page.locator('nb-card').filter({ hasText: 'Block form' })
    const firstName = blockFrom.getByPlaceholder('First Name')
    const lastName = blockFrom.getByPlaceholder('Last Name')
    const email = blockFrom.getByPlaceholder('Email')
    const website = blockFrom.getByPlaceholder('Website')
    const submitBtn = blockFrom.getByRole('button', { name: 'SUBMIT' })

    await firstName.fill('test abc')
    await lastName.fill('test abc')
    await email.fill('test abc')
    await website.fill('test abc')
    await submitBtn.click()
});

test("Horizontal form", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto('http://localhost:4200/pages/forms/layouts')

    // Horizontal Form
    const horizontalForm = page.locator('nb-card').filter({ hasText: 'Horizontal form' })
    const email = horizontalForm.getByLabel('Email')
    const password = horizontalForm.getByLabel('Password')
    const checkbox = horizontalForm.locator('nb-checkbox')
    const signInBtn = horizontalForm.getByRole('button', { name: 'SIGN IN' })

    await email.fill('test abc')
    await password.fill('test abc')
    await checkbox.click()
    await signInBtn.click()

});

