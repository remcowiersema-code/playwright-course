import { test, expect } from "@playwright/test";
import HomePage from "../pages/home.page";

test.describe('Home', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    })

    test("Open HomePage and verify title", async ({ page }) => {
        // verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    });

    test("Open AboutPage and verify title", async ({ page }) => {
        // open about page
        await homePage.navMenuComponent().aboutButton.click();

        // verify title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    });

    test('Click get started button using CSS selector', async ({ page }) => {
        // Verify url
        await expect(page).not.toHaveURL(/.*#get-started/);

        // CLick the button
        await homePage.getStartedBtn.click();

        // verify url has #get-started
        await expect(page).toHaveURL(/.*#get-started/);
    });

    test('Verify heading text is visible using text selector', async () => {
        // verify that heading text is visible
        await expect(homePage.headingText).toBeVisible();
        await expect(homePage.headingText).toBeVisible();
    });

    test('Verify home link is enabled using text and css selector', async () => {
        // verify home text is enabled
        await expect(homePage.navMenuComponent().homeButton).toBeEnabled();
    });

    test('Verify search icon is visuble using xpath selector', async () => {
        // verify searchIcon is visible
        await expect(homePage.navMenuComponent().searchIcon).toBeVisible();
    });

    test('Verify single nav links using css selector', async () => {
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];

        const navLinks = await homePage.navMenuComponent().getNavLinksText();

        // verify nav links text is visible
        expect(navLinks[3]).toEqual(expectedLinks[3]);
    });

});