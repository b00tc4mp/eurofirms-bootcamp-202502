//traer el objeto body (como ya existe en el documento html lo aprovechamos sin crearlo de nuevo)
const body = document.querySelector('body')

//metemos el contenido de cada pagina en una funcion y despues la invocamos
function buildLandingView() {
    //crear un div para la pagina de landing view
    const landingView = document.createElement('div')
    //añadir estilo
    landingView.classList.add('p-20px')

    //crear el logo: 1. crear etiqueta html, 2. crear texto, 3. poner texto dentro de etiqueta
    const logoHeading = document.createElement('i')
    //le añado una clase para que se visualice <i> como bloque
    logoHeading.classList.add('block')
    const logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    //ensamblar logoHeading dentro de landingView
    landingView.appendChild(logoHeading) 

    //Titulo de la pagina
    const titleLanding = document.createElement('h1')
    const titleLandingText = document.createTextNode('Landing')
    titleLanding.appendChild(titleLandingText)
    landingView.appendChild(titleLanding)

    //crear "Register": 1. etiqueta html (con attr), 2. texto, 3. poner texto en etiqueta
    const registerLink = document.createElement('a')
    registerLink.href = "#"
    const registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    //aplicar estilos
    registerLink.classList.add('a')
    //ensamblar Register en div landingView
    landingView.appendChild(registerLink)

    //Añadimos evento para navegar a registerView
    registerLink.addEventListener('click', function(event) {
        //quitar landingView del body
        body.removeChild(landingView)
        //mostrar registerView - mas abajo estamos llamando a la funcion registerView
        body.appendChild(registerView)
    })

    //crear "or" y ensamblar en div landingView ya que es hijo directo de este elemento
    const orText = document.createTextNode(' or ')
    landingView.appendChild(orText)

    //crear "Login": 1. etiqueta html (con attr), 2.texto link, 3. texto dentro de etiqueta
    const loginLink = document.createElement('a')
    loginLink.href = '#'
    const loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    //ensamblar Login en div landingView
    landingView.appendChild(loginLink)

    //añadimos evento para navegar a loginView
    loginLink.addEventListener('click', function(event) {
        body.removeChild(landingView)
        body.appendChild(loginView)
    })

    return landingView
}

