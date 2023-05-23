require("dotenv").config();
const { format } = require("util")
class SearchPage {
    constructor() {
        this.homeUrl = 'http://localhost:8000'
        this.searchBoxSelector = "//input[@id='searchTextBox']"
        this.searchButtonSelector = "//button[@class='btn btn-outline-light m-1']";
        this.listSelector = `//a[contains(text(), "%s")]`
        this.movieTitleSelector = `//div[@id="detailPage"]//h1`
    }

    async getListText(movieName) {
        return await page.innerText(format(this.listSelector,movieName))
    }

    async goToHomeUrl() {
        await page.goto(this.homeUrl)
    }

    async searchMovie(movieName) {
        await page.fill(this.searchBoxSelector, movieName);
        await page.click(this.searchButtonSelector);
    }

    async getTitleFromSearchList(search) {
        return await page.innerText(this.movieTitleSelector)
    }
}

module.exports = SearchPage