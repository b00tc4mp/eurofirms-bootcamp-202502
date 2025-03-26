var body = document.querySelector('body')

function buildLandingView() {
    var landingView = document.createElement('div')

    var logoHeading = document.createElement('H1')
    var logoText = document.createTextNode('LOGO')
    logoHeading.appendChild(logoText)
    landingView.appendChild(logoHeading)

    var registerLink = document.createElement('a')
    registerLink.href = '#'
    var registerText = document.createTextNode('REGISTRARSE')
    registerLink.appendChild(registerText)
    landingView.appendChild(registerLink)
    var orText = document.createTextNode(' or ')
    landingView.appendChild(orText)

    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginText = document.createTextNode('LOGIN')
    loginLink.appendChild(loginText)
    landingView.appendChild(loginLink)



    return landingView
}

function buildRegisterView() {
    var registerView = document.createElement('div')

    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('LOGO')
    logoHeading.appendChild(logoText)
    registerView.appendChild(logoHeading)

    var registerForm = document.createElement('form')

    var nameField = document.createElement('div')
    var nameLabel = document.createElement('label')
    nameLabel.htmlFor = 'name'
    var nameText = document.createTextNode('Nombre  ')
    nameLabel.appendChild(nameText)
    var nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'Nombre'

    nameField.appendChild(nameLabel)
    nameField.appendChild(nameInput)
    registerForm.appendChild(nameField)
    registerView.appendChild(registerForm)

    var emailField = document.createElement('div')
    var emailLabel = document.createElement('label')
    emailLabel.htmlFor = 'email'
    var emailText = document.createTextNode('E-mail  ')
    emailLabel.appendChild(emailText)
    var emailInput = document.createElement('input')
    emailInput.type = 'text'
    emailInput.email = 'E-mail'

    emailField.appendChild(emailLabel)
    emailField.appendChild(emailInput)
    registerForm.appendChild(emailField)
    registerView.appendChild(registerForm)

//
    var userField = document.createElement('div')
    var userLabel = document.createElement('label')
    userLabel.htmlFor = 'user'
    var userText = document.createTextNode('Usuario  ')
    userLabel.appendChild(userText)
    var userInput = document.createElement('input')
    userInput.type = 'text'
    userInput.email = 'Usuario'

    userField.appendChild(userLabel)
    userField.appendChild(userInput)
    registerForm.appendChild(userField)
    registerView.appendChild(registerForm)
//
    var passField = document.createElement('div')
    var passLabel = document.createElement('label')
    passLabel.htmlFor = 'email'
    var passText = document.createTextNode('Contraseña  ')
    passLabel.appendChild(passText)
    var passInput = document.createElement('input')
    passInput.type = 'text'
    passInput.email = 'Contraseña'

    passField.appendChild(passLabel)
    passField.appendChild(passInput)
    registerForm.appendChild(passField)
    registerView.appendChild(registerForm)




    return registerView
}

var landingView = buildLandingView()
body.appendChild(landingView)

var registerView = buildRegisterView()
body.appendChild(registerView)

