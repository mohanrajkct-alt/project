import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByPlaceholder('Search').fill('time')

});
// import{test,expect} from '@playwright/test'
// test('builtin locator',async({page})=>{
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//   const logo=await page.getByAltText('company-branding')
//   await expect(logo).toBeVisible();
//   await page.pause()
//   await page.getByPlaceholder('Username').fill('Admin')
//   await page.getByPlaceholder('Password').fill('admin123')
//   await page.getByRole('button',{type:'submit'}).click()
 

// // await page.getByText('Time at Work')
// // await page.waitForTimeout(4000)
// })




// import{test,expect} from '@playwright/test'
// test('builtin locator',async({page})=>{
//   await page.goto('https://www.demoblaze.com/')
// await page.getByRole('link',{name:'Log in'}).click()
// await page.waitForTimeout(3000)
// await page.getByLabel('Username:').fill('hevin')


//    const logo=await page.getByAltText('First slide')
//    await expect(logo).toBeVisible();
//    await page.getByRole('link',{name:'Log in' }).click()
//    await page.pause();              
 

//  await page.getByLabel('Username:').fill('hevin');
// await page.getByLabel('Password:').fill('hevin123');

// await page.getByRole('button', { name: 'Log in' }).click();


// })





// import{test,expect} from '@playwright/test'
// test('builtin locator',async({page})=>{
//   await page.goto('https://practice.expandtesting.com/')
//   await page.getByPlaceholder('Search an example...').fill('mohan')

//   await page.getByRole('button',{name:'Search'}).click()
// await page.getByRole('link',{name:'Test Cases'})
//   await page.waitForTimeout(3000)
// await page.getByText('Xpath / Css').click()

// })

  





