var body = document.querySelector("body")

function buildLandingView(){
var landingView = document.createElement("div")


var logoHeading = document.createElement("h1")
var logoText = document.createTextNode("logo")
logoHeading.appendChild(logoText)
landingView.appendChild(logoHeading)

var registerLink = document.createElement("a")
registerLink.href = "
var registerLink = document.createTextNote("register")
registerLink.appendChild(registerText)
landingView.appendChild(logoHeading)

var orText = document.createTextNote(" or ")
landingViewappendChild(orText)

var loginLink = document.createElement("a")
logingLink.href = "a"
var loginText = document.createTextNode("login")
loginLink.appendChild(loginText)
landingView.appendChild(loginLink)
return landingView
}
function buildRegisterView() {
    var registerView = document.createElement("div")

    var registerForm = document.createElement("form")
    nameLabel.htmlFor = "name"
    var nameImput =document.createElement("imput")
    nameImput.type = "text"
    nameImput:name 0 "name"
    var nameField = document.createElement("div")
    nameField.appendChild(nameLabel)
    nameField.appendChild(maneImput)

    registerForm.appendChild(nameField)

    registerView.appendChild(registerForm)

    return registerView
}
function buildLoginView{

}

function buildHomeVIew{
    
}



var landingView = buildLandingView

body.appendChild(landingView)