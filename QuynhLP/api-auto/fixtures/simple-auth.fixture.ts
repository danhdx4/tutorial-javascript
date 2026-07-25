import { test as base } from "@playwright/test";
import { ConduitPage } from "../src/pages/conduit.page";

const EMAIL = process.env.CONDUIT_EMAIL ?? "lanh.zensho@test.com";
const PASSWORD = process.env.CONDUIT_PASSWORD ?? "123456789";

type SimpleAuthFixture = {
  loginSession: void;
};

export const test = base.extend<SimpleAuthFixture>({
  loginSession: [
    async ({ page }, use) => {
      const conduitPage = new ConduitPage(page);
      await conduitPage.gotoHome();
      await conduitPage.login(EMAIL, PASSWORD);
      await use();
    },
    { auto: true },
  ],
});

export { expect } from "@playwright/test";
