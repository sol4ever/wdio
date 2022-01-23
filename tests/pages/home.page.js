import { down } from 'inquirer/lib/utils/readline';
import Page from './page.js';

class homePage extends Page {
    open() {
        super.open("https://www.ventusky.com/?p=54;12;2&l=temperature-2m.google.pl/");
    }

    get searchBox() { return $('#search-q') }

    async insertValueIntoInputField(value){
        await this.searchBox.click()
        await this.searchBox.setValue(value).then(async() =>{ await browser.keys("\uE05B");
        await browser.keys("\uE007");
    })
       
    }
}

export default new homePage();