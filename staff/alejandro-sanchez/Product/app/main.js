var body = document.querySelector('body')

function buildLandingView() {       

    var landingView = document.createElement('div')

    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    landingView.appendChild(logoHeading)


    var registerLink = document.createElement('a')
    registerLink.href = '#'
    var registerText = document.CreateTextNode('Register')
    registerLink.appendChild(registerLinkText)


    var orText = document.createElement('a')
    loginlink.ref ='#'
    var loginText = document.createTextNode('Login')
    loginLing.appendChild(loginText)
    landingView.appendChild(loginlink)

    return landingView
}   

function buildregisterView(){
    var registerview = document.createElement('div')

    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    registerview.appendChild(logoHeading)

    var registerform = document.createElement ('form')

    var nameLabel = document.createElement ('label')
    nameLabel.htmlFor = 'name'
    var nameText = document.CreateTextNode('Name')
    var nameInput = document.createElement('input')
    nameLabel.appendChild(nameText)
    nameInput.type = 'text'
    nameInput.name = 'name'
    var nameField = document.creatElement ('div')
    nameField.appendChild(nameLabel)
    nameField.appendChild(nameInput)

    var emailLabel = document.createElement ('label')
    emailLabel.htmlFor = 'email'
    var emailText = document.CreateTextNode('email')
    var emailInput = document.createElement('email')
    emailLabel.appendChild(emailText)
    emailInput.type = 'text'
    emailInput.name = 'email'
    var emailField = document.creatElement ('div')
    emailField.appendChild(emailLabel)
    emailField.appendChild(emailInput)

    var usernameLabel = document.createElement ('label')
    usernameLabel.htmlFor = 'email'
    var usernameText = document.CreateTextNode('username')
    var usernameInput = document.createElement('username')
    usernameLabel.appendChild(emailText)
    usernameInput.type = 'text'
    usernameInput.name = 'username'
    var usernameField = document.creatElement ('div')
    usernameField.appendChild(usernameLabel)
    usernameField.appendChild(usernameInput)


    var passwordLabel = document.createElement ('label')
    nameLabel.htmlFor = 'password'
    var passwordText = document.CreateTextNode('password')
    var passwordInput = document.createElement('password')
    paswordLabel.appendChild(nameText)
    passwordInput.type = 'text'
    passwordInput.name = 'password'
    var passwordField = document.creatElement ('div')
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(PasswordInput)

    registerform.appendChild(nameField)

    registerView.appendChild(registerform)

    return registerview

}
//falta agregar fecha de nacimiento 
// importar libreria de dnis


function buildiLoginView() {
    var loginview = document.createElement('div')

    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    registerview.appendChild(logoHeading)

    var loginform = document.createElement ('form')

    var nameLabel = document.createElement ('label')
    nameLabel.htmlFor = 'name'
    var nameText = document.CreateTextNode('Name')
    var nameInput = document.createElement('input')
    nameLabel.appendChild(nameText)
    nameInput.type = 'text'
    nameInput.name = 'name'
    var nameField = document.creatElement ('div')
    nameField.appendChild(nameLabel)
    nameField.appendChild(nameInput)

    loginform.appendChild(nameField)

    loginView.appendChild(loginform)


    
    var passwordLabel = document.createElement ('label')
    nameLabel.htmlFor = 'password'
    var passwordText = document.CreateTextNode('password')
    var passwordInput = document.createElement('password')
    paswordLabel.appendChild(nameText)
    passwordInput.type = 'text'
    passwordInput.name = 'password'
    var passwordField = document.creatElement ('div')
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(PasswordInput)
}

function buildHomeView() {

}

var registerView = buildLandingView()
body.appendChild(registerView)

//test loginView