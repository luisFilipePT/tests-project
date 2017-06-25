Feature: Home Page

Scenario: Home page exists

  Given I open app Home page
  Then the title of the page is "Staging Server"
  And the button save exists
