// WITHOUT HOOKS
import { test, expect } from '@playwright/test';

test.describe('Product Module', () => {

    test('Verify Products', async ({ page }) => {

        await page.goto('https://demoblaze.com/');

        const products = page.locator('.hrefch');

        await expect(products).toHaveCount(9);

    });

    test('Search Laptop', async ({ page }) => {

        await page.goto('https://demoblaze.com/');

        await page.locator('//a[text()="Laptops"]').click();

        await expect(
            page.locator('//a[normalize-space()="Sony vaio i7"]')
        ).toBeVisible();

    });

    test('Add Laptop to Cart', async ({ page }) => {

        await page.goto('https://demoblaze.com/');

        await page.locator('//a[text()="Laptops"]').click();

        await page.locator('//a[normalize-space()="Sony vaio i7"]').click();

        page.once('dialog', async dialog => {

            console.log(dialog.message());

            expect(dialog.message())
                .toContain('Product added');

            await dialog.accept();
        });

        await page.locator('//a[text()="Add to cart"]').click();

    });

});
