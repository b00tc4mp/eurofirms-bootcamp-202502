const buildRegisterView = () => {
    const registerView = document.createElement('div')
    registerView.classList.add('p-20px')

    const logo = document.createElement('i')
    const logoText = document.createTextNode('Logo')
    logo.appendChild(logoText)
    registerView.appendChild(logo)

    const registerTitle = document.createElement('h1') // Título de la vista
    const registerText = document.createTextNode('Register')
    registerTitle.appendChild(registerText)
    registerView.appendChild(registerTitle)

    const registerForm = document.createElement('form') // Formulario de registro
    registerForm.classList.add('flex', 'flex-col', 'gap-20px')
