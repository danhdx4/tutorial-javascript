import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,
  

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {
    // Hiện trình duyệt khi chạy
    headless: false,

    // Base URL của Conduit
    baseURL: 'https://conduit.bondaracademy.com',

    // Trace khi retry
    trace: 'on-first-retry',

    // Tự động chụp screenshot khi test fail
    screenshot: 'only-on-failure',

    // Quay video khi test fail
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },
  ],
});