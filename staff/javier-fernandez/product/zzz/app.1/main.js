var body = document.querySelector("body")

//const buildLandingView = function () {
const buildLandingView = () => {
    const landingView = document.createElement("div")
    landingView.classList.add("p-20px")


    const logo = document.createElement("i")
    logo.classList.add("block")
    const logoText = document.createTextNode("landing page")
    logo.classList.add("block")
    logo.appendChild(logoText)
    landingView.appendChild(logo)

    const buttons = document.createElement("div")
    
    const registerLink = document.createElement("a")
    registerLink.href = "#"
    const registerText = document.createTextNode("register")
    registerLink.appendChild(registerText)
    landingView.appendChild(registerLink)

     //registerLink.addEventListener("click", function (event) {
    //registerLink.addEventListener("click", (event) => {
    registerLink.addEventListener("click",  event => {
        body.removeChild(landingView)
        body.appendChild(registerView)
    })

    const orText = document.createTextNode(" or ")
    landingView.appendChild(orText)

    const loginLink = document.createElement("a")
    loginLink.href = "#"
    const loginText = document.createTextNode("Login")
    loginLink.appendChild(loginText)
    landingView.appendChild(loginLink)

   //loginLink.addEventListener("click", function (event) {
    //loginLink.addEventListener("click", (event) => {
    loginLink.addEventListener("click",  event => {
        body.removeChild(landingView)
        body.appendChild(loginView)
    })
    
   
    return landingView
}

//const buildRegisterView = function () {
const buildRegisterView = () => {
    const registerView = document.createElement("div")
    registerView.classList.add("p-x-20px")

    const logo = document.createElement("i")
    const logoText = document.createTextNode("Register Page")
    logo.appendChild(logoText)
    registerView.appendChild(logo)

    const registerTitle = document.createElement("h1")
    const registerText = document.createTextNode("Register")
    registerTitle.appendChild(registerText)
    registerView.appendChild(registerTitle)

    const registerForm = document.createElement("form")
    registerForm.classList.add("flex", "flex-col", "gap-20px")
    

    const nameField = document.createElement("div")
    nameField.classList.add("flex", "flex-col", "gap-10px")
    const nameLabel = document.createElement("label")
    nameLabel.htmlFor = "name"
    const nameText = document.createTextNode("Name")
    nameLabel.appendChild(nameText)
    nameField.appendChild(nameLabel)
    const nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.id = "name"
    nameInput.name = "name"
    nameInput.placeholder = "your name"
    nameField.appendChild(nameInput)
    registerForm.appendChild(nameField)
    

    const space = document.createElement("br")

    const emailField = document.createElement("div")
    emailField.classList.add("flex","flex-col", "gap-10px")
    const emailLabel = document.createElement("label")
    emailLabel.htmlFor = "email"
    const emailText = document.createTextNode("email")
    emailLabel.appendChild(emailText)
    emailField.appendChild(emailLabel)
    const emailInput = document.createElement("input")
    emailInput.type = "email"
    emailField.id = "email"
    emailInput.name = "email"
    emailInput.placeholder = "your email"
    emailField.appendChild(emailInput)
    registerForm.appendChild(emailField)
    

    const space1 = document.createElement("br")

    const usernameField = document.createElement("div")
    usernameField.classList.add("flex", "flex-col", "gap-10px")
    const usernameLabel = document.createElement("label")
    usernameLabel.htmlFor = "username"
    const usernameText = document.createTextNode("username")
    usernameLabel.appendChild(usernameText)
    usernameField.appendChild(usernameText)
    const usernameInput = document.createElement("input")
    usernameInput.type = "text"
    usernameInput.id = "username"
    usernameInput.name = "username"
    usernameInput.placeholder = "your username"
    usernameField.appendChild(usernameInput)
    registerForm.appendChild(usernameField)
    

    const space2 = document.createElement("br")

    const passwordField = document.createElement("div")
    passwordField.classList.add("flex", "flex-col", "gap-10px")
    const passwordLabel = document.createElement("label")
    passwordLabel.htmlFor = "password"
    const passwordText = document.createTextNode("password")
    passwordLabel.appendChild(passwordText)
    passwordField.appendChild(passwordLabel)
    const passwordInput = document.createElement("input")
    passwordInput.type = "text"
    passwordInput.name = "password"
    passwordInput.placeholder = "your password"
    passwordField.appendChild(passwordInput)
    registerForm.appendChild(passwordField)
    

    const space3 = document.createElement("br")

    registerForm.appendChild(nameField)
    registerForm.appendChild(space)
    registerForm.appendChild(emailField)
    registerForm.appendChild(space1)
    registerForm.appendChild(usernameField)
    registerForm.appendChild(space2)
    registerForm.appendChild(passwordField)

    const buttons = document.createElement("div")
    buttons.classList.add("flex", "justify-between", "m-t-20px")

    const loginLink = document.createElement("a")
    loginLink.href = "#"
    const loginText = document.createTextNode("login")
    loginLink.appendChild(loginText)
    buttons.appendChild(loginLink)

     //loginLink.addEventListener("click", function (event) {
    //loginLink.addEventListener("click", (event) => {
    loginLink.addEventListener("click",  event => {
        body.removeChild(registerView)
        body.appendChild(loginView)
    })

    const submitButton =document.createElement("button")
    submitButton.classList.add("black-button")
    submitButton.type = "submit"
    const submitText = document.createTextNode("Register")
    submitButton.appendChild(submitText)
    buttons.appendChild(submitButton)

    registerForm.appendChild(buttons)

    //registerForm.addEventListener("submit", function (event) {
    //registerForm.addEventListener("submit", (event) => {
        registerForm.addEventListener("submit", event => {
        event.preventDefault()

        const name =nameInput.value
        const email = emailInput.value
        const username = usernameInput.value
        const password = passwordInput.value 

        try {
            registerUser(name, email, username, password)

            registerForm.reset()
            
            body.removeChild(registerView)
            body.appendChild(loginView)
        } catch (error) {
            alert(error.message)
        }
    })

    

    registerView.appendChild(registerForm)
    
   

    return registerView

}