function buildRegisterView() {
    const registerView = document.createElement('div')
    //anadir estilo
    registerView.classList.add('p-20px')

    //logo
    const logoHeading = document.createElement('i')
    const logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    registerView.appendChild(logoHeading) 

    //Titulo de la pagina
    const titleRegister = document.createElement('h1')
    const titleRegisterText = document.createTextNode('Register')
    titleRegister.appendChild(titleRegisterText)
    registerView.appendChild(titleRegister)

    //crear formulario
    const registerForm = document.createElement('form')
    //hacemos que el formulario sea flex, contenido en columna y separacion de los diferentes fields (contenidos en div)
    registerForm.classList.add('flex', 'flex-col', 'gap-20px')

    //label & input para name
    //crear Label y añadirle for attribute y su texto
    const nameLabel = document.createElement('label')
    nameLabel.htmlFor = 'name'
    const nameText = document.createTextNode('Name')
    nameLabel.appendChild(nameText)
    //crear Input y añadirle type & name attributes
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.id = 'name'
    nameInput.name = 'name'
    nameInput.placeholder = 'full name'
    //poner cada pareja de label & input en un div
    const nameField = document.createElement('div')
    nameField.appendChild(nameLabel)
    nameField.appendChild(nameInput)
    //añadir clase al div
    nameField.classList.add('flex', 'flex-col', 'gap-10px')
    //ensamblar div en formulario
    registerForm.appendChild(nameField)

    //label & input para e-mail
    const emailLabel = document.createElement('label')
    emailLabel.htmlFor = 'email'
    const emailText = document.createTextNode('E-mail')
    emailLabel.appendChild(emailText)
    const emailInput = document.createElement('input')
    emailInput.type = 'email' //un tipo de input especifico para que solo deje poner email y no texto normal
    emailInput.id = 'email'
    emailInput.name = 'email'
    emailInput.placeholder = 'your email'
    const emailField = document.createElement('div')
    emailField.appendChild(emailLabel)
    emailField.appendChild(emailInput)
    emailField.classList.add('flex', 'flex-col', 'gap-10px')
    registerForm.appendChild(emailField)

    //label & input para username
    const usernameLabel = document.createElement('label')
    usernameLabel.htmlFor = 'username'
    const usernameText = document.createTextNode('Username')
    usernameLabel.appendChild(usernameText)
    const usernameInput = document.createElement('input')
    usernameInput.type = 'text'
    usernameInput.id = 'username'
    usernameInput.name = 'username'
    usernameInput.placeholder = 'your username'
    const usernameField = document.createElement('div')
    usernameField.appendChild(usernameLabel)
    usernameField.appendChild(usernameInput)
    usernameField.classList.add('flex', 'flex-col', 'gap-10px')
    registerForm.appendChild(usernameField)

    //label & input para password
    const passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password'
    const passwordText = document.createTextNode('Password')
    passwordLabel.appendChild(passwordText)
    const passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.id = 'password'
    passwordInput.name = 'password'
    passwordInput.placeholder = 'your password'
    const passwordField = document.createElement('div')
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)
    passwordField.classList.add('flex', 'flex-col', 'gap-10px')
    registerForm.appendChild(passwordField)

    //crear div para button y link y aplicar estilo para mostrar en fila
    const buttons = document.createElement('div')
    buttons.classList.add('flex', 'justify-between')

    //login link
    const loginLink = document.createElement('a')
    loginLink.href = '#'
    const loginLinkText = document.createTextNode('Login')
    loginLink.appendChild(loginLinkText)
    buttons.appendChild(loginLink)

    //añadir navegacion
    loginLink.addEventListener('click', function(event) {
        body.removeChild(registerView)
        body.appendChild(loginView)
    })

    //register button
    const button = document.createElement('button')
    button.classList.add('black-button')
    const buttonText = document.createTextNode('Register')
    button.appendChild(buttonText)
    button.type = 'submit'
    buttons.appendChild(button)

    //ensamblar buttons (div) en formulario (form)
    registerForm.appendChild(buttons)

    //añadir logica envio formulario
    registerForm.addEventListener('submit', function(event) {
        //para que no vaya a otra pagina por defecto y manejemos nosotros el evento
        event.preventDefault()

        //al hacer submit capturamos los datos de los input
        //extraemos el valor del Input (ej. nameInput en este caso) y lo guardamos en constiable
        const name = nameInput.value
        const email = emailInput.value
        const username = usernameInput.value
        const password = passwordInput.value

        //Cuando tenemos los datos, los pasamos por una logica para el proceso de registro: si todo va bien mandamos los datos, si no lanzamos mensaje de error. Ej. comprobar si el usuario ya existe: intenta hacer esto (try), y si lanza un error, el error se lanza al catch donde se maneja
        try {
            //la funcion registerUser se crea en logic.js y aqui la invocamos
            registerUser(name, email, username, password) 

            //resetear campos formulario con metodo .reset() del DOM para que los datos no se queden en memoria. Se pone despues de que el register se ha hecho correctamente.
            registerForm.reset()

            //si los datos recogidos estan bien, lleconst a autenticar
            body.removeChild(registerView)
            body.appendChild(loginView)

        } catch (error) {
            //si hay error, el bloque "try" va a pasar el error a "catch"
            //el error es un objeto con una propiedad llamada message. 
		    //y metemos el mensaje de error en una alerta para que se vea en pantalla.
            alert(error.message)
        }
        
    })

    //ensamblar formulario en div registerView
    registerView.appendChild(registerForm)

    return registerView
}

