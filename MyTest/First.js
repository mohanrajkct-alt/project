exports.firstPage = class firstPage {

    constructor(page) {
        this.page = page
        this.linkForLogin = '//a[text()=" Signup / Login"]'
        this.UsernameInput = 'input[data-qa="login-email"]';
        this.PasswordInput = 'input[data-qa="login-password"]'
        this.LoginBtn = '//button[text()="Login"]';
    }
    async Website() {
        await this.page.goto('https://automationexercise.com/login')

    }
    async Login(email, password) {
        await this.page.locator(this.linkForLogin).click();
        await this.page.locator(this.UsernameInput).fill(email)
        await this.page.locator(this.PasswordInput).fill(password)
        await this.page.locator(this.LoginBtn).click();
    }
}