const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

Given(/^I open Facebook's login page$/, () => {
    return client
        .url('https://www.facebook.com/')
        .waitForElementVisible('body', 5000);
});

Then(/^the title is "([^"]*)"$/, title => {
    return client.assert.title(title);
});

Then(/^the Facebook login form exists$/, () => {
    return client.assert.visible('#email')
        .assert.visible('#pass');
});

When(/^I enter "([^"]*)" into the email field$/, email => {
    return client.setValue('#email', email);
});

When(/^I enter "([^"]*)" into the password field$/, password => {
    return client.setValue('#pass', password);
});

When(/^I click the login button$/, () => {
    return client.click('button[name="login"]')
        .pause(3000);  // Wait for the login process
});

// Then(/^I should see my Facebook homepage$/, () => {
//     return client.assert.urlContains('https://www.facebook.com/')
//         .assert.visible('[aria-label="Create a post"]');
// });

// Then(/^an error message is displayed$/, () => {
//     return client.assert.visible('div[role="alert"]');
// });