//const buildLandingView = function () {
const buildLoginView = () => {
    const loginView = document.createElement("div")

    const logo = document.createElement("i")
    const logoText = document.createTextNode("Loginpage")
    logo.appendChild(logoText)
    loginView.appendChild(logo)

    const loginTitle = document.createElement("h1")
    const loginText = document.createElement("Login")
    loginTitle.appendChild(loginText)
    loginView.appendChild(loginTitle)


    const loginForm = document.createElement("form")
    const space = document.createAttribute("br")

    const usernameField = document.createElement("div")
    const usernameLabel = document.createElement("label")
    usernameLabel.htmlFor = "username"
    const usernameText = document.createTextNode("username")
    usernameLabel.appendChild(usernameText)
    usernameField.appendChild(usernameLabel)
    const usernameInput = document.createElement("Input")
    usernameInput.Text = "text"
    usernameInput.id = "username"
    usernameInput.id = "username"
    usernameInput.name = "username"
    usernameInput.placeholder = "your username"
    usernameField.appendChild(usernameInput)
    loginForm.appendChild(usernameField)

    const space2 = document.createElement("br")

    const passwordField = document.createElement("div")
    const passwordLabel = document.createElement("label")
    passwordLabel.htmelFor = "password"
    const passwordText = document.createTextNode("password")
    passwordLabel.appendChild(passwordText)
    passwordField.appendChild(passwordLabel)
    const passwordInput = document.createElement("Input")
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

    const buttons = document.createElement("div")
    buttons.classList.add("flex", "justify-between", "m-t-20px")

    const registerLink = document.createElement("a")
    registerLink.href = "#"
    const registerText = document.createTextNode("register")
    registerLink.appendChild(registerText)
    buttons.appendChild(registerLink)


    //registerLink.addEventListener("click", function (event)  {
    registerLink.addEventListener("click", event => {
     body.removeChild(loginView)
        body.appendChild(registerView)
    })

    const submitButton = document.createElement("button")
    submitButton.type = "submit"
    const submitText = document.createTextNode("Login")
    submitButton.appendChild(submitText)
    buttons.appendChild(submitButton)
    loginForm.appendChild(buttons)


    //loginForm.addEventListener("submit", function (event) {
     //loginForm.addEventListener("submit", (event) => {
    loginForm.addEventListener("submit", event => {
        event.preventDefault()

        const username = usernameInput.value
        const password = passwordInput.value

        try {
            loginUser(username, password)

            loginForm.reset()

            body.removeChild(loginView)
            body.appendChild(homeView)
        } catch (error) {
            alert(error.message)
        }
    })


    
   loginView.appendChild(loginForm)

    return loginView
    
}

//const buildLandingView = function () {
const buildHomeView = () => {
    const homeView = document.createElement("div")

    const logo = document.createElement("i")
    const logoText = document.createTextNode("Home Page")
    logo.appendChild(logoText)
    homeView.appendChild(logo)


    
    const space = document.createElement("br")
    
    const holamundoText = document.createTextNode("Hola Mundo")
    homeView.appendChild(holamundoText)
    
    const logoutButton = document.createElement("button")
    logoutButton.classList.add("black-button")
    const logoutText = document.createTextNode("logout")
    logoutButton.appendChild(logoutText)
    homeView.appendChild(logoutButton)

     //logoutButton.addEventListener("click", function (event) {
    //logoutButton.addEventListener("click", (event) => {
    logoutButton.addEventListener("click", event => {
        body.removeChild(homeView)
        body.appendChild(loginView)
    })



    return homeView
}



var landingView = buildLandingView()
body.appendChild(landingView)

 const registerView = buildRegisterView()
//body.appendChild(registerView)

 const loginView = buildLoginView()
// body.appendChild(loginView)

var homeView = buildHomeView()
// body.appendChild(homeView)