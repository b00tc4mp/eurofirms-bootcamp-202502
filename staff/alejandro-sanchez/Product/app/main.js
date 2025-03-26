var body = document.querySelector('body')

function buildLandingView() {       

    var landingView = document.createElement('div')

    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    landingView.appendChild(logoHeading)


    var registerLink = document.createElement('a')
    registerLink.href = '#'
    var registerText = document.CreateTextNode('Register')
    registerLink.appendChild(registerLinkText)


    var orText = document.createElement('a')
    loginlink.ref ='#'
    var loginText = document.createTextNode('Login')
    loginLing.appendChild(loginText)
    landingView.appendChild(loginlink)

    return landingView
}   

function buildLandingView(){
    var registerview = document.createElement('div')

    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    registerview.appendChild(logoHeading)

    var registerform = document.createElement ('form')

    var nameLabel = document.createElement ('label')
    nameLabel.htmlFor = 'name'
    var nameText = document.CreateTextNode('Name')
    var nameInput = document.createElement('input')
    nameLabel.appendChild(nameText)
    nameInput.type = 'text'
    nameInput.name = 'name'
    var nameField = document.creatElement ('div')
    nameField.appendChild(nameLabel)
    nameField.appendChild(nameInput)

    registerform.appendChild(nameField)

    registerView.appendChild(registerform)

    return registerview

}

function buildiLoginView() {

}

function buildHomeView() {

}

var registerView = buildLandingView()
body.appendChild(registerView)

//test loginView