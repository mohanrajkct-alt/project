// import{test,expect} from'@playwright/test'
// test('dropdown',async({page})=>{
// await page.goto('https://testautomationpractice.blogspot.com/')



    //1) select any option from dropdown (<select> tag name)

// await page.locator('//select[@id="country"]').selectOption('China')          //visible text
// await page.locator('//select[@id="country"]').selectOption({label:'China'})  //using label
// await page.locator('//select[@id="country"]').selectOption({value:"uk"})     //using values
// await page.locator('//select[@id="country"]').selectOption({index:3})     //using index
// await page.selectOption ('//select[@id="country"]','China')                  //using selectoptions only
// await page.waitForTimeout(5000)
 

//      2)select any option from dropdown (without <select> tag name)

//  const dropDowns=await page.$$('#country option')
//  for (const dropDown of dropDowns)
//  {
//   let value=await dropDown.textContent()
// if(value.includes('China'))
// {
// await page.selectOption('#country' ,value)
// break;
// }
//  }


        // 3) check howmany options avail in dropdown

// const count=await page.locator('#country option')
// await expect(count).toHaveCount(10)
     
         // 4) check howmany options avail in dropdown (another method)

// const count=await page.$$('#country option')
// console.log(count.length)
//  await expect(count.length).toBe(10)


        // 5) check specific value avail or not
// const check=await page.locator('#country').textContent()
// await expect(check.includes('India'))



// check specific value avail or not (another method)

// const counts=await page.$$('#country option')
// let status=false
// for (const count of counts){ 
//     // console.log(await count.textContent())
//     let value=await count.textContent();
//     if (value.includes('India'))
//     {
//         status=true;
//         break;
//     }
// }
// expect(status).toBeTruthy()
// })



// multi selector drop down


import {test,expect} from '@playwright/test'
test('dropdown',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#colors').selectOption(['Blue','Red','Green'])
// await page.selectOption('#colors',['Blue','Red','Yellow'])


// count total options 

// const count=await page.locator('#colors option')
// await expect (count).toHaveCount(7)



   // count total options (another method)
// const count=await page.$$('#colors option')
// await expect(count.length).toBe(7)
//     await page.waitForTimeout(5000)


//     check specific option avail or not

 const count=await page.locator('#colors').textContent()
 await expect (count.includes('Red')).toBeTruthy()


})