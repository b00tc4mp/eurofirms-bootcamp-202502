var body = document.querySelector('body')

function buildLandingView () { 
    
    // Pintamos la Pantalla LANDING

    //Creamos la SECCIÓN 'div' para la Pantalla LANDING

    var landingView = document.createElement('div')

    //Creamos el LOGO 

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

    registerView.appendChild(registerForm)
    registerForm.appendChild(space3)

    //A continuación pintamos los BOTONES

    var registerButton = document.createElement('button')
    var registerText = document.createTextNode('Register')
    registerButton.style.backgroundColor = 'floralwhite' // Dar COLOR al BOTON
    registerButton.style.marginRight = '20px' // Dar ESPACIADO a la Derecha
    registerButton.appendChild(registerText)
    registerView.appendChild(registerButton)

    var loginButton = document.createElement('button')
    var loginText = document.createTextNode('Login')
    loginButton.style.backgroundColor = 'floralwhite' // Dar COLOR al BOTON
    registerButton.style.marginLeft = '20px' // Dar ESPACIADO a la Izquierda
    loginButton.appendChild(loginText)
    registerView.appendChild(loginButton)

    return registerView
}

function buildLoginView() { // TODO Implement

var loginView = document.createElement('div')

var logoHeading = document.createElement('h1')
var logoText = document.createTextNode('LOGIN Page')
logoHeading.appendChild(logoText)
loginView.appendChild(logoHeading)

var registerForm = document.createElement('form')
var space = document.createElement('br')
var space1 = document.createElement('br')


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
passwordLabel.htmlFor = 'password'
var passwordText = document.createTextNode('Password')
passwordField.appendChild(passwordText)
var passwordInput = document.createElement('input')
passwordInput.type = 'text'
passwordInput.name = 'password'
passwordField.appendChild(passwordLabel)
passwordField.appendChild(passwordInput)

//A continuación PINTAMOS los CAMPOS en la Pantalla LOGIN = var loginView

registerForm.appendChild(usernameField)
registerForm.appendChild(space)
registerForm.appendChild(passwordField)
registerForm.appendChild(space1)

loginView.appendChild(registerForm)

// A continuacion pintamos los BOTONES

var registerButton = document.createElement('button')
var registerText = document.createTextNode('Register')
registerButton.style.backgroundColor = 'floralwhite' // Dar COLOR al BOTON
registerButton.style.marginRight = '20px' // Dar ESPACIADO a la Derecha
registerButton.style.marginLeft = '20px' // Dar ESPACIADO a la Izquierda
registerButton.appendChild(registerText)
loginView.appendChild(registerButton)

var loginButton = document.createElement('button')
var loginText = document.createTextNode('Login')
loginButton.style.backgroundColor = 'floralwhite' // Dar COLOR al BOTON
loginButton.appendChild(loginText)
loginView.appendChild(loginButton)

return loginView

} 

function buildHomeView() {

var homeView = document.createElement('div')

var logoHeading = document.createElement('h1')
var logoText = document.createTextNode('HOME Page')
logoHeading.appendChild(logoText)
homeView.appendChild(logoHeading)


var welcomeButton = document.createElement('button')
var welcomeText = document.createTextNode('Welcome')
welcomeButton.style.backgroundColor = 'sandybrown' // Dar COLOR al BOTON
welcomeButton.style.marginLeft = '40px' // Dar ESPACIADO a la Izquierda para CENTRAR el BOTON
welcomeButton.appendChild(welcomeText)
homeView.appendChild(welcomeButton)

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

// TODO test Login view
// TODO test Home view