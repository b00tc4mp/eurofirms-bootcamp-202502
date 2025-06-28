import { validate, SystemError, errors } from 'com'

/**
 * Registers a user in the system
 * 
 * @param {string} name The user name.
 * @param {string} email The user e-mail.
 * @param {string} username The user username.
 * @param {string} password The user password.
 */

export const registerUser = (name,email,username,password) => {
  validate.name(name)
  validate.email(email)
  validate.username(username)
  validate.password(password)

  return fetch(import.meta.env.VITE_API_URL + '/users', {
    method: 'POST',
    header:  {
        'Content-Type': 'application/json'
    },

    body: JSON.stringify({ name,email,username,password})

  })

    .catch(error => { throw new SystemError('connection error')})
    .then(response => {
        const { status } = response

        if (status === 201) return

        return response.json()
            .catch(error => { throw new SystemError('json error')})
            .then(body => {
                const { error, message } = body

                const constructor = errors[error] || SystemError

                throw new constructor(message)
            })

    })

}