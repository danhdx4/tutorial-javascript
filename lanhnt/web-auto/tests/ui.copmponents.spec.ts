import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/pages/forms/layouts')
})

test('input fields', async ({ page }) => {
    // fill()

    // clear()

    // pressSequentially()

    // inputValue

    // toHaveValue

})

test('radio button', async ({ page }) => {
    // check()

    // uncheck()

    // isChecked()

    // isUnchecked()

    // toBeChecked()
})

test('checkboxs', async ({ page }) => {
    // check()

    // uncheck()

    // isChecked()

    // isUnchecked()

    // toBeChecked()
})

test("lists and dropdowns", async ({ page }) => {

});


const colors: Record<string, string> = {
    Light: "rgb(255, 255, 255)",
    Dark: "rgb(34, 43, 69)",
    Cosmic: "rgb(50, 50, 89)",
    Corporate: "rgb(255, 255, 255)",
};