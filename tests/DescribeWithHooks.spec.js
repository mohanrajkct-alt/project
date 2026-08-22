//  WITH HOOKS 

import { test, expect } from '@playwright/test';

test.describe('Demoblaze Product Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://demoblaze.com/');

    });

    test('Verify Products', async ({ page }) => {

        const products = page.locator('.hrefch');

        await expect(products).toHaveCount(9);
         await page.waitForTimeout(5000)

    });

    test('Add Laptop to Cart', async ({ page }) => {

        await page.locator('//a[text()="Laptops"]').click();

        await page.locator('//a[normalize-space()="Sony vaio i7"]').click();
        await page.waitForTimeout(5000)

        page.once('dialog', async dialog => {

            console.log(dialog.message());
            expect(dialog.message()).toContain('Product added');
            await dialog.accept();

        });

        await page.locator('//a[text()="Add to cart"]').click();
          await page.waitForTimeout(5000)
      

    });

});