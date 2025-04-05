const body = document.querySelector('body')

function buildLandingView() {
    const landingView = document.createElement('div')
    landingView.classList.add('p-20-px')
    
    const logoHeading = document.createElement('i')
    logoHeading.classList.add('block')
    const logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    landingView.appendChild(logoHeading)

    const namePageHeading = document.createElement('h1')
    const nameText = document.createTextNode('Landing page')
    namePageHeading.appendChild(nameText)
    landingView.appendChild(namePageHeading)

    const registerLink = document.createElement('a')
    registerLink.href = '#'
    const registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    landingView.appendChild(registerLink)

    registerLink.addEventListener('click', function(event) {
        body.removeChild(landingView)
        body.appendChild(registerView)
    })

    const orText = document.createTextNode(' or ')
    landingView.appendChild(orText)

    const loginLink = document.createElement('a')
    loginLink.href = '#'
    const loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    landingView.appendChild(loginLink)

    loginLink.addEventListener('click', function(event) {
        body.removeChild(landingView)
        body.appendChild(loginView)
    })

    return landingView
}

function buildRegisterView() {
    const registerView = document.createElement('div')
    registerView.classList.add('p-20px')

    const logoHeading = document.createElement('i')
    const logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    registerView.appendChild(logoHeading)

    const namePageHeading = document.createElement('h1')
    const namePageText = document.createTextNode('Register page')
    namePageHeading.appendChild(namePageText)
    registerView.appendChild(namePageHeading)

    const registerForm = document.createElement('form')
    registerForm.classList.add('flex','flex-col', 'gap-20px')

    const nameField = document.createElement('div')
    nameField.classList.add('flex','flex-col','gap-10px')
    const nameLabel = document.createElement('label')
    nameLabel.htmlFor = 'name'
    const nameText = document.createTextNode('Name')
    nameLabel.appendChild(nameText)
    nameField.appendChild(nameLabel)
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.id = 'name'
    nameInput.name = 'name'
    nameInput.placeholder = 'Your full name'
    nameField.appendChild(nameInput)
    registerForm.appendChild(nameField)

    const emailField = document.createElement('div')
    emailField.classList.add('flex','flex-col','gap-10px')
    const emailLabel = document.createElement('label')
    emailLabel.htmlFor = 'email'
    const emailText = document.createTextNode('E-mail')
    emailLabel.appendChild(emailText)
    emailField.appendChild(emailLabel)
    const emailInput = document.createElement('input')
    emailInput.type = 'email'
    emailInput.name = 'email'
    emailInput.id = 'email'
    emailInput.placeholder = 'Your e-mail'
    emailField.appendChild(emailInput)
    registerForm.appendChild(emailField)

    const userNameField = document.createElement('div')
    userNameField.classList.add('flex','flex-col','gap-10px')
    const userNameLabel = document.createElement('label')
    userNameLabel.htmlFor = 'username'
    const userNameText = document.createTextNode('Username')
    userNameLabel.appendChild(userNameText)
    userNameField.appendChild(userNameLabel)
    const userNameInput = document.createElement('input')
    userNameInput.type = 'text'
    userNameInput.name = 'username'
    userNameInput.id = 'username'
    userNameInput.placeholder = 'Your username'
    userNameField.appendChild(userNameInput)
    registerForm.appendChild(userNameField)

    const passwordField = document.createElement('div')
    passwordField.classList.add('flex','flex-col','gap-10px')
    const passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password'
    passwordLabel.style.marginRight = '8px'
    const passwordText = document.createTextNode('Password')
    passwordLabel.appendChild(passwordText)
    passwordField.appendChild(passwordLabel)
    const passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.name = 'password'
    passwordInput.id = 'password'
    passwordInput.placeholder = 'Your password'
    passwordField.appendChild(passwordInput)
    registerForm.appendChild(passwordField)

    const buttons = document.createElement('div')
    buttons.classList.add('flex','justify-between')

    const loginLink = document.createElement('a')
    loginLink.href = '#'
    const loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    buttons.appendChild(loginLink)

    loginLink.addEventListener('click', function(event) {
        body.removeChild(registerView)
        body.appendChild(loginView)
    })

    const buttonSubmitRegister = document.createElement('button')
    buttonSubmitRegister.classList.add('black-button')
    buttonSubmitRegister.type = 'submit'
    const buttonText = document.createTextNode('Register')
    buttonSubmitRegister.appendChild(buttonText)
    buttons.appendChild(buttonSubmitRegister)
    
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault()

        const name = nameInput.value
        const email = emailInput.value
        const username = userNameInput.value
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

    registerForm.appendChild(buttons)

    registerView.appendChild(registerForm)

    return registerView
}

