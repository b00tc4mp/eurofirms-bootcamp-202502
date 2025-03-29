var body = document.querySelector('body')

function buildLandingView() {
    var landingView = document.createElement('div');

    var logoHeading = document.createElement('h1');
    var logoText = document.createTextNode('Logo');
    logoHeading.appendChild(logoText);
    landingView.appendChild(logoHeading);

    var registerLink = document.createElement('a');
    registerLink.href = '#';
    var registerText = document.createTextNode('Register');
    registerLink.appendChild(registerText);
    landingView.appendChild(registerLink);

    var orText = document.createTextNode(' or ');
    landingView.appendChild(orText);

    var loginLink = document.createElement('a');
    loginLink.href= '#';
    var loginText = document.createTextNode('Login');
    loginLink.appendChild(loginText);
    landingView.appendChild(loginLink);

    return landingView;
}

function buildRegisterView() {
    var registerView = document.createElement('div');



    var logoHeading = document.createElement('h1');
    var logoText = document.createTextNode('Logo');
    logoHeading.appendChild(logoText);
    registerView.appendChild(logoHeading);

    var registerForm = document.createElement('form');

    //Campo Name

    var nameField = document.createElement('div');
    var nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'name';
    var nameText = document.createTextNode('Name');
    nameLabel.appendChild(nameText);
    var nameInput = document.createElement('input');
    var saltoLinea = document.createElement('br');
    var saltoLinea2 = document.createElement('br');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.id = 'name';
    nameField.appendChild(nameLabel);
    nameField.appendChild(saltoLinea);
    nameField.appendChild(saltoLinea2);
    nameField.appendChild(nameInput);
    registerForm.appendChild(nameField);

    //Campo E-mail

    var emailField = document.createElement('div');
    var emailLabel = document.createElement('label');
    emailLabel.htmlFor = 'email';
    var emailText = document.createTextNode('E-mail');
    emailLabel.appendChild(emailText);

    var emailInput = document.createElement('input');
    emailInput.type='email';
    emailInput.name='email';
    emailInput.id = 'email';
    emailInput.placeholder = 'your e-mail';
    var saltoLinea3 = document.createElement('br');
    var saltoLinea4 = document.createElement('br');
    var saltoLinea5 = document.createElement('br');

    emailField.appendChild(saltoLinea3);
    emailField.appendChild(emailLabel);
    emailField.appendChild(saltoLinea4);
    emailField.appendChild(saltoLinea5);
    emailField.appendChild(emailInput);
    registerForm.appendChild(emailField);


    //Campo Username

    var usernameField = document.createElement('div');
    var usernameLabel = document.createElement('label');
    usernameLabel.htmlFor = ('username');
    var usernameText = document.createTextNode('Username');
    usernameLabel.appendChild(usernameText);
    var usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = 'username';
    usernameInput.id = 'username';
    var saltoLinea6 = document.createElement('br');
    var saltoLinea7 = document.createElement('br');
    var saltoLinea8 = document.createElement('br');
    
    usernameField.appendChild(saltoLinea6);
    usernameField.appendChild(usernameLabel);
    usernameField.appendChild(saltoLinea7);
    usernameField.appendChild(saltoLinea8);
    usernameField.appendChild(usernameInput);
    registerForm.appendChild(usernameField);

    // campo Password

    var passwordField = document.createElement('div');
    var passwordLabel = document.createElement('label');
    passwordLabel.htmlFor = 'password';
    var passwordText = document.createTextNode('Password');
    passwordLabel.appendChild(passwordText);
    var passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.name = 'password';
    passwordInput.id = 'password'
    var saltoLinea6 = document.createElement('br');
    var saltoLinea7 = document.createElement('br');
    var saltoLinea8 = document.createElement('br');

    passwordField.appendChild(saltoLinea8);
    passwordField.appendChild(passwordLabel);
    passwordField.appendChild(saltoLinea6);//Preguntar porque se pueden repetir saltoLinea en el campo password y en el campo Username
    passwordField.appendChild(saltoLinea7);//Preguntar porque se pueden repetir saltoLinea en el campo password y en el campo Username
    passwordField.appendChild(passwordInput);

    registerForm.appendChild(passwordField);


    // Login

    var loginLink = document.createElement('a');
    loginLink.href = '#';
    var loginText = document.createTextNode('Login');
    var saltolinea10 = document.createElement('br');
    loginLink.appendChild(saltolinea10);
    loginLink.appendChild(loginText);
    registerForm.appendChild(loginLink)


    //Espacio entre login y Register

    var spaceText = document.createTextNode('\t');
        registerForm.appendChild(spaceText);

    //boton registro
    
    var registerButton = document.createElement('input');
        registerButton.type='submit';
        registerButton.value = 'Register';
        registerForm.appendChild(registerButton) 



    // TODO finish register view

    registerView.appendChild(registerForm)
    

    return registerView;
}

