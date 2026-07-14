import { test, expect } from "@playwright/test";
import tags from "../test_data/tags.json";
import articles from '../test_data/articles.json'

test.beforeEach(async ({ page }) => {
  await page.goto("https://conduit.bondaracademy.com/");
});

test("has title", async ({ page }) => {
  await expect(page.locator(".navbar-brand")).toHaveText("conduit");
});

test("Mocking API", async ({ page }) => {
  await page.route('**/api/articles*', async (route) => {

    await route.fulfill({
      body: JSON.stringify(articles),
    });
  });

  const firstArticle = page.locator('app-article-preview').first()
  //verify the title of the article
  await expect(firstArticle.locator('h1')).toHaveText('Automation test')
  
  //verify the description of the article
  await expect(firstArticle.locator('p')).toHaveText('Welcome you all to our automation testing class!')
})
