import{test,expect}from '@playwright/test'

test('table',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

const table=await page.locator('#productTable')

const column=await table.locator('thead tr th');

console.log("column count", await column.count());

const row=await table.locator('tbody tr')

console.log("row count",await row.count());

await expect(await column.count()).toBe(4);

await expect(await row.count()).toBe(5);


// const checkbox=row.filter({
//     has:page.locator('td'),
//     hasText:'Smartwatch'
// })

// await checkbox.locator('input').check()


await page.waitForTimeout(5000)


await selectbox(row,page,'Smartwatch')
await selectbox(row,page,'Laptop')
await selectbox(row,page,'Wireless Earbuds')


})

 async function selectbox(row,page,name){
    const checkbox=row.filter({
        has:page.locator('td'),
        hasText:name
    })
   await checkbox.locator('input').check()

}
