import { test, expect } from "@playwright/test";

test("Single Dropdown", async ({ page }) => {
    await page.goto('https://www.redbus.in/');

    // Fill in the source field
    await page.locator('#src').fill("Delhi");

    // Wait for dropdown options to load
    await page.waitForSelector('//text[@class="placeHolderMainText"]');

    // Find all matching options using the corrected XPath
    const option1 = await page.$$('//text[@class="placeHolderMainText"]');
    for (let option of option1) {
        const value = await option.textContent();
        console.log(value);

        // Click the desired option
        if (value && value.includes('Majnu Ka Tilla')) {
            await option.click();
            break;  // Exit the loop after clicking to avoid multiple selections
        }
    }

    await page.waitForTimeout(4000);
});
