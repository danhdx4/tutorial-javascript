import { Page as PlaywrightPage, expect } from "@playwright/test";
import { Page } from "./base.page";
import { PageUrl } from "../utils/constants";
import { getDateFromToday } from "../utils/helper";


export class DatePickerPage extends Page {
    readonly pageUrl: string;
    // Khởi tạo dữ liệu ban đầu cho object
    constructor(page: PlaywrightPage) {
        super(page);
        this.pageUrl = PageUrl.DATE_PICKER;
    }

    /** Locators */
    public LocatorsDate (){ 
    const dateRange = this.page.getByPlaceholder('Range Picker')
    const calendarContainer = this.page.locator('nb-calendar')
    const calerndarMonthAndYear = this.page.locator("nb-calendar-view-mode")
    const nextButton = this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]')
        return {
            dateRange : dateRange
        }
}


    public PickedDate(numberInput: any){
        const today = getDateFromToday();
        const getStartDate = today.today;
        const getEndDate = new Date(getStartDate);
        getEndDate.setDate(getStartDate.getDate() + numberInput);
        const endDate = getEndDate.toString();
        const expectedEndMonthShort = getEndDate.toLocaleString("en-US", { month: "short" });
        const expectedEndYear = getEndDate.getFullYear();
        const dateToAssert = `${today.expectedStartMonthShort} ${today.startDate}, ${today.expectedStartYear} - ${expectedEndMonthShort} ${endDate}, ${expectedEndYear}`;
    
     return {
    getStartDate : getStartDate,
    getEndDate : getEndDate,
    endDate : endDate,
    expectedEndMonthShort : expectedEndMonthShort,
    expectedEndYear : expectedEndYear,
    dateToAssert : dateToAssert,
    };
}

    //Action & Assertion functions
    async dgoto() {
        const response = await this.page.goto(this.pageUrl);
        expect(response?.status()).toBeLessThan(400);
    }
    
    async clickStartDateAndEndDate(getStartDate: any, getEndDate: any, dateToAssert: any, dateRange: any) {
    await this.page
    .locator('.range-cell')
    .getByText(getStartDate, { exact: true })
    .click();

    if (getStartDate.getMonth() !== getEndDate.getMonth()) {
        await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click();
    }

    await this.page
        .locator('.range-cell')
        .getByText(getEndDate, { exact: true })
        .click();
    
    await expect (dateRange).toHaveValue(dateToAssert)
    }

    // async waitForLoad() {
    //     await this.page.waitForURL(this.pageUrl);
    //     await expect(this.logo).toHaveText('PW-test')
    // }
}