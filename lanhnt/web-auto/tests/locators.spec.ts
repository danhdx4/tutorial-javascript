import test from "@playwright/test";

test("Common Locators", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts

    // by Tag name nb-card

    // by ID id="inputEmail1"

    // by Class value .shape-rectangle

    // by XPath //*[@id="inputEmail1"]
})

test("Built-in Locators", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts

    // getByRole() button/SEND

    // - getByText() IoT Dashboard

    // - getByLabel() Email

    // - getByPlaceholder() First Name
})

test("Filter & Chaining locators", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts

    //filter

    //chaining nb-card/button
});

test("Locator for Using the Grid", async ({ page }) => {
    // goto http://localhost:4200/pages/forms/layouts

    // Email

    // Password

    // Option1

    // Option2

    // Disabled Option

    // Sign In Btn
});

// Other form...

