var LoginOperations = {
    validateForm: function () {
        return this.waitForElementVisible('body', 1000)
            .verify.visible('@username')
            .verify.visible('@password')
            .verify.value('@submit', 'Log In')

    },

    fillInForm: function (username, password) {
        return this.waitForElementVisible('body', 1000)
            .setValue('@username', username)
            .setValue('@password', password)
    },

    submit: function () {
        return this.verify.value('@submit', 'Log In')
            .click('@submit')
    },

};

module.exports = {
    commands: [LoginOperations],
    url: 'https://login.salesforce.com',
    elements: {
        username: {
            selector: '#username'
        },
        password: {
            selector: '#password'
        },
        submit: {
            selector: '#Login'
        }

    }
};