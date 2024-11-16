import {test,expect,chromium} from "@playwright/test";

test("flikart", async ({page}) => {
await page.goto("https://www.flipkart.com/");
await page.fill('input[title="Search for Products, Brands and More"]','iphone15');
await page.keyboard.press('Enter');
await page.waitForSelector('//div[@class="KzDlHZ"]'); 
let nameMobile= await page.$$('//div[@class="KzDlHZ"]');
let priceMobile = await page.$$('//div[@class="Nx9bqj _4b5DiR"]');
for(let i = 0; i <priceMobile.length ; i++){
    console.log( await nameMobile[i].textContent() + "==========>>>>>>" + await priceMobile[i].textContent())
    
}
})
console.log("changedthrice");
