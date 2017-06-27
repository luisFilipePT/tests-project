Feature: User Management
Narrative:
As a user of the platform
I want crud operations on my users So that user management be easier

Scenario: Check if user exists

  Given I open the users list
  Then the title is App
  And the Users Lists exists
  And the User luis exists

Scenario: Delete user

  Given I am on the list of users
  And there are 2 elements on the list
  And I want to delete the user luis When I pick luis to delete
  Then The user luis is not on the list anymore
  And there must be only 1 element in the list
