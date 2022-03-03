export default class Page {
    open(path){
        const appUrl = new URL(path, browser.config.baseUrl)
        return browser.url(appUrl.href)
    }
}