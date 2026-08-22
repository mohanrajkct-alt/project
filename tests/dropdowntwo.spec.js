// import {test,expect} from '@playwright/test'
// test('dynamic dropdown',async({page})=>{
    // await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select&utm_source=chatgpt.com')

// await page.goto('https://select2.org/dropdown/')
// const options=await page.locator('span[role="combobox"]').click()
// await page.getByRole('option',{name:'California'}).click()
// // console.log("Length:", options.length);
// await page.locator('#cars').selectOption({label:'Saab'})     

// await page.waitForTimeout(3000)

// })




import {test,expect} from '@playwright/test'
test( 'dropdown',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#country').selectOption('Japan')

    // count options
    // await page.waitForTimeout(3000)
    // const counts=await page.locator ('#country option')
    // await expect(counts).toHaveCount(10)

    // count options (another method)

     const counts=await page.$$('#country option')
     console.log("total options:",counts.length)
     await expect(counts.length).toBe(10)

     //find specific option

     const select=await page.locator('#country').textContent()
     await expect (select.includes('India')).toBeTruthy()
     await page.waitForTimeout(6000)
})


   
//     for(const count of counts )
//     {
//         let printAll=await count.textContent()
//            console.log(printAll)
//     }


// })