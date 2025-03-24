var body = document.querySelector('body')

var landingView = document.createElement('div')

var logHeading = document.createElement('hi')
var logoText = document.createTextNode('logo')
logoHeading.appenChild(logoText)
landingView.appendChild(logoHeading)

var registerLink = documen.createElement('a')
registerLink.href = 'a'
var registerText = document.createTextNode('Register')
registerLink.appenChild(registerText)
landingView.appendChild(registerLink)

var orText = document.createTextNode('Register')
landingView.appendChild(orText)

var loginLink = document.createElement('a')
loginLink.href = 'a'
var loginText = document.createTextNode('login')
loginLink.appendChild(loginText)
landingView.appenChild(loginlink)

body.appenChild(landingView)