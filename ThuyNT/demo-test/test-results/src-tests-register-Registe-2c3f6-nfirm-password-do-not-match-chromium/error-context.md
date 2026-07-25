# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: src\tests\register.spec.ts >> Register feature should work correctly >> Should not register when password and confirm password do not match
- Location: demo-test\src\tests\register.spec.ts:88:9

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "http://localhost:4200/auth/register"
Received: "http://localhost:4200/pages/iot-dashboard"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    12 × unexpected value "http://localhost:4200/pages/iot-dashboard"

```

```yaml
- navigation:
  - link:
    - /url: "#"
    - img
  - link "PW-test":
    - /url: "#"
  - button "Light"
  - button:
    - img
  - link:
    - /url: "#"
    - img
  - link:
    - /url: "#"
    - img
  - text: Nick Jones
- list:
  - listitem:
    - link "IoT Dashboard":
      - /url: /pages/iot-dashboard
      - img
      - text: IoT Dashboard
  - listitem: FEATURES
  - listitem:
    - link "Forms":
      - /url: "#"
      - img
      - text: Forms
      - img
    - list:
      - listitem:
        - link "Form Layouts":
          - /url: /pages/forms/layouts
      - listitem:
        - link "Datepicker":
          - /url: /pages/forms/datepicker
  - listitem:
    - link "Modal & Overlays":
      - /url: "#"
      - img
      - text: Modal & Overlays
      - img
    - list:
      - listitem:
        - link "Dialog":
          - /url: /pages/modal-overlays/dialog
      - listitem:
        - link "Window":
          - /url: /pages/modal-overlays/window
      - listitem:
        - link "Popover":
          - /url: /pages/modal-overlays/popover
      - listitem:
        - link "Toastr":
          - /url: /pages/modal-overlays/toastr
      - listitem:
        - link "Tooltip":
          - /url: /pages/modal-overlays/tooltip
  - listitem:
    - link "Extra Components":
      - /url: "#"
      - img
      - text: Extra Components
      - img
    - list:
      - listitem:
        - link "Calendar":
          - /url: /pages/extra-components/calendar
  - listitem:
    - link "Charts":
      - /url: "#"
      - img
      - text: Charts
      - img
    - list:
      - listitem:
        - link "Echarts":
          - /url: /pages/charts/echarts
  - listitem:
    - link "Tables & Data":
      - /url: "#"
      - img
      - text: Tables & Data
      - img
    - list:
      - listitem:
        - link "Smart Table":
          - /url: /pages/tables/smart-table
      - listitem:
        - link "Tree Grid":
          - /url: /pages/tables/tree-grid
  - listitem:
    - link "Auth":
      - /url: "#"
      - img
      - text: Auth
      - img
    - list:
      - listitem:
        - link "Login":
          - /url: /auth/login
      - listitem:
        - link "Register":
          - /url: /auth/register
      - listitem:
        - link "Request Password":
          - /url: /auth/request-password
      - listitem:
        - link "Reset Password":
          - /url: /auth/reset-password
- text:  Light ON  Roller Shades ON  Wireless Audio ON  Coffee Maker ON
- list:
  - listitem:
    - link "Temperature":
      - /url: ""
  - listitem:
    - link "Humidity":
      - /url: ""
- img
- text: ° 24 Celsius
- button:
  - img
- radio "" [checked]
- text: 
- radio ""
- text: 
- radio ""
- text: 
- radio ""
- text:  Consumed 816 kWh Spent 291 USD
- button "week"
- text: Room Management
- img: Kitchen Bedroom Hallway Living Room
- text: My Playlist
- heading "Come Together" [level=4]
- text: Beatles
- slider: "0"
- text: 00:00 - 00:30
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- slider: "100"
- button:
  - img
- list:
  - listitem:
    - link "Contacts":
      - /url: ""
  - listitem:
    - link "Recent":
      - /url: ""
- list:
  - listitem:
    - text: Nick Jones mobile
    - img
  - listitem:
    - text: Eva Moor home
    - img
  - listitem:
    - text: Jack Williams mobile
    - img
  - listitem:
    - text: Lee Wong mobile
    - img
  - listitem:
    - text: Alan Thompson home
    - img
  - listitem:
    - text: Kate Martinez work
    - img
- text: "Solar Energy Consumption 6.421 kWh out of 8.421 kWh UI Kitten UI Kitten is a framework that contains a set of commonly used UI components styled in a similar way. The most awesome thing: you can change themes on the fly by just passing a different set of variables. 100% native. Give our kitten a try!"
- link:
  - /url: https://akveo.github.io/react-native-ui-kitten?utm_campaign=ui_kitten%20-%20home%20-%20ngx_admin%20code%20embed&utm_source=ngx_admin&utm_medium=embedded&utm_content=iot_dashboard_kitten_card
  - img
- link "":
  - /url: https://itunes.apple.com/us/app/kitten-tricks/id1246143230
- link "":
  - /url: https://play.google.com/store/apps/details?id=com.akveo.kittenTricks
- link:
  - /url: https://github.com/akveo/react-native-ui-kitten
  - img
