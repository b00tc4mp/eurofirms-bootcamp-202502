import { validate, SystemError, errors } from 'com'
import { data } from '../data'

export const getChoosePacient = (healthCareNumber) => {
    validate.healthCareNumber(healthCareNumber)

    return fetch(import.meta.env.VITE_API_URL + '/user/self/choosePacient?healthCareNumber=' + healthCareNumber, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + data.getToken()
        }
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(response => {
            const { status } = response

            if (status === 200)
                return response.json()
                    .catch(error => { throw new SystemError('json error') })
                    .then(token => {
                        data.idPacient = token
                        return token
                    })

            return response.json()
                .catch(error => { throw new SystemError('json error') })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error] || SystemError
                    throw new constructor(message)
                })
        })
}