import {test,expect} from '@playwright/test';

// const {test,expect}=require('@playwright/test');

test('website',async({page})=>{
   await page.goto('https://demoblaze.com') 
   await page.waitForTimeout(3000)
await page.click()


//    await page.locator('#login2').click()
//    await page.locator('#loginusername').fill('hevin')
 

//    await page.fill('#loginpassword','hevin123') 
   
//      await page.locator('button [type="button"]').click();
//     await page.waitForTimeout(3000);
})
