var body = document.querySelector('body')

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

body.appendChild(landingView)