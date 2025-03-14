const { expect, browser, $ } = require('@wdio/globals')
const assert = require('assert');

//const LoginPage = require('../pageobjects/login.page');

describe('Login Tests', () => {
    it('UC-1: Should show error if at least the username is missing', async () => {
    // GIVEN  I am on the login page
        await browser.url(`https://www.saucedemo.com/`)
        const title = await browser.getTitle();
        assert.strictEqual(title, 'Swag Labs');

    // WHEN I enter credentials into "Username" and "Password" fields
        const username = await $('#user-name');
        const password = await $('#password');
        const loginButton = await $('#login-button');

        //Type in credentials
        await username.setValue('any_credential');
        await password.setValue('any_credential');
        
        //Check if credentials typed in
        await expect(username).toHaveValue('any_credential');
        await expect(password).toHaveValue('any_credential');

    // BUT I clear both the input fields
        await clearInputField(username);
        await clearInputField(password);

        // Add a short pause to ensure the fields are cleared
        await browser.pause(500);

        // Verify the input fields are empty
        await expect(username).toHaveValue('');
        await expect(password).toHaveValue('');

    // AND I click on login button
        await loginButton.click();

    // THEN I should see "Username is required"
        const errorMessage = await $('[data-test="error"]');
        await expect(errorMessage).toHaveText(/Username is required/);
    });
    it('UC-2: Should Login form with credentials by passing Username', async () => {
    // GIVEN  I am on the login page
        await browser.url(`https://www.saucedemo.com/`)
        const title = await browser.getTitle();
        assert.strictEqual(title, 'Swag Labs');
    
    // WHEN I enter username into "Username" field
        const username = await $('#user-name');
        const password = await $('#password');
        const loginButton = await $('#login-button');

        //Type in username and password
        await username.setValue('any_credential');
        await password.setValue('any_credential');

        //Check if credentials typed in
        await expect(username).toHaveValue('any_credential');
        await expect(password).toHaveValue('any_credential');

    // BUT I clear the Password field
        await clearInputField(password);
        // Add a short pause to ensure the fields are cleared
        await browser.pause(500);

        // Verify the Password field is empty
        await expect(password).toHaveValue('');

    // AND I click on login button
        await loginButton.click();

    // THEN I should see "Password is required"
        const errorMessage = await $('[data-test="error"]');
        await expect(errorMessage).toHaveText(/Password is required/);
    });
    it('UC-3: Should Login form with credentials by passing Username & Password', async () => {
        // GIVEN  I am on the login page
        await browser.url(`https://www.saucedemo.com/`)
        const title = await browser.getTitle();
        assert.strictEqual(title, 'Swag Labs');

    // WHEN I enter credentials into "Username" and "Password" fields
        const username = await $('#user-name');
        const password = await $('#password');
        const loginButton = await $('#login-button');

        //Type in credentials
        await username.setValue('standard_user');
        await password.setValue('secret_sauce');
        
        //Check if credentials typed in
        await expect(username).toHaveValue('standard_user');
        await expect(password).toHaveValue('secret_sauce');

    // AND I click on login button
        await loginButton.click();

    // THEN I should see Dashboard on the homepage
        const dashboardTitle = await $('.header_label .app_logo');
        await expect(dashboardTitle).toHaveText(/Swag Labs/);
    })
});

async function clearInputField(inputElement) {
    await inputElement.click();
    const value = await inputElement.getValue();
    for (let i = 0; i < value.length; i++) {
        await browser.keys('Backspace');
    }
}