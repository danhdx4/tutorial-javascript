
import test, {expect} from "@playwright/test";
import { DatePickerPage } from "../page/date.picker.page";

test ('Date picker', async ({page}) => {
    const datePickerPage = new DatePickerPage(page),
    PickedDateA = datePickerPage.PickedDate(5),
    locatorDateA = datePickerPage.LocatorsDate(),
    getStartDateA = PickedDateA.getStartDate,
    getEndDateA = PickedDateA.getEndDate,
    dateToAssert = PickedDateA.dateToAssert,
    dateRange = locatorDateA.dateRange;

    await datePickerPage.dgoto();

    await locatorDateA.dateRange.click();

    await datePickerPage.clickStartDateAndEndDate(getStartDateA, getEndDateA, dateToAssert, dateRange)
})