function buildLoginView() {
    const loginView = document.createElement('div')
    loginView.classList.add('p-20px')

    //logo
    const logoHeading = document.createElement('i')
    const logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    loginView.appendChild(logoHeading)

    //Titulo de la pagina
    const titleLogin = document.createElement('h1')
    const titleLoginText = document.createTextNode('Login')
    titleLogin.appendChild(titleLoginText)
    loginView.appendChild(titleLogin)

    //crear formulario
    const loginForm = document.createElement('form')
    loginForm.classList.add('flex', 'flex-col', 'gap-20px')

    //label & input para username
    const usernameLabel = document.createElement('label')
    usernameLabel.htmlFor = 'username'
    const usernameText = document.createTextNode('Username')
    usernameLabel.appendChild(usernameText)
    const usernameInput = document.createElement('input')
    usernameInput.type = 'text'
    usernameInput.id = 'username'
    usernameInput.name = 'username'
    const usernameField = document.createElement('div')
    usernameField.classList.add('flex', 'flex-col', 'gap-10px')
    usernameField.appendChild(usernameLabel)
    usernameField.appendChild(usernameInput)
    loginForm.appendChild(usernameField)

    //label & input para password
    const passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password'
    const passwordText = document.createTextNode('Password')
    passwordLabel.appendChild(passwordText)
    const passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.id = 'password'
    passwordInput.name = 'password'
    const passwordField = document.createElement('div')
    passwordField.classList.add('flex', 'flex-col', 'gap-10px')
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)
    loginForm.appendChild(passwordField)

    //crear div para poner botones en fila usando flex
    const buttons = document.createElement('div')
    buttons.classList.add('flex', 'justify-between')

    //register link
    const registerLink = document.createElement('a')
    registerLink.href = '#'
    const registerLinkText = document.createTextNode('Register')
    registerLink.appendChild(registerLinkText)
    buttons.appendChild(registerLink)

    registerLink.addEventListener('click', function(event) {
        body.removeChild(loginView)
        body.appendChild(registerView)
    })

    //login button
    const loginButton = document.createElement('button')
    //aplicar estilos al boton
    loginButton.classList.add('black-button')
    const buttonText = document.createTextNode('Login')
    loginButton.appendChild(buttonText)
    loginButton.type = 'submit'
    buttons.appendChild(loginButton)

    //ensamblar buttons div en el formulario
    loginForm.appendChild(buttons)

    //añadir logica submit login
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault()

        const username = usernameInput.value
        const password = passwordInput.value

        try {
            loginUser(username, password)

            //resetear campos formulario con metodo .reset() del DOM para que los datos no se queden en memoria. Se pone despues de que el login se ha hecho correctamente.
            loginForm.reset()

            body.removeChild(loginView)
            body.appendChild(homeView)
            
        } catch (error) {
            alert(error.message)
        }
    })

    //ensamblar formulario en div loginView
    loginView.appendChild(loginForm)

    return loginView
}

function buildHomeView() {
    const homeView = document.createElement('div')
    homeView.classList.add('p-20px')

    //logo
    const logoHeading = document.createElement('i')
    const logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    homeView.appendChild(logoHeading)

    //Titulo de la pagina
    const titleHome = document.createElement('h1')
    const titleHomeText = document.createTextNode('Home')
    titleHome.appendChild(titleHomeText)
    homeView.appendChild(titleHome)

    //hello home
    const headingHome = document.createElement('h2')
    headingHome.classList.add('flex', 'justify-center', 'bold', 'p-20px')
    const headingHomeText = document.createTextNode('Hello, Home!')
    headingHome.appendChild(headingHomeText)
    homeView.appendChild(headingHome)

    //boton logout
    const logoutButton = document.createElement('button')
    logoutButton.classList.add('black-button')
    const logoutText = document.createTextNode('Log out')
    logoutButton.appendChild(logoutText)
    homeView.appendChild(logoutButton)
    logoutButton.addEventListener('click', function(event) {
        body.removeChild(homeView)
        body.appendChild(loginView)
    })

    return homeView
}

//llamar a la funcion y ensamblar los div contenedores de cada xView dentro de body

const landingView = buildLandingView()
body.appendChild(landingView)

const registerView = buildRegisterView()
//body.appendChild(registerView)

const loginView = buildLoginView()
//body.appendChild(loginView)

const homeView = buildHomeView()
//body.appendChild(homeView)

