import { Page, Locator } from '@playwright/test';

class ContactPage {
    private page: Page;
    contactName: Locator;
    contactEmail: Locator;
    contactPhone: Locator;
    messageField: Locator;
    submitBtn: Locator;
    succesAlert: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contactName = page.locator('.contact-name input');
        this.contactEmail = page.locator('.contact-email input');
        this.contactPhone = page.locator('.contact-phone input');
        this.messageField = page.locator('//textarea[@class="input-text"]');
        this.submitBtn = page.locator('//button[@type="submit"][contains(., "Submit")]');
        this.succesAlert = page.locator('div[role="alert"]');
    }

    async navigate() {
        await this.page.goto('/contact/');
    }

    async submitForm(name: string, email: string, phone: string, message: string) {
        await this.contactName.fill(name);
        await this.contactEmail.fill(email);
        await this.contactPhone.fill(phone);
        await this.messageField.fill(message);
        await this.submitBtn.click();
    }
}

export default ContactPage;