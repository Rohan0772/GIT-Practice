import {expect,test} from "@playwright/test"

test("login",async({page})=>{
    await page.goto("https://www.redbus.com")
})