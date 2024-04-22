import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
   console.log( `Running ${test.info().title}`);
   await page.goto('https://demoqa.com/webtables');

});

test('Add person', async ({page}) => {
    await page.click('#addNewRecordButton');
    expect (page.locator('#registration-form-modal')).toBeVisible();
    await page.locator('#firstName').fill('TestName')
    await page.locator('#lastName').fill('TestLastname')
    await page.locator('#userEmail').fill('test@test.com')  
    await page.locator('#salary').fill('5000')
    await page.locator('#department').fill('Marketing') 
});
