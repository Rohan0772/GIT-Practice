const {test,expect} = require('@playwright/test');
test('home Page', async({page}) => {
await page.goto('https://www.demoblaze.com/');
const title =await page.title();
console.log(title);
const url = await page.url();
console.log(url);
await expect(page).toHaveTitle("STORE");
await expect(page).toHaveURL('https://www.demoblaze.com/');

})