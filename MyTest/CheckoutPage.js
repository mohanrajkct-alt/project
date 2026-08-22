exports.CheckoutPage = class CheckoutPage {

    constructor(page) {
        this.page = page;
        this.placeOrderButton = '//a[text()="Place Order"]'
        this.name = 'input[data-qa="name-on-card"]'
        this.cardNumber = 'input[data-qa="card-number"]'
        this.cvc = 'input[data-qa="cvc"]'
        this.expiryMonth = 'input[data-qa="expiry-month"]'
        this.expiryYear = 'input[data-qa="expiry-year"]';
        this.payButton = 'button[data-qa="pay-button"]';
        this.continueBtn = 'a[data-qa="continue-button"]'
    }

    async placeOrder() {
        await this.page.locator(this.placeOrderButton).click();
    }

    async payment(name, card, cvc, month, year) {

        await this.page.locator(this.name).fill(name);
        await this.page.locator(this.cardNumber).fill(card);
        await this.page.locator(this.cvc).fill(cvc);
        await this.page.locator(this.expiryMonth).fill(month);
        await this.page.locator(this.expiryYear).fill(year);
        await this.page.locator(this.payButton).click();
        await this.page.locator(this.continueBtn).click()
    }
}