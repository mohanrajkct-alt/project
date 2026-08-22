exports.homepage =
    class homepage {
        constructor(page) {
            this.page = page
            // this.productlist='//div[@class="product-image-wrapper"]/div/div/p'
            this.viewProduct = '//a[@href="/product_details/4"]'
            this.addcartbtn = '//button[@class="btn btn-default cart"]'
            this.cart = '//a[text()=" Cart"]'
        }

      


        async clickProduct() {
            await this.page.locator(this.viewProduct).click();
        
    



            await this.page.locator(this.addcartbtn).click();
        }


        async cartPage() {
            await this.page.locator(this.cart).click();
        }

    }