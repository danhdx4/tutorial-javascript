import { test as base } from '@playwright/test';
import { TEST_USER } from '../test-data/user.data';
import { APP_URL } from '../utils/constants';

type AuthFixtures = {
    login: void;
};

export const test = base.extend<AuthFixtures>({
    login: async ({ page }, use) => {
        // Set up the fixture.
        await page.goto(APP_URL);
        await page.getByRole('link', { name: ' Sign in ' }).click();
        await page.getByPlaceholder('Email').fill(TEST_USER.email);
        await page.getByPlaceholder('Password').fill(TEST_USER.password);
        await page.getByRole('button', { name: ' Sign in ' }).click();
        await page.waitForResponse('**/api/users/login');
        await page.reload();

        // Use the fixture value in the test.
        await use();
    },
});

export { expect } from '@playwright/test';