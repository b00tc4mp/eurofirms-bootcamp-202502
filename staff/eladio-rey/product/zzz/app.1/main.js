// Accedemos al <body> del HTML
const body = document.querySelector('body');

// Función que crea la vista principal (Landing)
function buildLandingView() {
    const landingView = document.createElement('div');
    landingView.classList.add('p-20px');

    // Crear el logo
    const logo = document.createElement('i');
    logo.classList.add('block');
    const logoText = document.createTextNode('Mi Logo');
    logo.appendChild(logoText);
    landingView.appendChild(logo);

    // Link a Register
    const registerLink = document.createElement('a');
    registerLink.href = '#';
    const registerText = document.createTextNode('Register');
    registerLink.appendChild(registerText);
    landingView.appendChild(registerLink);

    // Evento para cargar la vista de registro
    registerLink.addEventListener('click', function () {
        body.removeChild(landingView);
        let registerView = buildRegisterView();
        body.appendChild(registerView);
    });

    // Separador
    const orText = document.createTextNode(' or ');
    landingView.appendChild(orText);

    // Link a Login (todavía sin funcionalidad)
    const logingLink = document.createElement('a');
    logingLink.href = '#';
    const logingText = document.createTextNode('Login');
    logingLink.appendChild(logingText);
    landingView.appendChild(logingLink);

    return landingView;
}

// Función que crea la vista de registro
function buildRegisterView() {
    const registerView = document.createElement('div');
    registerView.classList.add('p-20px');

    // Logo
    const logo = document.createElement('i');
    const logoText = document.createTextNode('Mi Logo');
    logo.appendChild(logoText);
    registerView.appendChild(logo);

    // Título
    const registerTitle = document.createElement('h1');
    const registerText = document.createTextNode('Register');
    registerTitle.appendChild(registerText);
    registerView.appendChild(registerTitle);

    // Formulario
    const registerForm = document.createElement('form');
    registerForm.classList.add('flex', 'flex-col', 'gap-20px');

    // Campo Nombre
    const nameField = document.createElement('div');
    nameField.classList.add('flex', 'flex-col', 'gap-10px');
    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'name';
    nameLabel.appendChild(document.createTextNode('Name'));
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';
    nameInput.placeholder = 'Todo tu nombre';
    nameField.appendChild(nameLabel);
    nameField.appendChild(nameInput);
    registerForm.appendChild(nameField);

    // Campo Email
    const emailField = document.createElement('div');
    emailField.classList.add('flex', 'flex-col', 'gap-10px');
    const emailLabel = document.createElement('label');
    emailLabel.htmlFor = 'email';
    const emailText = document.createTextNode('E-mail');
    emailLabel.appendChild(emailText);
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'your e-mail';
    emailField.appendChild(emailLabel);
    emailField.appendChild(emailInput);
    registerForm.appendChild(emailField);

    // Campo Username
    const usernameField = document.createElement('div');
    usernameField.classList.add('flex', 'flex-col', 'gap-10px');
    const usernameLabel = document.createElement('label');
    usernameLabel.htmlFor = 'username';
    const usernameText = document.createTextNode('Username');
    usernameLabel.appendChild(usernameText);
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.id = 'username';
    usernameInput.name = 'username';
    usernameInput.placeholder = 'elige un nombre de usuario';
    usernameField.appendChild(usernameLabel);
    usernameField.appendChild(usernameInput);
    registerForm.appendChild(usernameField);

    // Campo Contraseña (pendiente de terminar)
    const passwordField = document.createElement('div');
    passwordField.classList.add('flex', 'flex-col', 'gap-10px');
    const passwordLabel = document.createElement('label');
    passwordLabel.htmlFor = 'password';
    passwordLabel.appendChild(document.createTextNode('password'))
    const passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.id = 'password'
    passwordInput.name = 'password'
    passwordInput.placeholder = 'your password'
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordinput)
    loginForm.appendChild(passwordField)

/* Botones */
const buttons = document.createElement('div')
buttons.classList.add('flex', 'justify-between')

const registerLink = document.createElement('a')
registerLink.href = '#'
registerLink.appendChield(document.createTextNode('Register'))
registerLink.addEventListener('click', event => {
    body.removeChild(loginView)
    body.appendChild(registerView)
})

const submitButton = document.createElement('button')
submitButton.classList.add('black-button')
submitButton.type= 'submit'
submitButton.appendChild(registerLink)
buttons.appendChild(submitButton)
loginForm.appendChild(buttons)

/* Evento Login */

loginForm.addEventListener('submit', event => {
    event.perventDefault()
    const username = usernameInput.value
    const password = passwordInput.value

    try {
        loginUser(username, password)
        loginForm.reset()
        body.removeChild(logingView)
        body.appendChild(homeView)
    } catch (error) {
        alert(error.message)  
    }
})

loginView.appendChild(loginForm)
return loginView

/* HOME VIEW (vista principal tras login) */
const homeView = document.createElement('div')
homeView.classList.add('p-20px')

const logo = document.createElement('i')
logo.appendChild(document.createTextNode('logo'))
homeView.appendChild(logo)

const homeTitle = document.createElement('h1')
homeTitle.appendChild(document.createTextNode('Hello, World!'))
homeView.appendChild(homeTitle)

const logoutButton = document.createElement('button')
logoutButton.classList.add('black-button')
logoutButton.appendChild(document.createTextNode('Logout'))
logoutButton.addEventListerner('click', event => {
    body.removeChild(homeView)
})

homeView.appendChild(logoutButton)
return homeView
}

/* Inicialización de vistas */
const landingView = buildLandingView()
body.appendChild(landingView) // Se inicia con la vista de bienvenida

const registerView = buildRegisterView()
const loginView = buildLoginView()
const homeView = buildHomeView()

