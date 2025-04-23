const buildLandingView = () => {
    const landingView = document.createElement('div') // Crea el contenedor de la vista
    landingView.classList.add('p-20px') // Le aplica padding

    const logo = document.createElement('i') // Crea un elemento <i> que hace de logo
    logo.classList.add('block') // Lo hace un bloque visible
    const logoText = document.createTextNode('Logo') // Texto del logo
    logo.appendChild(logoText)
    landingView.appendChild(logo)

    const buttons = document.createElement('div') // Contenedor para los botones
    buttons.classList.add('mt-10px') // Margen superior

    const registerLink = document.createElement('a') // Link de registro
    registerLink.href = '#'
    const registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    buttons.appendChild(registerLink)

    registerLink.addEventListener('click', event => { // Evento que cambia a la vista de registro
        body.removeChild(landingView)
        body.appendChild(registerView)
    })

    const orText = document.createTextNode(' or ') // Texto intermedio
    buttons.appendChild(orText)

    const loginLink = document.createElement('a') // Link de login
    loginLink.href = '#'
    const loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    buttons.appendChild(loginLink)

    loginLink.addEventListener('click', event => { // Evento que cambia a la vista de login
        body.removeChild(landingView)
        body.appendChild(loginView)
    })

    landingView.appendChild(buttons)

    return landingView // Devuelve la vista completa
}
