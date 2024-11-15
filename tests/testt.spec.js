import {test,expect} from "@playwright/test"
test("prompt", async({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/alert?sublist=0");
    await page.click("#buttonAlert2");
    await page.on("dialog",async dialog => {
        await expect(dialog.type()).toContain('alert');
        await expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })
})