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
await page.goto ('http://localhost:4200/pages/forms/layouts')
    //filter
// định vị Inline form
page.locator('nb-card') .filter({ hasText: 'Inline form' })

//định vị Using the Grid
page.locator('nb-card') .filter({ hasText: 'Using the Grid' })

//định vị Basic form
page.locator('nb-card') .filter({ hasText: 'Basic form' })

//định vị Form without lables
page.locator('nb-card') .filter({ hasText: 'Form without lables' })

//định vị Block form
page.locator('nb-card') .filter({ hasText: 'Block form' })

//định vị Horizontal form
page.locator('nb-card') .filter({ hasText: 'Horizontal form' })

    //chaining nb-card/button

page.locator('.using-grid').locator('button')
page.locator('.basic-form').locator('button')
page.locator('.Form-without-lables').locator('button')
page.locator('.Block-form').locator('button')
page.locator('.BHorizontal-form').locator('button')

});


test("Locator for Using the Grid", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto('http://localhost:4200/pages/forms/layouts');

    const usingTheGrid = page.locator('nb-card').filter({
        hasText: 'Using the Grid'
    });

     // Email 
    const email = usingTheGrid.getByPlaceholder('Email');
    // Password 
    const password = usingTheGrid.getByPlaceholder('Password');

    // Option 1
    const option1 = usingTheGrid.getByText('Option 1');
    // Option 2
    const option2 = usingTheGrid.getByText('Option 2');

    // Disabled Option
    const disabledOption = usingTheGrid.getByText('Disabled Option');