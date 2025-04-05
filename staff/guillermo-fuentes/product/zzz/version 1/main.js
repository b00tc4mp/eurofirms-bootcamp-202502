var body = document.querySelector('body');
const buildLandingView = () => {
  //--------------Insercion de logotipo
  var landingView = document.createElement('div');
  var logo = document.createElement('i');
  var logoText = document.createTextNode('Logo');
  logo.appendChild(logoText);
  landingView.appendChild(logo);
  //-----------------------Insercion titulo----------------
  var title = document.createElement('h1');
  var titleText = document.createTextNode('Welcome to the App');
  title.appendChild(titleText);
  landingView.appendChild(title);
  //------------------Insercion enlace registro
  var registerLink = document.createElement('a');

  registerLink.href = '#';

  var registerLinkText = document.createTextNode('Register');
  registerLink.appendChild(registerLinkText);
  landingView.appendChild(registerLink);
  registerLink.addEventListener('click', (event) => {
    body.removeChild(landingView);
    body.appendChild(registerView);
  });
  var orText = document.createTextNode(' or ');
  landingView.appendChild(orText);
  //-----------------insercion login link
  var loginLink = document.createElement('a');
  loginLink.href = '#';
  var loginLinkText = document.createTextNode('Login');
  loginLink.appendChild(loginLinkText);
  landingView.appendChild(loginLink);
  loginLink.addEventListener('click', (event) => {
    body.removeChild(landingView);
    body.appendChild(loginView);
  });
  return landingView;
};

