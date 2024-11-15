import { test,expect } from "@playwright/test";
test("hbvh", async ({page}) =>{
  await page.goto("https://www.airindia.com/?utm_source=google&utm_medium=cpc&utm_campaign=Acquisition_Perform_SEM_Alltraveltype_India_BAU_Prospecting_Brand_Core_Allrout_Allsector_NullHaul_NullB_EM&gad_source=1&gclid=CjwKCAiA3Na5BhAZEiwAzrfagIm_-LnEJOH58dZEETc6eaKL-ItIeV1v407mr6R4WTW5OdedquvcPBoCowUQAvD_BwE")
  await page.locator('svg path')

})