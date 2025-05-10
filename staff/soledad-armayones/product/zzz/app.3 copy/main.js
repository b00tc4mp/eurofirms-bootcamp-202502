var body = document.querySelector('body')

function buildLandingView() {
  var landingView = document.createElement('div')

  var logoHeading = document.createElement('h1')
  var logoText = document.createTextNode('Logo')
  logoHeading.appendChild(logoText)
  landingView.appendChild(logoHeading)

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

  var logoHeading = document.createElement('h1')
  var logoText = document.createTextNode('Logo')
  logoHeading.appendChild(logoText)
  registerView.appendChild(logoHeading)

  var registerForm = document.createElement('form')

  var nameField = document.createElement('div')
  var nameLabel = document.createElement('label')
  nameLabel.htmlFor = 'name'
  var nameText = document.createTextNode('Name')
  nameLabel.appendChild(nameText)
  var nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'name'
  nameField.appendChild(nameLabel)
  nameField.appendChild(nameInput)
  registerForm.appendChild(nameField)

  // TODO finish register view

  registerView.appendChild(registerForm)

  return registerView
}

function buildLoginView() {
  // TODO implement me
}

function buildHomeView() {
  // TODO implement me
}

// var landingView = buildLandingView()
// body.appendChild(landingView)

var registerView = buildRegisterView()
body.appendChild(registerView)

// TODO test login view
// TODO test home view