import homePage from "../pages/home.page";
import inputs from "../resources/inputs";
import phrases from "../resources/phrases";
import links from "../resources/links";
require('dotenv').config()

describe('a test suite', () => {

    before(() => {
        homePage.open();
        browser.maximizeWindow();
    })

    it('should search for Selenium', async () => {
        await homePage.insertValueIntoInputField(inputs.input);
    });

    it('should verify menu list', async () => {
        await homePage.verifyMenuList();
    });

    it('should open Automation exercises page', async () => {
        await homePage.openSelectedLink(phrases.automation, links.automationExercises);
    });

    it('should open Interactions with simple elements page', async () => {
    await homePage.openSelectedLink(phrases.elements, links.simpleElementsForAutomation);
    })
});