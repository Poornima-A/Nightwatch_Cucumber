@amazonSearch
Feature: Amazon Search Offers

  Scenario: Search for offers on Amazon
    Given I open Amazon's homepage
    When I search for "offers"
    Then I should see search results related to offers
