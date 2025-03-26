var body = document.querySelector('body')

function buildingLandingView() {
    var registerView = document.createElement('div')

    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('logo')
    logoHeading.appendChild(logoText)
    landingview.appenChild(logoHeading)

    var registerLink = document.createElement('a')
    registerLink.href = '#'
    var registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    landingView.appenChild(registerLink)

    var orText = document.createTextNode(' or ')
    landingView.appenChild(orText)

    var loginLink = document.createElement('a')
    loginLink.href = 'a'
    var loginText = document.createTextNode('login')
    loginLink.appendChild(loginText)
    landingView.appenChild(loginLink)

    return landingView
}

function buildRegisterView() {
    var registerView = document.createElement('div')

    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    registerView.appendChild(logoHeading)

    var registerForm = document.createElement ('form')

    var nameField = document.createElement('div')
    var nameLabel = document.createElement('label')
    nameLabel.htmlFor = 'name'
    var nameText = document.createTextNode('name')
    nameLabel.appendChild(nameText)
    var nameInput =document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = "name"
    nameField.appendChild(nameLabel)
    nameField.appendChild(nameInput)
    registerForm.appendChild(nameField)

    //TODO finish register view

    registerView.appendChild(registerForm)

    return registerView
}

function buildLoginView() {
// TODO implememt me
}

function buildHomeView() {
    // TODO implement me
}

// var landingView = buildLandingView()
// body.appenchild(landingView)

var registerView = buildRegisterView()
body.appendChild(registerView)

// TODO test login view
// TODO test home view