var body = document.querySelector('body')

function buildLandingView() {
    var landingView = document.createElement('div')
    
    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    landingView.appendChild(logoHeading)

    var namePageHeading = document.createElement('h3')
    var nameText = document.createTextNode('Landing page')
    namePageHeading.appendChild(nameText)
    landingView.appendChild(namePageHeading)

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

    var namePageHeading = document.createElement('h3')
    var nameText = document.createTextNode('Register page')
    namePageHeading.appendChild(nameText)
    registerView.appendChild(namePageHeading)

    var registerForm = document.createElement('form')

    var nameField = document.createElement('div')
    var nameLabel = document.createElement('label')
    nameLabel.htmlFor = 'name'
    nameLabel.style.marginRight = '8px'
    var nameText = document.createTextNode('Name')
    nameLabel.appendChild(nameText)
    var nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'name'
    nameField.appendChild(nameLabel)
    nameField.appendChild(nameInput)
    registerForm.appendChild(nameField)

    var emailField = document.createElement('div')
    var emailLabel = document.createElement('label')
    emailLabel.htmlFor = 'email'
    emailLabel.style.marginRight = '8px'
    var emailText = document.createTextNode('Email')
    emailLabel.appendChild(emailText)
    var emailInput = document.createElement('input')
    emailInput.type = 'text'
    emailInput.name = 'email'
    emailField.appendChild(emailLabel)
    emailField.appendChild(emailInput)
    registerForm.appendChild(emailField)

    var userNameField = document.createElement('div')
    var userNameLabel = document.createElement('label')
    userNameLabel.htmlFor = 'username'
    userNameLabel.style.marginRight = '8px'
    var userNameText = document.createTextNode('Username')
    userNameLabel.appendChild(userNameText)
    var userNameInput = document.createElement('input')
    userNameInput.type = 'text'
    userNameInput.name = 'username'
    userNameField.appendChild(userNameLabel)
    userNameField.appendChild(userNameInput)
    registerForm.appendChild(userNameField)

    var passwordField = document.createElement('div')
    var passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password'
    passwordLabel.style.marginRight = '8px'
    var passwordText = document.createTextNode('Password')
    passwordLabel.appendChild(passwordText)
    var passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.name = 'password'
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)
    registerForm.appendChild(passwordField)

    registerView.appendChild(registerForm)

    var linkAndButtonField = document.createElement('div')

    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    linkAndButtonField.appendChild(loginLink)

    var buttonSubmitRegister = document.createElement('button')
    buttonSubmitRegister.type = 'submit'
    //buttonRegister.onclick = 
    buttonSubmitRegister.style.marginLeft = '20px'
    var buttonText = document.createTextNode('Register')
    buttonSubmitRegister.appendChild(buttonText)
    linkAndButtonField.appendChild(buttonSubmitRegister)

    registerView.appendChild(linkAndButtonField)

    return registerView
}

function buildLoginView() {
    var loginView = document.createElement('div')

    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    loginView.appendChild(logoHeading)

    var namePageHeading = document.createElement('h3')
    var nameText = document.createTextNode('Login page')
    namePageHeading.appendChild(nameText)
    loginView.appendChild(namePageHeading)

    var registerForm = document.createElement('form')
    var userNameField = document.createElement('div')
    var userNameLabel = document.createElement('label')
    userNameLabel.htmlFor = 'username'
    userNameLabel.style.marginRight = '8px'
    var userNameText = document.createTextNode('Username')
    userNameLabel.appendChild(userNameText)
    var userNameInput = document.createElement('input')
    userNameInput.type = 'text'
    userNameInput.name = 'username'
    userNameField.appendChild(userNameLabel)
    userNameField.appendChild(userNameInput)
    registerForm.appendChild(userNameField)

    var passwordField = document.createElement('div')
    var passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password'
    passwordLabel.style.marginRight = '8px'
    var passwordText = document.createTextNode('Password')
    passwordLabel.appendChild(passwordText)
    var passwordInput = document.createElement('input')
    passwordInput.type = 'text'
    passwordInput.name = 'password'
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)
    registerForm.appendChild(passwordField)

    loginView.appendChild(registerForm)
    
    var linkAndButtonField = document.createElement('div')
    
    var registerLink = document.createElement('a')
    registerLink.href = '#'
    var registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    linkAndButtonField.appendChild(registerLink)
    
    var buttonSubmitLogin = document.createElement('button')
    buttonSubmitLogin.type = 'submit'
    buttonSubmitLogin.style.marginLeft = '20px'
    var buttonText = document.createTextNode('Login')
    buttonSubmitLogin.appendChild(buttonText)
    linkAndButtonField.appendChild(buttonSubmitLogin)
    
    loginView.appendChild(linkAndButtonField)

    return loginView
}

function buildHomeView() {
    var homeView = document.createElement('div')

    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    homeView.appendChild(logoHeading)

    /*var namePageHeading = document.createElement('h3')
    var nameText = document.createTextNode('Home page')
    namePageHeading.appendChild(nameText)
    homeView.appendChild(namePageHeading)*/

    var welcomeHeading = document.createElement('h2')
    var welcomeText = document.createTextNode('HELLO HOME')
    welcomeHeading.appendChild(welcomeText)
    homeView.appendChild(welcomeHeading)

    return homeView
}

var landingView = buildLandingView()
body.appendChild(landingView)

//var registerView = buildRegisterView()
//body.appendChild(registerView)

// TODO TEST LOGIN VIEW
//var loginView = buildLoginView()
//body.appendChild(loginView);

// TODO TEST HOME VIEW
//var homeView = buildHomeView()
//body.appendChild(homeView)