import { defineConfig, devices } from '@playwright/test';
import user from './src/.auth/user.json'

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://conduit.bondaracademy.com/',
    trace: 'on-first-retry',
    extraHTTPHeaders: { 'Authorization': `Token ${user.user.token}` }
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});
