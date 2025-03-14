const { expect, browser, $ } = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');
const { clearInputField } = require('../utils/helpers');
const { validUser, anyCredentials, currentBrowser } = require('../utils/get-data');

describe('Login Tests', () => {

    before(() => {
        console.log(`[${currentBrowser}]: Starting Login Tests`);
    });

    beforeEach(async () => {
        // GIVEN I open the Swag Labs page
        console.log(`[${currentBrowser}]: Opening the login page...`);
        await LoginPage.open();
    });

    it('UC-1: Should show error if username is missing', async () => {
        try {
            console.log(`[${currentBrowser}]: Running test: should handle login for missing username`);

            // WHEN I type in any credentials
            await LoginPage.fillWith(anyCredentials.username, anyCredentials.password);

            // AND I clear both the fields
            await clearInputField(LoginPage.usernameInput);
            await clearInputField(LoginPage.passwordInput);

            // AND I click on login button
            await LoginPage.loginButton.click();

            // THEN I should see "Username is required"
            await expect(LoginPage.errorMessage).toHaveText(/Username is required/);
        } catch (error) {
            console.error(`Test UC-1 failed: ${error.message}`);
            throw error;
        }
    });

    it('UC-2: Should show error if password is missing', async () => {
        try {
            console.log(`[${currentBrowser}]: Running test: should handle login for missing password`);

            // WHEN I type in any credentials
            await LoginPage.fillWith(anyCredentials.username, anyCredentials.password);

            // AND I clear the password field
            await clearInputField(LoginPage.passwordInput);

            // AND I click on login button
            await LoginPage.loginButton.click();

            // THEN I should see "Password is required"
            await expect(LoginPage.errorMessage).toHaveText(/Password is required/);
        } catch (error) {
            console.error(`Test UC-2 failed: ${error.message}`);
            throw error;
        }
    });

    it('UC-3: Should log in with valid credentials', async () => {
        try {
            console.log(`[${currentBrowser}]: Running test: handle login with valid credentials`);

            // WHEN I type in valid credentials
            await LoginPage.fillWith(validUser.username, validUser.password);

            // AND I click on login button
            await LoginPage.loginButton.click();

            // THEN I should see the dashboard
            await expect(LoginPage.dashboardTitle).toHaveText(/Swag Labs/);
        } catch (error) {
            console.error(`Test UC-3 failed: ${error.message}`);
            throw error;
        }
    });

    afterEach(function() {
        const result = this.currentTest.state;
        if (result === 'failed') {
            console.error(`FAILED: ${this.currentTest.title} in ${currentBrowser}`);
            console.error(`ERROR: ${this.currentTest.err}`);
            console.error(`User Credentials: ${JSON.stringify(anyCredentials)}`);
        } else {
            console.log(`PASSED: ${this.currentTest.title} in ${currentBrowser}`);
        }
    });

    after(() => {
        console.log(`[${currentBrowser}]: Completed Login Tests.`);
    });
});