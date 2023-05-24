const { Given, When, Then } = require('@cucumber/cucumber')
    // import expect for assertion
const { expect } = require("@playwright/test");

//import node assert
const assert = require('assert')

const SignupPage = require("../pageObjects/SignupPage.js")
const signupPage = new SignupPage


Given('user browsed to sign up page', async function() {
    await signupPage.goToSignupPage()
    await expect(page).toHaveURL(signupPage.signupUrl);
});


When('user enters the following details', async function(dataTable) {
    await signupPage.signUp(dataTable)
});


Then('user should see the message {string}', async function(sucessMessage) {
    const actualSucessMessage = await signupPage.getSucessMessage()
    //extra spaces are there so we have to trim sentences
    //we can use has-text() in term of trim
    // expect(text.trim()).toBe(sucessMessage);
    assert.equal(
        actualSucessMessage,
        sucessMessage,
        `Expected Success message to be "${sucessMessage}" but recieve ${actualSucessMessage}`   
    )
});