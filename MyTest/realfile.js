exports.CartPage= class CartPage {

    constructor(page) {
        this.page = page;
        this.cartLink = '//u[text()="View Cart"]';
        this.checkoutButton = '//a[text()="Proceed To Checkout"]';
    }

    async openCart() {
        await this.page.locator(this.cartLink).click();

    }

    async clickCheckout() {
        await this.page.locator(this.checkoutButton).click();
    }
}
