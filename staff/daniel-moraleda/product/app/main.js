const body = document.querySelector('body')

function buildLandingView() {
    const landingView = document.createElement('div')
    landingView.classList.add('p-20px')

    const logo = document.createElement('i')
    logo.classList.add('block')

    const logoHeading = document.createElement('h1')
    const logoText = document.createTextNode('logo')
    logoHeading.appendChild(logoText)
    landingView.appendChild(logoHeading)

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

    loginLink.addEventListener('click', function (event){
        body.removeChild(landingView)
        body.appendChild(loginView)
    })

    return landingView
}

function buildRegisterView() {
    const registerView = document.createElement('div')
    registerView.classList.add('p-x-20px')

    const titleHeading = document.createElement('h1')
    const titleText = document.createTextNode('Logo')
    titleHeading.appendChild(titleText)
    registerView.appendChild(titleHeading)

    const logo = document.createElement('i')
    const logoText = document.createTextNode('Logo')
    logo.appendChild(logoText)
    registerView.appendChild(logo)

    const registerTitle = document.createElement('h1')
    const registerText = document.createTextNode('Register')
    registerTitle.appendChild(registerText)
    registerView.appendChild(registerTitle)

    const registerForm = document.createElement ('form')
    registerForm.classList.add('flex', 'flex-col', 'gap-20px')

    const nameField = document.createElement('div')
    nameField.classList.add('flex', 'flex-col')
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
    
    const eMailField = document.createElement('div')
    eMailField.classList.add ('flex', 'flex-col')
    const eMailLabel = document.createElement('label')
    eMailLabel.htmlFor = 'E-mail'
    const eMailText = document.createTextNode('E-mail')
    eMailLabel.appendChild(eMailText)
    const eMailInput = document.createElement('input')
    eMailInput.type = 'text'
    eMailInput.id ='E-mail'
    eMailInput.name = 'E-mail'
    eMailField.appendChild(eMailLabel)
    eMailField.appendChild(eMailInput)
    registerForm.appendChild(eMailField)

    const usernameField = document.createElement('div')
    usernameField.classList.add('flex', "flex-col")
    const usernameLabel = document.createElement('label')
    
    usernameLabel.htmlFor = 'Usuario'
    const usernameText = document.createTextNode ('Usuario')
    usernameLabel.appendChild(usernameText)
    const usernameInput = document.createElement('input')
    usernameInput.type = 'text'
    usernameInput.name = 'Usuario'
    usernameField.appendChild(usernameLabel)
    usernameField.appendChild(usernameInput)
    registerForm.appendChild(usernameField)

    const passwordField = document.createElement('div')
    passwordField.classList.add('flex', 'flex-col')
    const passwordLabel = document.createElement('label')
    usernameLabel.htmlFor = 'Contraseña'
    const passwordText = document.createTextNode('Contraseña')
    passwordLabel.appendChild(passwordText)
    const passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.id = 'paassword'
    passwordInput.name = 'Contraseña'
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)
    registerForm.appendChild(passwordField)

    const linkAndButton = document.createElement('div')

    const loginLink = document.createElement('a')
    loginLink.classList.add('mr-20px')
    loginLink.href = '#' 
    const loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    linkAndButton.appendChild(loginLink)
    
    loginLink.addEventListener('click', function (event) {
        body.appendChild(loginView)
        body.removeChild(registerView)
    })

    const registerButton = document.createElement('button')
    const registerButtonText = document.createTextNode('Register')
    registerButton.appendChild(registerButtonText)
    linkAndButton.appendChild(registerButton)

    registerForm.appendChild(linkAndButton)

    registerForm.addEventListener('submit', function(event){
        event.preventDefault()

        const name = nameInput.value
        const eMail = eMailInput.value
        const username = usernameInput.value
        const password = passwordInput.value

        console.log (name, eMail,username,password)
       
        try {
            registerUser(name, eMail, username,password)

            body.appendChild(registerView)
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
    const logoHeading = document.createElement('h1')
    const logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    loginView.appendChild(logoHeading)
    loginView.classList.add('p-x-20px')

    const loginForm = document.createElement('form')

    const usernameField = document.createElement('div')
    usernameField.classList.add('flex', 'flex-col')//test
    const usernameLabel = document.createElement('label')
    usernameLabel.htmlFor = 'Usuario'
    const usernameText = document.createTextNode('Usuario')
    usernameLabel.appendChild(usernameText)
    const usernameInput = document.createElement('input')
    usernameInput.type = 'text'
    usernameInput.name = 'Usuario'

    usernameField.appendChild(usernameLabel)
    usernameField.appendChild(usernameInput)
    loginForm.appendChild(usernameField)

    const passwordField = document.createElement('div')
    passwordField.classList.add('flex', 'flex-col')//test
    const passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'Password'
    const passwordText = document.createTextNode('Password')
    passwordLabel.appendChild(passwordText)
    const passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.name = 'password'

    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)
    loginForm.appendChild(passwordField)
    
    loginView.appendChild(loginForm)

    const registerLink = document.createElement('a')
    registerLink.href = '#'
    const registerText = document.createTextNode('register')
    registerLink.appendChild(registerText)
    loginView.appendChild(registerLink)
    registerLink.style.marginRight = '20px'

    registerLink.addEventListener('click', function(event) {
        body.removeChild(loginView)
        body.appendChild(registerView)
    })

    const loginLink = document.createElement('button')
    loginLink.href = '#'
    const loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    loginView.appendChild(loginLink)

    return loginView
}

function buildHomeView() {
    const homeView = document.createElement('div')

    const logo = document.createElement('i')
    const logoText = document.createTextNode('Logo')
    logo.appendChild(logoText)
    homeView.appendChild(logo)

    const homeTitle = document.createElement('h1')
    const homeText = document.createTextNode('Hello, World!')
    homeTitle.appendChild(homeText)
    homeView.appendChild(homeTitle)

    return homeView
}
const landingView = buildLandingView()
body.appendChild(landingView)

const registerView = buildRegisterView()
//body.appendChild(registerView)

const loginView = buildLoginView()
//body.appendChild(loginView)

const homeView = buildHomeView()
//body.appendChild(homeView)