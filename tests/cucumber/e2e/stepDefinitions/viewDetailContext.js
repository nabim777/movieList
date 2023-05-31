const { Given, When, Then } = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");

const assert = require("assert")

const {format} = require("util")

const ViewDetailPage = require("../pageObjects/ViewDetailPage.js");
const viewDetailPage = new ViewDetailPage

const SearchPage = require("../pageObjects/SearchPage.js")
const searchPage = new SearchPage


Given('user has searched movie {string}', async function (movieName) {
    await searchPage.searchMovie(movieName)
    //check the movieName in list
    //extra spaces are there so we have to trim sentences
    //we can use has-text() in term of trim
    const text = await searchPage.getListText(movieName)
    expect(text.trim()).toBe(movieName)
});


When('user selects movie {string} on the list', async function (movieName) {
    await viewDetailPage.goToDetailPage(movieName)
});


Then('the user should be redirected to the detail page of {string}', async function (movieName) {
    const actualMovieName = await viewDetailPage.getMovieTitle()
    assert.equal(
        actualMovieName,
        movieName,
        `User expected to redirect to "${movieName}" detail page but redirected to "${actualMovieName}" details page.`
    )
})