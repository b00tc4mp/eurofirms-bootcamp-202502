//traer el objeto body (como ya existe en el documento html lo aprovechamos sin crearlo de nuevo)
var body = document.querySelector('body')

//metemos el contenido de cada pagina en una funcion y despues la invocamos
function buildLandingView() {
    //crear un div para la pagina de landing view
    var landingView = document.createElement('div')
    //añadir estilo
    landingView.classList.add('p-20px')

    //crear el logo: 1. crear etiqueta html, 2. crear texto, 3. poner texto dentro de etiqueta
    var logoHeading = document.createElement('i')
    //le añado una clase para que se visualice <i> como bloque
    logoHeading.classList.add('block')
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
    //aplicar estilos
    registerLink.classList.add('a')
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
    //anadir estilo
    registerView.classList.add('p-20px')

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
    //hacemos que el formulario sea flex, columna y separacion de los diferentes fields (contenidos en div)
    registerForm.classList.add('flex', 'flex-col', 'gap-20px')

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
    //añadir clase al div
    nameField.classList.add('flex', 'flex-col', 'gap-10px')
    //ensamblar div en formulario
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
    emailField.classList.add('flex', 'flex-col', 'gap-10px')
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
    usernameField.classList.add('flex', 'flex-col', 'gap-10px')
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
    passwordField.classList.add('flex', 'flex-col', 'gap-10px')
    registerForm.appendChild(passwordField)

    //crear div para button y link y aplicar estilo para mostrar en fila
    var buttons = document.createElement('div')
    buttons.classList.add('flex', 'justify-between')

    //login link
    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginLinkText = document.createTextNode('Login')
    loginLink.appendChild(loginLinkText)
    buttons.appendChild(loginLink)

    //register button
    var button = document.createElement('button')
    button.classList.add('black-button')
    var buttonText = document.createTextNode('Register')
    button.appendChild(buttonText)
    button.type = 'submit'
    buttons.appendChild(button)

    //ensamblar buttons (div) en formulario (form)
    registerForm.appendChild(buttons)

    //ensamblar formulario en div registerView
    registerView.appendChild(registerForm)

    return registerView
}

function buildLoginView() {
    var loginView = document.createElement('div')
    loginView.classList.add('p-20px')

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
    loginForm.classList.add('flex', 'flex-col', 'gap-20px')

    //label & input para username
    var usernameLabel = document.createElement('label')
    usernameLabel.htmlFor = 'username'
    var usernameText = document.createTextNode('Username')
    usernameLabel.appendChild(usernameText)
    var usernameInput = document.createElement('input')
    usernameInput.type = 'text'
    usernameInput.name = 'username'
    var usernameField = document.createElement('div')
    usernameField.classList.add('flex', 'flex-col', 'gap-10px')
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
    passwordField.classList.add('flex', 'flex-col', 'gap-10px')
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)
    loginForm.appendChild(passwordField)

    //crear div para poner botones en fila usando flex
    var buttons = document.createElement('div')
    buttons.classList.add('flex', 'justify-between')

    //register link
    var registerLink = document.createElement('a')
    registerLink.href = '#'
    var registerLinkText = document.createTextNode('Register')
    registerLink.appendChild(registerLinkText)
    buttons.appendChild(registerLink)

    //login button
    var button = document.createElement('button')
    //aplicar estilos al boton
    button.classList.add('black-button')
    var buttonText = document.createTextNode('Login')
    button.appendChild(buttonText)
    button.type = 'submit'
    buttons.appendChild(button)

    //ensamblar buttons div en el formulario
    loginForm.appendChild(buttons)

    //ensamblar formulario en div loginView
    loginView.appendChild(loginForm)

    return loginView
}

function buildHomeView() {
    var homeView = document.createElement('div')
    homeView.classList.add('p-20px')

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
    headingHome.classList.add('flex', 'justify-center', 'bold', 'p-20px')
    var headingHomeText = document.createTextNode('Hello, Home!')
    headingHome.appendChild(headingHomeText)
    homeView.appendChild(headingHome)

    return homeView
}

//llamar a la funcion y ensamblar los div contenedores de cada xView dentro de body

//var landingView = buildLandingView()
//body.appendChild(landingView)

//var registerView = buildRegisterView()
//body.appendChild(registerView)

//var loginView = buildLoginView()
//body.appendChild(loginView)

var homeView = buildHomeView()
body.appendChild(homeView)

