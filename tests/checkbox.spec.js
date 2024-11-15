import {test,expect} from "@playwright/test";
test("single Checkbox", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#sunday").check();
    await expect(page.locator("#sunday")).toBeChecked();

})
test("Multiple checkbox", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Get a Locator for all checkboxes
    let checkboxes = page.locator("//input[@type='checkbox' and @class='form-check-input']");

    // Loop through each checkbox and check it
    const count = await checkboxes.count();
    for (let i = 0; i < count; i++) {
        const checkbox = checkboxes.nth(i);  // Get a Locator for each checkbox
        await checkbox.check();
        await expect(checkbox).toBeChecked(); // Assert that each checkbox is now checked
    }

    await page.waitForTimeout(5000);  // Optional pause for observation
});
