import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("https://conduit.bondaracademy.com/");

    // login with the credentical
    await page.getByRole('link', { name: ' Sign in ' }).click()
    await page.getByPlaceholder('Email').fill('lanh.zensho@test.com')
    await page.getByPlaceholder('Password').fill('123456789')
    await page.getByRole('button', { name: ' Sign in ' }).click()

    // Chờ login hoàn tất - đợi navigation về trang home
    await page.waitForURL('https://conduit.bondaracademy.com/')
});

test('Should be create a articel successfully', async ({ page }) => {
    const uniqueTitle = `Test Article ${Date.now()}`

    // 1. Gửi request tạo bài viết qua fetch trong browser (dùng token từ localStorage)
    const articleResponseData = await page.evaluate(async (title) => {
        const jwtToken = window.localStorage.getItem('jwtToken')
        const response = await fetch('https://conduit-api.bondaracademy.com/api/articles/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${jwtToken}`
            },
            body: JSON.stringify({
                article: {
                    title,
                    description: 'Test Description',
                    body: 'Test Body',
                    tagList: []
                }
            })
        })
        return { status: response.status, body: await response.json() }
    }, uniqueTitle)
    expect(articleResponseData.status).toEqual(201)

    // 2. Kiểm tra bài viết mới xuất hiện trên UI
    await page.reload()
    await page.getByText('Global Feed').click()
    await expect(page.locator('.article-preview h1', { hasText: uniqueTitle })).toBeVisible()
})

test('Should delete the article successfully', async ({ page }) => {
    const uniqueTitle = `Test Article ${Date.now()}`

    // 1. Tạo bài viết mới thông qua fetch trong browser để có bài viết cần xoá
    const createResponseData = await page.evaluate(async (title) => {
        const jwtToken = window.localStorage.getItem('jwtToken')
        const response = await fetch('https://conduit-api.bondaracademy.com/api/articles/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${jwtToken}`
            },
            body: JSON.stringify({
                article: {
                    title,
                    description: 'Test Description',
                    body: 'Test Body',
                    tagList: []
                }
            })
        })
        return { status: response.status, body: await response.json() }
    }, uniqueTitle)
    expect(createResponseData.status).toEqual(201)
    const slugId = createResponseData.body.article.slug

    // 2. Kiểm tra bài viết mới xuất hiện trên UI trước khi xoá
    await page.reload()
    await page.getByText('Global Feed').click()
    await expect(page.locator('.article-preview h1', { hasText: uniqueTitle })).toBeVisible()

    // 3. Gửi request xoá bài viết thông qua fetch trong browser
    const deleteStatus = await page.evaluate(async (slug) => {
        const jwtToken = window.localStorage.getItem('jwtToken')
        const response = await fetch(`https://conduit-api.bondaracademy.com/api/articles/${slug}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Token ${jwtToken}`
            }
        })
        return response.status
    }, slugId)
    expect(deleteStatus).toEqual(204)

    // 4. Kiểm tra bài viết đã bị xoá khỏi UI
    await page.reload()
    await expect(page.locator('.article-preview h1', { hasText: uniqueTitle })).toHaveCount(0)
})