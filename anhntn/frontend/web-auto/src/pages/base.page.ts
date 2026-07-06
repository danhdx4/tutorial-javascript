import { expect, Locator, Page as PlaywrightPage } from "@playwright/test";

export class Page {
    readonly page: PlaywrightPage;

    constructor(page: PlaywrightPage) {
        this.page = page;
    }

    /** Common Locators */
    get logo(): Locator {
        return this.page.locator(".logo");
    }

    get sidebar(): Locator {
        return this.page.locator("nb-sidebar");
    }

    get sidebarToggleBtn(): Locator {
        return this.page.locator('button[aria-label="Toggle Sidebar"]');
    }

    get userMenuBtn(): Locator {
        return this.page.locator("nb-user");
    }

    get logoutMenuItem(): Locator {
        return this.page.getByRole("menuitem", { name: /log out/i });
    }

    get toastMessage(): Locator {
        return this.page.locator("nb-toast, .toast-message");
    }

    /** Common Functions */
    async waitForPageReady() {
        await expect(this.logo).toBeVisible();
    }

    async toggleSidebar() {
        await this.sidebarToggleBtn.click();
    }

    async clickSidebarMenu(parentMenu: string, childMenu?: string) {
        const parentItem = this.sidebar.getByText(parentMenu, { exact: true }).first();
        await parentItem.click();

        if (childMenu) {
            const childItem = this.sidebar.getByText(childMenu, { exact: true }).first();
            if (!(await childItem.isVisible())) {
                await parentItem.click();
            }
            await childItem.click();
        }
    }

    async logout() {
        await this.userMenuBtn.click();
        await this.logoutMenuItem.click();
    }

    async waitForToast(text?: string) {
        const toast = this.toastMessage.first();
        await expect(toast).toBeVisible();
        if (text) {
            await expect(toast).toContainText(text);
        }
    }
}
