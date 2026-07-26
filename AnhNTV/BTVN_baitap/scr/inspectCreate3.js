const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://conduit.bondaracademy.com/login');
  await page.fill('[placeholder="Email"]', 'vananh217.tm@gmail.com');
  await page.fill('[placeholder="Password"]', '12345678');
  await Promise.all([page.waitForURL('**/'), page.click('button:has-text("Sign in")')]);
  await page.waitForTimeout(1000);
  await page.click('text=New Article');
  await page.waitForURL('**/editor');
  await page.fill('[placeholder="Article Title"]', 'Playwright Test AnhNTV');
  await page.fill('[placeholder="What\'s this article about?"]', 'Demo desscription');
  await page.fill('[placeholder="Write your article (in markdown)"]', 'Demo body content');
  await page.click('button:has-text("Publish Article")');
  await page.waitForTimeout(5000);
  console.log('after publish url', page.url());
  console.log('h1 count', await page.locator('h1').count());
  if (await page.locator('h1').count() > 0) {
    console.log('heading text:', await page.locator('h1').first().innerText());
  }
  console.log('body includes title:', (await page.locator('body').innerText()).includes('Playwright Test AnhNTV'));
  await page.screenshot({ path: 'publish-check.png', fullPage: true });
  await browser.close();
})();
