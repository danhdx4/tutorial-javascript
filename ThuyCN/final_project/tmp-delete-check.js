const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://conduit.bondaracademy.com/login');
  await page.getByPlaceholder('Email').fill('thuytest@test.com');
  await page.getByPlaceholder('Password').fill('12345678');
  await page.getByRole('button', { name: /sign in/i }).click();
  await page.waitForURL('**/');

  const title = 'Delete test article ' + Date.now();
  await page.goto('https://conduit.bondaracademy.com/editor');
  await page.getByPlaceholder('Article Title').fill(title);
  await page.getByPlaceholder("What's this article about?").fill('Delete test desc');
  await page.getByPlaceholder('Write your article (in markdown)').fill('Delete test body');
  await page.getByPlaceholder('Enter tags').fill('delete');
  await page.getByRole('button', { name: 'Publish Article' }).click();
  await page.waitForURL(/\//);

  const articleLink = page.locator('a').filter({ hasText: title }).first();
  console.log('has article link', await articleLink.count());
  if (await articleLink.count()) {
    await articleLink.click();
    await page.waitForLoadState('networkidle');
  }
  console.log(await page.content());
  await browser.close();
})();
