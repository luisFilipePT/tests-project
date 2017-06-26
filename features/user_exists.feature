Feature: User List (User exists)

Scenario: Search user in Users List

  Given I open Home
  Then the title is like "Staging Server"
  And the Users Lists exists
  And the User Mark exists
