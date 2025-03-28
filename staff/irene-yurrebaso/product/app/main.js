//traer el objeto body (como ya existe en el documento html lo aprovechamos sin crearlo de nuevo)
var body = document.querySelector('body')

//metemos el contenido de cada pagina en una funcion y despues la invocamos
function buildLandingView() {
    //crear un div para la pagina de landing view
    var landingView = document.createElement('div')

    //crear el logo: 1. crear etiqueta html, 2. crear texto, 3. poner texto dentro de etiqueta
    var logoHeading = document.createElement('i')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    //ensamblar logoHeading dentro de landingView
    landingView.appendChild(logoHeading) 

    //Titulo de la pagina
    var titleLanding = document.createElement('h1')
    var titleLandingText = document.createTextNode('Landing')
    titleLanding.appendChild(titleLandingText)
    landingView.appendChild(titleLanding)

    //crear "Register": 1. etiqueta html (con attr), 2. texto, 3. poner texto en etiqueta
    var registerLink = document.createElement('a')
    registerLink.href = "#"
    var registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    //ensamblar Register en div landingView
    landingView.appendChild(registerLink)

    //crear "or" y ensamblar en div landingView ya que es hijo directo de este elemento
    var orText = document.createTextNode(' or ')
    landingView.appendChild(orText)

    //crear "Login": 1. etiqueta html (con attr), 2.texto link, 3. texto dentro de etiqueta
    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    //ensamblar Login en div landingView
    landingView.appendChild(loginLink)

    return landingView
}

function buildRegisterView() {
    var registerView = document.createElement('div')

    //logo
    var logoHeading = document.createElement('i')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    registerView.appendChild(logoHeading) 

    //Titulo de la pagina
    var titleRegister = document.createElement('h1')
    var titleRegisterText = document.createTextNode('Register')
    titleRegister.appendChild(titleRegisterText)
    registerView.appendChild(titleRegister)

    //crear formulario
    var registerForm = document.createElement('form')

    //label & input para name
    //crear Label y añadirle for attribute y su texto
    var nameLabel = document.createElement('label')
    nameLabel.htmlFor = 'name'
    var nameText = document.createTextNode('Name')
    nameLabel.appendChild(nameText)
    //crear Input y añadirle type & name attributes
    var nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'name'
    nameInput.placeholder = 'full name'
    //poner cada pareja de label & input en un div
    var nameField = document.createElement('div')
    nameField.appendChild(nameLabel)
    nameField.appendChild(nameInput)
    //ensamblar pareja en formulario
    registerForm.appendChild(nameField)

    //label & input para e-mail
    var emailLabel = document.createElement('label')
    emailLabel.htmlFor = 'email'
    var emailText = document.createTextNode('E-mail')
    emailLabel.appendChild(emailText)
    var emailInput = document.createElement('input')
    emailInput.type = 'email' //un tipo de input especifico para que solo deje poner email y no texto normal
    emailInput.name = 'email'
    emailInput.placeholder = 'your email'
    var emailField = document.createElement('div')
    emailField.appendChild(emailLabel)
    emailField.appendChild(emailInput)
    registerForm.appendChild(emailField)

    //label & input para username
    var usernameLabel = document.createElement('label')
    usernameLabel.htmlFor = 'username'
    var usernameText = document.createTextNode('Username')
    usernameLabel.appendChild(usernameText)
    var usernameInput = document.createElement('input')
    usernameInput.type = 'text'
    usernameInput.name = 'username'
    usernameInput.placeholder = 'your username'
    var usernameField = document.createElement('div')
    usernameField.appendChild(usernameLabel)
    usernameField.appendChild(usernameInput)
    registerForm.appendChild(usernameField)

    //label & input para password
    var passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password'
    var passwordText = document.createTextNode('Password')
    passwordLabel.appendChild(passwordText)
    var passwordInput = document.createElement('input')
    passwordInput.type = 'text'
    passwordInput.name = 'password'
    passwordInput.placeholder = 'your password'
    var passwordField = document.createElement('div')
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)
    registerForm.appendChild(passwordField)

    //register button
    var button = document.createElement('button')
    var buttonText = document.createTextNode('Register')
    button.appendChild(buttonText)
    button.type = 'submit'
    registerForm.appendChild(button)

    //login link
    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginLinkText = document.createTextNode('Login')
    loginLink.appendChild(loginLinkText)
    registerForm.appendChild(loginLink)

    //ensamblar formulario en div registerView
    registerView.appendChild(registerForm)

    return registerView
}

function buildLoginView() {
    var loginView = document.createElement('div')

    //logo
    var logoHeading = document.createElement('i')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    loginView.appendChild(logoHeading)

    //Titulo de la pagina
    var titleLogin = document.createElement('h1')
    var titleLoginText = document.createTextNode('Login')
    titleLogin.appendChild(titleLoginText)
    loginView.appendChild(titleLogin)

    //crear formulario
    var loginForm = document.createElement('form')

    //label & input para username
    var usernameLabel = document.createElement('label')
    usernameLabel.htmlFor = 'username'
    var usernameText = document.createTextNode('Username')
    usernameLabel.appendChild(usernameText)
    var usernameInput = document.createElement('input')
    usernameInput.type = 'text'
    usernameInput.name = 'username'
    var usernameField = document.createElement('div')
    usernameField.appendChild(usernameLabel)
    usernameField.appendChild(usernameInput)
    loginForm.appendChild(usernameField)

    //label & input para password
    var passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password'
    var passwordText = document.createTextNode('Password')
    passwordLabel.appendChild(passwordText)
    var passwordInput = document.createElement('input')
    passwordInput.type = 'text'
    passwordInput.name = 'password'
    var passwordField = document.createElement('div')
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)
    loginForm.appendChild(passwordField)

    //login button
    var button = document.createElement('button')
    var buttonText = document.createTextNode('Login')
    button.appendChild(buttonText)
    button.type = 'submit'
    loginForm.appendChild(button)

    //register link
    var registerLink = document.createElement('a')
    registerLink.href = '#'
    var registerLinkText = document.createTextNode('Register')
    registerLink.appendChild(registerLinkText)
    loginForm.appendChild(registerLink)

    //ensamblar formulario en div loginView
    loginView.appendChild(loginForm)

    return loginView
}

function buildHomeView() {
    var homeView = document.createElement('div')

    //logo
    var logoHeading = document.createElement('i')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    homeView.appendChild(logoHeading)

    //Titulo de la pagina
    var titleHome = document.createElement('h1')
    var titleHomeText = document.createTextNode('Home')
    titleHome.appendChild(titleHomeText)
    homeView.appendChild(titleHome)

    //hello home
    var headingHome = document.createElement('h2')
    var headingHomeText = document.createTextNode('Hello, Home!')
    headingHome.appendChild(headingHomeText)
    homeView.appendChild(headingHome)

    return homeView
}

//llamar a la funcion y ensamblar los div contenedores de cada xView dentro de body

var landingView = buildLandingView()
body.appendChild(landingView)

//var registerView = buildRegisterView()
//body.appendChild(registerView)

//var loginView = buildLoginView()
//body.appendChild(loginView)

//var homeView = buildHomeView()
//body.appendChild(homeView)

