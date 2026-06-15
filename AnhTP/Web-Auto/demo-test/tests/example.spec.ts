declare module "@playwright/test";
import { test, expect } from "@playwright/test";

test.only("test app", async ({ page }) => {
  await page.goto("localhost:4200");
});

// test("get started link", async ({ page }) => {
//   await page.goto("http://localhost:4200/");

//   // Click the get started link.
//   await page.getByRole("link", { name: "Get started" }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(
//     page.getByRole("heading", { name: "Installation" }),
//   ).toBeVisible();
// });
