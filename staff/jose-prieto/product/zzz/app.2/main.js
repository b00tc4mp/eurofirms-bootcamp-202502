const body = document.querySelector('body')

function buildLandingView() {
    const landingView = document.createElement('div')
    landingView.classList.add('p-20px')

    const logo = document.createElement('i')
    logo.classList.add('block')
    const logoText = document.createTextNode('Logo')
    logo.appendChild(logoText)
    landingView.appendChild(logo)

    const buttons = document.createElement('div')
    buttons.classList.add('mt-10px')

    const registerLink = document.createElement('a')
    registerLink.href = '#'
    const registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    buttons.appendChild(registerLink)

    registerLink.addEventListener('click', function (event) {
        body.removeChild(landingView)
        body.appendChild(registerView)
    })

    const orText = document.createTextNode(' or ')
    buttons.appendChild(orText)

    const loginLink = document.createElement('a')
    loginLink.href = '#'
    const loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    buttons.appendChild(loginLink)

    loginLink.addEventListener('click', function (event) {
        body.removeChild(landingView)
        body.appendChild(loginView)
    })

    landingView.appendChild(buttons)

    return landingView
}

function buildRegisterView() {
    const registerView = document.createElement('div')
    registerView.classList.add('p-20px')

    const logo = document.createElement('i')
    const logoText = document.createTextNode('Logo')
    logo.appendChild(logoText)
    registerView.appendChild(logo)

    const registerTitle = document.createElement('h1')
    const registerText = document.createTextNode('Register')
    registerTitle.appendChild(registerText)
    registerView.appendChild(registerTitle)

    const registerForm = document.createElement('form')
    registerForm.classList.add('flex', 'flex-col', 'gap-20px')

    const nameField = document.createElement('div')
    nameField.classList.add('flex', 'flex-col', 'gap-10px')
    const nameLabel = document.createElement('label')
    nameLabel.htmlFor = 'name'
    const nameText = document.createTextNode('Name')
    nameLabel.appendChild(nameText)
    nameField.appendChild(nameLabel)
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.id = 'name'
    nameInput.name = 'name'
    nameInput.placeholder = 'your full name'
    nameField.appendChild(nameInput)
    registerForm.appendChild(nameField)

    const emailField = document.createElement('div')
    emailField.classList.add('flex', 'flex-col', 'gap-10px')
    const emailLabel = document.createElement('label')
    emailLabel.htmlFor = 'email'
    const emailText = document.createTextNode('E-mail')
    emailLabel.appendChild(emailText)
    emailField.appendChild(emailLabel)
    const emailInput = document.createElement('input')
    emailInput.type = 'email'
    emailInput.id = 'email'
    emailInput.name = 'email'
    emailInput.placeholder = 'your e-mail'
    emailField.appendChild(emailInput)
    registerForm.appendChild(emailField)

    const usernameField = document.createElement('div')
    usernameField.classList.add('flex', 'flex-col', 'gap-10px')
    const usernameLabel = document.createElement('label')
    usernameLabel.htmlFor = 'username'
    const usernameText = document.createTextNode('Username')
    usernameLabel.appendChild(usernameText)
    usernameField.appendChild(usernameLabel)
    const usernameInput = document.createElement('input')
    usernameInput.type = 'text'
    usernameInput.id = 'username'
    usernameInput.name = 'username'
    usernameInput.placeholder = 'your username'
    usernameField.appendChild(usernameInput)
    registerForm.appendChild(usernameField)

    const passwordField = document.createElement('div')
    passwordField.classList.add('flex', 'flex-col', 'gap-10px')
    const passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password'
    const passwordText = document.createTextNode('Password')
    passwordLabel.appendChild(passwordText)
    passwordField.appendChild(passwordLabel)
    const passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.id = 'password'
    passwordInput.name = 'password'
    passwordInput.placeholder = 'your password'
    passwordField.appendChild(passwordInput)
    registerForm.appendChild(passwordField)

    const buttons = document.createElement('div')
    buttons.classList.add('flex', 'justify-between')

    const loginLink = document.createElement('a')
    loginLink.href = '#'
    const loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    buttons.appendChild(loginLink)

    loginLink.addEventListener('click', function (event) {
        body.removeChild(registerView)
        body.appendChild(loginView)
    })

    const submitButton = document.createElement('button')
    submitButton.classList.add('black-button')
    submitButton.type = 'submit'
    const submitText = document.createTextNode('Register')
    submitButton.appendChild(submitText)
    buttons.appendChild(submitButton)

    registerForm.appendChild(buttons)

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault()

        const name = nameInput.value
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

function buildLoginView() {
    const loginView = document.createElement('div')
    loginView.classList.add('p-20px')

    const logo = document.createElement('i')
    const logoText = document.createTextNode('Logo')
    logo.appendChild(logoText)
    loginView.appendChild(logo)

    const loginTitle = document.createElement('h1')
    const loginText = document.createTextNode('Login')
    loginTitle.appendChild(loginText)
    loginView.appendChild(loginTitle)

    const loginForm = document.createElement('form')
    loginForm.classList.add('flex', 'flex-col', 'gap-20px')

    const usernameField = document.createElement('div')
    usernameField.classList.add('flex', 'flex-col', 'gap-10px')
    const usernameLabel = document.createElement('label')
    usernameLabel.htmlFor = 'username'
    const usernameText = document.createTextNode('Username')
    usernameLabel.appendChild(usernameText)
    usernameField.appendChild(usernameLabel)
    const usernameInput = document.createElement('input')
    usernameInput.type = 'text'
    usernameInput.id = 'username'
    usernameInput.name = 'username'
    usernameInput.placeholder = 'your username'
    usernameField.appendChild(usernameInput)
    loginForm.appendChild(usernameField)

    const passwordField = document.createElement('div')
    passwordField.classList.add('flex', 'flex-col', 'gap-10px')
    const passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password'
    const passwordText = document.createTextNode('password')
    passwordLabel.appendChild(passwordText)
    passwordField.appendChild(passwordLabel)
    const passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.id = 'password'
    passwordInput.name = 'password'
    passwordInput.placeholder = 'your password'
    passwordField.appendChild(passwordInput)
    loginForm.appendChild(passwordField)

    const buttons = document.createElement('div')
    buttons.classList.add('flex', 'justify-between')

    const registerLink = document.createElement('a')
    registerLink.href = '#'
    const registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    buttons.appendChild(registerLink)

    registerLink.addEventListener('click', function (event) {
        body.removeChild(loginView)
        body.appendChild(registerView)
    })

    const submitButton = document.createElement('button')
    submitButton.classList.add('black-button')
    submitButton.type = 'submit'
    const submitText = document.createTextNode('Login')
    submitButton.appendChild(submitText)
    buttons.appendChild(submitButton)

    loginForm.appendChild(buttons)

    loginForm.addEventListener('submit', function (event) {
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

function buildHomeView() {
    const homeView = document.createElement('div')
    homeView.classList.add('p-20px')

    const logo = document.createElement('i')
    const logoText = document.createTextNode('Logo')
    logo.appendChild(logoText)
    homeView.appendChild(logo)

    const homeTitle = document.createElement('h1')
    const homeText = document.createTextNode('Hello, World!')
    homeTitle.appendChild(homeText)
    homeView.appendChild(homeTitle)

    const logoutButton = document.createElement('button')
    logoutButton.classList.add('black-button')
    const logoutText = document.createTextNode('Logout')
    logoutButton.appendChild(logoutText)
    homeView.appendChild(logoutButton)

    logoutButton.addEventListener('click', function (event) {
        body.removeChild(homeView)
        body.appendChild(loginView)
    })

    return homeView
}

const landingView = buildLandingView()
body.appendChild(landingView)

const registerView = buildRegisterView()

const loginView = buildLoginView()

const homeView = buildHomeView()