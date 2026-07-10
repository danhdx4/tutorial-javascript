export function getRangeDate(days: number) {
  const currentDate = new Date();
  const featureDate = new Date(currentDate);

  featureDate.setDate(currentDate.getDate() + days);

  const expectedDateCurrent = currentDate.getDate().toString();
  const expectFutureDate = featureDate.getDate().toString();

  const expectedMonthCurentShort = currentDate.toLocaleString("en-US", {
    month: "short",
  });

  const expectFutureMonthShort = featureDate.toLocaleString("en-US", {
    month: "short",
  });

  const expectedMonthCurrentLong = currentDate.toLocaleString("en-US", {
    month: "long",
  });

  const expectFutureMonthLong = featureDate.toLocaleString("en-US", {
    month: "long",
  });

  const expectedCurrentYear = currentDate.getFullYear();
  const expectFutureYear = featureDate.getFullYear();

  const expectedMonthAndYear = `${expectFutureMonthLong} ${expectFutureYear}`;

  const datetoAssert =
    `${expectedMonthCurentShort} ${expectedDateCurrent}, ${expectedCurrentYear}` +
    ` - ` +
    `${expectFutureMonthShort} ${expectFutureDate}, ${expectFutureYear}`;

  return {
    expectedDateCurrent,
    expectFutureDate,
    expectedMonthAndYear,
    datetoAssert,
  };
}
