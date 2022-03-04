import homePage from "../pages/home.page";
import inputs from "../resources/inputs";
require('dotenv').config()

describe('a test suite', () => {

    before(()=> {
        homePage.open();
        browser.maximizeWindow();
    })

    it('a test case', async () => {
    await homePage.insertValueIntoInputField(inputs.input);
    await browser.pause(5000);
    });
});