var body = document.querySelector('body')

function buildLandingView() {
    var landingView = document.createElement('div')

    var logoHeading = document.createElement('H1')
    var logoText = document.createTextNode('LOGO')
    logoHeading.appendChild(logoText)
    landingView.appendChild(logoHeading)

    var registerLink = document.createElement('a')
    registerLink.href = '#'
    var registerText = document.createTextNode('REGISTRARSE')
    registerLink.appendChild(registerText)
    landingView.appendChild(registerLink)
    var orText = document.createTextNode(' or ')
    landingView.appendChild(orText)

    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginText = document.createTextNode('LOGIN')
    loginLink.appendChild(loginText)
    landingView.appendChild(loginLink)



    return landingView
}

function buildRegisterView() {
    var registerView = document.createElement('div')

    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('LOGO')
    logoHeading.appendChild(logoText)
    registerView.appendChild(logoHeading)

    var registerForm = document.createElement('form')

    var nameField = document.createElement('div')
    var nameLabel = document.createElement('label')
    nameLabel.htmlFor = 'name'
    var nameText = document.createTextNode('Nombre  ')
    nameLabel.appendChild(nameText)
    var nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'Nombre'

    nameField.appendChild(nameLabel)
    nameField.appendChild(nameInput)
    registerForm.appendChild(nameField)
    registerView.appendChild(registerForm)

    var emailField = document.createElement('div')
    var emailLabel = document.createElement('label')
    emailLabel.htmlFor = 'email'
    var emailText = document.createTextNode('E-mail  ')
    emailLabel.appendChild(emailText)
    var emailInput = document.createElement('input')
    emailInput.type = 'text'
    emailInput.email = 'E-mail'

    emailField.appendChild(emailLabel)
    emailField.appendChild(emailInput)
    registerForm.appendChild(emailField)
    registerView.appendChild(registerForm)

    //
    var userField = document.createElement('div')
    var userLabel = document.createElement('label')
    userLabel.htmlFor = 'user'
    var userText = document.createTextNode('Usuario  ')
    userLabel.appendChild(userText)
    var userInput = document.createElement('input')
    userInput.type = 'text'
    userInput.email = 'Usuario'

    userField.appendChild(userLabel)
    userField.appendChild(userInput)
    registerForm.appendChild(userField)
    registerView.appendChild(registerForm)
    //
    var passField = document.createElement('div')
    var passLabel = document.createElement('label')
    passLabel.htmlFor = 'pass'
    var passText = document.createTextNode('Contraseña ')
    passLabel.appendChild(passText)
    var passInput = document.createElement('input')
    passInput.type = 'text'
    passInput.email = 'Contraseña'

    passField.appendChild(passLabel)
    passField.appendChild(passInput)
    registerForm.appendChild(passField)
    registerView.appendChild(registerForm)
    var loginLink = document.createElement('a')
    loginLink.href = '#' 
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    registerView.appendChild(loginLink)


    var br = document.createElement('div')    
    passField.appendChild(br)
    loginLink.style.marginRight = '20px'
    
    var registerLink = document.createElement('button')
    registerLink.href = '#'
    var registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    registerView.appendChild(registerLink)

    return registerView

}

function buildLoginView() {
    var loginView = document.createElement('div');

    var logoHeading = document.createElement('h1');
    var logoText = document.createTextNode('LOGO');
    logoHeading.appendChild(logoText);
    loginView.appendChild(logoHeading);

    var loginForm = document.createElement('form');

    var userNameField = document.createElement('div');
    var userNameLabel = document.createElement('label');
    userNameLabel.htmlfor = 'username';
    var userNameText = document.createTextNode('Usuario');
    userNameLabel.appendChild(userNameText);
    var userNameInput = document.createElement('input');
    userNameInput.type = 'text';
    userNameInput.name = 'username';
    userNameField.appendChild(userNameLabel);
    userNameField.appendChild(userNameInput);
    loginForm.appendChild(userNameField);

    var passNameField = document.createElement('div');
    var passNameLabel = document.createElement('label');
    passNameLabel.htmlfor = 'passname';
    var passNameText = document.createTextNode('Contraseña');
    passNameLabel.appendChild(passNameText);
    var passNameInput = document.createElement('input');
    passNameInput.type = 'text';
    passNameInput.name = 'username';
    passNameField.appendChild(passNameLabel);
    passNameField.appendChild(passNameInput);
    loginForm.appendChild(passNameField);

    var loginField = document.createElement('div');
    loginView.appendChild(loginForm);
    var loginLink = document.createElement('button')
    loginLink.href = '#' 
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    loginView.appendChild(loginLink)


    var br = document.createElement('div')    
    loginField.appendChild(br)
    loginLink.style.marginRight = '20px'
    
    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginText = document.createTextNode('Register')
    loginLink.appendChild(loginText)
    loginView.appendChild(loginLink)



    return loginView;
}

function buildHomeView() {
    var homeView = document.createElement('div');

    var logoHeading = document.createElement('h1');
    var logoText = document.createTextNode('LOGO');
    logoHeading.appendChild(logoText);
    homeView.appendChild(logoHeading);

    var textView = document.createElement('div');

    var textHeading = document.createElement('h1');
    var textText = document.createTextNode('HOLA MUNDO');
    textHeading.appendChild(textText);
    textView.appendChild(textHeading);
    homeView.appendChild(textView);

    //acontinuacion va el logo 
    //escribir un Bienvenidos
    return homeView;


}

var landingView = buildLandingView()
body.appendChild(landingView)

var registerView = buildRegisterView()
body.appendChild(registerView)

var loginView = buildLoginView()
body.appendChild(loginView)

var homeView = buildHomeView()
body.appendChild(homeView)

