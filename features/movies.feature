Feature: Movies
Narrative:
As a user of the app
I want to see and use the movie list and details

Scenario: Check if movie exists

  Given I open the movies list
  Then the title is App
  And the Movies List exists
  And the Movie The House exists

Scenario: Check if there is at least 2 movies on the list

  Given I am on the list of movies
  Then there must be at least 2 movies in the list
