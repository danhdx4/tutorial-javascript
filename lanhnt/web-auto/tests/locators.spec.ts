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

    // Email

    // Password

    // Option1

    // Option2

    // Disabled Option

    // Sign In Btn
});

// Other form...

