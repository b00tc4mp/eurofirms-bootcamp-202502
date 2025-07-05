import { validate, SystemError, errors } from 'com'

export const registerUserFamily = (username, password, nameChild, healthCareNumber, dateOfBirth) => {
    validate.username(username)
    validate.password(password)
    validate.nameChild(nameChild)
    validate.healthCareNumber(healthCareNumber)
    validate.dateOfBirth(dateOfBirth)

    return fetch(import.meta.env.VITE_API_URL + '/userFamily', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({ username, password, nameChild, healthCareNumber, dateOfBirth })
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(response => {
            const { status } = response

            if (status === 201) return

            return response.json()
                .catch(error => { throw new SystemError('json error') })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error] || SystemError
                    throw new constructor(message)
                })
        })
}