import { Page, Locator } from '@playwright/test';
import navMenuComponent from './components/navmenu.component';

class HomePage {
    private page: Page;
    getStartedBtn: Locator;
    headingText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStartedBtn = page.locator('#get-started');
        this.headingText = page.locator('text=Think different. Make different.');
    }

    navMenuComponent() {
        return new navMenuComponent(this.page);
    }

    async navigate() {
        await this.page.goto('/');
    }
}

export default HomePage;