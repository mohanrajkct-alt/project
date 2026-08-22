// import{test, expect}from '@playwright/test'

// test('date picker',async({page})=>{

// await page.goto('https://testautomationpractice.blogspot.com/')

// // await page.locator('#datepicker').fill('10/03/2030')

// await page.locator('#datepicker').click()

// const date='10'
// const month='December'
// const year='2030'

// await page.waitForTimeout(5000)

// while(true){

// const currentmonth=await page.locator('.ui-datepicker-month').textContent()

// const currentyear=await page.locator('.ui-datepicker-year').textContent()

// if(currentmonth===month &&currentyear===year){
//     break;
// }

// await page.locator('//a[@title="Next"]').click()

// }
  
// await page.waitForTimeout(3000)

// const dates=await page.$$('//a[@class="ui-state-default"]')

// // await page.click(`//a[@class="ui-state-default"][text()=${date}]`)

// await page.click('//a[@class="ui-state-default"][text()="2"]')
// await page.waitForTimeout(5000)
// })

// my program

import {test,expect} from '@playwright/test'
test('DataPicker',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // direct method

    // await page.locator('#datepicker').fill('07/20/2025')

    // Another method

    await page.locator('#datepicker').click()
    const date='20'
    const month='December';
    const year='2020';



    while(true)
    {
const currentMOnth=await page.locator('.ui-datepicker-month').textContent();
const currentYear=await page.locator('.ui-datepicker-year').textContent();
if(currentMOnth==month && currentYear==year)
{
    break;
}
await page.locator('span[class="ui-icon ui-icon-circle-triangle-w"]').click();
    }
    // const dates=await page.$$('.ui-state-default')

    // for (const  dt of dates)

    //     {
    //        let value= await dt.textContent();
    //        if(value==date)
    //        {
    //         await dt.click();
    //            await page.waitForTimeout(5000)
    //        }

    //     }


        // without looping 

        await page.locator(`//a[@class="ui-state-default"] [text()="${date}"]`).click()
        //  await page.click(`//a[@class="ui-state-default"][text()=${date}]`)
         
})