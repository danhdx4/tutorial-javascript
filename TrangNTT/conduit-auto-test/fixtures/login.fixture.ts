import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { BASE_URL, USER } from '../utils/constants';

type LoginFixture = {
  login: Page;
};

export const test = base.extend<LoginFixture>({
  login: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await page.goto(BASE_URL);
    await loginPage.login(USER.email, USER.password);

    await use(page);
  },
});

export { expect };