const buildRegisterView = () => {
  var registerView = document.createElement('div');
  var logoHeading = document.createElement('i');
  var logoText = document.createTextNode('Logo');
  logoHeading.appendChild(logoText);
  registerView.appendChild(logoHeading);
  var title = document.createElement('h1');
  var titleText = document.createTextNode('Register');
  title.appendChild(titleText);
  registerView.appendChild(title);
  var registerForm = document.createElement('form');
  registerForm.classList.add('flex', 'flex-col', 'gap-20px');
  //----------Insercion de elementos en el elemento div del formulario (div del nombre)------
  var nameField = document.createElement('div');
  nameField.classList.add('flex', 'flex-col');
  var nameLabel = document.createElement('label');
  nameLabel.htmlFor = 'name';
  var nameLabelText = document.createTextNode('Name ');
  nameLabel.appendChild(nameLabelText);
  var nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'name';
  nameInput.placeholder = ' your name';
  nameField.appendChild(nameLabel);
  nameField.appendChild(nameInput);
  registerForm.appendChild(nameField);
  //----------Insercion de elementos en el elemento div del formulario (div del email)------
  var emailField = document.createElement('div');
  emailField.classList.add('flex', 'flex-col');
  var emailLabel = document.createElement('label');
  emailLabel.htmlFor = 'email';
  var emailLabelText = document.createTextNode('Email ');
  emailLabel.appendChild(emailLabelText);
  var emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = 'email';
  emailInput.placeholder = ' your email';
  emailField.appendChild(emailLabel);
  emailField.appendChild(emailInput);
  registerForm.appendChild(emailField);
  //----------Insercion de elementos en el elemento div del formulario (div del username)------
  var usernameField = document.createElement('div');
  usernameField.classList.add('flex', 'flex-col');
  var usernameLabel = document.createElement('label');
  usernameLabel.htmlFor = 'username';
  var usernameLabelText = document.createTextNode('Username ');
  usernameLabel.appendChild(usernameLabelText);
  var usernameInput = document.createElement('input');
  usernameInput.type = 'text';
  usernameInput.name = 'username';
  usernameInput.placeholder = ' your username';
  usernameField.appendChild(usernameLabel);
  usernameField.appendChild(usernameInput);
  registerForm.appendChild(usernameField);
  registerView.appendChild(registerForm);
  //----------Insercion de elementos en el elemento div del formulario (div del password)------
  var passwordField = document.createElement('div');
  passwordField.classList.add('flex', 'flex-col');
  var passwordLabel = document.createElement('label');
  passwordLabel.htmlFor = 'password';
  var passwordLabelText = document.createTextNode('Password ');
  passwordLabel.appendChild(passwordLabelText);
  var passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.name = 'password';
  passwordInput.placeholder = ' your password';
  passwordField.appendChild(passwordLabel);
  passwordField.appendChild(passwordInput);
  registerForm.appendChild(passwordField);
  //----------Insercion de elementos link a pagina login
  var buttons = document.createElement('div');
  buttons.classList.add('flex', 'justify-between');
  var loginLink = document.createElement('a');
  loginLink.href = '#';
  var loginLinkText = document.createTextNode('Login  ');
  loginLink.appendChild(loginLinkText);
  buttons.appendChild(loginLink);
  loginLink.addEventListener('click', function (event) {
    body.removeChild(registerView);
    body.appendChild(loginView);
  });
  //-----------Insercion de elementos boton de registro
  var submitButton = document.createElement('button');
  var submitButtonText = document.createTextNode('Register ');
  submitButton.appendChild(submitButtonText);
  buttons.appendChild(submitButton);

  registerForm.appendChild(buttons);
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = nameInput.value;
    const username = usernameInput.value;
    const password = passwordInput.value;
    const email = emailInput.value;
    // console.log(name, username, password, email);
    try {
      registerUser(name, email, username, password);
      registerForm.reset();
      body.removeChild(registerView);
      body.appendChild(loginView);
    } catch (error) {
      alert(error.message);
    }
  });
  return registerView;
};
const buildLoginView = () => {
  var loginView = document.createElement('div');

  var title = document.createElement('h1');
  var titleText = document.createTextNode('Login');
  title.appendChild(titleText);
  loginView.appendChild(title);
  var loginForm = document.createElement('form');
  loginForm.classList.add('flex', 'flex-col', 'gap-20px');
  //----------Insercion de elementos en el elemento div del formulario (div del username)------
  var usernameField = document.createElement('div');
  usernameField.classList.add('flex', 'flex-col');
  var usernameLabel = document.createElement('label');
  usernameLabel.htmlFor = 'username';
  var usernameLabelText = document.createTextNode('Username ');
  usernameLabel.appendChild(usernameLabelText);
  var usernameInput = document.createElement('input');
  usernameInput.type = 'text';
  usernameInput.name = 'username';
  usernameInput.placeholder = ' your username';
  usernameField.appendChild(usernameLabel);
  usernameField.appendChild(usernameInput);

  loginForm.appendChild(usernameField);
  //----------Insercion de elementos en el elemento div del formulario (div del password)------
  var passwordField = document.createElement('div');
  passwordField.classList.add('flex', 'flex-col');
  var passwordLabel = document.createElement('label');
  passwordLabel.htmlFor = 'password';
  var passwordLabelText = document.createTextNode('Password ');
  passwordLabel.appendChild(passwordLabelText);
  var passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.name = 'password';
  passwordInput.placeholder = ' your password';
  passwordField.appendChild(passwordLabel);
  passwordField.appendChild(passwordInput);
  loginForm.appendChild(passwordField);
  //----------Insercion de elementos boton de registro
  var buttons = document.createElement('div');
  buttons.classList.add('flex', 'justify-between');
  var linkRegister = document.createElement('a');
  linkRegister.href = '#';
  var buttonRegisterText = document.createTextNode('Register');
  linkRegister.appendChild(buttonRegisterText);
  buttons.appendChild(linkRegister);
  linkRegister.addEventListener('click', (event) => {
    body.removeChild(loginView);
    body.appendChild(registerView);
  });
  //----------Insercion de elementos login boton
  var linkLogin = document.createElement('button');

  var linkLoginText = document.createTextNode('Login');
  linkLogin.appendChild(linkLoginText);
  buttons.appendChild(linkLogin);

  loginForm.appendChild(buttons);

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    try {
      loginUser(username, password);
      loginForm.reset();
      body.removeChild(loginView);
      body.appendChild(homeView);
    } catch (error) {
      alert(error.message);
    }
  });

  loginView.appendChild(loginForm);
  return loginView;
};
const buildHomeView = () => {
  var homeView = document.createElement('div');
  var logoHeading = document.createElement('h1');
  var logoText = document.createTextNode('Welcome');
  logoHeading.appendChild(logoText);
  homeView.appendChild(logoHeading);
  var text = document.createTextNode('Hola Mundo');

  homeView.appendChild(text);
  var button = document.createElement('button');
  var buttonText = document.createTextNode('Logout');
  button.appendChild(buttonText);
  homeView.appendChild(button);
  button.addEventListener('click', function (event) {
    body.removeChild(homeView);
    body.appendChild(loginView);
  });
  return homeView;
};
var landingView = buildLandingView();
var registerView = buildRegisterView();
var loginView = buildLoginView();
var homeView = buildHomeView();
body.appendChild(landingView);
// body.appendChild(registerView);
// body.appendChild(loginView);
// body.appendChild(homeView);
