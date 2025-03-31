var body = document.querySelector("body");

function buildLandingView() {
  var landingView = document.createElement("div");

  var logoHeading = document.createElement("h1");
  var logoText = document.createTextNode("Logo");
  logoHeading.classList.add("block");
  logoHeading.appendChild(logoText);
  landingView.appendChild(logoHeading);

  var registerLink = document.createElement("a");
  registerLink.href = "#";
  var registerText = document.createTextNode("Register");
  registerLink.appendChild(registerText);
  landingView.appendChild(registerLink);

  var orText = document.createTextNode(" or ");
  landingView.appendChild(orText);

  var loginLink = document.createElement("a");
  loginLink.href = "#";
  var loginText = document.createTextNode("Login");
  loginLink.appendChild(loginText);
  landingView.appendChild(loginLink);

  return landingView;
}

function buildRegisterView() {
  var registerView = document.createElement("div");

  var logo = document.createElement("i");
  var logoText = document.createTextNode("Logo");
  logo.classList.add("bold");
  logo.appendChild(logoText);
  registerView.appendChild(logo);

  var registerTitle = document.createElement("h1");
  registerTitle.classList.add("bold");
  var registerTitleText = document.createTextNode("Register");
  registerTitle.appendChild(registerTitleText);
  registerView.appendChild(registerTitle);

  var registerForm = document.createElement("form");
  registerForm.classList.add("flex", "flex-col", "gap-20px");
  //Campo Name

  var nameField = document.createElement("div");
  nameField.classList.add("flex", "flex-col", "gap-10px");
  var nameLabel = document.createElement("label");
  nameLabel.htmlFor = "name";
  var nameText = document.createTextNode("Name");
  nameLabel.appendChild(nameText);
  var nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.id = "name";
  nameInput.placeholder = "your name";
  nameField.appendChild(nameLabel);
  nameField.appendChild(nameInput);
  registerForm.appendChild(nameField);

  //Campo E-mail

  var emailField = document.createElement("div");
  emailField.classList.add("flex", "flex-col", "gap-10px");
  var emailLabel = document.createElement("label");
  emailLabel.htmlFor = "email";
  var emailText = document.createTextNode("E-mail");
  emailLabel.appendChild(emailText);

  var emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.id = "email";
  emailInput.placeholder = "your e-mail";

  emailField.appendChild(emailLabel);
  emailField.appendChild(emailInput);
  registerForm.appendChild(emailField);

  //Campo Username

  var usernameField = document.createElement("div");
  usernameField.classList.add("flex", "flex-col", "gap-10px");
  var usernameLabel = document.createElement("label");
  usernameLabel.htmlFor = "username";
  var usernameText = document.createTextNode("Username");
  usernameLabel.appendChild(usernameText);
  var usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.name = "username";
  usernameInput.id = "username";
  usernameInput.placeholder = "your username";

  usernameField.appendChild(usernameLabel);
  usernameField.appendChild(usernameInput);
  registerForm.appendChild(usernameField);

  // campo Password

  var passwordField = document.createElement("div");
  passwordField.classList.add("flex", "flex-col", "gap-10px");
  var passwordLabel = document.createElement("label");
  passwordLabel.htmlFor = "password";
  var passwordText = document.createTextNode("Password");
  passwordLabel.appendChild(passwordText);
  var passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.name = "password";
  passwordInput.id = "password";
  passwordInput.placeholder = "your password";

  passwordField.appendChild(passwordLabel);
  passwordField.appendChild(passwordInput);
  registerForm.appendChild(passwordField);

  //div de botones y login

  var buttons = document.createElement("div");
  buttons.classList.add("flex", "justify-between");
  // Login

  var loginLink = document.createElement("a");
  loginLink.href = "#";
  var loginText = document.createTextNode("Login");
  loginLink.appendChild(loginText);
  buttons.appendChild(loginLink);

  loginLink.addEventListener("click", function (event) {
    body.removeChild(registerView);
    body.appendChild(loginView);
  });

  //boton registro

  var submitButton = document.createElement("button");
  submitButton.classList.add("black-button");
  submitButton.type = "submit";
  var submitText = document.createTextNode("Register");
  submitButton.appendChild(submitText);
  buttons.appendChild(submitButton);

  registerForm.appendChild(buttons);

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const username = usernameInput.value;
    const password = passwordInput.value;

    try {
      registerUser(name, email, username, password);

      body.removeChild(registerView);
      body.appendChild(loginView);
    } catch (error) {
      alert(error.message);
    }
  });

  // TODO finish register view

  registerView.appendChild(registerForm);

  return registerView;
}

