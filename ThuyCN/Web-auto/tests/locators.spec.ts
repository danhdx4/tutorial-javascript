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
    // Email
    const usingTheGrid = page.locator('nb-card').filter({ hasText: 'Using the Grid' })
    const email = usingTheGrid.getByLabel('Email')
    // Password
    const password = usingTheGrid.getByLabel('Password')
    // Option1
    const radio1 = usingTheGrid.getByText('Option 1')
    // Option2
    const radio2 = usingTheGrid.getByText('Option 2')
    // Disabled Option
    const disabledButton = usingTheGrid.getByRole('checkbox', { name: 'Disabled Option'})
    // Sign In Btn
    const btn = usingTheGrid.getByRole('button', { name: "Sign In"})

    await email.fill('abc@gmail.com');
    await password.fill('123456');
    await radio1.check();
    await btn.click();
});
// Other form...
test("Locator for Basic form", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto('http://localhost:4200/pages/forms/layouts')
    // Email
    const BasicForm = page.locator('nb-card').filter({ hasText: 'Basic form' })
    const emailAddress = BasicForm.getByLabel('Email address')
    // Password
    const password = BasicForm.getByLabel('Password')
    // Checkbox Check me out
    const isTicked = BasicForm.getByText('Check me out')
    // Submit Btn
    const btn = BasicForm.getByRole('button', { name: "Submit"})

    await emailAddress.fill('123@gmail.com');
    await password.fill('123456');
    await isTicked.click();
    await btn.click();
});
 
 
 