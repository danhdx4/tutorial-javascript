import test from "@playwright/test";

// test("Common Locators", async ({ page }) => {
//     // goto http://localhost:4200/pages/forms/layouts
//     await page.goto('http://localhost:4200/pages/forms/layouts')
//     // by Tag name nb-card
//   page.locator('nb-card')
//     // by ID id="inputEmail1"
//   page.locator('#inputEmail1')

//     // by Class value .shape-rectangle
//     page.locator('.shape-rectangle')
//     page.locator('.logo')
//     // by XPath //*[@id="inputEmail1"]

// page.locator('//*[@id="inputEmail1"]')
// })

// test("Built-in Locators", async ({ page }) => {
//     // goto http://localhost:4200/pages/forms/layouts
// await page.goto('http://localhost:4200/pages/forms/layouts')
//     // getByRole() button/SEND
// page.getByRole('button', { name: 'SEND' })
//     // - getByText() IoT Dashboard
// page.getByText('IoT Dashboard')
//     // - getByLabel() Email
// page.getByLabel('Email')
//     // - getByPlaceholder() Jane Doe
// page.getByPlaceholder('Jane Doe')
// })


// test("Filter & Chaining locators", async ({ page }) => {
//     // goto http://localhost:4200/pages/forms/layouts
// await page.goto ('http://localhost:4200/pages/forms/layouts')
//     //filter
// // định vị Inline form
// page.locator('nb-card') .filter({ hasText: 'Inline form' })

// //định vị Using the Grid
// page.locator('nb-card') .filter({ hasText: 'Using the Grid' })

// //định vị Basic form
// page.locator('nb-card') .filter({ hasText: 'Basic form' })

// //định vị Form without lables
// page.locator('nb-card') .filter({ hasText: 'Form without lables' })

// //định vị Block form
// page.locator('nb-card') .filter({ hasText: 'Block form' })

// //định vị Horizontal form
// page.locator('nb-card') .filter({ hasText: 'Horizontal form' })

//     //chaining nb-card/button

// page.locator('.using-grid').locator('button')
// page.locator('.basic-form').locator('button')
// page.locator('.Form-without-lables').locator('button')
// page.locator('.Block-form').locator('button')
// page.locator('.BHorizontal-form').locator('button')

// });


// định vị Inline form
// page.locator('nb-card') .filter({ hasText: 'Inline form' })
test("Locator for Inline form", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto("http://localhost:4200/pages/forms/layouts");

 const Inlineform = page.locator('nb-card').filter({
        hasText: 'Inline form'
    });
//Jane Doe
const name = Inlineform.getByPlaceholder('Jane Doe');
await name.fill("Jane Doe");

//Email
const Email1 = Inlineform.getByPlaceholder('Email');
await Email1.fill("Email");

//Remember me
const rememberme = Inlineform.getByLabel('Remember me');
await rememberme.check({force : true});
// Submit
const buttonSubmit = Inlineform.getByLabel('SUBMIT');
await buttonSubmit.click();
});

test("Locator for Using the Grid", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto("http://localhost:4200/pages/forms/layouts");

    const usingTheGrid = page.locator('nb-card').filter({
        hasText: 'Using the Grid'
    });

     // Email 
    const email = usingTheGrid.getByPlaceholder('Email');
    await email.fill("van.anh@gmail.com");
    // Password 
    const password = usingTheGrid.getByPlaceholder('Password');
    await password.fill("123456");
    // Option 1
    const option1 = usingTheGrid.getByLabel("Option 1");
    await option1.check({force : true});

    // Button Signin
    const button = usingTheGrid.getByRole("button", {name: "SIGN IN"});
    await button.click();
});


//Định vị Form without labels

test("Locator for Form without labels", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto("http://localhost:4200/pages/forms/layouts");

    const  FormWithoutLabels= page.locator('nb-card').filter({
        hasText: 'Form without labels'
        });

//Recipients
const Recipients = FormWithoutLabels.getByPlaceholder('Recipients');
await Recipients.fill('Recipients');
//Subject
const Subject = FormWithoutLabels.getByPlaceholder('Subject');
await Subject.fill('Subject');
//Message
const Message = FormWithoutLabels.getByPlaceholder('Message');
await Message.fill('Hello người nhận');
//Button SEND
const ButtonSend = FormWithoutLabels.getByRole("Button", {name: "SEND"});
await ButtonSend.click();
    });


    //Định vị Horizontal form
test("Locator for Horizontal form", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto("http://localhost:4200/pages/forms/layouts");

    const  HorizontalForm= page.locator('nb-card').filter({
        hasText: 'Horizontal form'
        });

const emailHori = HorizontalForm.getByPlaceholder('Email');
await emailHori.fill("van.anh@gmail.com");

const passwordHori = HorizontalForm.getByPlaceholder('Password');
await passwordHori.fill("123456");

const RememberCheckbox = HorizontalForm.getByLabel('Remember me');
await RememberCheckbox.check({force : true});

const buttonSignIn = HorizontalForm.getByRole("button", {name: "SIGN IN"});
await buttonSignIn.click();
    });


// Định vị Basic form
test("Locator for Basic form", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto("http://localhost:4200/pages/forms/layouts");

    const  BasicForm= page.locator('nb-card').filter({
        hasText: 'Basic form'
        });


const emailBasic = BasicForm.getByPlaceholder('Email');
await emailBasic.fill("van.anh@gmail.com");

const passwordBasic = BasicForm.getByPlaceholder('Password');
await passwordBasic.fill("123456");

const RememberCheckboxCheckMeOut = BasicForm.getByLabel('Check me out');
await RememberCheckboxCheckMeOut.check({force : true});

const buttonSubmit = BasicForm.getByRole("button", {name: "SUBMIT"});
await buttonSubmit.click();                
    });


    //Định vị Block form
test("Locator for Block form", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto("http://localhost:4200/pages/forms/layouts");       

    const  BlockForm= page.locator('nb-card').filter({
        hasText: 'Block form'
        });     

const FirstnameBlock = BlockForm.getByPlaceholder('First name');
await FirstnameBlock.fill("Van Anh ");

const LastnameBlock = BlockForm.getByPlaceholder('Last name');
await LastnameBlock.fill("Nguyen Thi");

const emailBlock = BlockForm.getByPlaceholder('Email');
await emailBlock.fill("van.anh@gmail.com");

const WebsiteBlock = BlockForm.getByPlaceholder('Website');
await WebsiteBlock.fill("www.vananh.com");


const buttonSubmit = BlockForm.getByRole("button", {name: "SUBMIT"});
await buttonSubmit.click();                
    });
    