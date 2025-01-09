Feature: Amazon iPhone Add to Cart

  Scenario Outline: Add the third iPhone to the cart
    Given User on the Amazon login page
    When User enters the "<searchText>" into the search box and clicks enter
    Then User should see the results for iPhone
    And User  should scroll down the page
    And User clicks the add to cart button for the third iPhone product

    Examples:
      | searchText       |
      | iPhone 13 128gb |
