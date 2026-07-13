# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: src\tests\register.spec.ts >> Register feature should work correctly >> Should show an error when password and confirm password do not match
- Location: demo-test\src\tests\register.spec.ts:86:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/match/i)
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/match/i)

```

```yaml
- navigation:
  - link "Back":
    - /url: "#"
    - img
- heading "Register" [level=1]
- form "Register":
  - text: "Full name:"
  - textbox "Full name:":
    - /placeholder: Full name
    - text: Test User
  - text: "Email address:"
  - textbox "Email address:":
    - /placeholder: Email address
    - text: test.user@example.com
  - text: "Password:"
  - textbox "Password:":
    - /placeholder: Password
    - text: "123456"
  - text: "Repeat password:"
  - textbox "Repeat password:":
    - /placeholder: Confirm Password
    - text: "654321"
  - checkbox "Agree to Terms & Conditions" [checked]
  - img
  - text: Agree to
  - link "Terms & Conditions":
    - /url: "#"
    - strong: Terms & Conditions
  - button "Register"
- region "Social sign in":
  - text: "or enter with:"
  - link:
    - /url: https://github.com/akveo/nebular
    - img
  - link:
    - /url: https://www.facebook.com/akveo/
    - img
  - link:
    - /url: https://twitter.com/akveo_inc
    - img
- region "Sign in":
  - text: Already have an account?
  - link "Log in":
    - /url: /auth/login
```

# Test source

```ts
  1   | import { expect, test } from '@playwright/test';
  2   | import { RegisterPage } from '../page/register.page';
  3   | 
  4   | const validUser = {
  5   |     fullName: 'Test User',
  6   |     email: 'test.user@example.com',
  7   |     password: '123456',
  8   | };
  9   | 
  10  | const invalidEmails = ['abc', 'abc@', 'abc.com', '@gmail.com', '@@','abc@gmail'];
  11  | const invalidPasswords = ['a', 'ab', 'abc'];
  12  | 
  13  | test.describe('Register feature should work correctly', () => {
  14  |     test.beforeEach(async ({ page }) => {
  15  |         const registerPage = new RegisterPage(page);
  16  |         await registerPage.goto();
  17  |         await registerPage.waitForLoad();
  18  |     });
  19  | 
  20  |     test('Should register a new user when all fields are valid', async ({ page }) => {
  21  |         const registerPage = new RegisterPage(page);
  22  | 
  23  |         await registerPage.fillRegisterForm({
  24  |             fullName: validUser.fullName,
  25  |             email: validUser.email,
  26  |             password: validUser.password,
  27  |             confirmPassword: validUser.password,
  28  |             acceptTerms: true,
  29  |         });
  30  | 
  31  |         await registerPage.verifyRegisterButtonStatus(true);
  32  |         await registerPage.submit();
  33  | 
  34  |         await expect(page).not.toHaveURL(registerPage.pageUrl);
  35  |     });
  36  | 
  37  |     test('Should show required field errors when required fields are empty', async ({ page }) => {
  38  |         const registerPage = new RegisterPage(page);
  39  | 
  40  |         await expect(registerPage.registerBtn).toBeDisabled();
  41  | 
  42  |         await registerPage.fullNameField.focus();
  43  |         await registerPage.emailField.focus();
  44  |         await registerPage.passwordField.focus();
  45  |         await registerPage.confirmPasswordField.focus();
  46  |         await registerPage.fullNameField.focus();
  47  | 
  48  |         await expect(page.getByText('Email is required!')).toBeVisible();
  49  |         await expect(page.getByText('Password is required!')).toBeVisible();
  50  |         await expect(page.getByText('Password confirmation is required!')).toBeVisible();
  51  |     });
  52  | 
  53  |     test('Should show an error when email format is invalid', async ({ page }) => {
  54  |         const registerPage = new RegisterPage(page);
  55  | 
  56  |         for (const email of invalidEmails) {
  57  |             await registerPage.fillRegisterForm({
  58  |                 fullName: validUser.fullName,
  59  |                 email,
  60  |                 password: validUser.password,
  61  |                 confirmPassword: validUser.password,
  62  |                 acceptTerms: true,
  63  |             });
  64  |             await registerPage.emailField.blur();
  65  |             await registerPage.verifyErrorMessage('email', /Email should be the real one!/);
  66  |         }
  67  |     });
  68  | 
  69  |     test('Should show an error when password format is invalid', async ({ page }) => {
  70  |         const registerPage = new RegisterPage(page);
  71  | 
  72  |         for (const password of invalidPasswords) {
  73  |             await registerPage.fillRegisterForm({
  74  |                 fullName: validUser.fullName,
  75  |                 email: validUser.email,
  76  |                 password,
  77  |                 confirmPassword: password,
  78  |                 acceptTerms: true,
  79  |             });
  80  |             await registerPage.passwordField.blur();
  81  |             await registerPage.verifyErrorMessage('password', /Password should contain from 4 to 50 characters/);
  82  |         }
  83  |     });
  84  |     // Chưa có message lỗi với email dạng abc@gmail
  85  | 
  86  |     test('Should show an error when password and confirm password do not match', async ({ page }) => {
  87  |         const registerPage = new RegisterPage(page);
  88  | 
  89  |         await registerPage.fillRegisterForm({
  90  |             fullName: validUser.fullName,
  91  |             email: validUser.email,
  92  |             password: validUser.password,
  93  |             confirmPassword: '654321',
  94  |             acceptTerms: true,
  95  |         });
  96  | 
  97  |         await registerPage.confirmPasswordField.blur();
> 98  |         await expect(page.getByText(/match/i)).toBeVisible();
      |                                                ^ Error: expect(locator).toBeVisible() failed
  99  |         await registerPage.verifyRegisterButtonStatus(false);
  100 |     });
  101 | });
  102 | 
```