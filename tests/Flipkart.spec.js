import {test,expect,chromium} from "@playwright/test";

// test("flikart", async ({page}) => {
// await page.goto("https://www.flipkart.com/");
// await page.fill('input[title="Search for Products, Brands and More"]','iphone15');
// await page.keyboard.press('Enter');
// await page.waitForSelector('//div[@class="KzDlHZ"]'); 
// let nameMobile= await page.$$('//div[@class="KzDlHZ"]');
// let priceMobile = await page.$$('//div[@class="Nx9bqj _4b5DiR"]');
// for(let i = 0; i <priceMobile.length ; i++){
//     console.log( await nameMobile[i].textContent() + "==========>>>>>>" + await priceMobile[i].textContent())
// }
// })

test("MakeMyTrip", async ({page}) => {
    await page.goto("https://www.makemytrip.com/");
   
    await page.click('//span[@class="commonModal__close"]');
    await page.click('//label[@for="departure"]');
    await page.waitForSelector('//div[@class="DayPicker-Month"][1]/descendant::p[@class=" todayPrice"]');
    let allPrice= await page.$$('//div[@class="DayPicker-Month"][1]/descendant::p[@class=" todayPrice"]');
    let lowestprice = []; 
    for(let key of allPrice ){
        let price = await key.textContent();
        await lowestprice.push(price);
    }
    let lo = await lowestprice.map((item) => item.replace(",","")).map(Number);
    let bo = lo.slice();
    let low = await bo.sort((a,b) => a-b);
    let v = await lo.indexOf(bo[0]);
    await page.click(`//p[.='${lowestprice[v]}']`);
    await page.waitForTimeout(5000);
})
// test.skip("amazon", async({page}) =>{
//     await page.goto("https://www.amazon.in/");
//     await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
//     await page.click('//a[. =" Electronics "]');
//     await expect(await page.locator("//span[.='Laptops']")).toHaveText("Laptops");
//     await expect(await page.locator("//span[.='Headphones']")).toHaveText("Headphones");
// })



// import { test, expect, chromium } from '@playwright/test';

// test("selenium", async () => {
//     // Launch browser
//     const browser = await chromium.launch({ headless: false });
//     const context = await browser.newContext();
//     const page = await context.newPage();

//     // Go to Google
//     await page.goto('https://www.google.co.in/');
    
//     // Search for "Selenium"
//     await page.fill('//textarea[@class="gLFyf"]', 'Selenium');
//     await page.keyboard.press('Enter');
    
//     // Wait for search results to load and click on the Selenium official website link
//     const seleniumLink = await page.waitForSelector("//a[@href='https://www.selenium.dev/']");
    
//     // Open the Selenium link in a new tab
//     const [newTab] = await Promise.all([
//         context.waitForEvent('page'),  // Waits for the new tab to open
//         seleniumLink.click({ modifiers: ['Control'] })  // Ctrl + Click to open in a new tab
//     ]);
    
//     // Bring the new tab to the front and verify the title
//     await newTab.bringToFront();
//     await newTab.waitForLoadState();
    
//     const title = await newTab.title();
//     console.log('Page title in new tab:', title);
    
//     // Title verification
//     if (title.includes("Selenium")) {
//         console.log('Title verification passed!');
//     } else {
//         console.log('Title verification failed!');
//     }

//     // Optional: Close the original tab if no longer needed
//     await page.close();

//     // Close the browser after a short delay
//     await newTab.waitForTimeout(4000);
//     await browser.close();
// });

