import { test, expect } from "@playwright/test";
import { DatePickerPage } from '../page/date.picker.page'

// Exercise tests: kept separate from main spec
test('date picker - range from today to +5 days (exercise)', async ({ page }) => {
    const dp = new DatePickerPage(page)
    await dp.goto()

    const today = new Date()
    const end = new Date()
    end.setDate(end.getDate() + 5)

    const toAssert = `${today.toLocaleString('en-US', { month: 'short' })} ${today.getDate()}, ${today.getFullYear()} - ${end.toLocaleString('en-US', { month: 'short' })} ${end.getDate()}, ${end.getFullYear()}`

    const rangeField = await dp.selectRange(today, end)
    await expect(rangeField).toHaveValue(toAssert)
})

test('date picker - select 08/07/2026 to 15/07/2026 (exercise)', async ({ page }) => {
    const dp = new DatePickerPage(page)
    await dp.goto()

    const start = new Date(2026, 6, 8)
    const end = new Date(2026, 6, 15)

    const startStr = `${start.toLocaleString('en-US', { month: 'short' })} ${start.getDate()}, ${start.getFullYear()}`
    const endStr = `${end.toLocaleString('en-US', { month: 'short' })} ${end.getDate()}, ${end.getFullYear()}`

    const rangeField = await dp.selectRange(start, end)
    await expect(rangeField).toHaveValue(`${startStr} - ${endStr}`)
})
