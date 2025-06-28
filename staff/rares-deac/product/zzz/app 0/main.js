const body = document.querySelector("body");

function buildLandingView() {
  const landingView = document.createElement("div");

  const logoHeading = document.createElement("h1");
  const logoText = document.createTextNode("Logo");
  logoHeading.classList.add("block");
  logoHeading.appendChild(logoText);
  landingView.appendChild(logoHeading);

  const registerLink = document.createElement("a");
  registerLink.href = "#";
  const registerText = document.createTextNode("Register");
  registerLink.appendChild(registerText);
  landingView.appendChild(registerLink);
  registerLink.addEventListener('click', function (event) {
    body.removeChild(landingView);
    body.appendChild(registerView);

  })

  const orText = document.createTextNode(" or ");
  landingView.appendChild(orText);

  const loginLink = document.createElement("a");
  loginLink.href = "#";
  const loginText = document.createTextNode("Login");
  loginLink.appendChild(loginText);
  landingView.appendChild(loginLink);

  loginLink.addEventListener('click', function (event) {
    body.removeChild(landingView);
    body.appendChild(loginView);
  })

  return landingView;
}

function buildRegisterView() {
  const registerView = document.createElement("div");

  const logo = document.createElement("i");
  const logoText = document.createTextNode("Logo");
  logo.classList.add("bold");
  logo.appendChild(logoText);
  registerView.appendChild(logo);

  const registerTitle = document.createElement("h1");
  registerTitle.classList.add("bold");
  const registerTitleText = document.createTextNode("Register");
  registerTitle.appendChild(registerTitleText);
  registerView.appendChild(registerTitle);

  const registerForm = document.createElement("form");
  registerForm.classList.add("flex", "flex-col", "gap-20px");
  //Campo Name

  const nameField = document.createElement("div");
  nameField.classList.add("flex", "flex-col", "gap-10px");
  const nameLabel = document.createElement("label");
  nameLabel.htmlFor = "name";
  const nameText = document.createTextNode("Name");
  nameLabel.appendChild(nameText);
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.id = "name";
  nameInput.placeholder = "your name";
  nameField.appendChild(nameLabel);
  nameField.appendChild(nameInput);
  registerForm.appendChild(nameField);

  //Campo E-mail

  const emailField = document.createElement("div");
  emailField.classList.add("flex", "flex-col", "gap-10px");
  const emailLabel = document.createElement("label");
  emailLabel.htmlFor = "email";
  const emailText = document.createTextNode("E-mail");
  emailLabel.appendChild(emailText);

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.id = "email";
  emailInput.placeholder = "your e-mail";

  emailField.appendChild(emailLabel);
  emailField.appendChild(emailInput);
  registerForm.appendChild(emailField);

  //Campo Username

  const usernameField = document.createElement("div");
  usernameField.classList.add("flex", "flex-col", "gap-10px");
  const usernameLabel = document.createElement("label");
  usernameLabel.htmlFor = "username";
  const usernameText = document.createTextNode("Username");
  usernameLabel.appendChild(usernameText);
  const usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.name = "username";
  usernameInput.id = "username";
  usernameInput.placeholder = "your username";

  usernameField.appendChild(usernameLabel);
  usernameField.appendChild(usernameInput);
  registerForm.appendChild(usernameField);

  // campo Password

  const passwordField = document.createElement("div");
  passwordField.classList.add("flex", "flex-col", "gap-10px");
  const passwordLabel = document.createElement("label");
  passwordLabel.htmlFor = "password";
  const passwordText = document.createTextNode("Password");
  passwordLabel.appendChild(passwordText);
  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.name = "password";
  passwordInput.id = "password";
  passwordInput.placeholder = "your password";

  passwordField.appendChild(passwordLabel);
  passwordField.appendChild(passwordInput);
  registerForm.appendChild(passwordField);

  //div de botones y login

  const buttons = document.createElement("div");
  buttons.classList.add("flex", "justify-between");
  // Login

  const loginLink = document.createElement("a");
  loginLink.href = "#";
  const loginText = document.createTextNode("Login");
  loginLink.appendChild(loginText);
  buttons.appendChild(loginLink);

  loginLink.addEventListener("click", function (event) {
    body.removeChild(registerView);
    body.appendChild(loginView);
  });

  //boton registro

  const submitButton = document.createElement("button");
  submitButton.classList.add("black-button");
  submitButton.type = "submit";
  const submitText = document.createTextNode("Register");
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
      registerForm.reset();

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
  const buildLoginView = document.createElement("div");

  //Logo

  const logoHeading = document.createElement("i");
  logoHeading.classList.add("bold");
  const logoText = document.createTextNode("Logo");
  logoHeading.appendChild(logoText);
  buildLoginView.appendChild(logoHeading);

  //Login Title

  const loginTitle = document.createElement("h1");
  loginTitle.classList.add("bold");
  const loginTitleText = document.createTextNode("Login");
  loginTitle.appendChild(loginTitleText);
  buildLoginView.appendChild(loginTitle);

  // register Form

  const loginForm = document.createElement("form");
  loginForm.classList.add("flex", "flex-col", "gap-20px");

  //Campo Nombre
  const usernameField = document.createElement("div");
  usernameField.classList.add("flex", "flex-col", "gap-10px");
  const usernameLabel = document.createElement("label");
  usernameLabel.htmlFor = "username";
  const usernameText = document.createTextNode("Username");
  usernameLabel.appendChild(usernameText);
  const usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.name = "username";
  usernameInput.placeholder = "nombre de usuario";
  usernameField.appendChild(usernameLabel);
  usernameField.appendChild(usernameInput);
  loginForm.appendChild(usernameField);

  //Campo Password

  const passwordField = document.createElement("div");
  passwordField.classList.add("flex", "flex-col", "gap-10px");
  const passwordLabel = document.createElement("label");
  passwordLabel.htmlFor = "password";
  const passwordText = document.createTextNode("Password");
  passwordLabel.appendChild(passwordText);
  const passwordInput = document.createElement("Input");
  passwordInput.type = "password";
  passwordInput.name = "password";
  passwordInput.placeholder = "your password";

  passwordField.appendChild(passwordLabel);
  passwordField.appendChild(passwordInput);
  loginForm.appendChild(passwordField);

  //Contenedor registro y botones

  const containerRegisterLogin = document.createElement("div");
  containerRegisterLogin.classList.add("flex", "justify-between");

  //Register Link

  const registerLink = document.createElement("a");
  registerLink.href = "#";
  const registerText = document.createTextNode("Register");
  registerLink.appendChild(registerText);
  containerRegisterLogin.appendChild(registerLink);

  registerLink.addEventListener("click", function (event) {
    body.removeChild(loginView);
    body.appendChild(registerView);
  });

  //Boton Login

  const loginButton = document.createElement("button");
  loginButton.type = "submit";
  loginButton.classList.add("black-button");
  const loginButtonText = document.createTextNode("Login");
  loginButton.appendChild(loginButtonText);

  loginForm.addEventListener("submit", function (event) {
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
  containerRegisterLogin.appendChild(loginButton);

  loginForm.appendChild(containerRegisterLogin);

  buildLoginView.appendChild(loginForm);

  return buildLoginView;
}

function buildHomeView() {
  const buildHomeView = document.createElement("div");

  //Create Logo

  const logoHeading = document.createElement("h1");
  const logoText = document.createTextNode("Logo");
  logoHeading.appendChild(logoText);

  buildHomeView.appendChild(logoHeading);

  //Create Hello message

  const helloMessage = document.createElement("div");
  const helloMessageText = document.createTextNode("Hello, Home!");
  helloMessage.appendChild(helloMessageText);

  buildHomeView.appendChild(helloMessage);

  return buildHomeView;

  //TODO Home view
}

const landingView = buildLandingView();
body.appendChild(landingView);

const registerView = buildRegisterView();
// body.appendChild(registerView);

const loginView = buildLoginView();
// body.appendChild(loginView);

const homeView = buildHomeView();
// body.appendChild(homeView);
