    // Campo Nombre
    const nameField = document.createElement('div')
    nameField.classList.add('flex', 'flex-col', 'gap-10px')
    const nameLabel = document.createElement('label')
    nameLabel.htmlFor = 'name'
    nameLabel.appendChild(document.createTextNode('Name'))
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.id = 'name'
    nameInput.name = 'name'
    nameInput.placeholder = 'your full name'
    nameField.appendChild(nameLabel)
    nameField.appendChild(nameInput)
    registerForm.appendChild(nameField)

    // Campo Email
    const emailField = document.createElement('div')
    emailField.classList.add('flex', 'flex-col', 'gap-10px')
    const emailLabel = document.createElement('label')
    emailLabel.htmlFor = 'email'
    emailLabel.appendChild(document.createTextNode('E-mail'))
    const emailInput = document.createElement('input')
    emailInput.type = 'email'
    emailInput.id = 'email'
    emailInput.name = 'email'
    emailInput.placeholder = 'your e-mail'
    emailField.appendChild(emailLabel)
    emailField.appendChild(emailInput)
    registerForm.appendChild(emailField)

    // Campo Username
    const usernameField = document.createElement('div')
    usernameField.classList.add('flex', 'flex-col', 'gap-10px')
    const usernameLabel = document.createElement('label')
    usernameLabel.htmlFor = 'username'
    usernameLabel.appendChild(document.createTextNode('Username'))
    const usernameInput = document.createElement('input')
    usernameInput.type = 'text'
    usernameInput.id = 'username'
    usernameInput.name = 'username'
    usernameInput.placeholder = 'your username'
    usernameField.appendChild(usernameLabel)
    usernameField.appendChild(usernameInput)
    registerForm.appendChild(usernameField)

    // Campo Password
    const passwordField = document.createElement('div')
    passwordField.classList.add('flex', 'flex-col', 'gap-10px')
    const passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password'
    passwordLabel.appendChild(document.createTextNode('Password'))
    const passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.id = 'password'
    passwordInput.name = 'password'
    passwordInput.placeholder = 'your password'
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)
    registerForm.appendChild(passwordField)
