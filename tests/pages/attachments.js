import Page from "./page";
require('dotenv').config()
import path from 'path';

class Attachments extends Page {

    get attachmentButton() { return $('[class="thisClassName"]') }

    //uploading attachments from uploades file (not used in this test project but very usefull)
    async uploadAttachment() {
        const remoteFilePath = await browser.uploadFile(path.join(__dirname, '../../uploades/file.jpeg'))
        const input = await this.attachmentButton;
        await browser.execute(input => input.style.display = 'block', input);
        input.waitForDisplayed({ timeout: process.env.WAIT_LOW });
        input.setValue(remoteFilePath);
    }
}
export default new Attachments();