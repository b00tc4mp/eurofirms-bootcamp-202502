var body = document.querySelector('body')

function buildLandingView() {
    var landingView = document.createElement('div')
    landingView.classList.add('p-20px')

    var logo = document.createElement('i')
    logo.classList.add('block')

    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('logo')
    logoHeading.appendChild(logoText)
    landingView.appendChild(logoHeading)

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

    loginLink.addEventListener('click', function (event){
        body.removeChild(landingView)
        body.appendChild(loginView)
    })

    return landingView
}

function buildRegisterView() {
    var registerView = document.createElement('div')
    registerView.classList.add('p-x-20px')

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
    nameField.classList.add('flex', 'flex-col')
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
    eMailField.classList.add ('flex', 'flex-col')
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
    usernameField.classList.add('flex', "flex-col")
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
    passwordField.classList.add('flex', 'flex-col')
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

    var linkAndButton = document.createElement('div')

    var loginLink = document.createElement('a')
    loginLink.classList.add('mr-20px')
    loginLink.href = '#' 
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    linkAndButton.appendChild(loginLink)
    
    loginLink.addEventListener('click', function (event) {
        body.appendChild(loginView)
        body.removeChild(registerView)
    })

    var registerButton = document.createElement('button')
    var registerButtonText = document.createTextNode('Register')
    registerButton.appendChild(registerButtonText)
    linkAndButton.appendChild(registerButton)

    registerForm.appendChild(linkAndButton)

    registerForm.addEventListener('submit', function(event){
        event.preventDefault()

        const name = nameInput.value
        const eMail = eMailInput.value
        const username = usernameInput.value
        const password = passwordInput.value

        console.log (name, eMail,username,password)
       
        try {
            registerUser(name, eMail, username,password)

            body.appendChild(registerView)
            body.appendChild(loginView)
        } catch (error) {
            alert(error.message)

        }
    })

    registerView.appendChild(registerForm)

    return registerView
}

function buildLoginView() {

    var loginView = document.createElement('div')
    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    loginView.appendChild(logoHeading)
    loginView.classList.add('p-x-20px')

    var loginForm = document.createElement('form')

    var usernameField = document.createElement('div')
    usernameField.classList.add('flex', 'flex-col')//test
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
    passwordField.classList.add('flex', 'flex-col')//test
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

    var registerLink = document.createElement('a')
    registerLink.href = '#'
    var registerText = document.createTextNode('register')
    registerLink.appendChild(registerText)
    loginView.appendChild(registerLink)
    registerLink.style.marginRight = '20px'

    registerLink.addEventListener('click', function(event) {
        body.removeChild(loginView)
        body.appendChild(registerView)
    })

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
//body.appendChild(landingView)

var registerView = buildRegisterView()
//body.appendChild(registerView)

var loginView = buildLoginView()
body.appendChild(loginView)

var homeView = buildHomeView()
//body.appendChild(homeView)