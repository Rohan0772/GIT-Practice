import  {test,expect} from "@playwright/test";
// test("Single Dropdown", async({page})=>{
//  await page.goto("https://testautomationpractice.blogspot.com/");
//  await page.locator('#country').selectOption({index:1});
//  await page.waitForTimeout(4000);
// })

// test("Single Dropdown - check count", async({page})=>{
//  await page.goto("https://testautomationpractice.blogspot.com/");
//  const options = await page.locator('#country option');
//  await expect(options).toHaveCount(10);

//  const options1 = await page.$$('#country option');
//  await expect(options1.length).toBe(10);
// })

// test("check presence of value in dropdown", async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     const options = await page.locator('#country').textContent();
//     await expect(options.includes('India')).toBeTruthy();

    
//     const options1 = await page.$$('#country option');
//     let status = false;
//     for(let key of options1){
//         let value = await key.textContent();
//         if(value.includes('France')){
//             status = true;
//             break;
//         }
//     }
//     expect(status).toBeTruthy();
//    })

   test("select options from dropdown using loop", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const options = await page.$$('#country option');
    for(const option of options){
        const v = await option.textContent();
        
        if(v.includes('France')){
            console.log(v);
        
            await page.locator('#country').selectOption(v.trim());
            break;
        }
    }
   })
   
// test("Multiselect Dropdown", async({page})=>{
//         await page.goto("https://testautomationpractice.blogspot.com/");

//         await page.selectOption('#colors',['Blue','Red','Yellow']);

//         await page.waitForTimeout(4000);
//        })
