const { testData } = require('../data/dataset');

const validUser = testData.loginData.validUser;
const anyCredentials = testData.loginData.anyCredentials;
const currentBrowser = `${browser.capabilities.browserName}`;

module.exports = { validUser, anyCredentials, currentBrowser };