# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: src\tests\register.spec.ts >> Register feature should work correctly >> Should show an error when email format is invalid
- Location: demo-test\src\tests\register.spec.ts:53:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.form-control-group').filter({ hasText: 'Email address:' }).locator('.caption.status-danger')
Expected pattern: /Email should be the real one!/
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.form-control-group').filter({ hasText: 'Email address:' }).locator('.caption.status-danger')

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
    - text: abc@gmail
  - text: "Password:"
  - textbox "Password:":
    - /placeholder: Password
    - text: "123456"
  - text: "Repeat password:"
  - textbox "Repeat password:":
    - /placeholder: Confirm Password
    - text: "123456"
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
  1  | import { Page as PlaywrightPage, expect } from "@playwright/test";
  2  | import { basePage } from "./base.page";
  3  | import { PageUrl } from "../utils/constants";
  4  | 
  5  | export class RegisterPage extends basePage {
  6  |     readonly pageUrl: string;
  7  | 
  8  |     constructor(page: PlaywrightPage) {
  9  |         super(page);
  10 |         this.pageUrl = PageUrl.REGISTER_URL;
  11 |     }
  12 | 
  13 |     /** Locators */
  14 |     fullNameField = this.page.getByPlaceholder("Full name", { exact: true });
  15 |     emailField = this.page.getByPlaceholder("Email address", { exact: true });
  16 |     passwordField = this.page.getByPlaceholder("Password", { exact: true });
  17 |     confirmPasswordField = this.page.getByPlaceholder("Confirm Password", { exact: true });
  18 |     agreeTermsCheckbox = this.page.getByRole("checkbox", { name: "Agree to Terms & Conditions" });
  19 |     registerBtn = this.page.getByRole("button", { name: "REGISTER" });
  20 |     heading = this.page.getByRole("heading", { name: "Register" });
  21 | 
  22 |     fullNameError = this.page.locator('.form-control-group').filter({ hasText: 'Full name:' }).locator('.caption.status-danger');
  23 |     emailError = this.page.locator('.form-control-group').filter({ hasText: 'Email address:' }).locator('.caption.status-danger');
  24 |     passwordError = this.page.locator('.form-control-group').filter({ hasText: 'Password:' }).locator('.caption.status-danger');
  25 |     confirmPasswordError = this.page.locator('.form-control-group').filter({ hasText: 'Repeat password:' }).locator('.caption.status-danger');
  26 | 
  27 |     async goto() {
  28 |         const response = await this.page.goto(this.pageUrl);
  29 |         expect(response?.status()).toBeLessThan(400);
  30 |     }
  31 | 
  32 |     async waitForLoad() {
  33 |         await this.page.waitForURL(this.pageUrl);
  34 |         await expect(this.heading).toBeVisible();
  35 |     }
  36 | 
  37 |     async fillFullName(name: string) {
  38 |         await this.fullNameField.fill(name);
  39 |     }
  40 | 
  41 |     async fillEmail(email: string) {
  42 |         await this.emailField.fill(email);
  43 |     }
  44 | 
  45 |     async fillPassword(password: string) {
  46 |         await this.passwordField.fill(password);
  47 |     }
  48 | 
  49 |     async fillConfirmPassword(password: string) {
  50 |         await this.confirmPasswordField.fill(password);
  51 |     }
  52 | 
  53 |     async acceptTerms() {
  54 |         await this.agreeTermsCheckbox.check({ force: true });
  55 |     }
  56 | 
  57 |     async submit() {
  58 |         await this.registerBtn.click();
  59 |     }
  60 | 
  61 |     async fillRegisterForm(data: { fullName?: string; email?: string; password?: string; confirmPassword?: string; acceptTerms?: boolean }) {
  62 |         if (data.fullName !== undefined) await this.fillFullName(data.fullName);
  63 |         if (data.email !== undefined) await this.fillEmail(data.email);
  64 |         if (data.password !== undefined) await this.fillPassword(data.password);
  65 |         if (data.confirmPassword !== undefined) await this.fillConfirmPassword(data.confirmPassword);
  66 |         if (data.acceptTerms) await this.acceptTerms();
  67 |     }
  68 | 
  69 |     async verifyRegisterButtonStatus(enabled: boolean) {
  70 |         if (enabled) {
  71 |             await expect(this.registerBtn).toBeEnabled();
  72 |         } else {
  73 |             await expect(this.registerBtn).toBeDisabled();
  74 |         }
  75 |     }
  76 | 
  77 |     async verifyErrorMessage(field: "fullName" | "email" | "password" | "confirmPassword", message: string | RegExp) {
  78 |         const locator = field === "fullName"
  79 |             ? this.fullNameError
  80 |             : field === "email"
  81 |                 ? this.emailError
  82 |                 : field === "password"
  83 |                     ? this.passwordError
  84 |                     : this.confirmPasswordError;
  85 | 
> 86 |         await expect(locator).toHaveText(message);
     |                               ^ Error: expect(locator).toHaveText(expected) failed
  87 |     }
  88 | }
  89 | 
```