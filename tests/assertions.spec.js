import{test,expect} from '@playwright/test'
test('assertion',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    // check URL correct or not

    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')
    // check title correct ot not
    
    await expect(page).toHaveTitle ('Automation Testing Practice')

await expect (await page.locator('#name')).toBeEnabled();
await expect(page.locator('#name')).toBeEditable();
const first=await page.locator('#name')
await expect(first).toBeEmpty();
const maleRadioBox=await page.locator('#male')
await maleRadioBox.click() 
await expect(maleRadioBox).toBeChecked()

await expect(page.locator('//a[text()="Data Entry Form"]')).toHaveText('Data Entry Form')
await expect(page.locator('//a[text()="Data Entry Form"]')).toContainText('Data Entry')

await page.pause();
const rows=await page.locator('#HTML8') 
await expect.soft(rows).toHaveCount(6)

})

//  check input box 
//  import{test,expect} from '@playwright/test'
//  test('inputBox',async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await expect (page.locator('#email')).toBeVisible()
//     await expect (page.locator ('#email')).toBeEnabled()
//     const bus=await page.locator('#email')
//     await expect(bus).toBeEmpty()
//     await expect(page.locator('#email')).toBeEditable();
//     await page.locator('#email').fill('mohan')
//     await expect(page.locator('#email'))
//     await page.waitForTimeout(5000)
//  })

// check radio button

//  import{test,expect} from '@playwright/test'
//  test('radioBox',async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await page.locator('#male').check()
//      await page.waitForTimeout(3000)
//     await expect (page.locator('#male')).toBeChecked()
//     // await expect ( page.locator('#male').isChecked()).toBeTruthy();
//     const radioButton= await page.locator('#female')
//     await (radioButton).click()
//     await page.waitForTimeout(3000)
//     await expect(radioButton).toBeChecked()
//     await expect(radioButton.isChecked()).toBeTruthy()

//  })

// check check box

import{test,expect} from '@playwright/test'
 test('checkBox',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    // await page.locator('#sunday').check()
    // await page.waitForTimeout(4000)
    // await expect (page.locator('#sunday')).toBeChecked()
    // await expect(page.locator('#sunday').isChecked).toBeTruthy()


    const multiCheck=[
        '#sunday',
        '#saturday',
        '#friday',

    ]

    for(const days of multiCheck)
    {
        await page.locator(days).check()
            
    }
await page.waitForTimeout(4000)
     for(const days of multiCheck)
    {
        if(await page.locator(days).isChecked())
        {
        await page.locator(days).uncheck()
       
        }
    }
await page.waitForTimeout(4000)

 })












// execise -2:


// import {test,expect} from '@playwright/test'
// test('assertions',async({page})=>{
//     await page.goto('https://kitchen.applitools.com')
//     await expect(page).toHaveURL('https://kitchen.applitools.com/')
//     await expect(page).toHaveTitle('The Kitchen')
//     //element present or not 
//     const chk=await (page.locator('//h1[@class="chakra-heading css-dpmy2a"]'))
//     await expect(chk).toHaveCount(1)
// await expect(page.locator('//h1[@class="chakra-heading css-dpmy2a"]')).toHaveCount(1)
// //check element visible or hidden
// await expect(page.locator('//h1[@class="chakra-heading css-dpmy2a"]')).toBeVisible()
// await expect(page.locator('//h3[text()="Alert"]')).toHaveText('Alert')
// await expect(page.locator('//h3[text()="Alert"]')).toBeVisible()

// // await expect.soft(page.locator('//h1[@class="chakra-heading css-dpmy2a"]')).toBeHidden()
// //check element enable or disable
// await expect(page.locator('//h1[@class="chakra-heading css-dpmy2a"]')).toBeEnabled()
// // await expect.soft(page.locator('//h1[@class="chakra-heading css-dpmy2a"]')).toBeDisabled()
// // await expect.soft(page.locator('//h1[@class="chakra-heading css-dpmy2a"]')).toBeEditable()
// await expect(page.locator('//h1[@class="chakra-heading css-dpmy2a"]')).toHaveText('The Kitchen')
// await expect(page.locator('//h1[@class="chakra-heading css-dpmy2a"]')).not.toHaveText('The Kitche')
// await expect(page).toHaveScreenshot()

// })

