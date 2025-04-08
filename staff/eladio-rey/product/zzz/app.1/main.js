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
    const passwordText = document.createTextNode('Password')
    passwordLabel.appendChild(passwordText) //voy por la app.7 línea 121 del Manu






    registerView.appendChild(registerForm)


    return registerView
}

//en este bloque de código cargamos las vistas dentro del body
//vamos a llamar a la función buildLandingView y el rersultado (div) lo guardamos en una variable
const landingView = buildLandingView() 
body.appendChild(landingView)

const registerView = buildRegisterView()
body.appendChild(registerView)




