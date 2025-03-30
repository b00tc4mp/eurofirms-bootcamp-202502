var body = document.querySelector('body')

function buildLandingView() {
    var landingView = document.createElement('div')
    landingView.classList.add('p-20px')

    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('logo')
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

function buildRegisterView() {
    var registerView = document.createElement('div')

    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    registerView.appendChild(logoHeading)

    var logo = document.createElement('i')
    var logoText = document.createTextNode('Logo')
    logo.appendChild(logoText)
    registerView.appendChild(logo)

    var registerTitle = document.createElement('h1')
    var registerText = document.createTextNode('Register')
    registerTitle.appendChild(registerText)
    registerView.appendChild(registerTitle)

    var registerForm = document.createElement ('form')
    registerForm.classList.add('flex', 'flex-col', 'gap-20px')

    var nameField = document.createElement('div')
    var nameLabel = document.createElement('label')
    nameLabel.htmlFor = 'name'
    var nameText = document.createTextNode('Name')
    nameLabel.appendChild(nameText)
    nameField.appendChild(nameLabel)
    var nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.id = 'name'
    nameInput.name = 'name'
    nameInput.placeholder = 'your full name'

    nameField.appendChild(nameInput)
    registerForm.appendChild(nameField)
    
    var eMailField = document.createElement('div')
    var eMailLabel = document.createElement('label')
    eMailLabel.htmlFor = 'E-mail'
    var eMailText = document.createTextNode('E-mail')
    eMailLabel.appendChild(eMailText)
    var eMailInput = document.createElement('input')
    eMailInput.type = 'text'
    eMailInput.id ='E-mail'
    eMailInput.name = 'E-mail'
    eMailField.appendChild(eMailLabel)
    eMailField.appendChild(eMailInput)
    registerForm.appendChild(eMailField)

    var usernameField = document.createElement('div')
    var usernameLabel = document.createElement('label')
    usernameLabel.htmlFor = 'Usuario'
    var usernameText = document.createTextNode ('Usuario')
    usernameLabel.appendChild(usernameText)
    var usernameInput = document.createElement('input')
    usernameInput.type = 'text'
    usernameInput.name = 'Usuario'
    usernameField.appendChild(usernameLabel)
    usernameField.appendChild(usernameInput)
    registerForm.appendChild(usernameField)

    var passwordField = document.createElement('div')
    var passwordLabel = document.createElement('label')
    usernameLabel.htmlFor = 'Contraseña'
    var passwordText = document.createTextNode('Contraseña')
    passwordLabel.appendChild(passwordText)
    var passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.id = 'paassword'
    passwordInput.name = 'Contraseña'
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)
    registerForm.appendChild(passwordField)

    var loginLink = document.createElement('a')
    loginLink.href = '#' 
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    registerForm.appendChild(loginLink)
    

    var registerButton = document.createElement('button')
    var registerButtonText = document.createTextNode('Register')
    registerButton.appendChild(registerButtonText)
    registerForm.appendChild(registerButton)

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
    var usernameText = document.createTextNode('Usuario')
    usernameLabel.appendChild(usernameText)
    var usernameInput = document.createElement('input')
    usernameInput.type = 'text'
    usernameInput.name = 'Usuario'

    usernameField.appendChild(usernameLabel)
    usernameField.appendChild(usernameInput)
    loginForm.appendChild(usernameField)

    var passwordField = document.createElement('div')
    var passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'Password'
    var passwordText = document.createTextNode('Password')
    passwordLabel.appendChild(passwordText)
    var passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.name = 'password'

    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)
    loginForm.appendChild(passwordField)
    
    loginView.appendChild(loginForm)

    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginText = document.createElement('Register')
    loginLink.appendChild(loginText)
    loginView.appendChild(loginLink)
    loginLink.style.marginRight = '20px'

    var loginLink = document.createElement('button')
    loginLink.href = '#'
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    loginView.appendChild(loginLink)

    return loginView
}

function buildHomeView() {
    var homeView = document.createElement('div')

    var logo = document.createElement('i')
    var logoText = document.createTextNode('Logo')
    logo.appendChild(logoText)
    homeView.appendChild(logo)

    var homeTitle = document.createElement('h1')
    var homeText = document.createTextNode('Hello, World!')
    homeTitle.appendChild(homeText)
    homeView.appendChild(homeTitle)

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