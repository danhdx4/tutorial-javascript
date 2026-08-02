import { Locator, Page as PlaywrightPage } from "@playwright/test";//lớp cha chứa page để các trang khác kế thừa

export class Page {
  readonly page: PlaywrightPage;

  constructor(page: PlaywrightPage) {
    this.page = page;
  }
}

//Lưu đối tượng page của Playwright