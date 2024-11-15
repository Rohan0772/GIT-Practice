import {test,expect} from '@playwright/test';
test('assertion', async({page}) =>{
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    await expect(page.locator('//img[@src="https://demo.nopcommerce.com/Themes/DefaultClean/Content/images/logo.png"]')).toBeVisible();
    await expect(page.locator('//input[@class="search-box-text ui-autocomplete-input"]')).toBeEnabled();
    
    const gender = await page.locator('#gender-male');
    await gender.click();
    await expect(gender).toBeChecked();

    const att = await page.locator('//button[. = "Register"]');
    await expect(att).toHaveAttribute('type','submit');

    await expect(page.locator('//button[. = "Register"]')).toHaveText('Register');

    await expect(page.locator('//button[. = "Register"]')).toContainText('Reg');

    await page.locator('#FirstName').fill("Rohan");

    await expect(page.locator('#FirstName')).toHaveValue('Rohan');

    await expect(page.locator('select[name="DateOfBirthMonth"] option')).toHaveCount(13);

} )