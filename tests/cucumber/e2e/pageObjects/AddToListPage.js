const { format } = require("util")

class AddToListPage {
    constructor() {
        this.searchBoxSelector = "//input[@id='searchTextBox']"
        this.searchButtonSelector = '//button[@class="btn btn-outline-light m-1"]'
        this.addToListSelector = "#titleaddBtn"
        this.listSelector = "//a[contains(text(),'%s')]"
        this.movieTitleSelector = `//div[@class="col-md-auto text-center border-l-b"]/h1`
        this.movieStatusSelector = `#exampleFormControlSelect11`
        this.dropDownProfileSelector = `//a[@class="nav-link dropdown-toggle text-primary"]`
        this.movieListButtonSelector = `//li/a[contains(text(),'Movie List')]`
        this.listTextSelector = `//div[@id='all-tab-pane']//table//td//a[contains(text(),'%s')]`
        this.completedListSelector = `#completed-tab`
        this.detailPageSelector = `#detailPage`

    }

    async search(movieName) {
        await page.fill(this.searchBoxSelector, movieName)
        await page.click(this.searchButtonSelector)
    }

    async getSearchText(movieName) {
        return await page.innerText(format(this.listSelector, movieName))
    }

    async goToDetailPage(movieName) {
        await page.click(format(this.listSelector, movieName))
    }

    async addToListButton() {
        await page.click(this.addToListSelector);
    }

    async goToMovieList() {
        await page.click(this.dropDownProfileSelector)
        await page.click(this.movieListButtonSelector)
    }

    async getListText(movieName) {
        return await page.innerText(format(this.listTextSelector, movieName))
    }

    async clickMovieOnList(movieName) {
        await page.click(format(this.listSelector, movieName))
    }

    async clickMovieStatus() {
        await page.click(this.movieStatusSelector)
    }

    async chooseCompleted(){
        await page.locator(this.movieStatusSelector).selectOption('Completed');
    }

    async goToCompletedList(){
        //await page.getByRole('tab', { name: 'Completed' }).click();
        await page.click(this.completedListSelector)
    }

    
}

module.exports = AddToListPage