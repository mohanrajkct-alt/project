exports.ProductPage= class ProductPage {

    constructor(page) {
        this.page = page;

        this.viewProduct = '//a[@href="/product_details/4"]'
        this.addCartButton = '//button[@class="btn btn-default cart"]'
    }

    async viewProductDetails() {
        await this.page.locator(this.viewProduct).click()
    }

    async addToCart() {

        // this.page.once('dialog', async dialog => {
        //     if (dialog.message().includes('Added!')) {
        //         await dialog.accept();
        //     }
        // })

        await this.page.locator(this.addCartButton).click()
        await this.page.waitForTimeout(3000)
    }
}