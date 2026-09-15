import { test, expect } from "@playwright/test";
import CartPage from "../pages/cart.page";

test.describe('Cart', () => {
    let cartPage: CartPage;
    const files = ['Testdoc.pdf', 'Testdoc2.pdf']

    test.beforeEach(async ({ page }) => {
        cartPage = new CartPage(page)
        await cartPage.navigate();
    })

    for (const file of files) {
        test(`Should upload ${file}`, async () => {
            const filePath = `data/${file}`;
            // upload test file
            await cartPage.uploadComponent().uploadFile(filePath);

            // Verify succes message contains text with custom assertion wait
            await expect(cartPage.uploadComponent().succesTxt)
                .toContainText('uploaded successfully', { timeout: 10000 });
        });
    }

    test('Should upload a test file on a hidden input field', async ({ page }) => {
        // Store test file path
        const filePath = 'data/Testdoc.pdf';

        // DOM manipulation
        await page.evaluate(() => {
            const selector = document.querySelector('input#upfile_1');
            if (selector) {
                selector.className = '';
            }
        });

        // upload test file
        await cartPage.uploadComponent().uploadFile(filePath);

        // Verify succes message contains text
        await expect(cartPage.uploadComponent().succesTxt)
            .toContainText('uploaded successfully', { timeout: 10000 });
    });
})