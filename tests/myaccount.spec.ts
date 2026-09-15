import { test, expect } from "@playwright/test";
import AccountPage from "../pages/account.page";

test.describe('Account Page', () => {
    let accountPage: AccountPage;

    // This will login before each test, which can work parralel.
    test.beforeEach(async ({ page }) => {
        accountPage = new AccountPage(page);
        await accountPage.navigate();
    });

    test('Login', async () => {
        await expect(accountPage.logoutBtn).toBeVisible();
    });

    test('Access Orders', async ({ page }) => {
        await accountPage.ordersBtn.click();
        await expect(page).toHaveURL(/.*orders/);
    });

    test('Access Downloads', async ({ page }) => {
        await accountPage.downloadsBtn.click();
        await expect(page).toHaveURL(/.*downloads/);
    });

    test.describe('Login page', () => {
        let accountPage: AccountPage;
        test.use({ storageState: 'notLoggedInState.json' })

        test.beforeEach(async ({ page }) => {
            accountPage = new AccountPage(page);
            await accountPage.navigate();
        });

        test('Verify login and register is visible', async () => {
            await expect(accountPage.loginBtn).toBeVisible();
            await expect(accountPage.registerBtn).toBeVisible();
        });
    });
});