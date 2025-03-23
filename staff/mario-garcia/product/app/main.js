var body = document.querySelector('body')

function buildLandingView () { // Pintamos la Pantalla LANDING

    var landingView = document.createElement('div')

    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('LANDING Page')
    logoHeading.appendChild(logoText)
    landingView.appendChild(logoHeading)

    var registerLink = document.createElement('a')
    registerLink.href = '#'
    var registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    landingView.appendChild(registerLink)

    var orText = document.createTextNode(' or ')
    landingView.appendChild(orText)

    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    landingView.appendChild(loginLink)

    return landingView

}



function buildRegisterView() { // Pintamos la Pantalla REGISTER

    var registerView = document.createElement('div')

    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('REGISTER Page')
    logoHeading.appendChild(logoText)
    registerView.appendChild(logoHeading)

    var registerForm = document.createElement('form')
    var space = document.createElement('br')
    var space1 = document.createElement('br')
    var space2 = document.createElement('br')
    var space3 = document.createElement('br')

    var nameField = document.createElement('div')
    var nameLabel = document.createElement('label')
    nameLabel.htmlFor = 'name'
    var nameText = document.createTextNode('Name')
    nameLabel.appendChild(nameText)
    var nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'name'
    nameField.appendChild(nameLabel)
    nameField.appendChild(nameInput)
    
    var emailField = document.createElement('div')
    var emailLabel = document.createElement('label')
    emailLabel.htmlFor = 'email'
    var emailText = document.createTextNode('Email')
    emailLabel.appendChild(emailText)
    var emailInput = document.createElement('input')
    emailInput.type = 'text'
    emailInput.name = 'email'
    emailField.appendChild(emailLabel)
    emailField.appendChild(emailInput)

    var usernameField = document.createElement('div')
    var usernameLabel = document.createElement('label')
    usernameLabel.htmlFor = 'username'
    var usernameText = document.createTextNode('Username')
    usernameField.appendChild(usernameText)
    var usernameInput = document.createElement('input')
    usernameInput.type = 'text'
    usernameInput.name = 'username'
    usernameField.appendChild(usernameLabel)
    usernameField.appendChild(usernameInput)

    var passwordField = document.createElement('div')
    var passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password' // ¿Que estamos haciendo aquí?
    var passwordText = document.createTextNode('Password')
    passwordField.appendChild(passwordText)
    var passwordInput = document.createElement('input')
    passwordInput.type = 'text'
    passwordInput.name = 'password'
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)



    //A continuación PINTAMOS los CAMPOS en la Pantalla REGISTER = var registerView

    registerForm.appendChild(nameField)
    registerForm.appendChild(space)
    registerForm.appendChild(emailField)
    registerForm.appendChild(space1)
    registerForm.appendChild(usernameField)
    registerForm.appendChild(space2)
    registerForm.appendChild(passwordField)

    // TODO Finish Register View

    registerView.appendChild(registerForm)
    registerForm.appendChild(space3)

    var registerButton = document.createElement('button')
    var registerText = document.createTextNode('Register')
    registerButton.style.backgroundColor = 'blue'
    registerButton.appendChild(registerText)
    registerView.appendChild(registerButton)

    return registerView
}

function buildLoginView() {} // TODO Implement
function buildHomeView() {} // TODO Implement

// var landingView = buildLandingView()
// body.appendChild(landingView)

var landingView = buildLandingView()
body.appendChild(landingView)

var registerView = buildRegisterView()
body.appendChild(registerView)

// TODO test Login view
// TODO test Home view