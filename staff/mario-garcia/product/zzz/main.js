var body = document.querySelector('body')

function buildLandingView() {

    // Pintamos la Pantalla LANDING

    //Creamos la SECCIÓN 'div' para la Pantalla LANDING

    var landingView = document.createElement('div')
    // landingView.classList.add('p-x-20px')
    landingView.classList.add('p-xy-20px')

    // landingView.classList.add('p-x-20px')

    //Creamos el LOGO 

    var logo = document.createElement('i')
    logo.classList.add('block') // Hacemos que el logo OCUPE toda la Línea
    var logoText = document.createTextNode('Logo')
    logo.appendChild(logoText)
    landingView.appendChild(logo)

    //Creamos el Nombre de la Página

    var landingTitle = document.createElement('h1')
    var landingText = document.createTextNode('LANDING Page')
    landingTitle.appendChild(landingText)
    landingView.appendChild(landingTitle)

    //Creamos el Link de REGISTER

    var registerLink = document.createElement('a')
    registerLink.href = '#'
    var registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    landingView.appendChild(registerLink)

    //Montamos la NAVEGACIÓN del Link REGISTER

    registerLink.addEventListener('click', function (event) {
        body.removeChild(landingView)
        body.appendChild(registerView)
    })

    var orText = document.createTextNode('   or   ')
    landingView.appendChild(orText)

    //Creamos el Link de LOGIN

    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    landingView.appendChild(loginLink)

    //Montamos la NAVEGACIÓN del Link LOGIN

    loginLink.addEventListener('click', function (event) {
        body.removeChild(landingView)
        body.appendChild(loginView)
    })

    return landingView

}

function buildRegisterView() { // Pintamos la Pantalla REGISTER

    var registerView = document.createElement('div')
    // registerView.classList.add('p-y-20px')
    registerView.classList.add('p-xy-20px')

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
    registerForm.classList.add('flex', 'flex-col', 'gap-20px')

    // var space = document.createElement('br')
    // var space1 = document.createElement('br')
    // var space2 = document.createElement('br')
    // var space3 = document.createElement('br')

    var nameField = document.createElement('div')
    nameField.classList.add('flex', 'flex-col', 'gap-10px')
    var nameLabel = document.createElement('label')
    nameLabel.htmlFor = 'name'
    var nameText = document.createTextNode('Name:')
    nameLabel.appendChild(nameText)
    var nameInput = document.createElement('input')
    nameInput.classList.add('placeholder')
    nameInput.type = 'text'
    nameInput.id = 'name'
    nameInput.name = 'name'
    nameInput.placeholder = 'Your full name'
    nameField.appendChild(nameLabel)
    nameField.appendChild(nameInput)

    var emailField = document.createElement('div')
    emailField.classList.add('flex', 'flex-col', 'gap-10px')
    var emailLabel = document.createElement('label')
    emailLabel.htmlFor = 'email'
    var emailText = document.createTextNode('Email:')
    emailLabel.appendChild(emailText)
    var emailInput = document.createElement('input')
    emailInput.classList.add('placeholder')
    emailInput.type = 'email'
    emailInput.name = 'email'
    emailInput.id = 'email'
    emailInput.placeholder = 'Your e-mail'
    emailField.appendChild(emailLabel)
    emailField.appendChild(emailInput)

    var usernameField = document.createElement('div')
    usernameField.classList.add('flex', 'flex-col', 'gap-10px')
    var usernameLabel = document.createElement('label')
    usernameLabel.htmlFor = 'username'
    var usernameText = document.createTextNode('Username:')
    usernameLabel.appendChild(usernameText)
    var usernameInput = document.createElement('input')
    usernameInput.classList.add('placeholder')
    usernameInput.type = 'text'
    usernameInput.name = 'username'
    usernameInput.id = 'username'
    usernameInput.placeholder = 'Your Username'
    usernameField.appendChild(usernameLabel)
    usernameField.appendChild(usernameInput)

    var passwordField = document.createElement('div')
    passwordField.classList.add('flex', 'flex-col', 'gap-10px')
    var passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password' // ¿Que estamos haciendo aquí?
    var passwordText = document.createTextNode('Password:')
    passwordLabel.appendChild(passwordText)
    var passwordInput = document.createElement('input')
    passwordInput.classList.add('placeholder')
    passwordInput.type = 'text'
    passwordInput.name = 'password'
    passwordInput.id = 'password'
    passwordInput.placeholder = 'Introduce a password'
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)

    //A continuación PINTAMOS los CAMPOS en la Pantalla REGISTER = var registerView

    registerForm.appendChild(nameField)
    // registerForm.appendChild(space)
    registerForm.appendChild(emailField)
    // registerForm.appendChild(space1)
    registerForm.appendChild(usernameField)
    // registerForm.appendChild(space2)
    registerForm.appendChild(passwordField)

    registerView.appendChild(registerForm)
    // registerForm.appendChild(space3)

    //Montamos el Link de LOGIN

    var buttons = document.createElement('div')
    buttons.classList.add('flex', 'justify-between')

    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    buttons.appendChild(loginLink)

    //Montamos la NAVEGACIÓN del Link LOGIN

    loginLink.addEventListener('click', function (event) {
        body.removeChild(registerView)
        body.appendChild(loginView)
    })

    //Montamos el Boton REGISTER

    var registerButton = document.createElement('button')
    registerButton.classList.add('registerButton') // Le doy ESTILO a mi Boton
    registerButton.type = 'submit'
    var registerText = document.createTextNode('Register')
    // registerButton.style.marginRight = '10px' = Dar ESPACIADO a la Derecha
    registerButton.style.cursor = 'pointer' // Hacemos que nuestro Boton sea CLICKABLE
    registerButton.appendChild(registerText)
    buttons.appendChild(registerButton)

    registerForm.appendChild(buttons)

    //Montamos la NAVEGACIÓN del Botón REGISTER

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault()

        const name = nameInput.value
        const email = emailInput.value
        const username = usernameInput.value
        const password = passwordInput.value

        //La siguiente lógica NOS devuelve Error si ya estoy registrado

        try {
            registerUser(name, email, username, password)

            registerForm.reset() // Con esto RESETEAMOS los campos una vez que salimos de esta Pantalla

            body.removeChild(registerView)
            body.appendChild(loginView)

        } catch (error) {
            alert(error.message)
        }

        // console.log(name, email, username, password)
    })

    return registerView
}


