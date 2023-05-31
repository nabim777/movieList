const { format } = require("util")

const SearchPage = require("../pageObjects/SearchPage")
const searchPage = new SearchPage

class ViewDetailPage {
    constructor() {
        //define Selectors
        this.searchBoxSelector = "//input[@id='searchTextBox']"
        this.searchButtonSelector = "//button[@class='btn btn-outline-light m-1']";
        this.listSelector = `//a[contains(text(),'%s')]`
        this.movieNameSelector = '//div[@class="title"]/h1'
        this.filmTitle = "//a[normalize-space(text())='%s']"
        this.movieTitleSelector = `//div[@class="title"]//h1`
        this.movieStatusBtnSelector = '#myDropdown'
    }

    async selectMovie(movieName) {
        await page.click(format(this.filmTitle, movieName))
    }


    async getMovieTitle() {
        return await page.innerText(this.movieTitleSelector)
    }

    async goToDetailPage(movieName) {
        await page.click(format(this.listSelector,movieName))
    }
}


module.exports = ViewDetailPage