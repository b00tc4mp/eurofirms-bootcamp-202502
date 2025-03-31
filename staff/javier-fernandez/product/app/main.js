var body = document.querySelector("body")

function buildLandingView() {
    var landingView = document.createElement("div")
    landingView.classList.add("p-20px")


    var logo = document.createElement("i")
    logo.classList.add("block")
    var logoText = document.createTextNode("landing page")
    logo.classList.add("block")
    logo.appendChild(logoText)
    landingView.appendChild(logo)

    var buttons = document.createElement("div")
    
    var registerLink = document.createElement("a")
    registerLink.href = "#"
    var registerText = document.createTextNode("register")
    registerLink.appendChild(registerText)
    landingView.appendChild(registerLink)

    registerLink.addEventListener("click", function (event) {
        body.removeChild(landingView)
        body.appendChild(registerView)
    })

    var orText = document.createTextNode(" or ")
    landingView.appendChild(orText)

    var loginLink = document.createElement("a")
    loginLink.href = "#"
    var loginText = document.createTextNode("Login")
    loginLink.appendChild(loginText)
    landingView.appendChild(loginLink)

  
    loginLink.addEventListener("click", function (event) {
        body.removeChild(landingView)
        body.appendChild(loginView)
    })
    
   
    return landingView
}

function buildRegisterView() {
    var registerView = document.createElement("div")
    registerView.classList.add("p-x-20px")

    var logo = document.createElement("i")
    var logoText = document.createTextNode("Register Page")
    logo.appendChild(logoText)
    registerView.appendChild(logo)

    var registerTitle = document.createElement("h1")
    var registerText = document.createTextNode("Register")
    registerTitle.appendChild(registerText)
    registerView.appendChild(registerTitle)

    var registerForm = document.createElement("form")
    registerForm.classList.add("flex", "flex-col", "gap-20px")
    

    var nameField = document.createElement("div")
    nameField.classList.add("flex", "flex-col", "gap-10px")
    var nameLabel = document.createElement("label")
    nameLabel.htmlFor = "name"
    var nameText = document.createTextNode("Name")
    nameLabel.appendChild(nameText)
    nameField.appendChild(nameLabel)
    var nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.id = "name"
    nameInput.name = "name"
    nameInput.placeholder = "your name"
    nameField.appendChild(nameInput)
    registerForm.appendChild(nameField)
    

    var space = document.createElement("br")

    var emailField = document.createElement("div")
    emailField.classList.add("flex","flex-col", "gap-10px")
    var emailLabel = document.createElement("label")
    emailLabel.htmlFor = "email"
    var emailText = document.createTextNode("email")
    emailLabel.appendChild(emailText)
    emailField.appendChild(emailLabel)
    var emailInput = document.createElement("input")
    emailInput.type = "email"
    emailField.id = "email"
    emailInput.name = "email"
    emailInput.placeholder = "your email"
    emailField.appendChild(emailInput)
    registerForm.appendChild(emailField)
    

    var space1 = document.createElement("br")

    var usernameField = document.createElement("div")
    usernameField.classList.add("flex", "flex-col", "gap-10px")
    var usernameLabel = document.createElement("label")
    usernameLabel.htmlFor = "username"
    var usernameText = document.createTextNode("username")
    usernameLabel.appendChild(usernameText)
    usernameField.appendChild(usernameText)
    var usernameInput = document.createElement("input")
    usernameInput.type = "text"
    usernameInput.id = "username"
    usernameInput.name = "username"
    usernameInput.placeholder = "your username"
    usernameField.appendChild(usernameInput)
    registerForm.appendChild(usernameField)
    

    var space2 = document.createElement("br")

    var passwordField = document.createElement("div")
    passwordField.classList.add("flex", "flex-col", "gap-10px")
    var passwordLabel = document.createElement("label")
    passwordLabel.htmlFor = "password"
    var passwordText = document.createTextNode("password")
    passwordLabel.appendChild(passwordText)
    passwordField.appendChild(passwordLabel)
    var passwordInput = document.createElement("input")
    passwordInput.type = "text"
    passwordInput.name = "password"
    passwordInput.placeholder = "your password"
    passwordField.appendChild(passwordInput)
    registerForm.appendChild(passwordField)
    

    var space3 = document.createElement("br")

    registerForm.appendChild(nameField)
    registerForm.appendChild(space)
    registerForm.appendChild(emailField)
    registerForm.appendChild(space1)
    registerForm.appendChild(usernameField)
    registerForm.appendChild(space2)
    registerForm.appendChild(passwordField)

    var buttons = document.createElement("div")
    buttons.classList.add("flex", "justify-between", "m-t-20px")

    var loginLink = document.createElement("a")
    loginLink.href = "#"
    var loginText = document.createTextNode("login")
    loginLink.appendChild(loginText)
    buttons.appendChild(loginLink)

    loginLink.addEventListener("click", function (event) {
        body.removeChild(registerView)
        body.appendChild(loginView)
    })

    var submitButton =document.createElement("button")
    submitButton.classList.add("black-button")
    submitButton.type = "submit"
    var submitText = document.createTextNode("Register")
    submitButton.appendChild(submitText)
    buttons.appendChild(submitButton)

    registerForm.appendChild(buttons)

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault()

        const name =nameInput.value
        const email = emailInput.value
        const username = usernameInput.value
        const password = passwordInput.value 

        try {
            registerUser(name, email, username, password)

            body.removeChild(registerView)
            body.appendChild(loginView)
        } catch (error) {
            alert(error.message)
        }
    })

    

    registerView.appendChild(registerForm)
    
   

    return registerView

}

