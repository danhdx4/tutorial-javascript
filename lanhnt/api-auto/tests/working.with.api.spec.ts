import { test, expect } from "@playwright/test";
import tags from "../test-data/tags.json";
import articles from '../test-data/articles.json'

test.beforeEach(async ({ page }) => {
  await page.route("**/api/tags", async (route) => {
    await route.fulfill({
      body: JSON.stringify(tags),
    });
  });

  await page.route('*/**/articles?limit=10&offset=0', async (route) => {
    await route.fulfill({
      body: JSON.stringify(articles),
    });
  });

  await page.goto("https://conduit.bondaracademy.com/");
});

test("has title", async ({ page }) => {
  await expect(page.locator(".navbar-brand")).toHaveText("conduit");
});

test("Tags - mocking API", async ({ page }) => {
  const tagsList = page.locator('.tag-list')
  await expect(tagsList.getByText("Zensho Holding")).toBeVisible()
})


// BTVN bai 10
test("Articles - mocking API", async ({ page }) => {
  const firstArticle = page.locator('app-article-preview').first()

  //verify the title of the article
  await expect(firstArticle.locator('h1')).toHaveText('Automation Test with Playwright')
})