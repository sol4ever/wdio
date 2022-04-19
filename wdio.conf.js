import path from 'path';
import { currentDateAndTime } from '././tests/utilities/helpers.timeGenerators';
require('dotenv').config();
const fs = require('fs')

var baseUrl = process.env.USE_LOCAL
    ? 'http://localhost:3000'
    : 'https://ultimateqa.com/';

var screenshotsDir = process.env.USE_LOCAL
    ? 'Error_Screenshots_local'
    : 'Error_Screenshots_prod';

var timeout = process.env.DEBUG
    ? 9999999
    : 50000

export const config = {

    specs: [
        './tests/specs/*.js'
    ],

    suites:
    {
        positive: [
            './tests/specs/simpleTest.js'
        ]
    },

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,
    capabilities: [{

        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],

    baseUrl,
    waitforTimeout: 10000,
    connectionRetryTimeout: 12000,
    connectionRetryCount: 3,

    logLevel: 'error',
    bail: 0,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: [
        ['spec', {
            addConsoleLogs: true,
            onlyFailures: false,
            symbols: {
                passed: '[PASS]',
                failed: '[FAIL]',
                skipped: '[skipped]'
            },
        }],
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: timeout
    },

    //Saves a screenshot of browser after test error. Checks if error screenshot-file exists. If not-it creates it.
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (error) {
            const screenshotDir = path.join(__dirname, `./${screenshotsDir}`)

            if (!fs.existsSync(screenshotDir)) {
                fs.mkdirSync(screenshotDir);
            }
            const filePath = path.join(
                screenshotDir,
                test.title.replace(/[^a-z0-9]/gi, '_').toLowerCase(),
            )
            await browser.saveScreenshot(filePath + currentDateAndTime() + '.png')
        }
    },

    //to check application behavior in poor network conditions
    /*before: async function (capabilities, specs){
        await browser.setNetworkConditions({
            latency: 2000,
            throughput: 450 * 1024
        })
    }*/

}
