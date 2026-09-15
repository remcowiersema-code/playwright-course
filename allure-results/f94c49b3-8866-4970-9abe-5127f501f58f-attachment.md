# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: blog.spec.ts >> Blog >> Exercise 2 confirm amount of articles under Recent Posts
- Location: tests\blog.spec.ts:12:5

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 100
Received:   13
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - link "Skip to content" [ref=e3]:
      - /url: "#zak-content"
    - banner [ref=e4]:
      - generic [ref=e7]:
        - generic [ref=e9]:
          - link [ref=e10]:
            - /url: https://practice.sdetunicorns.com/
            - img "Practice E-Commerce Site" [ref=e11]
          - generic:
            - paragraph [ref=e12]:
              - link "Practice E-Commerce Site" [ref=e13]:
                - /url: https://practice.sdetunicorns.com/
            - paragraph [ref=e14]: SDET Unicorns
        - generic [ref=e15]:
          - navigation [ref=e16]:
            - list [ref=e17]:
              - listitem [ref=e18]:
                - link "Home" [ref=e19]:
                  - /url: https://practice.sdetunicorns.com/
              - listitem [ref=e20]:
                - link "About" [ref=e21]:
                  - /url: https://practice.sdetunicorns.com/about/
              - listitem [ref=e22]:
                - link "Shop" [ref=e23]:
                  - /url: https://practice.sdetunicorns.com/shop/
              - listitem [ref=e24]:
                - link "Blog" [ref=e25]:
                  - /url: https://practice.sdetunicorns.com/blog/
              - listitem [ref=e26]:
                - link "Contact" [ref=e27]:
                  - /url: https://practice.sdetunicorns.com/contact/
              - listitem [ref=e28]:
                - link "My account" [ref=e29]:
                  - /url: https://practice.sdetunicorns.com/my-account/
          - generic [ref=e30]:
            - link [ref=e32]:
              - /url: "#"
            - listitem [ref=e36]:
              - link "1" [ref=e37]:
                - /url: https://practice.sdetunicorns.com/cart/
          - link "Courses" [ref=e43]:
            - /url: https://sdetunicorns.com/courses
    - generic [ref=e46]:
      - heading "Blog" [level=1] [ref=e48]
      - navigation "Breadcrumbs" [ref=e50]:
        - list [ref=e51]:
          - listitem [ref=e52]:
            - link "Home" [ref=e53]:
              - /url: https://practice.sdetunicorns.com/
            - text: /
          - listitem [ref=e54]: Blog
    - generic [ref=e57]:
      - main [ref=e58]:
        - generic [ref=e59]:
          - article [ref=e60]:
            - generic [ref=e61]:
              - heading [level=2] [ref=e63]:
                - link "IFrame Sample" [ref=e64]:
                  - /url: https://practice.sdetunicorns.com/iframe-sample/
              - link [ref=e67]:
                - /url: https://practice.sdetunicorns.com/iframe-sample/
                - text: Posted on
                - time [ref=e68]: October 29, 2021
              - paragraph [ref=e70]: IFrame example below can be used for testing purposes.
              - link "Read More" [ref=e72]:
                - /url: https://practice.sdetunicorns.com/iframe-sample/
          - article [ref=e75]:
            - link [aria-hidden] [ref=e77]:
              - /url: https://practice.sdetunicorns.com/successful-marketing-ads-for-your-business/
            - generic [ref=e79]:
              - heading [level=2] [ref=e81]:
                - link "Successful Marketing Ads for Your Business" [ref=e82]:
                  - /url: https://practice.sdetunicorns.com/successful-marketing-ads-for-your-business/
              - link [ref=e85]:
                - /url: https://practice.sdetunicorns.com/successful-marketing-ads-for-your-business/
                - text: Posted on
                - time [ref=e86]: June 19, 2020
              - paragraph [ref=e88]: Lorem ipsum dolor sit amet, Tetur adipiscing elit. Atempor scelerisque olor sit mauris.
              - link "Read More" [ref=e90]:
                - /url: https://practice.sdetunicorns.com/successful-marketing-ads-for-your-business/
          - article [ref=e93]:
            - link [aria-hidden] [ref=e95]:
              - /url: https://practice.sdetunicorns.com/lets-building-your-business-from-scratch/
            - generic [ref=e97]:
              - heading [level=2] [ref=e99]:
                - link "Let’s Building Your Business from Scratch" [ref=e100]:
                  - /url: https://practice.sdetunicorns.com/lets-building-your-business-from-scratch/
              - link [ref=e103]:
                - /url: https://practice.sdetunicorns.com/lets-building-your-business-from-scratch/
                - text: Posted on
                - time [ref=e104]: June 19, 2020
              - paragraph [ref=e106]: Orem ipsum dolor sit amet, siy dffee consectetur adipiscing elit. Massa iaculis sem aliquet neque.
              - link "Read More" [ref=e108]:
                - /url: https://practice.sdetunicorns.com/lets-building-your-business-from-scratch/
          - article [ref=e111]:
            - link [aria-hidden] [ref=e113]:
              - /url: https://practice.sdetunicorns.com/the-best-place-to-invest-your-money/
            - generic [ref=e115]:
              - heading [level=2] [ref=e117]:
                - link "The Best Place to Invest Your Money" [ref=e118]:
                  - /url: https://practice.sdetunicorns.com/the-best-place-to-invest-your-money/
              - link [ref=e121]:
                - /url: https://practice.sdetunicorns.com/the-best-place-to-invest-your-money/
                - text: Posted on
                - time [ref=e122]: June 19, 2020
              - paragraph [ref=e124]: Rem ipsum dolor sit amet, Nem consectetur adipiscing elit. A tempor scelerisque mauris.
              - link "Read More" [ref=e126]:
                - /url: https://practice.sdetunicorns.com/the-best-place-to-invest-your-money/
          - article [ref=e129]:
            - link [aria-hidden] [ref=e131]:
              - /url: https://practice.sdetunicorns.com/the-big-seminar-for-your-right-investment/
            - generic [ref=e133]:
              - heading [level=2] [ref=e135]:
                - link "The Big Seminar for Your Right Investment" [ref=e136]:
                  - /url: https://practice.sdetunicorns.com/the-big-seminar-for-your-right-investment/
              - link [ref=e139]:
                - /url: https://practice.sdetunicorns.com/the-big-seminar-for-your-right-investment/
                - text: Posted on
                - time [ref=e140]: June 18, 2020
              - paragraph [ref=e142]: Rem ipsum dolor sit amet, Nem consectetur adipiscing elit. A tempor scelerisque mauris.
              - link "Read More" [ref=e144]:
                - /url: https://practice.sdetunicorns.com/the-big-seminar-for-your-right-investment/
      - complementary [ref=e147]:
        - search [ref=e150]:
          - generic [ref=e151]:
            - generic [ref=e152]: "Search for:"
            - searchbox "Search for:" [ref=e153]
        - generic [ref=e154]:
          - heading "Recent Posts" [level=2] [ref=e155]
          - list [ref=e156]:
            - listitem [ref=e157]:
              - link "IFrame Sample" [ref=e158]:
                - /url: https://practice.sdetunicorns.com/iframe-sample/
            - listitem [ref=e159]:
              - link "Successful Marketing Ads for Your Business" [ref=e160]:
                - /url: https://practice.sdetunicorns.com/successful-marketing-ads-for-your-business/
            - listitem [ref=e161]:
              - link "Let’s Building Your Business from Scratch" [ref=e162]:
                - /url: https://practice.sdetunicorns.com/lets-building-your-business-from-scratch/
            - listitem [ref=e163]:
              - link "The Best Place to Invest Your Money" [ref=e164]:
                - /url: https://practice.sdetunicorns.com/the-best-place-to-invest-your-money/
            - listitem [ref=e165]:
              - link "The Big Seminar for Your Right Investment" [ref=e166]:
                - /url: https://practice.sdetunicorns.com/the-big-seminar-for-your-right-investment/
    - contentinfo [ref=e167]:
      - generic [ref=e170]:
        - paragraph [ref=e175]: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit feugiat sit purus varius. Non in turpis tincidunt nulla. Condimentum ultrices nunc odio ante.
        - generic [ref=e177]:
          - heading "Quick Links" [level=2] [ref=e178]
          - list [ref=e180]:
            - listitem [ref=e181]:
              - link "Home" [ref=e182]:
                - /url: https://practice.sdetunicorns.com/
            - listitem [ref=e183]:
              - link "About" [ref=e184]:
                - /url: https://practice.sdetunicorns.com/about/
            - listitem [ref=e185]:
              - link "Blog" [ref=e186]:
                - /url: https://practice.sdetunicorns.com/blog/
            - listitem [ref=e187]:
              - link "Contact" [ref=e188]:
                - /url: https://practice.sdetunicorns.com/contact/
            - listitem [ref=e189]:
              - link "Support Form" [ref=e190]:
                - /url: https://practice.sdetunicorns.com/support-form/
        - generic [ref=e192]:
          - heading "Latest Posts" [level=2] [ref=e193]
          - list [ref=e194]:
            - listitem [ref=e195]:
              - link "IFrame Sample" [ref=e196]:
                - /url: https://practice.sdetunicorns.com/iframe-sample/
            - listitem [ref=e197]:
              - link "Successful Marketing Ads for Your Business" [ref=e198]:
                - /url: https://practice.sdetunicorns.com/successful-marketing-ads-for-your-business/
            - listitem [ref=e199]:
              - link "Let’s Building Your Business from Scratch" [ref=e200]:
                - /url: https://practice.sdetunicorns.com/lets-building-your-business-from-scratch/
        - generic [ref=e202]:
          - heading "Contact Us" [level=2] [ref=e203]
          - generic [ref=e204]:
            - paragraph [ref=e205]: "Ph. : +(123) 456-7890"
            - paragraph [ref=e206]: "Email : first.last@demos.com"
            - paragraph [ref=e207]: "Loc : Moon Street , 446 Jupiter"
            - paragraph [ref=e208]: "Open : 9AM – 6PM (Mon – Fri)"
      - paragraph [ref=e213]:
        - text: Copyright © 2020
        - link "SDET Unicorns" [ref=e214]:
          - /url: https://sdetunicorns.com/
  - status [ref=e215]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import BlogPage from "../pages/blog.page";
  3  | 
  4  | test.describe('Blog', () => {
  5  |     let blogPage: BlogPage;
  6  | 
  7  |     test.beforeEach(async ({ page }) => {
  8  |         blogPage = new BlogPage(page)
  9  |         await blogPage.navigate();
  10 |     })
  11 | 
  12 |     test('Exercise 2 confirm amount of articles under Recent Posts', async () => {
  13 |         // steps 
  14 |         const recentPostsList = blogPage.recentPostsList;
  15 | 
  16 |         // verify recentPostLinks are equal to 5 posts
  17 |         await expect(recentPostsList).toHaveCount(5);
  18 | 
  19 |         // verify all post title lengths are greater than 10
  20 |         for (const text of await recentPostsList.allTextContents()) {
> 21 |             expect(text?.trim().length).toBeGreaterThan(100);
     |                                         ^ Error: expect(received).toBeGreaterThan(expected)
  22 |         };
  23 |     });
  24 | });
  25 | 
```