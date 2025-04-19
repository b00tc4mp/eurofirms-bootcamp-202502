const buttons = document.createElement('div')
buttons.classList.add('flex', 'justify-between')

const registerLink = document.createElement('a')
registerLink.href = '#'
registerLink.appendChild(document.createTextNode('Register'))
registerLink.addEventListener('click', event => {
    body.removeChild(loginView)
    body.appendChild(registerView)
})

const submitButton = document.createElement('button')
submitButton.classList.add('black-button')
submitButton.type = 'submit'
submitButton.appendChild(document.createTextNode('Login'))

buttons.appendChild(registerLink)
buttons.appendChild(submitButton)
loginForm.appendChild(buttons)
