const buttons = document.createElement('div')
buttons.classList.add('flex', 'justify-between')

const loginLink = document.createElement('a') // Link para volver a login
loginLink.href = '#'
loginLink.appendChild(document.createTextNode('Login'))
loginLink.addEventListener('click', event => {
    body.removeChild(registerView)
    body.appendChild(loginView)
})

const submitButton = document.createElement('button') // Botón para enviar el formulario
submitButton.classList.add('black-button')
submitButton.type = 'submit'
submitButton.appendChild(document.createTextNode('Register'))

buttons.appendChild(loginLink)
buttons.appendChild(submitButton)
registerForm.appendChild(buttons)
