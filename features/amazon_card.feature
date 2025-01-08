@amazonAddToCart
Feature: Amazon Add to Cart

  Scenario: Add a product to the Amazon cart
    Given I open Amazon's homepage
    When I search for "laptop"
    And I click on the first product in the list
    And I add the product to the cart
    Then I should see the product in the cart