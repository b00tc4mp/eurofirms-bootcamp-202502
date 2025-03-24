var body = document.querySelector("body")

function buildLandingView() {
    var landingView = document.createElement("div")


    var logoHeading = document.createElement("h1")
    var logoText = document.createTextNode("landing page")
    logoHeading.appendChild(logoText)
    landingView.appendChild(logoHeading)

    var registerLink = document.createElement("a")
    registerLink.href = "#"
    var registerText = document.createTextNode("register")
    registerLink.appendChild(registerText)
    landingView.appendChild(registerLink)

    var orText = document.createTextNode(" or ")
    landingView.appendChild(orText)

    var loginLink = document.createElement("a")
    loginLink.href = "#"
    var loginText = document.createTextNode("login")
    loginLink.appendChild(loginText)
    landingView.appendChild(loginLink)
    return landingView
}

function buildRegisterView() {
    var registerView = document.createElement("div")

    var logoHeading = document.createElement("h1")
    var logoText = document.createTextNode("Logo")
    logoHeading.appendChild(logoText)
    registerView.appendChild(logoHeading)

    var registerForm = document.createElement("form")

    var nameField = document.createElement("div")
    var nameLabel = document.createElement("label")
    nameLabel.htmlFor = "name"
    var nameText = document.createTextNode("name")
    nameLabel.appendChild(nameText)
    var nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.name = "name"

    
    nameField.appendChild(nameLabel)
    nameField.appendChild(nameInput)

    var space = document.createElement("br")

    var emailField = document.createElement("div")
    var emailLabel = document.createElement("label")
    emailLabel.htmlFor = "email"
    var emailText = document.createTextNode("email")
    emailLabel.appendChild(emailText)
    var emailInput = document.createElement("input")
    emailInput.type = "text"
    emailInput.name = "email"

    emailField.appendChild(emailLabel)
    emailField.appendChild(emailInput)

    var space1 = document.createElement("br")

    var usernameField = document.createElement("div")
    var usernameLabel = document.createElement("label")
    usernameLabel.htmlFor = "username"
    var usernameText = document.createTextNode("username")
    usernameLabel.appendChild(usernameText)
    var usernameInput = document.createElement("input")
    usernameInput.type = "text"
    usernameInput.name = "username"

    usernameField.appendChild(usernameLabel)
    usernameField.appendChild(usernameInput)

    var space2 = document.createElement("br")

    var passwordField = document.createElement("div")
    var passwordLabel = document.createElement("label")
    passwordLabel.htmlFor = "password"
    var passwordText = document.createTextNode("password")
    passwordLabel.appendChild(passwordText)
    var passwordInput = document.createElement("input")
    passwordInput.type = "text"
    passwordInput.name = "password"

    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)

    var space3 = document.createElement("br")

    var loginLink = document.createElement("a")
    loginLink.href = "#"
    var loginText = document.createTextNode("login")
    loginLink.appendChild(loginText)

    


    registerForm.appendChild(nameField)
    registerForm.appendChild(space)
    registerForm.appendChild(emailField)
    registerView.appendChild(registerForm)

    return registerView
}

function buildLoginView() {

}

function buildHomeView() {

}



var landingView = buildLandingView()
var registerView = buildRegisterView()

body.appendChild(landingView)
body.appendChild(registerView)