import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['allure-playwright', { outputFolder: 'playwright-report' }],
    ['line'],
    ['html', { outputFolder: 'playwright-report' }]
  ],

  globalSetup: './utils/global-setup',

  use: {
    baseURL: 'https://practice.sdetunicorns.com/blog',
    trace: 'on-first-retry',
    storageState: 'loggedInState.json'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], headless: true },
    }
  ]
});