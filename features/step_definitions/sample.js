const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')

defineSupportCode(({ Given, Then, When }) => {

  // USER EXISTS
  Given('I open the users list', function () {
    return client
      .url('http://46.101.86.166/')
      .waitForElementVisible('body', 1000);
  });

  Then('the title is {title}', (title) => {
    return client.assert.title(title);
  })

  Then('the Users Lists exists', function () {
      return client.assert.visible('table[class="table"]');
  });

  Then('the User {user} exists', function (user) {
    var selector = ".js-" + user;
    return client.expect.element(selector).to.be.present;
  });

  // USER IS DELETED
  Given('I am on the list of users', function () {
    return client.assert.visible('table[class="table"]');
  });

  Given('there are {elementCountExpected} elements on the list', function (elementCountExpected) {
    return client.elements('css selector','.js-user-id', function (result) {
     client.assert.equal(result.value.length, elementCountExpected);
   });
  });

  Given('I want to delete the user {userToDelete} When I pick luis to delete', function (userToDelete) {
    var selector = "#js-delete-user-" + userToDelete;
    return client.waitForElementVisible('#js-delete-user-luis', 3000).click(selector);
  });

  Then('The user {userDeleted} is not on the list anymore', function (userDeleted) {
    var selector = ".js-" + userDeleted;
    return client.expect.element(selector).to.not.be.present;
  });

  Then('there must be only {elementCountExpected} element in the list', function (elementCountExpected) {
    return client.elements('css selector','.js-user-id', function (result) {
      client.assert.equal(result.value.length, elementCountExpected);
    });
  });


})
