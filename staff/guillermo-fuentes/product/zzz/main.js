var body = document.querySelector('body');

var landingView = document.createElement('div');

var logoHeading = document.createElement('h1');
var logoText = document.createTextNode('Logo');
logoHeading.appendChild(logoText);
landingView.appendChild(logoHeading);

var registerLink = document.createElement('a');
registerLink.href = '#';
var registerLinkText = document.createTextNode('Register');
registerLink.appendChild(registerLinkText);
landingView.appendChild(registerLink);

var orText = document.createTextNode(' or ');
landingView.appendChild(orText);

var loginLink = document.createElement('a');
loginLink.href = '#';
var loginLinkText = document.createTextNode('Login');
loginLink.appendChild(loginLinkText);
landingView.appendChild(loginLink);

body.appendChild(landingView);
