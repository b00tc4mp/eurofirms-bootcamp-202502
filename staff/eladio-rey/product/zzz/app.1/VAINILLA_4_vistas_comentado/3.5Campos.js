    // Username
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
    loginForm.appendChild(usernameField)

    // Password
    const passwordField = document.createElement('div')
    passwordField.classList.add('flex', 'flex-col', 'gap-10px')
    const passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password'
    passwordLabel.appendChild(document.createTextNode('password'))
    const passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.id = 'password'
    passwordInput.name = 'password'
    passwordInput.placeholder = 'your password'
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)
    loginForm.appendChild(passwordField)
