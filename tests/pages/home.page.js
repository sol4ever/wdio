import Page from './page.js';

class homePage extends Page {

    open() {
        return super.open('somePage/comeSeparateTab');
    }

    get searchBox() { return $('#search-q') }

    async insertValueIntoInputField(value) {
        await this.searchBox.click()
        await this.searchBox.setValue(value).then(async () => {
            await browser.keys("\uE05B");
            await browser.keys("\uE007");
        })
    }
}

export default new homePage();