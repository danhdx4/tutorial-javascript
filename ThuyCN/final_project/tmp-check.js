const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://conduit.bondaracademy.com/login');
  console.log('after goto', page.url());
  await page.getByPlaceholder('Email').fill('thuytest@test.com');
  await page.getByPlaceholder('Password').fill('12345678');
  await page.getByRole('button', { name: /sign in/i }).click();
  await page.waitForTimeout(5000);
  console.log('after login', page.url());
  console.log(await page.textContent('body'));
  await browser.close();
})();
