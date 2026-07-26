const { chromium } = require('playwright');
(async ()=>{
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
  const [response] = await Promise.all([
    page.waitForResponse(resp => resp.url().includes('/api/articles') && resp.status() === 200, { timeout: 15000 }),
    page.waitForSelector('h1', { timeout: 15000 })
  ]);
  console.log('publish response url', response.url(), 'status', response.status());
  console.log('after publish url', page.url());
  console.log('heading count', await page.locator('h1').count());
  console.log('heading text', await page.locator('h1').innerText());
  console.log('page text includes title?', (await page.locator('body').innerText()).includes('Playwright Test AnhNTV'));
  await page.screenshot({ path: 'create-article-result.png', fullPage: true });
  await browser.close();
})();
