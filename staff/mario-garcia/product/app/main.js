var body = document.querySelector('body')

function buildLandingView () { 
    
    // Pintamos la Pantalla LANDING

    //Creamos la SECCIÓN 'div' para la Pantalla LANDING

    var landingView = document.createElement('div')

    //Creamos el LOGO 

    var logo = document.createElement('i')
    var logoText = document.createTextNode('Logo')
    logo.appendChild(logoText)
    landingView.appendChild(logo)

    //Creamos el Nombre de la Página

    var landingTitle = document.createElement('h1')
    var landingText = document.createTextNode('LANDING Page')
    landingTitle.appendChild(landingText)
    landingView.appendChild(landingTitle)

    //Creamos los Link's de REGISTER & LOGIN

    var registerLink = document.createElement('a')
    registerLink.href = '#'
    var registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    landingView.appendChild(registerLink)

    var orText = document.createTextNode('   or   ')
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

    //Creamos el Logo

    var logo = document.createElement('i')
    var logoText = document.createTextNode('Logo')
    logo.appendChild(logoText)
    registerView.appendChild(logo)
    
    //Creamos el Nombre de la Página

    var registerTitle = document.createElement('h1')
    var registerText = document.createTextNode('REGISTER Page')
    registerTitle.appendChild(registerText)
    registerView.appendChild(registerTitle)

    //Creamos los Campos para INTRODUCIR los datos del Usuario

    var registerForm = document.createElement('form')
    var space = document.createElement('br')
    var space1 = document.createElement('br')
    var space2 = document.createElement('br')
    var space3 = document.createElement('br')
    
    var nameField = document.createElement('div')
    var nameLabel = document.createElement('label')
    nameLabel.htmlFor = 'name'
    var nameText = document.createTextNode('Name')
    nameLabel.style.marginRight = '10px' // Dar ESPACIADO a la Derecha
    nameLabel.appendChild(nameText)
    var nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.id = 'name'
    nameInput.name = 'name'
    nameInput.placeholder = 'Your full name'
    nameField.appendChild(nameLabel)
    nameField.appendChild(nameInput)
    
    var emailField = document.createElement('div')
    var emailLabel = document.createElement('label')
    emailLabel.htmlFor = 'email'
    var emailText = document.createTextNode('Email')
    emailLabel.style.marginRight = '10px' // Dar ESPACIADO a la Derecha
    emailLabel.appendChild(emailText)
    var emailInput = document.createElement('input')
    emailInput.type = 'email'
    emailInput.name = 'email'
    emailInput.id = 'email'
    emailInput.placeholder = 'Your e-mail'
    emailField.appendChild(emailLabel)
    emailField.appendChild(emailInput)

    var usernameField = document.createElement('div')
    var usernameLabel = document.createElement('label')
    usernameLabel.htmlFor = 'username'
    var usernameText = document.createTextNode('Username')
    usernameLabel.style.marginRight = '10px' // Dar ESPACIADO a la Derecha
    usernameField.appendChild(usernameText)
    var usernameInput = document.createElement('input')
    usernameInput.type = 'text'
    usernameInput.name = 'username'
    usernameInput.id = 'username'
    usernameInput.placeholder = 'Your Username'
    usernameField.appendChild(usernameLabel)
    usernameField.appendChild(usernameInput)

    var passwordField = document.createElement('div')
    var passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password' // ¿Que estamos haciendo aquí?
    var passwordText = document.createTextNode('Password')
    passwordLabel.style.marginRight = '10px' // Dar ESPACIADO a la Derecha
    passwordField.appendChild(passwordText)
    var passwordInput = document.createElement('input')
    passwordInput.type = 'text'
    passwordInput.name = 'password'
    passwordInput.id = 'password'
    passwordInput.placeholder = 'Introduce a password'
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

    //Si quisieramos usar BOTONES

    // var registerButton = document.createElement('button')
    // var registerText = document.createTextNode('Register')
    // registerButton.style.backgroundColor = 'floralwhite' // Dar COLOR al BOTON
    // registerButton.style.marginRight = '10px' // Dar ESPACIADO a la Derecha
    // registerButton.style.cursor = 'pointer' // Hacemos que nuestro Boton sea CLICKABLE
    // registerButton.appendChild(registerText)
    // registerView.appendChild(registerButton)

    // var loginButton = document.createElement('button')
    // var loginText = document.createTextNode('Login')
    // loginButton.style.backgroundColor = 'floralwhite' // Dar COLOR al BOTON
    // loginButton.style.marginLeft = '10px' // Dar ESPACIADO a la Izquierda
    // loginButton.style.cursor = 'pointer' // Hacemos que nuestro Boton sea CLICKABLE
    // loginButton.appendChild(loginText)
    // registerView.appendChild(loginButton)

    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    registerView.appendChild(loginLink)

    // var orText = document.createTextNode('   or   ')
    // registerView.appendChild(orText)

    // var registerLink = document.createElement('a')
    // registerLink.href = '#'
    // var registerText = document.createTextNode('Register')
    // registerLink.appendChild(registerText)
    // registerView.appendChild(registerLink)

    var registerButton = document.createElement('button')
    registerButton.type = 'submit'
    var registerText = document.createTextNode('Register')
    registerButton.style.backgroundColor = 'floralwhite' // Dar COLOR al BOTON
    registerButton.style.marginRight = '10px' // Dar ESPACIADO a la Derecha
    registerButton.style.cursor = 'pointer' // Hacemos que nuestro Boton sea CLICKABLE
    registerButton.appendChild(registerText)
    registerView.appendChild(registerButton)

    return registerView
}

