import { test, expect } from "@playwright/test";
import articles from "../test-data/articles.json";

test.beforeEach(async ({ page }) => {
  // Mock API lay list article
  await page.route("**/api/articles*", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(articles),
    });
  });

  // open trang chu
  await page.goto("https://conduit.bondaracademy.com/");
});

test("Mock title", async ({ page }) => {
  const title = page.locator(".preview-link h1");

  await expect(title.first()).toHaveText("tienptt");
});

test("Mock description", async ({ page }) => {
  const description = page.locator(".preview-link p");

  await expect(description.first()).toHaveText("baitapvenha");
});