function buildLoginView() {
    const loginView = document.createElement('div')
    loginView.classList.add('p-20px')

    const logoHeading = document.createElement('i')
    const logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    loginView.appendChild(logoHeading)

    const namePageHeading = document.createElement('h1')
    const nameText = document.createTextNode('Login page')
    namePageHeading.appendChild(nameText)
    loginView.appendChild(namePageHeading)

    const loginForm = document.createElement('form')
    loginForm.classList.add('flex','flex-col','gap-20px')

    const userNameField = document.createElement('div')
    userNameField.classList.add('flex','flex-col','gap-10px')
    const userNameLabel = document.createElement('label')
    userNameLabel.htmlFor = 'username'
    const userNameText = document.createTextNode('Username')
    userNameLabel.appendChild(userNameText)
    const userNameInput = document.createElement('input')
    userNameInput.type = 'text'
    userNameInput.name = 'username'
    userNameInput.id = 'username'
    userNameInput.placeholder = 'Your username'
    userNameField.appendChild(userNameLabel)
    userNameField.appendChild(userNameInput)
    loginForm.appendChild(userNameField)

    const passwordField = document.createElement('div')
    passwordField.classList.add('flex','flex-col','gap-10px')
    const passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password'
    const passwordText = document.createTextNode('Password')
    passwordLabel.appendChild(passwordText)
    const passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.name = 'password'
    passwordInput.id = 'password'
    passwordInput.placeholder = 'Your password'
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)
    loginForm.appendChild(passwordField)

    const buttons = document.createElement('div')
    buttons.classList.add('flex','justify-between')
    
    const registerLink = document.createElement('a')
    registerLink.href = '#'
    const registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    buttons.appendChild(registerLink)

    registerLink.addEventListener('click', function(event) {
        body.removeChild(loginView)
        body.appendChild(registerView)
    })
    
    const buttonSubmitLogin = document.createElement('button')
    buttonSubmitLogin.classList.add('black-button')
    buttonSubmitLogin.type = 'submit'
    const buttonText = document.createTextNode('Login')
    buttonSubmitLogin.appendChild(buttonText)
    buttons.appendChild(buttonSubmitLogin)

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault()

        const username = userNameInput.value
        const password = passwordInput.value

        try {
            loginUser(username,password)

            loginForm.reset()

            body.removeChild(loginView)
            body.appendChild(homeView)

        } catch(error) {
            alert(error.message)
        }
    })

    loginForm.appendChild(buttons)
    
    loginView.appendChild(loginForm)

    return loginView
}

function buildHomeView() {
    const homeView = document.createElement('div')
    homeView.classList.add('p-20px')

    const logoHeading = document.createElement('i')
    const logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    homeView.appendChild(logoHeading)

    const welcomeHeading = document.createElement('h1')
    const welcomeText = document.createTextNode('Hello, World!')
    welcomeHeading.appendChild(welcomeText)
    homeView.appendChild(welcomeHeading)

    const logoutButton = document.createElement('button')
    logoutButton.classList.add('black-button')
    const logoutText = document.createTextNode('Logout')
    logoutButton.appendChild(logoutText)
    homeView.appendChild(logoutButton)

    return homeView
}

const landingView = buildLandingView()
body.appendChild(landingView)

const registerView = buildRegisterView()
//body.appendChild(registerView)

// TODO TEST LOGIN VIEW
const loginView = buildLoginView()
//body.appendChild(loginView);

// TODO TEST HOME VIEW
const homeView = buildHomeView()
//body.appendChild(homeView)