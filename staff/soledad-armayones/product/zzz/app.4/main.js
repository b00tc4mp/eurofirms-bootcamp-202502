var body = document.querySelector('body')

function buildLandingView() {
  var landingView = document.createElement('div')

  var logo = document.createElement('i')
  var logoText = document.createTextNode('Logo')
  logo.appendChild(logoText)
  landingView.appendChild(logo)

  var registerLink = document.createElement('a')
  registerLink.href = '#'
  var registerText = document.createTextNode('Register')
  registerLink.appendChild(registerText)
  landingView.appendChild(registerLink)

  var orText = document.createTextNode(' or ')
  landingView.appendChild(orText)

  var loginLink = document.createElement('a')
  loginLink.href = '#'
  var loginText = document.createTextNode('Login')
  loginLink.appendChild(loginText)
  landingView.appendChild(loginLink)

  return landingView
}

function buildRegisterView() {
  var registerView = document.createElement('div')

  var logo = document.createElement('i')
  var logoText = document.createTextNode('Logo')
  logo.appendChild(logoText)
  registerView.appendChild(logo)

  var registerTitle = document.createElement('h1')
  var registerText = document.createTextNode('Register')
  registerTitle.appendChild(registerText)
  registerView.appendChild(registerTitle)

  var registerForm = document.createElement('form')

  var nameField = document.createElement('div')
  var nameLabel = document.createElement('label')
  nameLabel.htmlFor = 'name'
  var nameText = document.createTextNode('Name')
  nameLabel.appendChild(nameText)
  nameField.appendChild(nameLabel)
  var nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.id = 'name'
  nameInput.name = 'name'
  nameInput.placeholder = 'your full name'
  nameField.appendChild(nameInput)
  registerForm.appendChild(nameField)

  var emailField = document.createElement('div')
  var emailLabel = document.createElement('label')
  emailLabel.htmlFor = 'email'
  var emailText = document.createTextNode('E-mail')
  emailLabel.appendChild(emailText)
  emailField.appendChild(emailLabel)
  var emailInput = document.createElement('input')
  emailInput.type = 'email'
  emailInput.id = 'email'
  emailInput.name = 'email'
  emailInput.placeholder = 'your e-mail'
  emailField.appendChild(emailInput)
  registerForm.appendChild(emailField)

  var usernameField = document.createElement('div')
  var usernameLabel = document.createElement('label')
  usernameLabel.htmlFor = 'username'
  var usernameText = document.createTextNode('Username')
  usernameLabel.appendChild(usernameText)
  usernameField.appendChild(usernameLabel)
  var usernameInput = document.createElement('input')
  usernameInput.type = 'text'
  usernameInput.id = 'username'
  usernameInput.name = 'username'
  usernameInput.placeholder = 'your username'
  usernameField.appendChild(usernameInput)
  registerForm.appendChild(usernameField)

  var passwordField = document.createElement('div')
  var passwordLabel = document.createElement('label')
  passwordLabel.htmlFor = 'password'
  var passwordText = document.createTextNode('password')
  passwordLabel.appendChild(passwordText)
  passwordField.appendChild(passwordLabel)
  var passwordInput = document.createElement('input')
  passwordInput.type = 'password'
  passwordInput.id = 'password'
  passwordInput.name = 'password'
  passwordInput.placeholder = 'your password'
  passwordField.appendChild(passwordInput)
  registerForm.appendChild(passwordField)

  var loginLink = document.createElement('a')
  loginLink.href = '#'
  var loginText = document.createTextNode('Login')
  loginLink.appendChild(loginText)
  registerForm.appendChild(loginLink)

  var submitButton = document.createElement('button')
  submitButton.type = 'submit'
  var submitText = document.createTextNode('Register')
  submitButton.appendChild(submitText)
  registerForm.appendChild(submitButton)

  registerView.appendChild(registerForm)

  return registerView
}

function buildLoginView() {
  var loginView = document.createElement('div')

  var logo = document.createElement('i')
  var logoText = document.createTextNode('Logo')
  logo.appendChild(logoText)
  loginView.appendChild(logo)

  var loginTitle = document.createElement('h1')
  var loginText = document.createTextNode('Login')
  loginTitle.appendChild(loginText)
  loginView.appendChild(loginTitle)

  var loginForm = document.createElement('form')

  var usernameField = document.createElement('div')
  var usernameLabel = document.createElement('label')
  usernameLabel.htmlFor = 'username'
  var usernameText = document.createTextNode('Username')
  usernameLabel.appendChild(usernameText)
  usernameField.appendChild(usernameLabel)
  var usernameInput = document.createElement('input')
  usernameInput.type = 'text'
  usernameInput.id = 'username'
  usernameInput.name = 'username'
  usernameInput.placeholder = 'your username'
  usernameField.appendChild(usernameInput)
  loginForm.appendChild(usernameField)

  var passwordField = document.createElement('div')
  var passwordLabel = document.createElement('label')
  passwordLabel.htmlFor = 'password'
  var passwordText = document.createTextNode('password')
  passwordLabel.appendChild(passwordText)
  passwordField.appendChild(passwordLabel)
  var passwordInput = document.createElement('input')
  passwordInput.type = 'password'
  passwordInput.id = 'password'
  passwordInput.name = 'password'
  passwordInput.placeholder = 'your password'
  passwordField.appendChild(passwordInput)
  loginForm.appendChild(passwordField)

  var registerLink = document.createElement('a')
  registerLink.href = '#'
  var registerText = document.createTextNode('Register')
  registerLink.appendChild(registerText)
  loginForm.appendChild(registerLink)

  var submitButton = document.createElement('button')
  submitButton.type = 'submit'
  var submitText = document.createTextNode('Login')
  submitButton.appendChild(submitText)
  loginForm.appendChild(submitButton)

  loginView.appendChild(loginForm)

  return loginView
}

function buildHomeView() {
  var homeView = document.createElement('div')

  var logo = document.createElement('i')
  var logoText = document.createTextNode('Logo')
  logo.appendChild(logoText)
  homeView.appendChild(logo)

  var homeTitle = document.createElement('h1')
  var homeText = document.createTextNode('Hello, World!')
  homeTitle.appendChild(homeText)
  homeView.appendChild(homeTitle)

  return homeView
}

// var landingView = buildLandingView()
// body.appendChild(landingView)

// var registerView = buildRegisterView()
// body.appendChild(registerView)

// var loginView = buildLoginView()
// body.appendChild(loginView)

//var homeView = buildHomeView()
body.appendChild(homeView)