Feature: Web Form Testing

  Scenario: Fill the form with valid and invalid inputs
    Given I open the form page
    When I enter firstname and lastname in the First Name field
    When clicks on submit button
    Then I wait for 5 seconds before closing
