import { test, expect } from "@playwright/test";
import ContactPage from "../pages/contact.page";
import apiController from "../controller/api.controller";
import type { User } from "../controller/api.controller";

test.describe('Contact', () => {

    let contactPage: ContactPage;
    let randomPerson: User;

    test.beforeAll(async () => {
        await apiController.init();
        randomPerson = await apiController.getUser(1);

        const newUserTodo = await apiController.createUserTodo({
            title: "Learn Playwright",
            completed: false
        });
        console.log(newUserTodo)
    })

    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);
        await contactPage.navigate();
    })

    test('Exercise 1 fill out form and verify confirmation text', async () => {
        // fill out hte input fields and click submit
        await contactPage.submitForm(
            randomPerson['name'],
            randomPerson['email'],
            randomPerson['phone'],
            randomPerson['website']
        );

        // verify nav links text is visible
        await expect(contactPage.succesAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    });
});