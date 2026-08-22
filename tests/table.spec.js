import {test,expect} from '@playwright/test'
// const  {test,expect}=require ('@playwright/test')
test('table',async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
await page.waitForTimeout(3000)


    const FullTable=await page.locator('#productTable')  //capture  table
    //count number of coloumns

    const allColoums=await FullTable.locator(' thead tr th')   //capture coloums
    console.log("number of Coloums:", await allColoums.count())  //count of coloumns
 expect ( await allColoums.count()).toBe(4)

    // count number of rows
    const allRows=await FullTable.locator('tbody tr')
    console.log("number of rows:",await allRows.count())
    expect (await allRows.count()).toBe(5)



    //   select specific product check

//     const select=allRows.filter({
//         // has:page.locator('td'),
//         hasText:'Wireless Earbuds'
//     })

// await select.locator('input').check()
    

await selectMultiple (allRows,page,'Laptop')

await selectMultiple (allRows,page,'Tablet')

await selectMultiple (allRows,page,'Smartwatch')


})

async function selectMultiple (allRows,page,name)
{
        const select=allRows.filter({
        has:page.locator('td'),
        hasText:name
    })
    await select.locator('input').check()
    await page.waitForTimeout(5000)


}