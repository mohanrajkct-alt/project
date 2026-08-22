import {test,expect} from '@playwright/test';

// const {test,expect}=require('@playwright/test');

test('website',async({page})=>{
   await page.goto('https://www.amazon.in/')
 })
