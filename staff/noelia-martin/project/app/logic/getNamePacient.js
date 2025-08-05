import { data } from '../data'
import { SystemError, errors } from 'com'

export const getNamePacient = (token = data.getToken()) => { //si no se indica valor, coge por defecto el data.getToken()
    return fetch(import.meta.env.VITE_API_URL + '/user/self/namePacient', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(response => {
            const { status } = response

            if (status === 200)
                return response.json()
                    .catch(error => { throw new SystemError('json error') })
                    .then(namePacient => namePacient)

            return response.json()
                .catch(error => { throw new SystemError('json error') })
                .then(body => {
                    const { error, message } = body
                    const constructor = errors[error] || SystemError
                    throw new constructor(message)
                })
        })
}