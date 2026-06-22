import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/pages/forms/layouts')
})

test("input fields", async ({ page }) => {
    const usingTheGridEmailInput = page
        .locator("nb-card", { hasText: "Using the Grid" })
        .getByRole("textbox", { name: "Email" });

    await usingTheGridEmailInput.fill("test@test.com");
    await usingTheGridEmailInput.clear();
    await usingTheGridEmailInput.pressSequentially("test2@test.com", {
        delay: 500,
    });

    const inputValue = await usingTheGridEmailInput.inputValue();
    expect(inputValue).toEqual("test2@test.com");

    await expect(usingTheGridEmailInput).toHaveValue("test2@test.com");
});

test("radio buttons", async ({ page }) => {
    const usingTheGridForm = page.locator("nb-card", {
        hasText: "Using the Grid",
    });

    // await usingTheGridForm.getByLabel('Option 1').check({ force: true })
    const radio1 = usingTheGridForm
        .getByRole("radio", { name: "Option 1" })
    await radio1.check({ force: true });
    // const radioStatus = await usingTheGridForm
    //     .getByRole("radio", { name: "Option 1" })
    //     .isChecked();

    // console.log("Radio status: ", radioStatus);
    // expect(radioStatus).toBeTruthy();
    // // expect(radioStatus).toBeFalsy()

    await expect(radio1).toBeChecked();
});

test('checkboxs', async ({ page }) => {
    // check()

    // uncheck()

    // isChecked()

    // isUnchecked()

    // toBeChecked()
})

test("lists and dropdowns", async ({ page }) => {
    const dropdownList = page.locator('.appearance-outline')

    // await page.locator('nb-option').filter({ hasText: 'Dark' }).click()

    // //assertion
    const header = page.locator('nb-layout-header')
    // await expect(header).toHaveCSS('background-color', 'rgb(34, 43, 69)')

    const colors: Record<string, string> = {
        Light: "rgb(255, 255, 255)",
        Dark: "rgb(34, 43, 69)",
        Cosmic: "rgb(50, 50, 89)",
        Corporate: "rgb(255, 255, 255)",
    };

    // const optionList = await page.locator('nb-option').allTextContents()
    // console.log(optionList)

    await dropdownList.click()
    for (const color in colors) {
        console.log(color)
        await page.locator('nb-option').filter({ hasText: color }).click()
        await expect(header).toHaveCSS('background-color', colors[color])
        if (color !== "Corporate") {
            await dropdownList.click()
        }
    }

});