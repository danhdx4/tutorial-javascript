//Login
export const loginData = {
    valid: {
        email: 'test@test.com',
        password: '123456'
    },
    emptyEmail: '',
    invalidEmail: 'invalid-email',
    shortPassword: '123'
};

export function getDateFromToday(count: number) {
    const date = new Date();
    date.setDate(date.getDate() + count);

    const expectedDate = date.getDate().toString();
    const expectedMonthShort = date.toLocaleString('en-US', { month: 'short' });
    const expectedMonthLong = date.toLocaleString('en-US', { month: 'long' });
    const expectedYear = date.getFullYear();
    const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;
    const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`;

    return {
        date: expectedDate,
        dateMonthYear: dateToAssert,
        monthyear: expectedMonthAndYear,
    };
}

// Đangki
export const registerData = {
    valid: {
        fullName: 'Tien PTT',
        email: 'tienptt1998@gmail.com',
        password: '123456',
        repeatPassword: '123456'
    },
    missingFullName: {
        fullName: '',
        email: 'tienptt1998@gmail.com',
        password: '123456',
        repeatPassword: '123456'
    },
    invalidEmail: {
        fullName: 'Tien PTT',
        email: 'thuytien',
        password: '123456',
        repeatPassword: '123456'
    },
    mismatchedPassword: {
        fullName: 'Tien PTT',
        email: 'tienptt1998@gmail.com',
        password: '123456',
        repeatPassword: '1234'
    }
};
