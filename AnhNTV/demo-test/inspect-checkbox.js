const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4200/auth/login');
  const input = page.locator('nb-checkbox input[type=checkbox]').first();
  const custom = page.locator('nb-checkbox .custom-checkbox').first();
  const text = page.locator('nb-checkbox .text').first();
  console.log('input html:', await input.evaluate(el => el.outerHTML));
  console.log('custom html:', await custom.evaluate(el => el.outerHTML));
  console.log('text html:', await text.evaluate(el => el.outerHTML));
  console.log('initial checked', await input.evaluate(el => el.checked));
  await custom.click();
  console.log('after custom click checked', await input.evaluate(el => el.checked));
  await input.evaluate(el => el.checked = false);
  await text.click();
  console.log('after text click checked', await input.evaluate(el => el.checked));
  await browser.close();
})();