function buildLoginView() {
    var loginView = document.createElement("div")

    var logo = document.createElement("i")
    var logoText = document.createTextNode("Loginpage")
    logo.appendChild(logoText)
    loginView.appendChild(logo)

    var loginTitle = document.createElement("h1")
    var loginText = document.createElement("Login")
    loginTitle.appendChild(loginText)
    loginView.appendChild(loginTitle)


    var loginForm = document.createElement("form")
    var space = document.createAttribute("br")

    var usernameField = document.createElement("div")
    var usernameLabel = document.createElement("label")
    usernameLabel.htmlFor = "username"
    var usernameText = document.createTextNode("username")
    usernameLabel.appendChild(usernameText)
    usernameField.appendChild(usernameLabel)
    var usernameInput = document.createElement("Input")
    usernameInput.Text = "text"
    usernameInput.id = "username"
    usernameInput.id = "username"
    usernameInput.name = "username"
    usernameInput.placeholder = "your username"
    usernameField.appendChild(usernameInput)
    loginForm.appendChild(usernameField)

    var space2 = document.createElement("br")

    var passwordField = document.createElement("div")
    var passwordLabel = document.createElement("label")
    passwordLabel.htmelFor = "password"
    var passwordText = document.createTextNode("password")
    passwordLabel.appendChild(passwordText)
    passwordField.appendChild(passwordLabel)
    var passwordInput = document.createElement("Input")
    passwordInput.Text = "text"
    passwordInput.id = "password"
    passwordInput.id = "password"
    passwordInput.Name = "password"
    passwordInput.placeholder = "your password"
    passwordField.appendChild(passwordInput)
    loginForm.appendChild(passwordField)

    loginForm.appendChild(usernameField)
    loginForm.appendChild(space2)
    loginForm.appendChild(passwordField)

    loginView.appendChild(loginForm)

    var buttons = document.createElement("div")
    buttons.classList.add("flex", "justify-between", "m-t-20px")

    var registerLink = document.createElement("a")
    registerLink.href = "#"
    var registerText = document.createTextNode("register")
    registerLink.appendChild(registerText)
    buttons.appendChild(registerLink)


    registerLink.addEventListener("click", function (event) {
     body.removeChild(loginView)
        body.appendChild(registerView)
    })

    var submitButton = document.createElement("button")
    submitButton.type = "submit"
    var submitText = document.createTextNode("Login")
    submitButton.appendChild(submitText)
    buttons.appendChild(submitButton)
    loginForm.appendChild(buttons)



    loginForm.addEventListener("submit", function (event) {
        event.preventDefault()

        const username = usernameInput.value
        const password = passwordInput.value

        try {
            loginUser(username, password)

            body.removeChild(loginView)
            body.appendChild(homeView)
        } catch (error) {
            alert(error.message)
        }
    })


    
   loginView.appendChild(loginForm)

    return loginView
    
}

function buildHomeView() {
    var homeView = document.createElement("div")

    var logo = document.createElement("i")
    var logoText = document.createTextNode("Home Page")
    logo.appendChild(logoText)
    homeView.appendChild(logo)


    
    var space = document.createElement("br")
    
    var holamundoText = document.createTextNode("Hola Mundo")
    homeView.appendChild(holamundoText)
    
    



    return homeView
}



var landingView = buildLandingView()
body.appendChild(landingView)

 var registerView = buildRegisterView()
//body.appendChild(registerView)

 var loginView = buildLoginView()
// body.appendChild(loginView)

var homeView = buildHomeView()
// body.appendChild(homeView)
