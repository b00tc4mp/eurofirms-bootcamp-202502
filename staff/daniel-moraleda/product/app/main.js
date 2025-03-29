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

    var logo = document.createElement('i')
    var logoText = document.createTextNode('Register')
    logo.appendChild(logoText)
    registerView.appendChild(logo)

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

    var usernameField = document.createElement('div')
    var usernameLabel = document.createElement('label')
    usernameLabel.htmlFor = 'Usuario'
    var usernameText = document.createTextNode ('Usuario')
    usernameLabel.appendChild(userText)
    var usernmameInput = document.createElement('input')
    usernameInput.type = 'text'
    usernameInput.name = 'Usuario'
    usernameField.appendChild(userLabel)
    usernameField.appendChild(userInput)
    registerForm.appendChild(userField)

    var passwordField = document.createElement('div')
    var passwordLabel = document.createElement('label')
    usernameLabel.htmlFor = 'Contraseña'
    var passwordText = document.createTextNode ('Contraseña')
    passwordLabel.appendChild(passwordText)
    var passwordInput = document.createElement('input')
    passwordInput.type = 'text'
    passwordInput.name = 'Contraseña'
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)
    registerForm.appendChild(passwordField)

    registerView.appendChild(registerForm)

    return registerView
}

function buildLoginView() {

    var loginView = document.createElement('div')
    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    loginView.appendChild(logoHeading)

    var loginForm = document.createElement('form')

    var usernameField = document.createElement('div')
    var usernameLabel = document.createElement('label')
    usernameLabel.htmlFor = 'Usuario'
    varUsernameText = document.createTextNode('Usuario')
    usernameLabel.appendChild(userText)
    var usernameInput = document.createElement('input')
    usernameInput.type = 'text'
    usernameInput.name = 'Usuario'

    usernameField.appendChild(usernameLabel)
    usernameField.appendChild(usernameInput)
    loginForm.appendChild(usernameField)

    var passwordField = document.createElement('div')
    loginView.appendChild(loginForm)

    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginText = document.createElement('Register')
    loginLink.appendChild(loginText)
    loginView.appendChild(loginLink)

    var passwordField = document.createElement ('a')
    passwordField.appendChild(br)

    loginLink.style.marginRight = '20px'

    var loginLink = document.createElement('button')
    loginLink.href = '#'
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    loginView.appendChild(loginLink)

    return loginView
}
    var usernameField = document.createElement

function buildHomeView() {
    // TODO implement me  
}

// var landingView = buildLandingView()
// body.appenchild(landingView)

var registerView = buildRegisterView()
body.appendChild(registerView)

// TODO test login view
// TODO test home view