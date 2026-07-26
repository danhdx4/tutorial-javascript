import { test, expect } from "@playwright/test";
import { RegisterPage } from "../src/page/register.page";
import { registerData, RegisterData } from "../src/test_data/register.data";

registerData.forEach((data) => {
  test(`Register Test - ${data.title}`, async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    await registerPage.waitForPageLoad();
    await registerPage.fillForm(data);
    await registerPage.verifyErrMsg(data.message);
    await registerPage.verifyRegisterBtnState(data.isEnableLogin);
  });
});
