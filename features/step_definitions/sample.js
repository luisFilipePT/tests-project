const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')

defineSupportCode(({ Given, Then, When }) => {

  // MOVIE EXIST
  Given('I open the movies list', function () {
    return client
      .url('http://localhost:3060')
      .waitForElementVisible('body', 1000);
  });

  Then('the title is {title}', (title) => {
    return client.browser.waitForElementVisible('h1', 1000).assert.containsText('h1', title);
  })

  Then('the Movies List exists', function () {
      return client.assert.visible('table');
  });

  Then('the Movie {title} exists', function (title) {
    return client.assert.containsText('table[class="table"]', title);
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
})
