import homePage from "../../pages/home.page";
import inputs from "../../resources/inputs";

describe('a test suite', () => {


    it('should open google', async () => {
        homePage.open()
    });

    it('a test case', async () => {
    await homePage.insertValueIntoInputField(inputs.input);
    await browser.pause(5000);
    });
});