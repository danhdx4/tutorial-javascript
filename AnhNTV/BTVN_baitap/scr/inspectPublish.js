const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  page.on('console', msg => console.log('CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('PAGEERROR:', err.message));
  page.on('response', response => { if (response.url().includes('/api/articles')) console.log('RESPONSE', response.status(), response.url()); });
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
  const publish = page.locator('button:has-text("Publish Article")');
  console.log('publish visible', await publish.isVisible(), 'enabled', await publish.isEnabled(), 'count', await publish.count());
  console.log('publish attrs', await publish.getAttribute('type'), await publish.getAttribute('disabled'), await publish.getAttribute('class'));
  const formHtml = await page.innerHTML('form');
  console.log('form html snippet:', formHtml.slice(0, 400));
  try {
    const [response] = await Promise.all([
      page.waitForResponse(resp => resp.url().includes('/api/articles') && resp.status() === 200, { timeout: 10000 }),
      publish.click()
    ]);
    console.log('article response', response.status(), response.url());
  } catch (e) {
    console.log('publish click error', e.toString());
  }
  await page.waitForTimeout(3000);
  console.log('after click url', page.url());
  console.log('h1 count', await page.locator('h1').count());
  console.log('body has title text', (await page.locator('body').innerText()).includes('Playwright Test AnhNTV'));
  await page.screenshot({ path: 'publish-debug.png', fullPage: true });
  await browser.close();
})();
