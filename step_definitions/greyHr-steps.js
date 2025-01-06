const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

Given(/^I open GreyHr's login page$/, () => {
    return client
        .url('https://hr-portal.greythr.com/uas/portal/auth/login?login_challenge=e4c32b8d8b4049e89d9bc61ba6efa15c')
        .waitForElementVisible('body', 5000);
});

Then(/^the title is "([^"]*)"$/, title => {
    return client.assert.title(title);
});

Then(/^the greyHr login form exists$/, () => {
    return client.assert.visible('#username')
        .assert.visible('#password');
});

When(/^I enter "([^"]*)" into the username field$/, username => {
    return client.setValue('#username', username);
});

When(/^I enter "([^"]*)" into the password field$/, password => {
    return client.setValue('#password', password);
});

When(/^I click the login button$/, () => {
    return client.click('button[type="submit"]')
        .pause(3000);  // Wait for the login process
});

