Feature: Web Form Testing

  Scenario: Fill the form with valid and invalid inputs
    Given Login page is opened
    When I enter <username> and <password>
    When clicks on submit button
    Then I should see a flash message saying <message>

    Examples:
      | username      | password          | message                   |
      | incorrectUser | Password123       | Your username is invalid! |
      | student       | incorrectPassword | Your password is invalid! |

  Scenario: Positive LogIn test
    Given Login page is opened
    When I enter <username> and <password>
    When clicks on submit button
    Then I should see a success message
    Then the logout button should be displayed

    Examples:
      | username | password    |
      | student  | Password123 |
