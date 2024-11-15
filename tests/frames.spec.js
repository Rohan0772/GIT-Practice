import {test,expect} from "@playwright/test";
test("frames", async({page})=> {
    await page.goto("https://demoapps.qspiders.com/ui/frames?sublist=0");
    const l = await page.frameLocator('//iframe[@class="w-full h-96"]').locator("#username");
    await l.fill("Rohan");
    await page.waitForTimeout(5000)
})