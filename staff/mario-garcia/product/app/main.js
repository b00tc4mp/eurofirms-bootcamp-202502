var body = document.querySelector('body')

function buildLandingView () {

    var landingView = document.createElement('div')

    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    landingView.appendChild(logoHeading)

    var registerLink = document.createElement('a')
    registerLink.href = '#'
    var registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    landingView.appendChild(registerLink)

    var orText = document.createTextNode(' o ')
    landingView.appendChild(orText)

    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    landingView.appendChild(loginLink)

    return landingView

}

function buildRegisterView() {

    var registerView = document.createElement('div')

    var registerForm = document.createElement('form')

    var nameLabel = document.createElement('label')
    nameLabel.htmlform = 'name'


    var nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'name'
    var nameField = document.createElement('div')
    nameField.appendChild('nameLabel')





}



var landingView = buildLandingView()

body.appendChild(landingView)