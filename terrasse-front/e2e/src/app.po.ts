import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo(path: string) {
        return browser.get(path);
    }

    getHeaderTitle() {
        return element(by.id('title')).getText();
    }
}
