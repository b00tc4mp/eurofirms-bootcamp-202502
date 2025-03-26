var body = document.querySelector('body')

function buildingLandingView() {
    var registerView = document.createElement('div')

    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('logo')
    logoHeading.appendChild(logoText)
    landingview.appenChild(logoHeading)

    var registerLink = document.createElement('a')
    registerLink.href = '#'
    var registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    landingView.appenChild(registerLink)

    var orText = document.createTextNode(' or ')
    landingView.appenChild(orText)

    var loginLink = document.createElement('a')
    loginLink.href = 'a'
    var loginText = document.createTextNode('login')
    loginLink.appendChild(loginText)
    landingView.appenChild(loginLink)

    return landingView
}

function buildRegisterView() {
    var registerView = document.createElement('div')

    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    registerView.appendChild(logoHeading)

    var registerForm = document.createElement ('form')

    var nameField = document.createElement('div')
    var nameLabel = document.createElement('label')
    nameLabel.htmlFor = 'name'
    var nameText = document.createTextNode('name')
    nameLabel.appendChild(nameText)
    var nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'name'
    nameField.appendChild(nameLabel)
    nameField.appendChild(nameInput)
    registerForm.appendChild(nameField)
    
    var eMailField = document.createElement('div')
    var eMailLabel = document.createElement('label')
    eMailLabel.htmlFor = 'E-mail'
    var eMailText = document.createTextNode('E-mail')
    eMailLabel.appendChild(eMailText)
    var eMailInput = document.createElement('input')
    eMailInput.type = 'text'
    eMailInput.name = 'E-mail'
    eMailField.appendChild(eMailLabel)
    eMailField.appendChild(eMailInput)
    registerForm.appendChild(eMailField)

    var userField = document.createElement('div')
    var userLabel = document.createElement('label')
    userLabel.htmlFor = 'Usuario'
    var userText = document.createTextNode ('Usuario')
    userLabel.appendChild(userText)
    var userInput = document.createElement('input')
    userInput.type = 'text'
    userInput.name = 'Usuario'
    userField.appendChild(userLabel)
    userField.appendChild(userInput)
    registerForm.appendChild(userField)

    var passwordField = document.createElement('div')
    var passwordLabel = document.createElement('label')
    userLabel.htmlFor = 'Contraseña'
    var passwordText = document.createTextNode ('Contraseña')
    passwordLabel.appendChild(passwordText)
    var passwordInput = document.createElement('input')
    passwordInput.type = 'text'
    passwordInput.name = 'Contraseña'
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)
    registerForm.appendChild(passwordField)

    

    //TODO finish register view

    registerView.appendChild(registerForm)

    return registerView
}

function buildLoginView() {
// TODO implememt me
}

function buildHomeView() {
    // TODO implement me
}

// var landingView = buildLandingView()
// body.appenchild(landingView)

var registerView = buildRegisterView()
body.appendChild(registerView)

// TODO test login view
// TODO test home view