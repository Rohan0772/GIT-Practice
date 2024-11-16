import {test,expect} from "@playwright/test";
test("locate element @Reg", async({page}) =>{
    await page.goto('https://www.demoblaze.com/');
  //  await page.locator('#login2').click();
    await page.click('#login2');
  //  await page.locator("//input[@id='loginusername']").fill('pavanol');
    await page.fill("//input[@id='loginusername']", 'pavanol')
  //  await page.locator("//input[@id='loginpassword']").type('test@123');
    await page.type("//input[@id='loginpassword']",'test@123')
    await page.click('//button[.= "Log in"]');

   const logout =  await page.locator("//a[text() = 'Log out']");
  await expect(logout).toBeVisible();
  await page.close();
});

