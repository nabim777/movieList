const { Given, When, Then } = require('@cucumber/cucumber')
    // import expect for assertion
const { expect } = require("@playwright/test");
//new
//import of format
const { format } = require("util")

//import of assert
const assert = require("assert")

const SearchPage = require("../pageObjects/SearchPage.js")
const ViewDetailPage = require("../pageObjects/ViewDetailPage.js")
const viewDetailPage = new ViewDetailPage
const searchPage = new SearchPage

Given('user has browsed the homepage', async function() {
    await searchPage.goToHomeUrl()
    await expect(page).toHaveURL(searchPage.homeUrl);
});


Given('the user has browsed to the details page of {string}', async function(movieName) {
    await viewDetailPage.goToDetailPage(movieName)
    expect(await page.locator(viewDetailPage.movieTitleSelector)).toHaveText(movieName);
});


When('user searches for movie {string}', async function(movieName) {
    await searchPage.searchMovie(movieName)
});


Then('user should see the movie {string} in the search list', async function(expectedMovieName) {
    const actualMovieName = await searchPage.getListText(expectedMovieName)
    assert(
        actualMovieName,
        expectedMovieName,
        `Expected movie name "${expectedMovieName}" but receive "${actualMovieName}"`
    )
});