const buildHomeView = () => {
    const homeView = document.createElement('div')
    homeView.classList.add('p-20px')

    const logo = document.createElement('i')
    logo.appendChild(document.createTextNode('Logo'))
    homeView.appendChild(logo)

    const homeTitle = document.createElement('h1')
    homeTitle.appendChild(document.createTextNode('Hello, World!'))
    homeView.appendChild(homeTitle)

    const logoutButton = document.createElement('button')
    logoutButton.classList.add('black-button')
    logoutButton.appendChild(document.createTextNode('Logout'))
    logoutButton.addEventListener('click', event => {
        body.removeChild(homeView)
        body.appendChild(loginView)
    })

    homeView.appendChild(logoutButton)
    return homeView
}
