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
    var loginText = document.createTextNode("Login")
    loginLink.appendChild(loginText)
    landingView.appendChild(loginLink)

    return landingView
}

function buildRegisterView() {
    var registerView = document.createElement("div")

    var logoHeading = document.createElement("h1")
    var logoText = document.createTextNode("Register Page")
    logoHeading.appendChild(logoText)
    registerView.appendChild(logoHeading)

    var registerForm = document.createElement("form")
    
    var nameField = document.createElement("div")
    var nameLabel = document.createElement("label")
    nameLabel.htmlFor = "name"
    var nameText = document.createTextNode("Name")
    nameLabel.appendChild(nameText)
    var nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.name = "name"

    
    nameField.appendChild(nameLabel)
    nameField.appendChild(nameInput)
    registerForm.appendChild(nameField)

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
    usernameField.appendChild(usernameText)
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
    passwordField.appendChild(passwordText)
    var passwordInput = document.createElement("input")
    passwordInput.type = "text"
    passwordInput.name = "password"

    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)

    var space3 = document.createElement("br")

    registerForm.appendChild(nameField)
    registerForm.appendChild(space)
    registerForm.appendChild(emailField)
    registerForm.appendChild(space1)
    registerForm.appendChild(usernameField)
    registerForm.appendChild(space2)
    registerForm.appendChild(passwordField)

    var loginLink = document.createElement("a")
    loginLink.href = "#"
    var loginText = document.createTextNode("login")
    loginLink.appendChild(loginText)

    var space3 = document.createElement("br")

    registerView.appendChild(registerForm)
    
    registerView.appendChild(space3)
    var registerButton = document.createElement("button")
    registerButton.href = "register"
    var registerText = document.createTextNode("register")
    registerButton.appendChild(registerText)
    registerView.appendChild(registerButton)


    var loginButton = document.createElement("button")
    var loginText = document.createTextNode("login")
    loginButton.appendChild(loginText)
    registerView.appendChild(loginButton)

    return registerView

}

function buildLoginView() {
    var loginView = document.createElement("div")

    var logoHeading = document.createElement("h1")
    var logoText = document.createTextNode("Loginpage")
    logoHeading.appendChild(logoText)
    loginView.appendChild(logoHeading)

    var registerForm = document.createElement("form")
    var space = document.createAttribute("br")

    var usernameField = document.createElement("div")
    var usernameLabel = document.createElement("label")
    usernameLabel.htmlFor = "username"
    var usernameText = document.createTextNode("username")
    usernameField.appendChild(usernameText)
    var usernameInput = document.createElement("Input")
    usernameInput.Text = "text"
    usernameInput.name = "username"

    usernameField.appendChild(usernameLabel)
    usernameField.appendChild(usernameInput)

    var space2 = document.createElement("br")

    var passwordField = document.createElement("div")
    var passwordLabel = document.createElement("label")
    passwordLabel.htmelFor = "password"
    var passwordText = document.createTextNode("password")
    passwordField.appendChild(passwordText)
    var passwordInput = document.createElement("Input")
    passwordInput.Text = "text"
    passwordInput.Name = "password"

    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)

    registerForm.appendChild(usernameField)
    registerForm.appendChild(space2)
    registerForm.appendChild(passwordField)

    loginView.appendChild(registerForm)

    var registerButton = document.createElement("button")
    var registerText = document.createTextNode("register")
    registerButton.appendChild(registerText)
    loginView.appendChild(registerButton)

    var loginButton = document.createElement("button")
    var loginText = document.createTextNode("login")
    loginButton.appendChild(loginText)
    loginView.appendChild(loginButton)

    return loginView
    
}

function buildHomeView() {
    var homeView = document.createElement("div")

    var logoHeading = document.createElement("h1")
    var logoText = document.createTextNode("Home Page")
    logoHeading.appendChild(logoText)
    homeView.appendChild(logoHeading)


    var welcomeButton = document.createElement("button")
    var welcomeText = document.createTextNode("welcome")
    welcomeButton.appendChild(welcomeText)
    homeView.appendChild(welcomeButton)
    
    var space = document.createElement("br")
    
    var holamundoText = document.createTextNode("Hola Mundo")
    homeView.appendChild(holamundoText)
    
    



    return homeView
}



var landingView = buildLandingView()
body.appendChild(landingView)

var registerView = buildRegisterView()
body.appendChild(registerView)

var loginView = buildLoginView()
body.appendChild(loginView)

var homeView = buildHomeView()
body.appendChild(homeView)