- text: Traffic Consumption
- button "month"
- text: New York Mon 29 May 20°
- img
- text: max 23° min 19° wind 4 km/h hum 87% Sun  17° Mon  19° Tue  22° Wed  21° Security Cameras
- button ""
- button:
  - img
- text: "Camera #1 Camera #2 Camera #3 Camera #4"
- img
- text: Pause
- img
- text: Logs
- img
- text: Search
- img
- text: Setup
- navigation:
  - text: Created with ♥ by
  - link "Akveo":
    - /url: https://akveo.page.link/8V2f
  - text: "2019"
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
```

# Test source

```ts
  2   | import { RegisterPage } from '../page/register.page';
  3   | import { PageUrl } from '../utils/constants';
  4   | 
  5   | const validUser = {
  6   |     fullName: 'Test User',
  7   |     email: 'test.user@example.com',
  8   |     password: '123456',
  9   | };
  10  | 
  11  | const invalidEmails = ['abc', 'abc@', 'abc.com', '@gmail.com', '@@','abc@gmail'];
  12  | const invalidPasswords = ['a', 'ab', 'abc'];
  13  | const invalidConfirmPasswords = ['654321'];
  14  | 
  15  | test.describe('Register feature should work correctly', () => {
  16  |     test.beforeEach(async ({ page }) => {
  17  |         const registerPage = new RegisterPage(page);
  18  |         await registerPage.goto();
  19  |         await registerPage.waitForLoad();
  20  |     });
  21  | 
  22  |     test('Should register a new user when all fields are valid', async ({ page }) => {
  23  |         const registerPage = new RegisterPage(page);
  24  | 
  25  |         await registerPage.fillRegisterForm({
  26  |             fullName: validUser.fullName,
  27  |             email: validUser.email,
  28  |             password: validUser.password,
  29  |             confirmPassword: validUser.password,
  30  |             acceptTerms: true,
  31  |         });
  32  | 
  33  |         await registerPage.verifyRegisterButtonStatus(true);
  34  |         await registerPage.submit();
  35  | 
  36  |         await expect(page).toHaveURL(PageUrl.HOME_URL);
  37  |     });
  38  | 
  39  |     test('Should show required field errors when required fields are empty', async ({ page }) => {
  40  |         const registerPage = new RegisterPage(page);
  41  | 
  42  |         await expect(registerPage.registerBtn).toBeDisabled();
  43  | 
  44  |         await registerPage.fullNameField.focus();
  45  |         await registerPage.emailField.focus();
  46  |         await registerPage.passwordField.focus();
  47  |         await registerPage.confirmPasswordField.focus();
  48  |         await registerPage.fullNameField.focus();
  49  | 
  50  |         await expect(page.getByText('Email is required!')).toBeVisible();
  51  |         await expect(page.getByText('Password is required!')).toBeVisible();
  52  |         await expect(page.getByText('Password confirmation is required!')).toBeVisible();
  53  |     });
  54  | 
  55  |     test('Should show an error when email format is invalid', async ({ page }) => {
  56  |         const registerPage = new RegisterPage(page);
  57  | 
  58  |         for (const email of invalidEmails) {
  59  |             await registerPage.fillRegisterForm({
  60  |                 fullName: validUser.fullName,
  61  |                 email,
  62  |                 password: validUser.password,
  63  |                 confirmPassword: validUser.password,
  64  |                 acceptTerms: true,
  65  |             });
  66  |             await registerPage.emailField.blur();
  67  |             await registerPage.verifyErrorMessage('email', /Email should be the real one!/);
  68  |         }
  69  |     });
  70  | 
  71  |     test('Should show an error when password format is invalid', async ({ page }) => {
  72  |         const registerPage = new RegisterPage(page);
  73  | 
  74  |         for (const password of invalidPasswords) {
  75  |             await registerPage.fillRegisterForm({
  76  |                 fullName: validUser.fullName,
  77  |                 email: validUser.email,
  78  |                 password,
  79  |                 confirmPassword: password,
  80  |                 acceptTerms: true,
  81  |             });
  82  |             await registerPage.passwordField.blur();
  83  |             await registerPage.verifyErrorMessage('password', /Password should contain from 4 to 50 characters/);
  84  |         }
  85  |     });
  86  |     // Chưa có message lỗi với email dạng abc@gmail
  87  | 
  88  |     test('Should not register when password and confirm password do not match', async ({ page }) => {
  89  |         const registerPage = new RegisterPage(page);
  90  | 
  91  |         for (const cp of invalidConfirmPasswords) {
  92  |             await registerPage.fillRegisterForm({
  93  |                 fullName: validUser.fullName,
  94  |                 email: validUser.email,
  95  |                 password: validUser.password,
  96  |                 confirmPassword: cp,
  97  |                 acceptTerms: true,
  98  |             });
  99  | 
  100 |             await registerPage.confirmPasswordField.blur();
  101 |             await registerPage.submit();
> 102 |             await expect(page).toHaveURL(registerPage.pageUrl);
      |                                ^ Error: expect(page).toHaveURL(expected) failed
  103 |         }
  104 |     });
  105 | });
  106 | 
```