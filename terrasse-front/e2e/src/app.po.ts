import { browser, by, element } from "protractor";

export class AppPage {
    async navigateTo(path: string): Promise<string> {
        return browser.get(path);
    }

    async getHeaderTitle(): Promise<string> {
        return element(by.id("title"))
        .getText();
    }
}