function buildLoginView(){
    var buildLoginView = document.createElement('div');

    //Logo

    var logoHeading = document.createElement('h1');
    var logoText = document.createTextNode('Logo');
    logoHeading.appendChild(logoText);
    buildLoginView.appendChild(logoHeading);

    // register Form

    var registerForm = document.createElement('form');

    //Campo Nombre
    var usernameField = document.createElement('div');
    var usernameLabel = document.createElement('label');
    usernameLabel.htmlFor = 'username';
    var usernameText = document.createTextNode('Username');
        usernameLabel.appendChild(usernameText);
    var usernameInput = document.createElement('input');
        usernameInput.type = 'text';
        usernameInput.name = 'username';
    var saltoLinea1 = document.createElement('br');
    var saltoLinea2 = document.createElement('br');

    usernameField.appendChild(usernameLabel);
    usernameField.appendChild(saltoLinea1);
    usernameField.appendChild(saltoLinea2);
    usernameField.appendChild(usernameInput);

    registerForm.appendChild(usernameField);


    //Campo Password

    var passwordField = document.createElement('div');
    var passwordLabel = document.createElement('label');
    passwordLabel.htmlFor = 'password';
    var passwordText = document.createTextNode('Password');
    passwordLabel.appendChild(passwordText);
    var passwordInput = document.createElement('Input');
    passwordInput.type = 'password';
    passwordInput.name = 'password';
    var saltolinea3 = document.createElement('br');
    var saltolinea4 = document.createElement('br');
    var saltolinea5 = document.createElement('br');

    passwordField.appendChild(saltolinea3);
    passwordField.appendChild(passwordLabel);
    passwordField.appendChild(saltolinea4);
    passwordField.appendChild(saltolinea5);
    passwordField.appendChild(passwordInput);

    registerForm.appendChild(passwordField);

    //Register Link

    var registerLink = document.createElement('a');
    registerLink.href = '#';
    var registerText = document.createTextNode('Register');
    registerLink.appendChild(registerText);
    var saltolinea6 = document.createElement('br');
    var saltolinea7 = document.createElement('br');

    registerForm.appendChild(saltolinea6);
    registerForm.appendChild(saltolinea7);
    registerForm.appendChild(registerLink);


    //espacio entre Register y Login

    var separation = document.createTextNode('\t');// porque si añado mas \t no se añaden mas tabulaciones?
        registerForm.appendChild(separation);

    //Boton Login

    var loginButton = document.createElement('input');
    loginButton.type = 'submit';
    loginButton.value = 'Login';
    registerForm.appendChild(loginButton);


    buildLoginView.appendChild(registerForm);
    


    return buildLoginView;
}


function buildHomeView(){
    
    var buildHomeView = document.createElement('div');

    //Create Logo

    var logoHeading = document.createElement('h1');
    var logoText = document.createTextNode('Logo');
    logoHeading.appendChild(logoText);

    buildHomeView.appendChild(logoHeading)

    //Create Hello message

    var helloMessage = document.createElement('div');
    var helloMessageText = document.createTextNode('Hello, Home!');
        helloMessage.appendChild(helloMessageText);

        buildHomeView.appendChild(helloMessage);

    return buildHomeView;


    //TODO Home view
}



// var landingView = buildLandingView();
// body.appendChild(landingView);

// var registerView = buildRegisterView();
// body.appendChild(registerView);

// var buildLoginView = buildLoginView();
// body.appendChild(buildLoginView);

var buildHomeView = buildHomeView();
body.appendChild(buildHomeView);

