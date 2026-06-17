# Bài 1, 2: Giới thiệu & Installation

## Appium là gì?

- Framework mã nguồn mở dùng để **Automation Testing Mobile Apps**
- Hỗ trợ:
  - Android
  - iOS
  - Native App
  - Hybrid App
  - Mobile Web

- Sử dụng chuẩn **WebDriver Protocol**
- Không yêu cầu chỉnh sửa source code ứng dụng

---

## WebdriverIO là gì?

- Framework Automation Testing dành cho JavaScript/TypeScript
- Tích hợp sẵn với:
  - Appium
  - Selenium
  - Browser Automation
  - Mobile Automation

- Hỗ trợ:
  - Test Runner
  - Reporting
  - Parallel Execution
  - Page Object Model

---

## Kiến trúc tổng quan

```text
Test Script (WebdriverIO)
            │
            ▼
        Appium Server
            │
            ▼
   UiAutomator2 Driver
            │
            ▼
 Android Emulator / Real Device
            │
            ▼
       Mobile Application
```

---

## Công nghệ sử dụng trong khóa học

- JavaScript (ES6+)
- Node.js
- WebdriverIO
- Appium 3.x
- Android Studio
- Android Emulator
- Appium Inspector

### Mục tiêu

Xây dựng Framework Mobile Automation hoàn chỉnh cho Android App bằng WebdriverIO và Appium.

## Installation

Link: https://webdriver.io/docs/gettingstarted/

1. Tạo thư mục mobile-auto
2. Install project with webdriverIO

- Command: npm init wdio@latest .
- Option init:
  - E2E Testing - of Web or Mobile Applications
  - On my local machine
  - Mobile - native, hybrid and mobile web apps, on Android or iOS
  - Android - native, hybrid and mobile web apps, tested on emulators and real devices
    > using UiAutomator2 (https://www.npmjs.com/package/appium-uiautomator2-driver)
  - Mocha (https://mochajs.org/)
  - Do you want to use Typescript to write tests? -> y
  - Do you want WebdriverIO to autogenerate some test files?: y
  - Orther: mặc định (enter)

3. Setup Emulator with Android Studio

4. Giải thích ý nghĩa các setting trong file config
   File: /mobile-auto/wdio.conf.ts
   Đây là file cấu hình cho WebdriverIO, một framework để tự động hóa kiểm thử (automation test).

- runner: 'local': Chạy test trên máy của bạn (local).
- port: 4723: Cổng giao tiếp với Appium server, công cụ để tự động hóa ứng dụng mobile.
- [specs: ['./test/specs//\*.ts']](http://vscodecontentref/3)\*\*: Chỉ định nơi chứa các file kịch bản test. Ở đây là tất cả các file có đuôi .ts trong thư mục test/specs và các thư mục con của nó.
- maxInstances: 10: Số lượng kịch bản test tối đa có thể chạy song song cùng một lúc.
- capabilities: Định nghĩa các môi trường bạn muốn test. Trong file này, nó được cấu hình để chạy test trên:
- logLevel: 'info': Mức độ chi tiết của log khi chạy test. info là mức thông tin chung.
- bail: 0: Nếu khác 0, việc test sẽ dừng lại ngay sau khi có một số lượng test case nhất định bị thất bại. 0 có nghĩa là sẽ chạy hết tất cả các test case dù có thất bại.
- waitforTimeout: 10000: Thời gian chờ tối đa (10 giây) cho một câu lệnh chờ một element xuất hiện.
- services: ['appium']: Tự động khởi động và dừng Appium server trước và sau khi chạy test.
- framework: 'mocha': Sử dụng Mocha làm framework để viết và tổ chức các test case.
- reporters: ['spec']: Định dạng kết quả hiển thị trên màn hình terminal sau khi chạy test.
- mochaOpts: Các tùy chọn riêng cho framework Mocha, ví dụ như timeout (60 giây) cho mỗi test case.
- hooks: Các hàm sẽ được tự động thực thi tại các thời điểm khác nhau của quá trình test (ví dụ: trước/sau khi chạy tất cả test, trước/sau mỗi test case). Trong file của bạn, các hook này đang được comment lại.

5. WebdriverIO Capabilities Setup

```ts
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel 4',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), '../..', 'app/android/ApiDemos-debug.apk')
    }],

```

6. Set up Test folder

7. Run sample test

```ts
describe("Sample", () => {
  it("Run app", async () => {
    await driver.pause(5000);
  });
});
```

8. Setup Appium Inspector

- setup capabilities cho app
- chạy cổng 4724: appium -p 4724
- run app in appium inspector

# Bài 3: Android - Finding Elements
