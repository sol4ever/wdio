import mainMenuPages from "../pages/mainMenu.page";
import simpleElemPage from "../pages/simpleElements.page";
import inputs from "../resources/inputs";
import phrases from "../resources/phrases";
import links from "../resources/links";

require('dotenv').config()

describe('a test suite', () => {

    before(() => {
        mainMenuPages.open();
        browser.maximizeWindow();
    })

    it('should search for Selenium', async () => {
        await mainMenuPages.insertValueIntoInputField(inputs.input);
    });

    it('should verify menu list', async () => {
        await mainMenuPages.verifyMenuList();
    });

    it('should open Automation exercises page', async () => {
        await mainMenuPages.openSelectedLink(phrases.automation, links.automationExercises);
    });

    it('should open Interactions with simple elements page', async () => {
        await mainMenuPages.openSelectedLink(phrases.elements, links.simpleElementsForAutomation);
    })

    it('should select Female radio button and confirm it is selected', async () => {
        await simpleElemPage.selectRadioButton();
    })

    it('should select bike checkbox and confirm it is selected', async () => {
        await simpleElemPage.selectCheckbox();
    })

});