function buildLoginView() { // TODO Implement

var loginView = document.createElement('div')

//Creamos el Logo

var logo = document.createElement('i')
var logoText = document.createTextNode('Logo')
logo.appendChild(logoText)
loginView.appendChild(logo)

//Creamos el Nombre de la Página

var loginTitle = document.createElement('h1')
var loginTexttitle = document.createTextNode('LOGIN Page')
loginTitle.appendChild(loginTexttitle)
loginView.appendChild(loginTitle)

//Creamos los Campos para INTRODUCIR los datos del Usuario

var registerForm = document.createElement('form')
var space = document.createElement('br')
var space1 = document.createElement('br')

var usernameField = document.createElement('div')
var usernameLabel = document.createElement('label')
usernameLabel.htmlFor = 'username'
var usernameText = document.createTextNode('Username')
usernameLabel.style.marginRight = '10px' // Dar ESPACIADO a la Derecha
usernameField.appendChild(usernameText)
var usernameInput = document.createElement('input')
usernameInput.type = 'text'
usernameInput.name = 'username'
usernameInput.id = 'username'
usernameInput.placeholder = 'Your Username'
usernameField.appendChild(usernameLabel)
usernameField.appendChild(usernameInput)

var passwordField = document.createElement('div')
var passwordLabel = document.createElement('label')
passwordLabel.htmlFor = 'password'
var passwordText = document.createTextNode('Password')
passwordLabel.style.marginRight = '10px' // Dar ESPACIADO a la Derecha
passwordField.appendChild(passwordText)
var passwordInput = document.createElement('input')
passwordInput.type = 'text'
passwordInput.name = 'password'
passwordInput.id = 'password'
passwordInput.placeholder = 'Introduce your password'
passwordField.appendChild(passwordLabel)
passwordField.appendChild(passwordInput)

//A continuación PINTAMOS los CAMPOS en la Pantalla LOGIN = var loginView

registerForm.appendChild(usernameField)
registerForm.appendChild(space)
registerForm.appendChild(passwordField)
registerForm.appendChild(space1)

loginView.appendChild(registerForm)

// A continuacion pintamos los BOTONES

// var registerButton = document.createElement('button')
// var registerText = document.createTextNode('Register')
// registerButton.style.backgroundColor = 'floralwhite' // Dar COLOR al BOTON
// registerButton.style.marginRight = '10px' // Dar ESPACIADO a la Derecha
// registerButton.style.cursor = 'pointer' // Hacemos que nuestro Boton sea CLICKABLE
// registerButton.appendChild(registerText)
// loginView.appendChild(registerButton)

// var loginButton = document.createElement('button')
// var loginText = document.createTextNode('Login')
// loginButton.style.backgroundColor = 'floralwhite' // Dar COLOR al BOTON
// loginButton.style.marginLeft = '10px' // Dar ESPACIADO a la Izquierda
// loginButton.style.cursor = 'pointer' // Hacemos que nuestro Boton sea CLICKABLE
// loginButton.appendChild(loginText)
// loginView.appendChild(loginButton)


var registerLink = document.createElement('a')
registerLink.href = '#'
var registerText = document.createTextNode('Register')
registerLink.appendChild(registerText)
loginView.appendChild(registerLink)

// var orText = document.createTextNode('   or   ')
// loginView.appendChild(orText)

var loginButton = document.createElement('button')
loginButton.type = 'submit'
var loginText = document.createTextNode('Login')
loginButton.style.backgroundColor = 'floralwhite' // Dar COLOR al BOTON
loginButton.style.cursor = 'pointer' // Hacemos que nuestro Boton sea CLICKABLE
loginButton.appendChild(loginText)
loginView.appendChild(loginButton)

return loginView

} 

function buildHomeView() {

var homeView = document.createElement('div')

//Creamos el Logo

var logo = document.createElement('i')
var logoText = document.createTextNode('Logo')
logo.appendChild(logoText)
homeView.appendChild(logo)

//Creamos el Nombre de la Página

var homeTitle = document.createElement('h1')
var homeText = document.createTextNode('HOME Page')
homeTitle.appendChild(homeText)
homeView.appendChild(homeTitle)

//Creamos MENSAJE Hello,World!

var welcomeButton = document.createElement('button')
var welcomeText = document.createTextNode('Hello, World!')
welcomeButton.style.backgroundColor = 'sandybrown' // Dar COLOR al BOTON
welcomeButton.style.marginLeft = '40px' // Dar ESPACIADO a la Izquierda para CENTRAR el BOTON
//welcomeButton.style.cursor = 'pointer'
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