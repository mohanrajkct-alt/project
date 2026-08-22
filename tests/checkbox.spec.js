import{test,expect} from '@playwright/test'
 test('checkBox',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.locator('//input[@id="sunday"and @type="checkbox"]').check()
    // await page.waitForTimeout(2000)
    // await expect (await page.locator('//input[@id="sunday"and @type="checkbox"]')).toBeChecked()
    //     await expect (await page.locator('//input[@id="sunday"and @type="checkbox"]').isChecked()).toBeTruthy()
    //     await expect (await page.locator('//input[@id="monday" and @type="checkbox"]').isChecked()).toBeFalsy()

    // await page.locator('//input[@id="wednesday" and @type="checkbox"]').check()
    // await expect( await page.locator('//input[@id="wednesday" and @type="checkbox"]')).toBeChecked()
    //     await expect( await page.locator('//input[@id="wednesday" and @type="checkbox"]').isChecked()).toBeTruthy()

    const multiCheckBox=[
    '//input[@id="sunday"and @type="checkbox"]',
    '//input[@id="wednesday" and @type="checkbox"]',
    '//input[@id="monday" and @type="checkbox"]',
    ]

    for(const checkBox of multiCheckBox){
        await page.locator(checkBox).check()
    }
    await page.waitForTimeout(5000)

       for(const checkBox of multiCheckBox){
        if( await page.locator(checkBox).isChecked())
            {
           await page.locator(checkBox).uncheck()

        }
    }
    await page.waitForTimeout(5000)


 })