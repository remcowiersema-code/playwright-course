import { chromium } from "@playwright/test";
import AccountPage from "../pages/account.page";

let accountPage: AccountPage;
const username = 'practiceuser1';
const password = 'PracticePass1!';

async function globalSetup() {
    // start up browser
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // go to accountPage
    accountPage = new AccountPage(page);
    await page.goto('https://practice.sdetunicorns.com/my-account/');

    // save state to 'notLoggedInState.json'
    await page.context().storageState({ path: 'notLoggedInState.json' });

    // Login
    await accountPage.login(username, password);

    // save signed-in state to 'loggedInState.json'
    await page.context().storageState({ path: 'loggedInState.json' });

    // close broweser
    await browser.close();
}

export default globalSetup;