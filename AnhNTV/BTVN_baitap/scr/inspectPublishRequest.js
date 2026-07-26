const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  page.on('request', request => {
    if (request.url().includes('/api/articles') && request.method() === 'POST') {
      console.log('REQUEST URL', request.url());
      console.log('REQUEST POST DATA', request.postData());
    }
  });
  page.on('response', async response => {
    if (response.url().includes('/api/articles')) {
      console.log('RESPONSE', response.status(), response.url());
      try {
        console.log('RESPONSE BODY', await response.text());
      } catch (e) {
        console.log('RESPONSE BODY ERROR', e.message);
      }
    }
  });
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
  await page.waitForTimeout(3000);
  await browser.close();
})();
