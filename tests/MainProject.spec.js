import { test, expect } from '@playwright/test';
let page;
// const {test,expect}=require('@playwright/test');

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage(page)

  await page.goto('https://automationexercise.com/login')
  await page.locator('//a[text()=" Signup / Login"]').click();
  await expect(page.locator('input[data-qa="login-email"]')).toBeEmpty()       //assertions
  await page.locator('input[data-qa="login-email"]').fill('mohanrajramya07@gmail.com')
  await expect(page.locator('input[data-qa="login-password"]')).toBeEditable()     //assertions
  await page.locator('input[data-qa="login-password"]').fill('Mohan@7700')
  await page.locator('//button[text()="Login"]').click()
  await page.waitForTimeout(4000)

})

test.afterEach(async () => {
  await page.locator('//a[@href="/logout"]').click();
  await page.waitForTimeout(4000)

})




test('Main Project', async () => {
  // await page.goto('https://automationexercise.com/login')
  // await expect(page).toHaveURL('https://automationexercise.com/login')    //assertions
  //  await expect(page).toHaveTitle('Automation Exercise')                   //assertions
  // await page.locator('//a[text()=" Signup / Login"]').click();
  // await expect(page.locator('input[data-qa="login-email"]')).toBeEmpty()       //assertions
  // await page.locator('input[data-qa="login-email"]').fill('mohanrajramya07@gmail.com')
  // await expect(page.locator('input[data-qa="login-password"]')).toBeEditable()     //assertions
  // await page.locator('input[data-qa="login-password"]').fill('Mohan@7700')
  // await page.locator('//button[text()="Login"]').click()


  await page.locator('//a[@href="/product_details/4"]').click()
  await page.waitForTimeout(2000)
  await page.locator('//button[@class="btn btn-default cart"]').click()
   await page.waitForTimeout(2000)
  await page.locator('//u[text()="View Cart"]').click();
   await page.waitForTimeout(2000)
  await page.locator('//a[text()="Proceed To Checkout"]').click()
   await page.waitForTimeout(2000)
  await page.locator('//a[text()="Place Order"]').click()
  await page.locator('input[data-qa="name-on-card"]').fill('Mohanraj')
   await page.waitForTimeout(2000)
  await page.locator('input[data-qa="card-number"]').fill('4111111111111111')
   await page.waitForTimeout(2000)
  await page.locator('input[data-qa="cvc"]').fill('123')
   await page.waitForTimeout(2000)
  await page.locator('input[data-qa="expiry-month"]').fill('07')
   await page.waitForTimeout(2000)
  await page.locator('input[data-qa="expiry-year"]').fill('2027')
  await page.locator('button[data-qa="pay-button"]').click()
   await page.waitForTimeout(2000)
await expect( page.locator('//b[text()="Order Placed!"]')).toBeVisible();     //assertions
   await page.waitForTimeout(3000)                                      
  await page.locator('a[data-qa="continue-button"]').click()
  await page.waitForTimeout(3000)

})