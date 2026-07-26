const { chromium } = require('playwright');
(async ()=>{
  const browser = await chromium.launch({ headless:true });
  const page = await browser.newPage();
  await page.goto('https://conduit.bondaracademy.com/login');
  await page.fill('[placeholder="Email"]','vananh217.tm@gmail.com');
  await page.fill('[placeholder="Password"]','12345678');
  await page.click('button:has-text("Sign in")');
  await page.waitForURL('**/');
  await page.waitForTimeout(2000);
  console.log('page url', page.url());
  const links = page.locator('a');
  console.log('link count', await links.count());
  for(let i=0;i<await links.count();i++){
    const link = links.nth(i);
    console.log(i, 'text=', JSON.stringify(await link.innerText()), 'href=', await link.getAttribute('href'));
  }
  const roleLinks = page.getByRole('link');
  console.log('role link count', await roleLinks.count());
  for(let i=0;i<await roleLinks.count();i++){
    const link = roleLinks.nth(i);
    console.log('role',i, 'name=', JSON.stringify(await link.textContent()), 'href=', await link.getAttribute('href'));
  }
  console.log('global feed count role', await page.getByRole('link',{name:'Global Feed'}).count());
  console.log('global feed count text', await page.locator('a:has-text("Global Feed")').count());
  await browser.close();
})();
