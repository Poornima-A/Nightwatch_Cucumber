Feature: Facebook Login

  Scenario: Successful login with valid credentials
    Given I open Facebook's login page
    When I enter "poornima@example.com" into the email field
    And I enter "Poornima@26" into the password field
    And I click the login button
    # Then the title is "Log in to Facebook"
    # And the Facebook login form exists
    #  Then I should see my Facebook homepage
