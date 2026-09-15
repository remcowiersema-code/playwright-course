import { Locator, Page } from '@playwright/test';

class navMenuComponent {
    private page: Page;
    homeButton: Locator;
    aboutButton: Locator;
    searchIcon: Locator;
    navLinks: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeButton = page.locator('#zak-primary-menu >> text=Home');
        this.aboutButton = page.locator('#zak-primary-menu >> text=About');
        this.searchIcon = page.locator('//div[@class="zak-header-actions zak-header-actions--desktop"]//*[@class="zak-header-action zak-header-search"]');
        this.navLinks = page.locator('#zak-primary-menu li[id*=menu]');
    }

    getNavLinksText() {
        return this.navLinks.allTextContents();
    }
}

export default navMenuComponent;