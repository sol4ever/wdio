import Page from './page.js';

class mainMenuPages extends Page {

    open() {
        return super.open('');
    }

    get searchBox() { return $('.et_pb_s') }
    get menuIcon() { return $('.et_mobile_nav_menu') }
    get menuList() { return $('#top-menu').$$('li') }

    async insertValueIntoInputField(value) {
        await this.searchBox.click()
        await this.searchBox.setValue(value).then(async () => {
            await browser.keys("\uE05B");
            await browser.keys("\uE007");
        })
    }

    async verifyMenuList() {
        const list = await this.menuList;
        await expect(list).toBeElementsArrayOfSize(7);

        for (let i = 0; i < list.length; i++) {
            const item = list[i];
            const text = (await item.$('a')).getText();
            console.log(await text);
        }
    }

    async openSelectedLink(phrase, linkToVerify) {
        const link = await $(`a[href*="${phrase}"]`);
        await link.click();
        await expect(browser).toHaveUrlContaining(linkToVerify);
    }
}

export default new mainMenuPages();