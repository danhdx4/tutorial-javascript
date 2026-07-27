import { test } from "../fixtures/auth-test";
import { articleData } from "../data/article.data";
import { DetailArticlePage } from "../pages/detail.article.page";
import { EditorPage } from "../pages/editior.page";
import { HomePage } from "../pages/home.page";
import { deleteArticleByAPI } from "../utils/apiHelpers";

test.describe("Create A Article", () => {
    test.beforeEach(async ({ page }) => {
        // navigate to the Editor page
        const editorPage = new EditorPage(page)
        await editorPage.goto()
        await editorPage.waitForLoad()
    })

    test("should create a article successfully", async ({ page, request }) => {
        const data = articleData.success
        const editorPage = new EditorPage(page);
        const detailArticlePage = new DetailArticlePage(page);
        const homePage = new HomePage(page)
        await editorPage.fillArticleInfo(data.payload);
        await editorPage.publicArticleBtn.click()

        await detailArticlePage.waitForLoad();
        const articleSlug = detailArticlePage.getArticleSlug()
        await detailArticlePage.assertArticleDetails(data.payload);

        await detailArticlePage.homeBtn.click()
        await homePage.waitForLoad()
        await homePage.verifyArticle(data.payload)

        // tear down: delete the article by API
        await deleteArticleByAPI(request, articleSlug)
    });

    test("should create a article successfully without tag list", async ({ page, request }) => {
        const data = articleData.successWithoutTagList
        const editorPage = new EditorPage(page);
        const detailArticlePage = new DetailArticlePage(page);
        const homePage = new HomePage(page)
        await editorPage.fillArticleInfo(data.payload);
        await editorPage.publicArticleBtn.click()

        await detailArticlePage.waitForLoad();
        const articleSlug = detailArticlePage.getArticleSlug()
        await detailArticlePage.assertArticleDetails(data.payload);

        await detailArticlePage.homeBtn.click()
        await homePage.waitForLoad()

        // tear down: delete the article by API
        await deleteArticleByAPI(request, articleSlug)
    });

    test("should show validation error when title is missing", async ({ page }) => {
        const data = articleData.missingTitle
        const editorPage = new EditorPage(page);

        await editorPage.fillArticleInfo(data.payload);
        await editorPage.publicArticleBtn.click()

        await editorPage.assertValidationError(data.errorMessage!);
    });

    test("should show validation error when description is missing", async ({ page }) => {
        const data = articleData.missingDescription
        const editorPage = new EditorPage(page);

        await editorPage.fillArticleInfo(data.payload);
        await editorPage.publicArticleBtn.click()

        await editorPage.assertValidationError(data.errorMessage!);
    });

    test("should show validation error when body is missing", async ({ page }) => {
        const data = articleData.missingBody
        const editorPage = new EditorPage(page);

        await editorPage.fillArticleInfo(data.payload);
        await editorPage.publicArticleBtn.click()

        await editorPage.assertValidationError(data.errorMessage!);
    });
});
