require('dotenv').config()
module.exports = {
    'Login to salesforce': function (browser) {

        var login = browser.page.login();

        var username = process.env.SALESFORCE_USERNAME;
        var password = process.env.SALESFORCE_PASSWORD;

        login
            .navigate()
            .validateForm()
            .fillInForm(username, password)
            .submit();

        browser
            .pause(10000)
            .end();
    }
}