import { test, expect } from '@playwright/test';
import { RegisterPage } from '../page/register.page';
import { registerData } from '../utils/helper';

test.describe('Check man Dang ki', () => {
  test.beforeEach(async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    await registerPage.waitForLoad();
  });

  test('Dang ky thanh cong voi du lieu hop le', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.fillRegisterForm(
      registerData.valid.fullName,
      registerData.valid.email,
      registerData.valid.password,
      registerData.valid.repeatPassword,
    );
    await registerPage.checkTerms();
    await registerPage.clickRegister();
    await registerPage.expectRegistrationSuccess();
  });

  test('Dang ky that bai khi ho ten de trong', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.fillRegisterForm(
      registerData.missingFullName.fullName,
      registerData.missingFullName.email,
      registerData.missingFullName.password,
      registerData.missingFullName.repeatPassword,
    );
    await registerPage.checkTerms();
    await registerPage.clickRegister();
    await expect(registerPage.successMessage).not.toBeVisible();
  });

  test('Dang ky that bai khi email khong hop le', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.fillRegisterForm(
      registerData.invalidEmail.fullName,
      registerData.invalidEmail.email,
      registerData.invalidEmail.password,
      registerData.invalidEmail.repeatPassword,
    );
    await registerPage.checkTerms();
    await registerPage.clickRegister();
    await expect(page.locator('text=Email should be the real one!')).toBeVisible();
  });

  test('Dang ky that bai khi mat khau khong khop', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.fillRegisterForm(
      registerData.mismatchedPassword.fullName,
      registerData.mismatchedPassword.email,
      registerData.mismatchedPassword.password,
      registerData.mismatchedPassword.repeatPassword,
    );
    await registerPage.checkTerms();
    await registerPage.clickRegister();
    await expect(registerPage.repeatPasswordField).toHaveClass(/status-danger/);
  });
});
