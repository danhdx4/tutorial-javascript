import { test, expect } from "@playwright/test";
import { LoginPage } from "../page/login.page";
import { HomePage } from "../page/home.page";
import { EditorPage } from "../page/editor.page";


test.describe("Create Article", () => {

    test("User should create article successfully", async ({ page }) => {

        // Login
        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            "tienptt1998@gmail.com",
            "123456789"
        );


        // Go to New Article
        const homePage = new HomePage(page);

        await homePage.clickNewArticle();


        // Create Article
        const editorPage = new EditorPage(page);

        await editorPage.createArticle(
            "Playwright Automation",
            "Learn Playwright Testing",
            "This is my first article",
            "playwright"
        );


        // Verify article created
        await expect(
            page.getByText("Playwright Automation")
        ).toBeVisible();

    });

});