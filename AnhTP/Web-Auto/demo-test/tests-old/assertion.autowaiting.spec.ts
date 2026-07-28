import { test, expect } from "@playwright/test";
const baseURL = "http://localhost:4200/pages/forms/layouts";
test.beforeEach(async ({ page }) => {
  await page.goto(baseURL);
});

test("assertions", async ({ page }) => {
  // General assertions
  const value = 5;
  expect(value).toEqual(5); // So sánh giá trị value với 5
  const basicForm = page.locator("nb-card").filter({ hasText: "Basic form" });
  const button = basicForm.locator("button");
  // const buttonText = await basicForm.locator("button").textContent();
  // console.log(buttonText);
  // expect(buttonText).toEqual("Submit"); // So sánh giá trị buttonText với "Submit"
  // Locator assertion
  // await expect(button).toHaveText("Submit"); // Đợi cho đến khi button có text "Submit"
  // await expect(button).toBeVisible(); // Đợi cho đến khi button hiển thị trên trang
  // await expect(button).toBeEnabled(); // Đợi cho đến khi button có thể click được

  // Soft assertion : dù assert fail thì vẫn chạy tiếp các bước tiếp theo
  await expect.soft(button).toHaveText("Submit");
  await button.click(); // Click vào button
});

test("extracting values", async ({ page }) => {
  // Thẻ input: inputValue()
  // Text: innerText() hoặc textContent() cho single text, allTextContents() cho all text values
  // Thuộc tính: getAttribute()

  // single test value textContent()// innerText()
  const basicForm = page.locator("nb-card").filter({ hasText: "Basic form" });
  const button = basicForm.locator("button");
  const buttonText = await basicForm.locator("button").textContent();
  expect(buttonText).toEqual("Submit");

  // all text values
  const allRadioButtonsLabels = await page
    .locator("nb-radio")
    .allTextContents();
  console.log(allRadioButtonsLabels);
  expect(allRadioButtonsLabels).toContain("Option 1");

  // input value
  const emailField = basicForm.getByRole("textbox", { name: "Email" });
  await emailField.fill("test@test.com");
  const emailValue = await emailField.inputValue();
  console.log(emailValue);
  expect(emailValue).toEqual("test@test.com");

  // attribute
  const placeholderValue = await emailField.getAttribute("placeholder");
  console.log(placeholderValue);
  expect(placeholderValue).toEqual("Email");
  const buttonClass = await button.getAttribute("class");
  console.log(buttonClass);
  expect(buttonClass).toContain("status-danger");
});

// await : Playwright sẽ tự động đợi cho đến khi element có thể tương tác được (click, fill, check,...) mà không cần phải dùng await page.waitForSelector() hoặc await page.waitForResponse()
test("Auto waiting", async ({ page }) => {
  // goto http://localhost:4200/pages/forms/layouts
  await page.goto(baseURL);

  // Form without labels
  const formWithoutLabels = page
    .locator("nb-card")
    .filter({ hasText: "Form without labels" });
  const recipients = page.getByPlaceholder("Recipients");
  const subject = page.getByPlaceholder("Subject");
  const msg = page.getByPlaceholder("Message");
  const sendBtn = page.getByRole("button", { name: "SEND" });

  await recipients.fill("test abc");
  await subject.fill("test abc");
  await msg.fill("test abc");
  await sendBtn.click();
});

test("alternative waits", async ({ page }) => {
  const ajaxURL = "http://www.uitestingplayground.com/ajax";
  await page.goto(ajaxURL);

  const triggerBtn = page.getByRole("button", {
    name: "Button Triggering AJAX Request",
  });
  await triggerBtn.click();

  // await page.waitForSelector("#content"); // Đợi cho đến khi element có id là content xuất hiện trên trang
  // await page.waitForResponse('http://www.uitestingplayground.com/ajaxdata') // Đợi cho đến khi có response từ url http://www.uitestingplayground.com/ajaxdata
  // await page.waitForLoadState("networkidle"); //Đợi cho đến khi không có kết nối mạng nào được thực hiện trong ít nhất 500 mili giây.

  await expect(page.locator("#content")).toHaveText(
    "Data loaded with AJAX get request.",
    { timeout: 20000 },
  );
});