function buildLoginView() {
  var buildLoginView = document.createElement("div");

  //Logo

  var logoHeading = document.createElement("i");
  logoHeading.classList.add("bold");
  var logoText = document.createTextNode("Logo");
  logoHeading.appendChild(logoText);
  buildLoginView.appendChild(logoHeading);

  //Login Title

  var loginTitle = document.createElement("h1");
  loginTitle.classList.add("bold");
  var loginTitleText = document.createTextNode("Login");
  loginTitle.appendChild(loginTitleText);
  buildLoginView.appendChild(loginTitle);

  // register Form

  var registerForm = document.createElement("form");
  registerForm.classList.add("flex", "flex-col", "gap-20px");

  //Campo Nombre
  var usernameField = document.createElement("div");
  usernameField.classList.add("flex", "flex-col", "gap-10px");
  var usernameLabel = document.createElement("label");
  usernameLabel.htmlFor = "username";
  var usernameText = document.createTextNode("Username");
  usernameLabel.appendChild(usernameText);
  var usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.name = "username";
  usernameInput.placeholder = "nombre de usuario";
  usernameField.appendChild(usernameLabel);
  usernameField.appendChild(usernameInput);
  registerForm.appendChild(usernameField);

  //Campo Password

  var passwordField = document.createElement("div");
  passwordField.classList.add("flex", "flex-col", "gap-10px");
  var passwordLabel = document.createElement("label");
  passwordLabel.htmlFor = "password";
  var passwordText = document.createTextNode("Password");
  passwordLabel.appendChild(passwordText);
  var passwordInput = document.createElement("Input");
  passwordInput.type = "password";
  passwordInput.name = "password";
  passwordInput.placeholder = "your password";

  passwordField.appendChild(passwordLabel);
  passwordField.appendChild(passwordInput);
  registerForm.appendChild(passwordField);

  //Contenedor registro y botones

  var containerRegisterLogin = document.createElement("div");
  containerRegisterLogin.classList.add("flex", "justify-between");

  //Register Link

  var registerLink = document.createElement("a");
  registerLink.href = "#";
  var registerText = document.createTextNode("Register");
  registerLink.appendChild(registerText);
  containerRegisterLogin.appendChild(registerLink);

  registerLink.addEventListener("click", function (event) {
    body.removeChild(loginView);
    body.appendChild(registerView);
  });

  //Boton Login

  var loginButton = document.createElement("button");
  loginButton.type = "submit";
  loginButton.classList.add("black-button");
  var loginButtonText = document.createTextNode("Login");
  loginButton.appendChild(loginButtonText);

  loginButton.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;
    var status = false;

    try {
      loginUser(username, password, status);

      if (status === true) {
        body.removeChild(loginView);
        body.appendChild(homeView);
      }
    } catch (error) {
      alert(error.message);
    }
  });
  containerRegisterLogin.appendChild(loginButton);

  registerForm.appendChild(containerRegisterLogin);

  buildLoginView.appendChild(registerForm);

  return buildLoginView;
}

function buildHomeView() {
  var buildHomeView = document.createElement("div");

  //Create Logo

  var logoHeading = document.createElement("h1");
  var logoText = document.createTextNode("Logo");
  logoHeading.appendChild(logoText);

  buildHomeView.appendChild(logoHeading);

  //Create Hello message

  var helloMessage = document.createElement("div");
  var helloMessageText = document.createTextNode("Hello, Home!");
  helloMessage.appendChild(helloMessageText);

  buildHomeView.appendChild(helloMessage);

  return buildHomeView;

  //TODO Home view
}

var landingView = buildLandingView();
// body.appendChild(landingView);

var registerView = buildRegisterView();
// body.appendChild(registerView);

var loginView = buildLoginView();
body.appendChild(loginView);

var homeView = buildHomeView();
// body.appendChild(homeView);
