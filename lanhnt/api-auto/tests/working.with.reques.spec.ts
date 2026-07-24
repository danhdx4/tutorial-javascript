import { expect, test } from "@playwright/test";

test.describe('Hanldle with article', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://conduit.bondaracademy.com/");

        // login with the credentical
        await page.getByRole('link', { name: ' Sign in ' }).click()
        await page.getByPlaceholder('Email').fill('lanh.zensho@test.com')
        await page.getByPlaceholder('Password').fill('123456789')
        await page.getByRole('button', { name: ' Sign in ' }).click()
        await expect(page.getByRole('link', { name: ' Sign in ' })).not.toBeVisible()
    });

    test("Should be create a articel successfully", async ({ page, request }) => {
        // navigate to the creating article page
        await page.getByRole("link", { name: " New Article " }).click();

        // fill all data
        await page.getByPlaceholder("Article Title").fill("The article title");
        await page
            .getByPlaceholder("What's this article about?")
            .fill("The article description");
        await page
            .getByPlaceholder("Write your article (in markdown)")
            .fill("The article content");
        await page.getByPlaceholder("Enter tags").fill("Zensho Holding");

        // click to 'public article' btn
        await page.getByRole("button", { name: " Publish Article " }).click();
        const createAritcleResponse = await page.waitForResponse(
            "https://conduit-api.bondaracademy.com/api/articles/",
        );
        const createAritcleResponseBody = await createAritcleResponse.json();
        const slug = createAritcleResponseBody.article.slug;

        // Back to Home page and verify the created article is existing
        await page.goto("https://conduit.bondaracademy.com/");
        await expect(
            page.locator("app-article-preview h1", { hasText: "The article title" }),
        ).toBeVisible();
        await expect(
            page.locator("app-article-preview p", {
                hasText: "The article description",
            }),
        ).toBeVisible();

        // Tear down: Clean data after testing | Delete the article
        // Get access token by the loginn API
        // const response = await request.post(
        //     "https://conduit-api.bondaracademy.com/api/users/login",
        //     {
        //         data: { user: { email: "lanh.zensho@test.com", password: "123456789" } },
        //     },
        // );
        // const responseBody = await response.json();
        // const accessToken = responseBody.user.token;

        // Delete the article by the delete API
        const deleteArticleResponse = await request.delete(
            `https://conduit-api.bondaracademy.com/api/articles/${slug}`,
            // {
            //     headers: {
            //         Authorization: `Token ${accessToken}`,
            //     },
            // },
        );

        expect(deleteArticleResponse.status()).toEqual(204);
    });

    test('Should delete the article successfully', async ({ page, request }) => {
        await page.goto("https://conduit.bondaracademy.com/");
        // Set up
        // Get access token by the loginn API
        // const response = await request.post(
        //     "https://conduit-api.bondaracademy.com/api/users/login",
        //     {
        //         data: { user: { email: "lanh.zensho@test.com", password: "123456789" } },
        //     },
        // );
        // const responseBody = await response.json();
        // const accessToken = responseBody.user.token;

        // Create the article by the create API
        const createArticleResponse = await request.post(
            `https://conduit-api.bondaracademy.com/api/articles/`,
            {
                // headers: {
                //     Authorization: `Token ${accessToken}`,
                // },
                data:
                {
                    "article":
                    {
                        "title": "Automation Testing for API",
                        "description": "The description for article",
                        "body": "gfvfvvvdvvdf",
                        "tagList": ["Zensho Holding", "Auto Test"]
                    }
                }

            },
        );
        const createAritcleResponseBody = await createArticleResponse.json()

        expect(createArticleResponse.status()).toEqual(201);
        console.log(createAritcleResponseBody)

        // Delete the article
        // Navigate to the article URL and delete Article
        await page.goto(
            `https://conduit.bondaracademy.com/article/${createAritcleResponseBody.article.slug}`
        );
        await page
            .locator(".banner")
            .getByRole("button", { name: " Delete Article " })
            .click();
        await page.waitForResponse(
            "https://conduit-api.bondaracademy.com/api/articles/*"
        );

        // Verify the article is not exsiting
        await page.goto("https://conduit.bondaracademy.com/");
        await expect(
            page.locator("app-article-preview h1", {
                hasText: "Automation Testing for API",
            })
        ).not.toBeVisible();
    })
}

)
