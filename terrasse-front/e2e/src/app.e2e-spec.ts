import { AppPage } from './app.po';

describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display title', async () => {
        await page.navigateTo('/');
        const title = await page.getHeaderTitle();
        await expect(title).toEqual('Terrasse 2.0');
    });
});
