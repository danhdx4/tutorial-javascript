const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  const loginRes = await page.request.post('https://conduit-api.bondaracademy.com/api/users/login', {
    data: { user: { email: 'lanh.zensho@test.com', password: '123456789' } }
  });
  const loginBody = await loginRes.json();
  const token = loginBody.user.token;
  console.log('token:', token.slice(0, 20));

  await page.goto('https://conduit.bondaracademy.com/');
  await page.evaluate((t) => {
    localStorage.setItem('jwt', t);
    localStorage.setItem('jwtToken', t);
  }, token);
  await page.reload();
  await page.waitForTimeout(3000);

  const title = `inspect-${Date.now()}`;
  const createRes = await page.request.post('https://conduit-api.bondaracademy.com/api/articles', {
    data: {
      article: {
        title,
        description: 'demo',
        body: 'demo',
        tagList: []
      }
    },
    headers: { Authorization: `Token ${token}` }
  });
  console.log('create status', createRes.status());

  await page.goto('https://conduit.bondaracademy.com/');
  await page.getByRole('link', { name: /global feed/i }).click();
  await page.waitForTimeout(3000);
  const links = await page.locator('a').evaluateAll(els => els.map(el => el.textContent?.trim()).filter(Boolean).slice(0, 50));
  console.log('sample links:', links);

  const articleLink = page.getByRole('link', { name: title }).first();
  console.log('article exists?', await articleLink.count());
  if (await articleLink.count()) {
    await articleLink.click();
    await page.waitForTimeout(3000);
    const buttons = await page.locator('button').evaluateAll(els => els.map(el => el.textContent?.trim()).filter(Boolean));
    console.log('buttons:', buttons);
  }

  await browser.close();
})();
