import { validate, SystemError, errors } from 'com'
import { data } from '../../data'

export const getUserDoctorChooseChild = (healthCareNumber) => {
    validate.healthCareNumber(healthCareNumber)

    return fetch(import.meta.env.VITE_API_URL + '/userDoctor/self/chooseChild', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({ healthCareNumber })
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(response => {
            const { status } = response

            if (status === 200) //guardo lo retornado en la logica de api
                return response.json()
                    .catch(error => { throw new SystemError('json error') })
                    .then(tokenFamily => { //nuevo 
                        data.setTokenFamily(tokenFamily)
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