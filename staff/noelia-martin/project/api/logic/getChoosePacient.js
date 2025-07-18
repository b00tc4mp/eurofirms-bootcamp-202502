import { User } from '../data/index.js'
import { validate, SystemError, NotFoundError } from 'com'

export const getChoosePacient = healthCareNumber => {
    validate.healthCareNumber(healthCareNumber)

    return User.findOne({ healthCareNumber })
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('healthCareNumber not found')
            return user.id
        })
}