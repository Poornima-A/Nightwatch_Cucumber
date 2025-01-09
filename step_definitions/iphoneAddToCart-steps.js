const { Given, When, Then } = require('cucumber');
const { client } = require('nightwatch-api');
const {assert} = require('assert');

Given('User on the Amazon login page', async () => {
    await client
        .url('https://www.amazon.in/') // Update to your target Amazon site
        .waitForElementVisible('body', 3000); // Ensure the page is loaded
});

When('User enters the {string} into the search box and clicks enter', async (text) => {
    await client
        .setValue('#twotabsearchtextbox', text) 
        .click('input.nav-input[type="submit"]')
        .pause(5000); 
});

Then('User should see the results for iPhone', async () => {
 await client
 .waitForElementVisible('.s-main-slot',5000)
 .assert.containsText('.s-main-slot','iPhone');
});

Then('User should scroll down the page', async function () {
    await browser.execute('window.scrollBy(0, 1000)');
    console.log('Scrolled down the page');
});

    Then ('User clicks the add to cart button for the third iPhone product', async () => {
        await client
        .click('#a-autoid-3-announce')
        .pause(10000)
    });
