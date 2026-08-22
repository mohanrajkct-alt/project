// import{test,expect} from '@playwright/test'
// test('dialog',async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     page.on('alert dialog',async dialog=>{
         
//         await expect(dialog.type()).toContain('alert')
//          await expect(dialog.message()).toContain('I am an alert box!')
//         await page.waitForTimeout(4000)
//          await dialog.accept();



        
//     })
// await page.locator('#alertBtn').click()
// await page.waitForTimeout(4000)


// })



import{test,expect}from'@playwright/test'


test.only('alert',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await page.waitForTimeout(5000)

    page.once('alert1',async dialog=>{

    console.log('alert type :',dialog.type())

    console.log('alert message :',dialog.message())

    await page.waitForTimeout(5000)
    
    await dialog.accept()

    })

    await page.getByText("Click for JS Alert").click()
     await page.waitForTimeout(5000)

     await expect(page.getByText('You successfully clicked an alert')).toBeVisible()
})