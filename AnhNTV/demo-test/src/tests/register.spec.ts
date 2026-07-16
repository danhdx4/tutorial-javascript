import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register.page';
import { registerData } from '../data/register.data';

test.describe('Register Page - Data Driven', () => {
  let registerPage: RegisterPage;

  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await registerPage.goto();
  });

  for (const data of registerData) {
    test(data.title, async () => {
      await registerPage.fillFullName(data.fullname);
      await registerPage.fillEmail(data.email);
      await registerPage.fillPassword(data.password);
      await registerPage.fillConfirmPassword(data.confirm);

      if (data.agree) {
        await registerPage.agreeTerms();
      }

      const button = registerPage.page.locator('button:has-text("Register")');
      await expect(button).toBeVisible();

      if (data.message) {
        await expect(await registerPage.getErrorMessage()).toContainText(data.message);
      } else {
        await expect(await registerPage.getErrorMessage()).toHaveCount(0);
      }
    });
  }
});
