// import{test,expect}from '@playwright/test'

// test('MouseHover',async({page})=>{

// await page.goto('https://www.amazon.in/')
// const product=await page.locator('#nav-link-groceries')

// await product.hover();

// await page.waitForTimeout(3000)

// await page.locator('img[alt="Amazon Fresh"]').click()


// await page.waitForTimeout(3000)

// })

// another one
import{test,expect}from '@playwright/test'

test('MouseHover',async({page})=>{

await page.goto('https://www.amazon.in/')
// const list=await page.locator('#nav-link-accountList')
const prime=await page.locator('//span[text()="Prime"]')
// await prime.hover();
await list.hover();
await page.waitForTimeout(3000)
await page.locator('#pin-flyout-main-image').click();
// await page.locator('//span[text()="Your Orders"]').click()


})


// KeyBoard Right Click
// import{test,expect}from '@playwright/test'

// test('keyboard',async({page})=>{

// await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

// const keyboardRight=await page.locator('//span[text()="right click me"]')

// await keyboardRight.click({button:'right'})

// await page.waitForTimeout(4000)

// })