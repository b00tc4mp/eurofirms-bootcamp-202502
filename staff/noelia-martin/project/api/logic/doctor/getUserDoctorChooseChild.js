import { UserFamily } from '../../data/index.js'
import { validate, SystemError, NotFoundError } from 'com'

export const getUserDoctorChooseChild = healthCareNumber => {
    validate.healthCareNumber(healthCareNumber)

    return UserFamily.findOne({ healthCareNumber })
        .catch(error => { throw new SystemError(error.message) })
        .then(userFamily => {
            if (!userFamily) throw new NotFoundError('healthCareNumber not found')
            return { id: userFamily.id, nameChild: userFamily.nameChild }
        })
}