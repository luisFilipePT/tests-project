Feature: User Info
Narrative:
As a user of the app
I want to see and the user details

Scenario: Check user details

  Given I open the app
  Then the user has a photo
  And the user has a name
  And the user has social links

Scenario: Check facebook link

    Given I want to check the user social profile
    Then I click the facebook link
    And The facebook profile is open on facebook
