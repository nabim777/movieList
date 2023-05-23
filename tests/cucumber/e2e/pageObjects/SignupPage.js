//const config = require("../config")
require("dotenv").config();
class SignupPage {
    constructor() {
        //this.signupUrl = 'http://localhost:8000/signup'
        this.signupUrl = process.env.APP_URL + "signup"
        this.dateSelector = '#validationDefault03'
        this.submitSelector = "//button[@class='btn btn-primary']"
        this.sucessSelector = "//div[@class='alert alert-info']"
        this.usernameSelector = '//input[@id="validationDefault01"]';
        this.emailSelector = '#validationDefault02'
        this.passwordSelector = '#validationDefault011'
        this.confirmPasswordSelector = '#validationDefault003'
    }

    async goToSignupPage() {
        await page.goto(this.signupUrl)
    }

    async signUp(dataTable) {
        const userDetails = []
        for (const userData of dataTable.raw()) {
            userDetails.push(userData[1])
        }
        await page.fill(this.usernameSelector, userDetails[0]);
        await page.fill(this.emailSelector,userDetails[1]);
        await page.getByText('Male', { exact: true }).click();
        await page.fill(this.passwordSelector,userDetails[3]);
        await page.fill(this.confirmPasswordSelector,userDetails[4]);
        await page.type(this.dateSelector, userDetails[5])
        await page.click(this.submitSelector)
    }

    async getSucessMessage() {
        return await page.innerText(this.sucessSelector);
    }

}

module.exports = SignupPage


