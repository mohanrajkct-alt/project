import{test,expect}from '@playwright/test'
let page;
test.beforeAll(async({browser})=>{

     page=await browser.newPage();

    await page.goto('https://demoblaze.com/')

    await page.locator('#login2').click()

    await page.locator('#loginusername').fill('hevin')

    await page.locator('#loginpassword').fill('hevin123')

    await page.locator('//button[text()="Log in"]').click()

    await page.waitForTimeout(4000)
})

test.afterAll(async()=>{
    await page.locator('#logout2').click()
})

test('home page',async()=>{

await page.locator('//a[text()="Laptops"]').click()

await page.locator('//a[text()="MacBook air"]').click()
 await page.waitForTimeout(4000)

await page.locator('//a[text()="Add to cart"]').click()

page.on('dialog',async dialog =>{

    await expect(dialog.message()).toContain('Product added')

    await dialog.accept()

})

await page.waitForTimeout(4000)
})

test('cart page',async()=>{

await page.locator('//a[text()="Nokia lumia 1520"]').click()

await page.locator('//a[text()="Add to cart"]').click()

page.on('dialog',async dialog =>{

    await expect(dialog.message()).toContain('Product added')
    await dialog.accept()

})
})