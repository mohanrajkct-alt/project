import {test,expect} from '@playwright/test'
let page;

    test.beforeAll(async ({browser})=>{
        page=await browser.newPage();
        await page.goto('https://demoblaze.com/')    
  
    await page.locator('#login2').click()

    await page.locator('#loginusername').fill('hevin')

    await page.locator('#loginpassword').fill('hevin123')

    await page.locator('//button[text()="Log in"]').click()

    })
    test.afterAll(async()=>{
            await page.locator('#logout2').click();
    })
  
test('home page test@reg',async()=>{

     const count=await page.locator('.hrefch')
     await expect(count).toHaveCount(9);
     await page.waitForTimeout(4000)
 
     
})

 test('Add to card test@reg@sanity',async()=>{
  
    await page.locator('//a[text()="Laptops"]').click();
    await page.locator('//a[normalize-space()="Sony vaio i7"]').click(); 

  page.on('dialog',async dialog=>{
     console.log(dialog.type());
     console.log(dialog.message());
    await expect (dialog.message()).toContain('Product added')
       await dialog.accept()
  })
   await page.locator('//a[text()="Add to cart"]').click(); 
     await page.waitForTimeout(5000)

})