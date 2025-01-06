@greyHrlogin
Feature: GreyHr Login

  Scenario: Successful login with valid credentials
    Given I open GreyHr's login page
    When I enter "2569" into the username field
    And I enter "Poorni@26" into the password field
    And I click the login button

    
