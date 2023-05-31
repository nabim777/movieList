const { When, Then } = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");

//import page
const AddReviewPage = require("../pageObjects/AddReviewPage.js")
const addReviewPage = new AddReviewPage

//import assert
const assert = require ("assert")


When('the user adds a review with the content {string}', async function (review) {
    await addReviewPage.addReview(review)
});


Then('review {string} should be displayed at reviews list', async function (expectedReview) {
    const actualReview = await addReviewPage.getReviewText()
    console.log(actualReview)
    assert.equal(
        actualReview,
        expectedReview,
        `Expected review content to be "${expectedReview}" but received "${actualReview}"`
    )
});