function buildLoginView() { // TODO Implement

    var loginView = document.createElement('div')
    // loginView.classList.add('p-x-20px')
    loginView.classList.add('p-xy-20px')

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

    var loginForm = document.createElement('form')
    loginForm.classList.add('flex', 'flex-col', 'gap-20px')

    var usernameField = document.createElement('div')
    usernameField.classList.add('flex', 'flex-col', 'gap-10px')
    var usernameLabel = document.createElement('label')
    usernameLabel.htmlFor = 'username'
    var usernameText = document.createTextNode('Username:')
    usernameLabel.appendChild(usernameText)
    var usernameInput = document.createElement('input')
    usernameInput.classList.add('placeholder')
    usernameInput.type = 'text'
    usernameInput.name = 'username'
    usernameInput.id = 'username'
    usernameInput.placeholder = 'Your Username'
    usernameField.appendChild(usernameLabel)
    usernameField.appendChild(usernameInput)

    var passwordField = document.createElement('div')
    passwordField.classList.add('flex', 'flex-col', 'gap-10px')
    var passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password'
    var passwordText = document.createTextNode('Password:')
    passwordLabel.appendChild(passwordText)
    var passwordInput = document.createElement('input')
    passwordInput.classList.add('placeholder')
    passwordInput.type = 'text'
    passwordInput.name = 'password'
    passwordInput.id = 'password'
    passwordInput.placeholder = 'Introduce your password'
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)

    //A continuación PINTAMOS los CAMPOS en la Pantalla LOGIN = var loginView

    loginForm.appendChild(usernameField)

    loginForm.appendChild(passwordField)

    //A continuacion pintamos los Link's & Botones

    var buttons = document.createElement('div')
    buttons.classList.add('flex', 'justify-between') // Con esto los Link's & Botones se me mostrarán uno a cada lado

    //Montamos el Link de de REGISTER 

    var registerLink = document.createElement('a')
    registerLink.href = '#'
    var registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    buttons.appendChild(registerLink)

    //Montamos la FUNCIONALIDAD del Link de REGISTER

    registerLink.addEventListener('click', function (event) {
        body.removeChild(loginView)
        body.appendChild(registerView)
    })

    //Montamos el Boton de LOGIN

    var loginButton = document.createElement('button')
    loginButton.classList.add('loginButton')
    loginButton.type = 'submit'
    var loginText = document.createTextNode('Login')
    loginButton.style.backgroundColor = 'floralwhite' // Dar COLOR al BOTON
    loginButton.style.cursor = 'pointer' // Hacemos que nuestro Boton sea CLICKABLE
    loginButton.appendChild(loginText)
    buttons.appendChild(loginButton)

    //Montamos la FUNCIONALIDAD del Botón LOGIN

    loginForm.addEventListener('submit', function (event) {

        event.preventDefault()

        const username = usernameInput.value
        const password = passwordInput.value

        //La siguiente lógica nos devuelve ERROR si YA ESTÁ REGISTRADO

        try {

            loginUser(username, password)

            loginForm.reset() // Con esto RESETEAMOS los campos una vez que salimos de esta Pantalla

            body.removeChild(loginView)
            body.appendChild(homeView)
        }

        catch (error) { alert(error.message) }

    })

    loginForm.appendChild(buttons)
    loginView.appendChild(loginForm)

    return loginView

}

function buildHomeView() {

    var homeView = document.createElement('div')
    homeView.classList.add('p-xy-20px')
    // homeView.classList.add('p-x-20px')

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
// body.appendChild(registerView)

var loginView = buildLoginView()
// body.appendChild(loginView)

var homeView = buildHomeView()
// body.appendChild(homeView)

// TODO test Login view
// TODO test Home view
