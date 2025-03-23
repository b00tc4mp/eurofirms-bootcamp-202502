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

    registerForm.appendChild(nameField)

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