const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

Given(/^I open Amazon's homepage$/, () => {
    return client
        .url('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=713930225169&hvpos=&hvnetw=g&hvrand=16073796894681879954&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061929&hvtargid=kwd-64107830&hydadcr=14452_2402225&gad_source=1')
        .waitForElementVisible('body', 10000);
});

When(/^I search for "([^"]*)"$/, (searchTerm) => {
    return client
        .setValue('input[name="field-keywords"]', searchTerm)
        .click('input[type="submit"]')
        .pause(5000);
});

Then(/^I should see search results related to offers$/, () => {
    return client
        .waitForElementVisible('.s-main-slot', 10000)
        .assert.containsText('body', 'results');
});
