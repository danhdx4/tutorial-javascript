import { test, expect } from "@playwright/test";

test.only("test app", async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

// test("get started link", async ({ page }) => {
//   await page.goto("http://localhost:4200/");

// //   // Click the get started link.
// //   await page.getByRole("link", { name: "Get started" }).click();

// //   // Expects page to have a heading with the name of Installation.
// //   await expect(
// //     page.getByRole("heading", { name: "Installation" }),
// //   ).toBeVisible();
// // });

// import { test, expect } from "@playwright/test";

// test("has title", async ({ page }) => {
//   await page.goto("https://playwright.dev/");
//   await expect(page).toHaveTitle(/Playwright/);
// });
