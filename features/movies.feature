Feature: Movies
Narrative:
As a user of the app
I want to see and use the movie list and details

Scenario: Check if movie exists

  Given I open the movies list
  Then the title is My Movies App
  And the Movies List exists
  And the Movie The House exists

Scenario: Check if there is at least 2 movies on the list

  Given I am on the list of movies
  Then there must be at least 2 movies in the list

Scenario: Check movie details

  Given I am on the list of movies and I want to see the details of a movie
  Then I click the details button
  And I See the movie details view
  And See the selected movie info
