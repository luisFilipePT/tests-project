const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')

defineSupportCode(({ Given, Then, When }) => {

  // MOVIE EXIST
  Given('I open the movies list', function () {
    return client
      .url('http://46.101.86.166')
      .waitForElementVisible('body', 1000);
  });

  Then('the title is {title}', (title) => {
    return client.waitForElementVisible('#appTitle', 1500).assert.containsText('#appTitle', title);
  })

  Then('the Movies List exists', function () {
      return client.assert.visible('table');
  });

  Then('the Movie {title} exists', function (title) {
    return client.assert.containsText('.table', title);
  });

  // AT LEAST EXISTS 2 MOVIES
  Given('I am on the list of movies', function () {
    return client.assert.visible('table[class="table"]');
  });

  Given('there must be at least {elementCountExpected} movies in the list', function (elementCountExpected) {
    return client.elements('css selector','.js-movie-id', function (result) {
     client.assert.equal(result.value.length, elementCountExpected);
   });
  });

  // MOVIE DETAILS
  Given('I am on the list of movies and I want to see the details of a movie', function () {
    return client.waitForElementVisible('#appTitle', 1500).assert.containsText('#appTitle', "My Movies App");
  });

  Then('I click the details button', function () {
    return client.waitForElementVisible('.js-The-House', 1000).click('.js-The-House').pause(2000);
  });

  Then('I See the movie details view', function () {
    return client.assert.containsText('#detail-title', "The House");
  });

  Then('See the selected movie info', function () {
    return client
    .waitForElementVisible('#year', 1500)
    .assert.containsText('#year', "2017");
  });


  // USER
  Given('I open the app', function () {
    return client.waitForElementVisible('#appTitle', 1500).assert.containsText('#appTitle', "My Movies App");
  });

  Then('the user has a photo', function () {
    return client.assert.visible('.user-img');
  });

  Then('the user has a name', function () {
    return client.assert.containsText('.user-name', "Luis Oliveira");
  });

  Then('the user has social links', function () {
    return client.elements('css selector','.social-links', function (result) {
     client.assert.equal(result.value.length, 2);
   });
  });
})
