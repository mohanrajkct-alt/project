import { test, expect } from '@playwright/test';

import { firstPage } from '../MyTest/First';
import { ProductPage } from '../MyTest/ProductPage';
import { CartPage } from '../MyTest/CartPage';
import { CheckoutPage } from '../MyTest/CheckoutPage';



test('POM', async ({ page }) => {

    // first 
    const home = new firstPage(page);
    await home.Website();
    await home.Login('mohanrajramya07@gmail.com', 'Mohan@7700')
    

    // Product Page

    const product = new ProductPage(page)
    await product.viewProductDetails();
    await product.addToCart();
    

    // Cart Page
    const cart = new CartPage(page)
    await cart.openCart();
    await cart.clickCheckout();

    // Checkout Page

    const checkout = new CheckoutPage(page)
    await checkout.placeOrder();
    await checkout.payment('Mohanraj', '4111111111111111', '123', '12', '2029');

});