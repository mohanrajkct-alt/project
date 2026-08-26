// import {expect,test} from '@playwright/test'
const {test,expect}=require ('@playwright/test')

test.only('page screenshot',async ({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.screenshot( { path: 'tests/screenshot/'+ Date.now() + 'HomePage.png' })

})
test('full page screenshot',async ({page})=> {
    await page.goto('https://practicetestautomation.com/practice-test-login/')   
    await page.screenshot ( { path:'tests/screenshot/'+Date.now() +'FullPage.png',fullPage:true })

})

test('particular element',async ({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator('//*[@id="login"]/ul/li[1]').screenshot({ path:'tests/screenshot/'+Date.now()+'ParicularPage.png'})

})
test('every test take screenshot',async ({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.fill('#username','student')
    await page.fill('#password','Password123')
    await page.getByRole('button',{name:'submit'}).click()
    await page.getByRole('link',{name:'Log out'}).click()
})