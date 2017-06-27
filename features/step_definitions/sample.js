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

  // USER
  Given('I open the app', function () {
    return client.waitForElementVisible('#appTitle', 1500).assert.containsText('#appTitle', title);
  });

  Then('the user has a photo', function (title) {
    return client.assert.visible('.user-img');
  });

  Then('the user has a name', function (title) {
    return client.assert.containsText('.user-name', "Luis Oliveira");
  });

  Then('the user has social links', function (title) {
    return client.elements('css selector','.social-links', function (result) {
     client.assert.equal(result.value.length, elementCountExpected);
   });
  });
})
