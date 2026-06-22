const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4200/auth/login');
  const roleCheckbox = page.getByRole('checkbox', { name: 'Remember me' });
  const text = page.locator('nb-checkbox .text').first();
  console.log('role checked before', await roleCheckbox.evaluate(el => el.checked));
  console.log('input outer', await roleCheckbox.evaluate(el => el.outerHTML));
  await text.click();
  console.log('role checked after', await roleCheckbox.evaluate(el => el.checked));
  console.log('input outer after', await roleCheckbox.evaluate(el => el.outerHTML));
  await browser.close();
})();
