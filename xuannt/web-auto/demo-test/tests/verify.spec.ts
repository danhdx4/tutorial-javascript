import { test, expect } from '@playwright/test';

// ================= SETUP CHUNG =================
test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200");
  await page.getByRole("link", { name: "Forms" }).click();
  await page.getByRole("link", { name: "Form Layouts" }).click();
  await expect(page).toHaveURL(/layouts/);
});

// ================= INLINE FORM =================
test("fill inline form and verify", async ({ page }) => {
  const form = page.locator("nb-card").filter({ hasText: "Inline form" });
  await expect(form).toBeVisible();

  const name = form.getByPlaceholder("Jane Doe");
  await name.fill("Nguyen Van A");
  await expect(name).toHaveValue("Nguyen Van A");

  const email = form.getByPlaceholder("Email").first();
  await email.fill("test@gmail.com");
  await expect(email).toHaveValue("test@gmail.com");

  await expect(form.getByText("Remember me", { exact: true })).toBeVisible();

  const checkbox = form.getByRole("checkbox", { name: "Remember me" });
  await checkbox.check({ force: true });

  const button = form.getByRole("button", { name: /submit/i });
  await expect(button).toBeVisible();
  await button.click();
});

// ================= GRID FORM =================
test("fill grid form and verify", async ({ page }) => {
  const form = page.locator("nb-card").filter({ hasText: "Using the Grid" });

  const email = form.getByPlaceholder("Email").first();
  await email.fill("grid@test.com");
  await expect(email).toHaveValue("grid@test.com");

  const password = form.getByPlaceholder("Password");
  await password.fill("123456");
  await expect(password).toHaveValue("123456");

  // ===== SỬA TẠI ĐÂY: Thêm { force: true } cho Radio Button =====
  const radio = form.getByRole("radio", { name: "Option 1" });
  await radio.check({ force: true }); 
  await expect(radio).toBeChecked();

  const button = form.getByRole("button", { name: /sign in/i });
  await expect(button).toBeVisible();
  await button.click();
});

// ================= BASIC FORM =================
test("fill basic form and verify", async ({ page }) => {
  const form = page.locator("nb-card").filter({ hasText: "Basic form" });

  const email = form.getByRole("textbox", { name: "Email address" });
  await email.fill("basic@test.com");
  await expect(email).toHaveValue("basic@test.com");

  const password = form.getByRole("textbox", { name: "Password" });
  await password.fill("123456");
  await expect(password).toHaveValue("123456");

  await expect(form.getByText("Check me out")).toBeVisible();

  const checkbox = form.getByRole("checkbox", { name: "Check me out" });
  await checkbox.check({ force: true });

  const button = form.getByRole("button", { name: /submit/i });
  await expect(button).toBeVisible();
  await button.click();
});

// ================= BLOCK FORM =================
test("fill block form and verify", async ({ page }) => {
  const form = page.locator("nb-card").filter({ hasText: "Block form" });

  const firstName = form.getByPlaceholder("First Name");
  await firstName.fill("Nguyen");
  await expect(firstName).toHaveValue("Nguyen");

  const lastName = form.getByPlaceholder("Last Name");
  await lastName.fill("Van A");
  await expect(lastName).toHaveValue("Van A");

  const email = form.getByPlaceholder("Email");
  await email.fill("block@test.com");
  await expect(email).toHaveValue("block@test.com");

  const website = form.getByPlaceholder("Website");
  await website.fill("https://test.com");
  await expect(website).toHaveValue("https://test.com");

  const button = form.getByRole("button", { name: /submit/i });
  await expect(button).toBeVisible();
  await button.click();
});

// ================= FORM WITHOUT LABELS =================
test("fill form without labels and verify", async ({ page }) => {
  const form = page.locator("nb-card").filter({ hasText: "Form without labels" });

  const recipients = form.getByPlaceholder("Recipients");
  await recipients.fill("user@test.com");
  await expect(recipients).toHaveValue("user@test.com");

  const subject = form.getByPlaceholder("Subject");
  await subject.fill("Test subject");
  await expect(subject).toHaveValue("Test subject");

  const message = form.getByPlaceholder("Message");
  await message.fill("Hello test");
  await expect(message).toHaveValue("Hello test");

  const button = form.getByRole("button", { name: /send/i });
  await expect(button).toBeVisible();
  await button.click();
});

// ================= HORIZONTAL FORM =================
test("fill horizontal form and verify", async ({ page }) => {
  const form = page.locator("nb-card").filter({ hasText: "Horizontal form" });

  const email = form.getByPlaceholder("Email");
  await email.fill("horizontal@test.com");
  await expect(email).toHaveValue("horizontal@test.com");

  const password = form.getByPlaceholder("Password");
  await password.fill("123456");
  await expect(password).toHaveValue("123456");

  await expect(form.getByText("Remember me")).toBeVisible();

  const checkbox = form.getByRole("checkbox", { name: "Remember me" });
  await checkbox.check({ force: true });

  const button = form.getByRole("button", { name: /sign in/i });
  await expect(button).toBeVisible();
  await button.click();
});