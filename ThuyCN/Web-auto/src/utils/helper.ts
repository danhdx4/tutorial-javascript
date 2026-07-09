export function getDateFromToday(){
    const today = new Date();
    const startDate = today.getDate().toString();
    const expectedStartMonthShort = today.toLocaleString("en-US", { month: "short" });
    const expectedStartYear = today.getFullYear();
    return {
        today: today,
        startDate: startDate,
        expectedStartMonthShort: expectedStartMonthShort,
        expectedStartYear: expectedStartYear,
    };
} 