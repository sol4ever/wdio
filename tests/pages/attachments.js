import Page from "./page";
import 'dotenv/config';
import path from 'path';

class Attachments extends Page {

    get attachmentButton() { return $('[class="thisClassName"]')}
}