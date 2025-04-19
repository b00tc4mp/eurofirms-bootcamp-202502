const buildLoginView = () => {
    const loginView = document.createElement('div')
    loginView.classList.add('p-20px')

    const logo = document.createElement('i')
    logo.appendChild(document.createTextNode('Logo'))
    loginView.appendChild(logo)

    const loginTitle = document.createElement('h1')
    loginTitle.appendChild(document.createTextNode('Login'))
    loginView.appendChild(loginTitle)

    const loginForm = document.createElement('form')
    loginForm.classList.add('flex', 'flex-col', 'gap-20px')
