require("dotenv").config();
class LogoutPage {
    constructor() {
        this.loginUrl = process.env.APP_URL + "login"
        this.loginButtonSelector = `//button[@class="btn btn-primary"]`
        this.dropDownButtonSelector = `//a[@class="nav-link dropdown-toggle text-primary"]`
        this.logoutButtonSelector = `//a[contains(text(),'Logout')]`
    }

    async logoutFunction() {
        await page.click(this.dropDownButtonSelector)
        await page.click(this.logoutButtonSelector)
    }

    async getText(){
        return await page.innerText(this.loginButtonSelector)
    }

}

module.exports = LogoutPage