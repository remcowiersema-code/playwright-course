import { Page, Locator } from '@playwright/test';

class AccountPage {
    private page: Page;
    usernameInput: Locator;
    passwordInput: Locator;
    loginBtn: Locator;
    ordersBtn: Locator;
    downloadsBtn: Locator;
    logoutBtn: Locator;
    registerBtn: Locator

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginBtn = page.locator('button[name*="login"]');
        this.registerBtn = page.locator('button[name*="register"]');
        this.ordersBtn = page.locator('//nav[@class= "woocommerce-MyAccount-navigation"]//li[contains(. , "Orders")]');
        this.downloadsBtn = page.locator('//nav[@class= "woocommerce-MyAccount-navigation"]//li[contains(. , "Downloads")]');
        this.logoutBtn = page.locator('//nav[@class= "woocommerce-MyAccount-navigation"]//li[contains(. , "Log out")]');
    }

    async navigate() {
        await this.page.goto('/my-account/');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }
}

export default AccountPage;