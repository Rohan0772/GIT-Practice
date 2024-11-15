import {test, expect} from '@playwright/test';
test('locate multiple element', async({page}) => {
    await page.goto('https://www.demoblaze.com/');
    await page.waitForSelector('//a[@class="hrefch"]');
   const all =  await page.$$('//a[@class="hrefch"]');
   for(let a of all){
    let text = await a.textContent();
    console.log(text);
   }
})