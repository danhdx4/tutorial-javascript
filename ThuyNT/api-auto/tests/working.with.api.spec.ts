import { test, expect } from "@playwright/test";
import tags from "../test-data/tags.json";
import articles from '../test-data/articles.json'

test("Tags - mocking API", async ({ page }) => {
  await page.route("**/api/tags", async (route) => {
    await route.fulfill({
      body: JSON.stringify(tags),
    });
  });

  await page.goto("https://conduit.bondaracademy.com/");

  const tagsList = page.locator('.tag-list')
  await expect(tagsList.getByText("Zensho Holding").first()).toBeVisible()
})

// BTVN bai 10
test("Articles Description mocking", async ({ page }) => {
  await page.route('*/**/articles?limit=10&offset=0', async (route) => {
    await route.fulfill({
      body: JSON.stringify(articles),
    });
  });

  await page.goto("https://conduit.bondaracademy.com/");

  const firstArticle = page.locator('app-article-preview').first()
  await expect(firstArticle.locator('h1')).toHaveText('Thuy test API with Playwright')
})