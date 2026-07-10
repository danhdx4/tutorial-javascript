export function getDateFromToday(count: number) {
    let date = new Date();
    date.setDate(date.getDate() + count);

    const expectedDate = date.getDate().toString();
    const expectedMonthShort = date.toLocaleString("en-US", { month: "short" });
    const expectedMonthLong = date.toLocaleString("en-US", { month: "long" });
    const expectedYear = date.getFullYear();
    const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;
    const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`;
    return {
        date: expectedDate,
        dateMonthYear: dateToAssert,
        monthyear: expectedMonthAndYear
    }
}