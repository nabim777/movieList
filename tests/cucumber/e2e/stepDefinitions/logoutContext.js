const { Given, When, Then } = require(`@cucumber/cucumber`)
const { expect } = require("@playwright/test");

const { format } = require("util")

const assert = require("assert")

const LogoutPage = require("../pageObjects/LogoutPage")
const logoutPage = new LogoutPage

When('user logouts from his account', async function () {
    await logoutPage.logoutFunction()
});


Then('the user should redirected to login page', async function () {
    const actualText = await logoutPage.getText()
    const expectedText = 'Login'

    assert.equal(
        actualText,
        expectedText,
        `Expected Text to be "${expectedText}" but received "${actualText}"`
    )
});