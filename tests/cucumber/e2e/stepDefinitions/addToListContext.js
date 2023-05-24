const { Given, When, Then } = require('@cucumber/cucumber')

//import expect for assertion
const { expect } = require("@playwright/test")

//import assert
const assert = require("assert")

//import page
const AddToListPage = require("../pageObjects/AddToListPage.js")
const ViewDetailPage = require("../pageObjects/ViewDetailPage.js")

const addToListPage = new AddToListPage


Given('the user has searched movie {string}', async function (movieName) {
    await addToListPage.search(movieName)
    const text = await addToListPage.getSearchText(movieName)
    expect(text.trim()).toBe(movieName)
});


Given('the user has redirect to detail page of movie {string}', async function (movieName) {
    await addToListPage.goToDetailPage(movieName)
    expect(await page.locator(addToListPage.detailPageSelector)).toContainText(movieName);
});


Given('the user has redirect to movie list page', async function () {
    await addToListPage.goToMovieList()
});


Given('the user choosed movie {string}', async function (movieName) {
    await addToListPage.clickMovieOnList(movieName)
    await expect(await page.locator(addToListPage.movieTitleSelector)).toHaveText(movieName);
});


Given('the user has added the movie {string} to the list', async function (movieName) {
    await addToListPage.search(movieName)
    await addToListPage.goToDetailPage(movieName)
    await addToListPage.addToListButton()
});


When('user clicks on movie status', async function () {
    await addToListPage.clickMovieStatus()
});


When('user chooses completed', async function () {
    await addToListPage.chooseCompleted()
});


When('user clicks on add to list', async function () {
    await addToListPage.addToListButton()
});


Then('the user should see the movie {string} in the list', async function (movieName) {
    await addToListPage.goToMovieList()
    const text = await addToListPage.getListText(movieName)
    expect(text.trim()).toBe(movieName)
});


Then('the user should see the movie {string} in the completed list', async function (expectedMovie) {
    await addToListPage.goToMovieList()
    await addToListPage.goToCompletedList()
    const actualMovie = await addToListPage.getListText(expectedMovie)
    const actualMoviee = actualMovie.trim()
    assert.equal(
        actualMoviee,
        expectedMovie,
        `Expectd movie to be "${expectedMovie}" but received "${actualMoviee}"`
    )
});
