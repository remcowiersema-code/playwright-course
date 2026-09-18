import { test, expect, APIRequestContext } from "@playwright/test";
import ContactPage from "../pages/contact.page";

test.describe('Contact', () => {
    let contactPage: ContactPage;
    let fakerApi: APIRequestContext;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let randomPerson: any;

    test.beforeAll(async ({ playwright }) => {
        // Created new API context
        fakerApi = await playwright.request.newContext({
            baseURL: 'https://jsonplaceholder.typicode.com/'
        });

        // Make a get request on users and storing response
        const response = await fakerApi.get('users');

        // Created responseBody Json
        const responseBody = await response.json();

        // Generate random index 
        const randomIndex = Math.floor(Math.random() * responseBody.length);

        // Pick random person from responseBody
        randomPerson = responseBody[randomIndex];

        // Make a post resquest and storing response, this logic will work for put and patch aswell
        const postResponse = await fakerApi.post('/users/1/todos', {
            data: {
                "title": "Learn playwright",
                "completed": "false"
            }
        });

        const postResponseBody = await postResponse.json();
        console.log(postResponseBody)
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