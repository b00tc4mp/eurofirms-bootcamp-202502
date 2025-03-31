var body = document.querySelector('body')

function buildLandingView() {
    var landingView = document.createElement('div')
    landingView.classList.add('p-20-px')
    
    var logoHeading = document.createElement('i')
    logoHeading.classList.add('block')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    landingView.appendChild(logoHeading)

    var namePageHeading = document.createElement('h1')
    var nameText = document.createTextNode('Landing page')
    namePageHeading.appendChild(nameText)
    landingView.appendChild(namePageHeading)

    var registerLink = document.createElement('a')
    registerLink.href = '#'
    var registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    landingView.appendChild(registerLink)

    registerLink.addEventListener('click', function(event) {
        body.removeChild(landingView)
        body.appendChild(registerView)
    })

    var orText = document.createTextNode(' or ')
    landingView.appendChild(orText)

    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    landingView.appendChild(loginLink)

    loginLink.addEventListener('click', function(event) {
        body.removeChild(landingView)
        body.appendChild(loginView)
    })

    return landingView
}

function buildRegisterView() {
    var registerView = document.createElement('div')
    registerView.classList.add('p-20px')

    var logoHeading = document.createElement('i')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    registerView.appendChild(logoHeading)

    var namePageHeading = document.createElement('h1')
    var nameText = document.createTextNode('Register page')
    namePageHeading.appendChild(nameText)
    registerView.appendChild(namePageHeading)

    var registerForm = document.createElement('form')
    registerForm.classList.add('flex','flex-col', 'gap-20px')

    var nameField = document.createElement('div')
    nameField.classList.add('flex','flex-col','gap-10px')
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

    var emailField = document.createElement('div')
    emailField.classList.add('flex','flex-col','gap-10px')
    var emailLabel = document.createElement('label')
    emailLabel.htmlFor = 'email'
    var emailText = document.createTextNode('E-mail')
    emailLabel.appendChild(emailText)
    emailField.appendChild(emailLabel)
    var emailInput = document.createElement('input')
    emailInput.type = 'email'
    emailInput.name = 'email'
    emailInput.id = 'email'
    emailInput.placeholder = 'your e-mail'
    emailField.appendChild(emailInput)
    registerForm.appendChild(emailField)

    var userNameField = document.createElement('div')
    userNameField.classList.add('flex','flex-col','gap-10px')
    var userNameLabel = document.createElement('label')
    userNameLabel.htmlFor = 'username'
    var userNameText = document.createTextNode('Username')
    userNameLabel.appendChild(userNameText)
    userNameField.appendChild(userNameLabel)
    var userNameInput = document.createElement('input')
    userNameInput.type = 'text'
    userNameInput.name = 'username'
    userNameInput.id = 'username'
    userNameInput.placeholder = 'your username'
    userNameField.appendChild(userNameInput)
    registerForm.appendChild(userNameField)

    var passwordField = document.createElement('div')
    passwordField.classList.add('flex','flex-col','gap-10px')
    var passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password'
    passwordLabel.style.marginRight = '8px'
    var passwordText = document.createTextNode('Password')
    passwordLabel.appendChild(passwordText)
    passwordField.appendChild(passwordLabel)
    var passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.name = 'password'
    passwordInput.id = 'password'
    passwordInput.placeholder = 'your password'
    passwordField.appendChild(passwordInput)
    registerForm.appendChild(passwordField)

    var buttons = document.createElement('div')
    buttons.classList.add('flex','justify-between')

    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    buttons.appendChild(loginLink)

    loginLink.addEventListener('click', function(event) {
        body.removeChild(registerView)
        body.appendChild(loginView)
    })

    var buttonSubmitRegister = document.createElement('button')
    buttonSubmitRegister.classList.add('black-button')
    buttonSubmitRegister.type = 'submit'
    var buttonText = document.createTextNode('Register')
    buttonSubmitRegister.appendChild(buttonText)
    buttons.appendChild(buttonSubmitRegister)

    registerForm.appendChild(buttons)

    registerView.appendChild(registerForm)

    return registerView
}

function buildLoginView() {
    var loginView = document.createElement('div')
    loginView.classList.add('p-20px')

    var logoHeading = document.createElement('i')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    loginView.appendChild(logoHeading)

    var namePageHeading = document.createElement('h1')
    var nameText = document.createTextNode('Login page')
    namePageHeading.appendChild(nameText)
    loginView.appendChild(namePageHeading)

    var loginForm = document.createElement('form')
    loginForm.classList.add('flex','flex-col','gap-20px')

    var userNameField = document.createElement('div')
    userNameField.classList.add('flex','flex-col','gap-10px')
    var userNameLabel = document.createElement('label')
    userNameLabel.htmlFor = 'username'
    var userNameText = document.createTextNode('Username')
    userNameLabel.appendChild(userNameText)
    var userNameInput = document.createElement('input')
    userNameInput.type = 'text'
    userNameInput.name = 'username'
    userNameInput.id = 'username'
    userNameInput.placeholder = 'your username'
    userNameField.appendChild(userNameLabel)
    userNameField.appendChild(userNameInput)
    loginForm.appendChild(userNameField)

    var passwordField = document.createElement('div')
    passwordField.classList.add('flex','flex-col','gap-10px')
    var passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password'
    var passwordText = document.createTextNode('Password')
    passwordLabel.appendChild(passwordText)
    var passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.name = 'password'
    passwordInput.id = 'password'
    passwordInput.placeholder = 'your password'
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)
    loginForm.appendChild(passwordField)

    var buttons = document.createElement('div')
    buttons.classList.add('flex','justify-between')
    
    var registerLink = document.createElement('a')
    registerLink.href = '#'
    var registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    buttons.appendChild(registerLink)

    registerLink.addEventListener('click', function(event) {
        body.removeChild(loginView)
        body.appendChild(registerView)
    })
    
    var buttonSubmitLogin = document.createElement('button')
    buttonSubmitLogin.classList.add('black-button')
    buttonSubmitLogin.type = 'submit'
    var buttonText = document.createTextNode('Login')
    buttonSubmitLogin.appendChild(buttonText)
    buttons.appendChild(buttonSubmitLogin)

    loginForm.appendChild(buttons)
    
    loginView.appendChild(loginForm)

    return loginView
}

function buildHomeView() {
    var homeView = document.createElement('div')
    homeView.classList.add('p-20px')

    var logoHeading = document.createElement('i')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    homeView.appendChild(logoHeading)

    var welcomeHeading = document.createElement('h1')
    var welcomeText = document.createTextNode('Hello, World!')
    welcomeHeading.appendChild(welcomeText)
    homeView.appendChild(welcomeHeading)

    return homeView
}

var landingView = buildLandingView()
body.appendChild(landingView)

var registerView = buildRegisterView()
//body.appendChild(registerView)

// TODO TEST LOGIN VIEW
var loginView = buildLoginView()
//body.appendChild(loginView);

// TODO TEST HOME VIEW
var homeView = buildHomeView()
//body.appendChild(homeView)