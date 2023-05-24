require("dotenv").config();
class LoginPage {
    constructor() {
        this.homeUrl = process.env.APP_URL
        this.loginUrl = this.homeUrl + "login"
        this.loginButtonSelector = `//button[@class="btn btn-primary"]`;
        this.usernameSelector = "//input[@id='validationDefault02']";
        this.passwordSelector = "//input[@id='validationDefault03']";
        this.errorMessageSelector = "//div[@class='alert alert-danger']"
    }

    async goToLoginUrl() {
        await page.goto(this.loginUrl);
    }

    async login(username, password) {
        await page.fill(this.usernameSelector, username);
        await page.fill(this.passwordSelector, password);
        await page.click(this.loginButtonSelector);
    }

    async getErrorMessage() {
        return await page.innerText(this.errorMessageSelector);
    }
}

module.exports = LoginPage