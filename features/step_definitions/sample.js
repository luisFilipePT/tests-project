const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')

defineSupportCode(({ Given, Then, When }) => {
  // SAMPLE TEST
  Given(/^I open Google`s search page$/, () => {
    return client
      .url('http://google.com')
      .waitForElementVisible('body', 1000)
  })

  Then(/^the title is "(.*?)"$/, (text) => {
    return client.assert.title(text)
  })

  Then(/^the Google search form exists$/, () => {
    return client.assert.visible('input[name="q"]')
  })

  // LANDING PAGE TEST
  Given(/^I open app Home page$/, () => {
    return client
      .url('http://46.101.86.166/')
      .waitForElementVisible('body', 1100)
  })

  Then(/^the title of the page is "(.*?)"$/, (text) => {
    return client.assert.title(text)
  })

  Then(/^the button save exists$/, () => {
    return client.assert.visible('button[name="save"]')
  })
})
