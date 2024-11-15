import  {test,expect} from "@playwright/test";
test("Single Dropdown", async({page})=>{
 await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2#google_vignette");

await page.locator('.multiselect').click();
const options = await page.locator('ul> li label input');
await expect(options).toHaveCount(11);

const option1 = await page.$$('ul> li label input')
for(let option of option1){
    const value = await option.textContent();
    console.log(value);
    if(value.includes('Angular') || value.includes('Java')){
        await option.click();
    }
}

})