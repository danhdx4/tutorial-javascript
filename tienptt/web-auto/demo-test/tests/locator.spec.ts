import { test, expect } from '@playwright/test';


test("Common Locators", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts
    await page.goto('http://localhost:4200/pages/forms/layouts')

// test("Common Locators", async ({ page }) => {
//     await page.goto('http://localhost:4200/pages/forms/layouts');
//     await page.waitForTimeout(15000);
// });
///test
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
////////////////////////// BTVN///////////////////////////
test("Inline form", async ({ page }) => {
  await page.goto("http://localhost:4200/pages/forms/layouts");
  const InputInline = page .locator("nb-card") .filter({ hasText: "Inline form" });
  //name
  const nameInputInline = InputInline.getByPlaceholder("Jane Doe");
  await nameInputInline.fill("Pham Thi Thuy Tien");
  //mail
  const emailInputInline = InputInline.getByPlaceholder("Email");
  await emailInputInline.fill("tienptt1998@gmail.com");
  //checkbox
  const rememberMeCheckbox = InputInline.getByRole("checkbox", {
    name: "Remember me",
  });
  await rememberMeCheckbox.check({ force: true });
  //butotn sign in
  const signInButton = InputInline.getByRole("button", { name: "SUBMIT" });
  await signInButton.click();
});

///Muc basic form 
test("Basic form", async ({ page }) => {
  await page.goto("http://localhost:4200/pages/forms/layouts");
  const InputBasic = page.locator("nb-card").filter({ hasText: "Basic form" });
  //email
  const emailInputBasic = InputBasic.getByPlaceholder("Email");
  await emailInputBasic.fill("tienptt1998@gmail.com");
  //password
  const passwordInputBasic = InputBasic.getByPlaceholder("Password");
  await passwordInputBasic.fill("tien123456");
  //checkbox
  const checkMeCheckboxBasic = InputBasic.getByRole("checkbox", {
    name: "Check me out",
  });
  await checkMeCheckboxBasic.check({ force: true });
  //button submit
  const submitButtonBasic = InputBasic.getByRole("button", { name: "SUBMIT" });
  await submitButtonBasic.click();
});

// Muc form without lables
test(" Form without lables", async ({ page }) => {
  await page.goto("http://localhost:4200/pages/forms/layouts");
  const InputFormWithoutLables = page.locator("nb-card").filter({ hasText: "Form without labels" });
  //recipient
  const recipientInputFormWithoutLables =InputFormWithoutLables.getByPlaceholder("Recipients");
  await recipientInputFormWithoutLables.fill("Thuỷ Tiên");
  //subject
  const subjectInputFormWithoutLables =InputFormWithoutLables.getByPlaceholder("Subject");	
	await subjectInputFormWithoutLables.fill("ban lam gi");
  //message
  const messageInputFormWithoutLables = InputFormWithoutLables.getByPlaceholder("Message");
  await messageInputFormWithoutLables.fill("ban lam gi");
  //button send
  const sendButtonFormWithoutLables = InputFormWithoutLables.getByRole(
    "button",
    { name: "SEND" },
  );
  await sendButtonFormWithoutLables.click();
});

// Mục Horizontal form
test("Locator for Horizontal form", async ({ page }) => {
  await page.goto("http://localhost:4200/pages/forms/layouts");
  const InputHorizontal = page.locator("nb-card").filter({ hasText: "Horizontal form" });
  //email
  const emailInputHorizontal = InputHorizontal.getByPlaceholder("Email");
  await emailInputHorizontal.fill("tienptt1998@gmail.com");
  //password
  const passwordInputHorizontal = InputHorizontal.getByPlaceholder("Password");
  await passwordInputHorizontal.fill("tien123");
  //checkbox
  const rememberMeCheckboxHorizontal = InputHorizontal.getByRole("checkbox", {
    name: "Remember me",
  });
  await rememberMeCheckboxHorizontal.check({ force: true });
  //button sign in
  const signInButtonHorizontal = InputHorizontal.getByRole("button", {
    name: "SIGN IN",
  });
  await signInButtonHorizontal.click();
});

