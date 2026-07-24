import { test, expect } from "@playwright/test";
import { RegisterPage } from "../pages/register.page";
import { HomePage } from "../pages/home.page";
import registerData from "../test-data/register.json";  


test.describe("Register feature should work correctly", () => {
    test.beforeEach(async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.goto();
        await registerPage.waitForLoad();
    });

    test("Register should be successful with valid information", async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const homePage = new HomePage(page);

        const validName = registerData[0].validName;
        const validEmail = `autouser_${Date.now()}@test.com`;
        const validPassword = "123456";

        await registerPage.fillRegisterForm(validName, validEmail, validPassword, validPassword);
        await registerPage.agreeToTerms();
        await registerPage.verifyRegisterBtn("enable");
        await registerPage.submit();

        await homePage.waitForLoad();
        await expect(page).toHaveURL(/\/pages\//);
    });

    test("Register should fail when required fields are empty", async ({ page }) => {
        const registerPage = new RegisterPage(page);

        await registerPage.fillRegisterForm("", "", "", "");
        await registerPage.agreeToTerms();
        await registerPage.submit();

        await registerPage.verifyFieldError("name", "Full name is required!");
        await registerPage.verifyFieldError("email", "Email is required!");
        await registerPage.verifyFieldError("password", "Password is required!");
        await registerPage.verifyFieldError("confirmPassword", "Password confirmation is required!");
        await registerPage.verifyRegisterBtn("disable");
    });

    test("Register should fail when email format is invalid", async ({ page }) => {
        const registerPage = new RegisterPage(page);

        await registerPage.fillRegisterForm("Auto User", "invalid-email", "123456", "123456");
        await registerPage.agreeToTerms();
        await registerPage.submit();

        await registerPage.verifyFieldError("email", "Email should be the real one!");
        await registerPage.verifyRegisterBtn("disable");
    });

    test("Register should fail when password format is invalid", async ({ page }) => {
        const registerPage = new RegisterPage(page);

        await registerPage.fillRegisterForm("Auto User", "auto_user@test.com", "123", "123");
        await registerPage.agreeToTerms();
        await registerPage.submit();

        await registerPage.verifyFieldError("password", "Password should contain");
        await registerPage.verifyRegisterBtn("disable");
    });

    test("Register should fail when password and confirm password are not matched", async ({ page }) => {
        const registerPage = new RegisterPage(page);

        await registerPage.fillRegisterForm("Auto User", "auto_user@test.com", "123456", "123457");
        await registerPage.agreeToTerms();
        await registerPage.submit();

        await registerPage.verifyFieldError("confirmPassword", "Password does not match the confirm password");
        await registerPage.verifyRegisterBtn("disable");
    });
});
