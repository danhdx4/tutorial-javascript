import { expect, test } from "../fixtures/auth-test";
import { articleData } from "../data/article.data";
import { DetailArticlePage } from "../pages/detail.article.page";
import { createArticleByAPI } from "../utils/apiHelpers";
import { HomePage } from "../pages/home.page";

test.describe("Delete The Article", () => {
    let articleSlug: string;
    let articleTitle: string;

    test.beforeEach(async ({ page, loginByAPI, request }) => {
        // create a article by API
        const data = articleData.success.payload
        const article = await createArticleByAPI(request, data)
        console.log
        articleSlug = article.article.slug;
        articleTitle = article.article.title;
    })

    test('Should delete the article successfully', async ({ page, request }) => {
        // navigate to the Detail page
        const detailPage = new DetailArticlePage(page)
        const homePage = new HomePage(page)
        await detailPage.goto(articleSlug)

        // delete the article
        await detailPage.deleteBtn.click()

        // verify the article not exsit in the home page
        await homePage.waitForLoad()
        expect(await homePage.isExsitArticle(articleTitle)).toBeFalsy()
    })
})