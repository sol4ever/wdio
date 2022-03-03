import Page from "./page";
import 'dotenv/config';
import path from 'path';

class Attachments extends Page {

    get attachmentButton() { return $('[class="thisClassName"]') }

    async uploadAttachment() {
        const remoteFilePath = await browser.uploadFile(path.join(__dirname, '../../uploades/file.jpeg'))
        const input = await this.attachmentButton;
        await browser.execute(input => input.style.display = 'block', input);
        input.waitForDisplayed({ timeout: process.env.WAIT_LOW });
        input.setValue(remoteFilePath);
    }
}