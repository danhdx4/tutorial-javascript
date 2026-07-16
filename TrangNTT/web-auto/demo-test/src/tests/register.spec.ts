import { test, expect } from "@playwright/test";
import { RegisterPage } from '../pages/register.page';
import { registerData} from "../test-data/register.data";

registerData.forEach((data) => {
  test(`Register Test - ${data.title}`, async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    await registerPage.waitForLoad();
    await registerPage.fillRegisterForm(data.fullname, data.email, data.password, data.confirm);
    await registerPage.verifyFieldError("confirmPassword", "Password does not match the confirm password");
    await registerPage.verifyRegisterBtn("disable");
  });
});
