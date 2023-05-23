const { Given, When, Then } = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");
const LoginPage = require("../pageObjects/LoginPage.js")

//import assert
const assert = require("assert")

const loginPage = new LoginPage;

Given('the user has browsed to the login page', async function () {
  await loginPage.goToLoginUrl()
  await expect(page).toHaveURL(loginPage.loginUrl);
});


Given('the user has sucessfully logged in with username {string} and password {string}', async function (username, password) {
  await loginPage.login(username, password)
  await expect(page).toHaveURL(loginPage.homeUrl);
});


When('user logs in with username {string} and password {string}', async function (username, password) {
  await loginPage.login(username, password)
});


Then('user should redirect to the homepage', async function () {
  await expect(page).toHaveURL(loginPage.homeUrl);
});


Then('user should see the error message {string}', async function (errorMessage) {
  //const txt = await page.innerText(errorMessageSelector)
  const actualErrorMessage = await loginPage.getErrorMessage()
  assert.equal(
    actualErrorMessage.trim(),
    errorMessage,
    `Expected message to be "${errorMessage}" but receive "${actualErrorMessage}"`
  )
});
