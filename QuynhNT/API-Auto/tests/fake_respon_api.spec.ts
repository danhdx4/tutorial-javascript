import { test, expect } from "@playwright/test";
import articles from "../test data/articles.json";

test.beforeEach(async ({ page }) => {
  await page.route("**/api/articles*", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(articles),
    });
  });
  await page.goto("https://conduit.bondaracademy.com/");
});
test("mock title", async ({ page }) => {
  const title = page.locator(".preview-link h1");
  await expect(title.first()).toHaveText("QuynhNT");
});
test("mock description", async ({ page }) => {
  const description = page.locator(".preview-link p");
  await expect(description.first()).toHaveText("Đây là bài viết của Quỳnh");
});
