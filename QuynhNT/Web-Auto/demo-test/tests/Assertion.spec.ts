import test, { expect } from "@playwright/test";
test(`verify Basic form`, async ({ page }) => {
  await page.goto("http://localhost:4200/");
  const locatorForm = page.getByRole("link", { name: "Forms" });
  await locatorForm.click();
  const locatorFormlayouts = page.getByRole("link", { name: "Form Layouts" });
  await locatorFormlayouts.click();
  const locatorBasicForm = page
    .locator("nb-card")
    .filter({ hasText: "Basic form" });
  //email
  const emailInputLocator = locatorBasicForm.getByPlaceholder("Email");
  const emailInput = await emailInputLocator.getAttribute("placeholder");
  expect(emailInput).toBe("Email");
  console.log("placeholder for email: " + emailInput); //In ra xem có đúng placeholder là email hay không
  await emailInputLocator.fill("quynh@gmail.com");
  const emailInputValue = await emailInputLocator.inputValue();
  expect(emailInputValue).toBe("quynh@gmail.com");
  console.log("value for email: " + emailInputValue); //In ra xem có đúng value k
  // password
  const passwordInputLocator = locatorBasicForm.getByPlaceholder("Password");
  const passwordInput = await passwordInputLocator.getAttribute("placeholder");
  expect(passwordInput).toBe("Password");
  console.log("placeholder for password: " + passwordInput); //In ra xem có đúng placeholder là password hay không
  await passwordInputLocator.fill("123456");
  const passwordInputValue = await passwordInputLocator.inputValue();
  expect(passwordInputValue).toBe("123456");
  console.log("value for password: " + passwordInputValue); //In ra xem có đúng value là 123456 hay không
  const buttonSubmit = locatorBasicForm.getByRole("button", {
    name: "SUBMIT",
  });
  await expect(buttonSubmit).toHaveCSS("background-color", "rgb(255, 61, 113)");
  await buttonSubmit.click();
});
