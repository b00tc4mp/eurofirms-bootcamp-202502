registerForm.addEventListener('submit', event => {
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
