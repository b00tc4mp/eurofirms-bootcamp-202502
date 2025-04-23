loginForm.addEventListener('submit', event => {
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

