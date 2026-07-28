# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: src\tests\register.spec.ts >> Register feature should work correctly >> Should show an error when password format is invalid
- Location: ThuyNT\demo-test\src\tests\register.spec.ts:71:9

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:4200/auth/register
Call log:
  - navigating to "http://localhost:4200/auth/register", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "このサイトにアクセスできません" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: localhost
      - text: で接続が拒否されました。
    - generic [ref=e10]:
      - paragraph [ref=e11]: 次をお試しください
      - list [ref=e12]:
        - listitem [ref=e13]: 接続を確認する
        - listitem [ref=e14]:
          - link "プロキシとファイアウォールを確認する" [ref=e15] [cursor=pointer]:
            - /url: "#buttons"
    - generic [ref=e16]: ERR_CONNECTION_REFUSED
  - generic [ref=e17]:
    - button "再読み込み" [ref=e19] [cursor=pointer]
    - button "詳細" [ref=e20] [cursor=pointer]
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
  19 |     registerBtn = this.page.getByRole("button", { name: "Register" });
  20 |     heading = this.page.getByRole("heading", { name: "Register" });
  21 | 
  22 |     fullNameError = this.page.locator('.form-control-group').filter({ hasText: 'Full name:' }).locator('.caption.status-danger');
  23 |     emailError = this.page.locator('.form-control-group').filter({ hasText: 'Email address:' }).locator('.caption.status-danger');
  24 |     passwordError = this.page.locator('.form-control-group').filter({ hasText: 'Password:' }).locator('.caption.status-danger');
  25 |     confirmPasswordError = this.page.locator('.form-control-group').filter({ hasText: 'Repeat password:' }).locator('.caption.status-danger');
  26 | 
  27 |     async goto() {
> 28 |         const response = await this.page.goto(this.pageUrl);
     |                                          ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:4200/auth/register
  29 |         expect(response?.status()).toBeLessThan(400);
  30 |     }
  31 | 
  32 |     async waitForLoad() {
  33 |         await this.page.waitForURL(this.pageUrl);
  34 |         await expect(this.heading).toBeVisible();
  35 |     }
  36 | 
  37 |     async submit() {
  38 |         await Promise.all([
  39 |             this.page.waitForURL(PageUrl.HOME_URL),
  40 |             this.registerBtn.click(),
  41 |         ]);
  42 |     }
  43 | 
  44 |     async fillRegisterForm(data: { fullName?: string; email?: string; password?: string; confirmPassword?: string; acceptTerms?: boolean }) {
  45 |         if (data.fullName !== undefined) await this.fullNameField.fill(data.fullName);
  46 |         if (data.email !== undefined) await this.emailField.fill(data.email);
  47 |         if (data.password !== undefined) await this.passwordField.fill(data.password);
  48 |         if (data.confirmPassword !== undefined) await this.confirmPasswordField.fill(data.confirmPassword);
  49 |         if (data.acceptTerms) await this.agreeTermsCheckbox.check({ force: true });
  50 |     }
  51 | 
  52 |     async verifyRegisterButtonStatus(enabled: boolean) {
  53 |         if (enabled) {
  54 |             await expect(this.registerBtn).toBeEnabled();
  55 |         } else {
  56 |             await expect(this.registerBtn).toBeDisabled();
  57 |         }
  58 |     }
  59 | 
  60 |     async verifyErrorMessage(field: "fullName" | "email" | "password" | "confirmPassword", message: string | RegExp) {
  61 |         const locator = field === "fullName"
  62 |             ? this.fullNameError
  63 |             : field === "email"
  64 |                 ? this.emailError
  65 |                 : field === "password"
  66 |                     ? this.passwordError
  67 |                     : this.confirmPasswordError;
  68 | 
  69 |         await expect(locator).toHaveText(message);
  70 |     }
  71 | }
  72 | 
```