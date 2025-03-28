// querySelector para entrar en el body de HTML
var body = document.querySelector('body')

// Metemos todo el contenido de la LANDING en una función JS
function buildLandingView() { // landingView FUNCTION
    // LOGO
    var landingView = document.createElement('div') // DIV CONTAINS EVERYTHING
    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('LANDING LOGO')
    logoHeading.appendChild(logoText)
    landingView.appendChild(logoHeading)

    // LANDING: LOGIN or REGISTER
    // Link Creation of registerButton
    var registerLink = document.createElement('a') // Button Element
    // Add URL al Link variable
    registerLink.href = '#'
    var registerText = document.createTextNode('Register')
    // Ahijamos el texto como registerText
    registerLink.appendChild(registerText)
    landingView.appendChild(registerLink)
    // Nodo " or " y lo ahijamos al DIV bajo BODY
    var orText = document.createTextNode(' or ')
    landingView.appendChild(orText)
    // The same link but with Login
    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)

    landingView.appendChild(loginLink) // MIRAR!!


    return landingView
}

function buildRegisterView() {


    // TROUBLE WITH REGISTER LOGO
    var registerView = document.createElement('div') // DIV CONTAINS EVERYTHING IN THIS VIEW
    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('REGISTER LOGO')
    logoHeading.appendChild(logoText)
    registerView.appendChild(logoHeading)

    // CREATE FORM

    var registerForm = document.createElement('form')


    // CREATE NAME FIELD
    var nameField = document.createElement('div')
    var nameLabel = document.createElement('label')
    nameLabel.htmlFor = 'name'
    var nameText = document.createTextNode('Name:  ')
    nameLabel.appendChild(nameText)
    var nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'name'
    nameField.appendChild(nameLabel)
    nameField.appendChild(nameInput)

    registerForm.appendChild(nameField)


    // CREATE USERNAME FIELD
    var userField = document.createElement('div')
    var userLabel = document.createElement('label')
    userLabel.htmlFor = 'username'
    var userText = document.createTextNode('Username:  ')

    userLabel.appendChild(userText)
    var userInput = document.createElement('input')
    userInput.type = 'text'
    userInput.name = 'username'
    userField.appendChild(userLabel)
    userField.appendChild(userInput)

    registerForm.appendChild(userField)


    // CREATE EMAIL FIELD
    var emailField = document.createElement('div')
    var emailLabel = document.createElement('label')
    emailLabel.htmlFor = 'email'
    var emailText = document.createTextNode('E-Mail:  ')
    emailLabel.appendChild(emailText)
    var emailInput = document.createElement('input')
    emailInput.type = 'text'
    emailInput.email = 'email'
    emailField.appendChild(emailLabel)
    emailField.appendChild(emailInput)

    registerForm.appendChild(emailField)


    // CREATE PASSWORD FIELD
    var passField = document.createElement('div')
    var passLabel = document.createElement('label')
    passLabel.htmlFor = 'password'
    var passText = document.createTextNode('Password:  ')
    passLabel.appendChild(passText)
    var passInput = document.createElement('input')
    passInput.type = 'password'
    passInput.name = 'password'
    passField.appendChild(passLabel)
    passField.appendChild(passInput)

    registerForm.appendChild(passField)

    registerView.appendChild(registerForm) // LOOK ME!!


    return registerView
}


function buildLoginView() {

    var loginView = document.createElement('div') // DIV: CONTAINS EVERYTHING

    // TROUBLE WITH LOGIN LOGO
    // LOGO
    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('LOGIN LOGO')
    logoHeading.appendChild(logoText)
    loginView.appendChild(logoHeading)

    // CREATE FORM

    var loginForm = document.createElement('form')

    // CREATE USERNAME FIELD UNDER FORM
    var userField = document.createElement('div')
    var userLabel = document.createElement('label')
    userLabel.htmlFor = 'text'
    var userText = document.createTextNode('Username:  ')
    userLabel.appendChild(userText)
    var userInput = document.createElement('input')
    userInput.type = 'text'
    userInput.name = 'text'
    userField.appendChild(userLabel)
    userField.appendChild(userInput)

    loginForm.appendChild(userField)

    loginView.appendChild(loginForm)

   
    // CREATE PASSWORD FIELD UNDER FORM
    var passField = document.createElement('div')
    var passLabel = document.createElement('label')
    passLabel.htmlFor = 'password'
    var passText = document.createTextNode('Password:  ')
    passLabel.appendChild(passText)
    var passInput = document.createElement('input')
    passInput.type = 'password'
    passInput.name = 'password'
    passField.appendChild(passLabel)
    passField.appendChild(passInput)

    loginForm.appendChild(passField)

    loginView.appendChild(loginForm)

    return loginView

}

function buildHomeView() {
    // LOGO
    
    var homeView = document.createElement('div') // DIV: CONTAINS EVERYTHING

    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('HOME LOGO')
    logoHeading.appendChild(logoText)
    homeView.appendChild(logoHeading)

    var welcomeHeading = document.createElement('div') // DIV: CONTAINS EVERYTHING
    var welcomeHeading = document.createElement('h2')
    var logoText = document.createTextNode('HI HOME!')
    welcomeHeading.appendChild(logoText)
    homeView.appendChild(welcomeHeading)

    var logoutButton = document.createElement('button') // Logout Button Element
    // Add URL al Link variable
    logoutButton.href = '#'
    var logoutText = document.createTextNode('LOG OUT')
    // Ahijamos el texto como registerText
    logoutButton.appendChild(logoutText)
    homeView.appendChild(logoutButton)

    


    return homeView

}

var landingView = buildLandingView()
body.appendChild(landingView)

var registerView = buildRegisterView()
body.appendChild(registerView)

var loginView = buildLoginView()
body.appendChild(loginView)

var homeView = buildHomeView()
body.appendChild(homeView)


