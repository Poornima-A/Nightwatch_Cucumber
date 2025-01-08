const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

Given(/^I open Amazon's homepage$/, () => {
    return client
        .url('https://www.amazon.in')
        .waitForElementVisible('body', 10000);
});

When(/^I search for "([^"]*)"$/, (searchTerm) => {
    return client
        .setValue('input[name="field-keywords"]', searchTerm)
        .click('input[type="submit"]')
        .pause(5000);
});

When(/^I click on the first product in the list$/, () => {
    return client
        .waitForElementVisible('.s-main-slot .s-result-item', 10000)
        .click('.s-main-slot .s-result-item h2 a')
        .pause(5000);
});

When(/^I add the product to the cart$/, () => {
    return client
        .waitForElementVisible('#add-to-cart-button', 10000)
        .click('#add-to-cart-button')
        .pause(5000);
});

Then(/^I should see the product in the cart$/, () => {
    return client
        .waitForElementVisible('#nav-cart-count', 10000)
        .assert.containsText('#nav-cart-count', '1');
});
