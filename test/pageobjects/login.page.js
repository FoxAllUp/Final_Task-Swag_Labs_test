class LoginPage {
    get usernameInput() { return $('#user-name'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    get errorMessage() { return $('[data-test="error"]'); }
    get dashboardTitle() { return $('.header_label .app_logo'); }

    async open() {
        await browser.url('/');
        await expect(browser).toHaveTitle('Swag Labs');
    }

    async fillWith(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
    }
}

module.exports = new LoginPage();