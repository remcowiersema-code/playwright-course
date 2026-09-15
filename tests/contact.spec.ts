import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker"
import ContactPage from "../pages/contact.page";

test.describe('Contact', () => {
    let contactPage: ContactPage;

    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);
        await contactPage.navigate();
    })

    test('Exercise 1 fill out form and verify confirmation text', async () => {
        // fill out hte input fields and click submit
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();
        const randomPhone = faker.phone.number({ style: 'national' });
        const randomMessage = faker.lorem.paragraph(5);

        await contactPage.submitForm(randomName, randomEmail, randomPhone, randomMessage);

        // verify nav links text is visible
        await expect(contactPage.succesAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    });
});