var body = document.querySelector('body');
function buildLandingView() {

  var landingView = document.createElement('div');

  var logoHeading = document.createElement('h1');
  var logoText = document.createTextNode('Logo');
  logoHeading.appendChild(logoText);
  landingView.appendChild(logoHeading);

  var registerLink = document.createElement('a');
  registerLink.href = '#';
  var registerLinkText = document.createTextNode('Register');
  registerLink.appendChild(registerLinkText);
  landingView.appendChild(registerLink);

  registerLink.addEventListener("click", function (event) {
    body.removeChild(landingView)
    body.appendChild(registerView)
  })
  var orText = document.createTextNode(' or ');
  landingView.appendChild(orText);

  var loginLink = document.createElement('a');
  loginLink.href = '#';
  var loginLinkText = document.createTextNode('Login');
  loginLink.appendChild(loginLinkText);
  landingView.appendChild(loginLink);
  loginLink.addEventListener("click", function (event) {
    body.removeChild(landingView)
    body.appendChild(loginView)
  })

  return landingView;
}

function buildRegisterView() {
  var registerView = document.createElement('div');
  var logoHeading = document.createElement('i');
  var logoText = document.createTextNode('Logo');
  logoHeading.appendChild(logoText);
  registerView.appendChild(logoHeading);

  var registerTittle = document.createElement("h1")
  var linkRegisterTittleText = document.createTextNode("Register Page")
  registerTittle.appendChild(linkRegisterTittleText)
  registerView.appendChild(registerTittle)

  var registerForm = document.createElement('form');

  //----------Insercion de elementos en el elemento div del formulario (div del nombre)------

  var nameField = document.createElement('div');
  var nameLabel = document.createElement('label');
  nameLabel.htmlFor = 'name';
  var nameLabelText = document.createTextNode('Name ');
  nameLabel.appendChild(nameLabelText);
  var nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'name';
  nameField.appendChild(nameLabel);
  nameField.appendChild(nameInput);
  registerForm.appendChild(nameField);
  //----------Insercion de elementos en el elemento div del formulario (div del email)------
  var emailField = document.createElement('div');
  var emailLabel = document.createElement('label');
  emailLabel.htmlFor = 'email';
  var emailLabelText = document.createTextNode('Email ');
  emailLabel.appendChild(emailLabelText);
  var emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = 'email';
  emailField.appendChild(emailLabel);
  emailField.appendChild(emailInput);
  registerForm.appendChild(emailField);

  //----------Insercion de elementos en el elemento div del formulario (div del username)------

  var usernameField = document.createElement('div');
  var usernameLabel = document.createElement('label');
  usernameLabel.htmlFor = 'username';
  var usernameLabelText = document.createTextNode('Username ');
  usernameLabel.appendChild(usernameLabelText);
  var usernameInput = document.createElement('input');
  usernameInput.type = 'text';
  usernameInput.name = 'username';
  usernameField.appendChild(usernameLabel);
  usernameField.appendChild(usernameInput);
  registerForm.appendChild(usernameField);
  registerView.appendChild(registerForm);

  //----------Insercion de elementos en el elemento div del formulario (div del password)------

  var passwordField = document.createElement('div');
  var passwordLabel = document.createElement('label');
  passwordLabel.htmlFor = 'password';
  var passwordLabelText = document.createTextNode('Password ');
  passwordLabel.appendChild(passwordLabelText);
  var passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.name = 'password';
  passwordField.appendChild(passwordLabel);
  passwordField.appendChild(passwordInput);
  registerForm.appendChild(passwordField);

  //----------Insercion de elementos link a pagina login

  var loginLink = document.createElement('a');
  loginLink.href = '#';
  var loginLinkText = document.createTextNode('Login  ');
  loginLink.appendChild(loginLinkText);
  registerForm.appendChild(loginLink);

  loginLink.addEventListener("click", function (event) {
    body.removeChild(registerView)
    body.appendChild(loginView)
  })
  //-----------Insercion de elementos boton de registro

  var submitButton = document.createElement('button');
  var submitButtonText = document.createTextNode('Register ');
  submitButton.appendChild(submitButtonText);
  registerForm.appendChild(submitButton);

  return registerView;
}
function buildLoginView() {
  var loginView = document.createElement('div');
  var logoHeading = document.createElement('h1');
  var logoText = document.createTextNode('Logo');
  logoHeading.appendChild(logoText);
  loginView.appendChild(logoHeading);

  //----------Insercion de elementos en el elemento div del formulario (div del username)------

  var usernameField = document.createElement('div');
  var usernameLabel = document.createElement('label');
  usernameLabel.htmlFor = 'username';
  var usernameLabelText = document.createTextNode('Username ');
  usernameLabel.appendChild(usernameLabelText);
  var usernameInput = document.createElement('input');
  usernameInput.type = 'text';
  usernameInput.name = 'username';
  usernameField.appendChild(usernameLabel);
  usernameField.appendChild(usernameInput);
  loginView.appendChild(usernameField);

  //----------Insercion de elementos en el elemento div del formulario (div del password)------

  var passwordField = document.createElement('div');
  var passwordLabel = document.createElement('label');
  passwordLabel.htmlFor = 'password';
  var passwordLabelText = document.createTextNode('Password ');
  passwordLabel.appendChild(passwordLabelText);
  var passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.name = 'password';
  passwordField.appendChild(passwordLabel);
  passwordField.appendChild(passwordInput);
  loginView.appendChild(passwordField);

  //----------Insercion de elementos boton de registro

  var linkRegister = document.createElement('a');
  linkRegister.href = "#"
  var linkRegisterText = document.createTextNode('Register');
  linkRegister.appendChild(linkRegisterText);
  loginView.appendChild(linkRegister);

  linkRegister.addEventListener("click", function (event) {
    body.removeChild(loginView)
    body.appendChild(registerView)
  })

  //----------Insercion de elementos boton de login

  var buttonLogin = document.createElement('button');
  var buttonSubmitText = document.createTextNode('Login');
  buttonLogin.appendChild(buttonSubmitText);
  loginView.appendChild(buttonLogin);

  return loginView;
}
function buildHomeView() {
  var homeView = document.createElement('div');
  var logoHeading = document.createElement('h1');
  var logoText = document.createTextNode('Logo');
  logoHeading.appendChild(logoText);
  homeView.appendChild(logoHeading);
  var text = document.createTextNode('Hola Mundo');
  homeView.appendChild(text);
  return homeView;
}
var landingView = buildLandingView();

var registerView = buildRegisterView();

var loginView = buildLoginView();

var homeView = buildHomeView();

//body.appendChild(landingView);


//body.appendChild(loginView);

//body.appendChild(homeView);

body.appendChild(registerView);
