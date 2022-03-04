require('dotenv').config()

export const waitAndClick = async (elem) => {
    await elem.waitForDisplayed({ timeout: process.env.WAIT_LONG });
    await elem.click();
}

export const waitForElementEnabled = async (elem) => {
    const element = await elem;
    await element.waitUntill(async function () {
        return ((await this.isEnabled()))
    }, {
        timeout: process.env.WAIT_LONG,
        timeoutMsg: `Expected element to be enabled, but it wasn't!`
    });
}

export const waitForElementDisplayed = async (elem) => {
    const element = await elem;
    await element.waitUntill(async function () {
        return ((await this.isDisplayed()))
    }, {
        timeout: process.env.WAIT_LONG,
        timeoutMsg: `Expected element to be displayed, but it wasn't!`
    })
}

export const waitForElementToBeClosed = async (elem) => {
    const element = await elem;
    await element.waitUntill(async function () {
        return ((await this.isDisplayed()) == false)
    }, {
        timeout: process.env.WAIT_LONG,
        timeoutMsg: `Expected element to be closed, but it wasn't!`
    })
}

export const waitForElementAndSplit = async (elem, value) => {
    const element = await elem;
    await element.waitUntill(async function () {
        return (((await this.getText())).split(" "))[2] == value
    }, {
        timeout: process.env.WAIT_LONG,
        timeoutMsg: `Expected element to have value = ${value}, but it wasn't!`
    })
}