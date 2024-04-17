import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('https://demoqa.com/buttons');

});

test('Double click', async ({ page }) => {
  await page.dblclick('#doubleClickBtn');
  expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click')

});

test('Right click', async ({ page }) => {
  await page.click('#rightClickBtn', { button: 'right' });
 expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click')
});

test('Dynamic click', async ({ page }) => {
  await page.getByRole('button', { name: 'Click Me', exact: true }).click();

 expect(page.locator('#dynamicClickMessage')).toHaveText('You have done a dynamic click')
});
