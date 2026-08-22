import {test,expect} from '@playwright/test'
import { LoginPage } from '../page2/LoginPage'
import { homepage } from '../page2/HomePage'

test('Page Object Model',async({page})=>{
    test.setTimeout(60000);
    const First=new LoginPage(page)
    await First.Website();
    await First.Login('mohanrajramya07@gmail.com','Mohan@7700');
    await page.waitForTimeout(4000)

  const home=new homepage(page)
  await home.clickProduct();
  await home.addToCart();
  await home.cartPage();
 await page.waitForTimeout(2000)
   

})