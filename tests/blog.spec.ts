import { test, expect } from "@playwright/test";
import BlogPage from "../pages/blog.page";

test.describe('Blog', () => {
    let blogPage: BlogPage;

    test.beforeEach(async ({ page }) => {
        blogPage = new BlogPage(page)
        await blogPage.navigate();
    })

    test('Exercise 2 confirm amount of articles under Recent Posts', async () => {
        // steps 
        const recentPostsList = blogPage.recentPostsList;

        // verify recentPostLinks are equal to 5 posts
        await expect(recentPostsList).toHaveCount(5);

        // verify all post title lengths are greater than 10
        for (const text of await recentPostsList.allTextContents()) {
            expect(text?.trim().length).toBeGreaterThan(100);
        };
    });
});
