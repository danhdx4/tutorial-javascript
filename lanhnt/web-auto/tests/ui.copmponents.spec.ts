import { test, expect } from '@playwright/test';

// test.beforeEach(async ({ page }) => {
//     await page.goto('http://localhost:4200/pages/forms/layouts')
// })

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

test('dialogs', async ({ page }) => {
    // Navigate to Dialog demo URL
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    const resultTxt = page.locator('#result')
    const alertTriggerBtn = page.getByRole('button', { name: 'Click for JS Alert' })
    const confirmTriggerBtn = page.getByRole('button', { name: 'Click for JS Confirm' })
    const promtTriggerBtn = page.getByRole('button', { name: 'Click for JS Prompt' })

    // bắt sự kiện dialog
    page.on('dialog', async dialog => {
        console.log('Check message text: ', dialog.message())
        console.log('Check dialog type: ', dialog.type())
        await dialog.accept('test abc');
        // await dialog.dismiss()
    });

    // Alert
    // await alertTriggerBtn.click()
    // await expect(resultTxt).toHaveText('You successfully clicked an alert')

    // Confirm dialog
    // await confirmTriggerBtn.click()
    // await expect(resultTxt).toHaveText('You clicked: Cancel')

    // Prompt
    await promtTriggerBtn.click()
    await expect(resultTxt).toHaveText('You entered: test abc')

})

test("web tables", async ({ page }) => {
    // Navigate to Smart Table Page
    await page.getByText("Tables & Data").click();
    await page.getByText("Smart Table").click();

    /**
     * 1 get the row by any text in this row
     * Tìm kiếm row có text twitter@outlook.com
     * clear data ở cột Age, và nhập giá trị mới
     * verify kết quả nhận được
     */

    // const targetRow = page.getByRole('row', { name: 'twitter@outlook.com' })
    // await targetRow.locator('.nb-edit').click()
    // await page.locator('input-editor').getByPlaceholder('Age').clear()
    // await page.locator('input-editor').getByPlaceholder('Age').fill('999')
    // await page.locator('.nb-checkmark').click()


    /**
     * 2 get the row based on the value in the specific column
     * Tìm kiếm row có id = 27
     * clear data ở cột Email và nhập giá trị mới
     * verify kết quả tìm được
     */

    const targetRowById = page.getByRole('row').filter({ has: page.locator('td').nth(1).getByText('27') })
    const nextBtn = page.locator('.ng2-smart-page-link.page-link.page-link-next')

    let found = false
    while (!found) {
        console.log('checkly: ', await targetRowById.count())
        if (await targetRowById.count()) {
            //todo
            console.log('I found it!!!!')

            await targetRowById.locator('.nb-edit').click()
            await page.locator('input-editor').getByPlaceholder('E-mail').clear()
            await page.locator('input-editor').getByPlaceholder('E-mail').fill('test@test.com')
            await page.locator('.nb-checkmark').click()
            break;
        }
        await nextBtn.click()
    }
});

test('date picker', async ({ page }) => {
    // navigate to date picker page
    await page.goto('http://localhost:4200/pages/forms/datepicker')
    const formPickerField = page.getByPlaceholder('Form Picker')

    await formPickerField.click()
    const calendarContainer = page.locator('nb-calendar')
    let calendarMonthAndYearField = page.locator("nb-calendar-view-mode")

    // Choose the specific date in the month
    // await page.locator('[class="day-cell ng-star-inserted"]').getByText('1', { exact: true }).click()
    // await expect(formPickerField).toHaveValue('Jun 1, 2026')

    // Choose dynamic date in the month
    let date = new Date();
    date.setDate(date.getDate() + 500);

    const expectedDate = date.getDate().toString();
    const expectedMonthShort = date.toLocaleString("en-US", { month: "short" });
    const expectedMonthLong = date.toLocaleString("en-US", { month: "long" });
    const expectedYear = date.getFullYear();
    const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;
    const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`;
    console.log(`
          date = ${date},
          newDate = ${date.setDate(date.getDate() + 500)},
          expectedDate = ${expectedDate},
          expectedMonthShort = ${expectedMonthShort},
          expectedMonthLong = ${expectedMonthLong},
          expectedYear = ${expectedYear},
          dateToAssert = ${dateToAssert},
          expectedMonthAndYear = ${expectedMonthAndYear}
          `);

    // await page.locator('[class="day-cell ng-star-inserted"]').getByText(expectedDate, { exact: true }).click()
    // await expect(formPickerField).toHaveValue(dateToAssert)

    while (!(await calendarMonthAndYearField.textContent())?.includes(expectedMonthAndYear)) {
        await page.locator('button.next-month').click()
        // await page.locator("nb-calendar-view-mode").textContent();
    }

    await page.locator('[class="day-cell ng-star-inserted"]').getByText(expectedDate, { exact: true }).click()
    await expect(formPickerField).toHaveValue(dateToAssert)
})