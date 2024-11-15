import {test,expect} from "@playwright/test";
test("input", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(await page.locator("#name")).toBeVisible();
    await expect(await page.locator("#name")).toBeEmpty();
    await expect(await page.locator("#name")).toBeEditable();
    await expect(await page.locator("#name")).toBeEnabled();

    await page.fill("#name","rohan");
    await page.waitForTimeout(8000);

})
test("radio button1", async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.check("#male");
    await expect(page.locator("#male")).toBeChecked();
    await expect(await page.locator("#male").isChecked()).toBeTruthy();
    await expect(await page.locator("#female").isChecked()).toBeFalsy();
    await page.waitForTimeout(8000);
})
test("radio button2", async({page}) => {
    await page.goto("https://www.facebook.com");

    await page.waitForTimeout(8000);
})
test("radio button3", async({page}) => {
    await page.goto("https://www.youtube.com");

    await page.waitForTimeout(8000);
})
test("radio button4", async({page}) => {
    await page.goto("https://www.google.com");

    await page.waitForTimeout(8000);
})