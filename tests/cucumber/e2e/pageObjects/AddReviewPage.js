class AddReviewPage {
    constructor() {
        this.reviewSelector = "#exampleFormControlTextarea1"
        this.addReviewButtonSelector = '#commentaddbtn'
        this.reviewListSelector = "//div[@id='reviewsHome']//p"
        this.addToListBtn = "#titleaddBtn"
    }

    async addReview(review) {
        await page.locator(this.addToListBtn).click();
        await page.fill(this.reviewSelector, review)
        await page.locator(this.addReviewButtonSelector).click()
    }

    async getReviewText() {
        return await page.innerText(this.reviewListSelector);
    }
}

module.exports = AddReviewPage