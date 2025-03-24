var loginText = document.createTextNode('Login')
loginLink.appendChild(loginText)
landingView.appendChild(loginLink)

return landingView

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