import { ValidationError } from './index.js'

export const validate = {
    nameChild(nameChild) {
        if (typeof nameChild !== 'string') throw new ValidationError('invalid nameChild type')
        if (nameChild.length < 1) throw new ValidationError('invalid nameChild min length')
        if (nameChild.length > 30) throw new ValidationError('invalid nameChild max length')
    },

    username(username) {
        if (typeof username !== 'string') throw new ValidationError('invalid username type')
        if (username.length < 3) throw new ValidationError('invalid username min length')
        if (username.length > 30) throw new ValidationError('invalid username max length')
    },

    password(password) {
        if (typeof password !== 'string') throw new ValidationError('invalid password type')
        if (password.length < 8) throw new ValidationError('invalid password min length')
        if (password.length > 20) throw new ValidationError('invalid password max length')
    },

    userId(userId) {
        if (typeof userId !== 'string') throw new ValidationError('invalid userId type')
        if (userId.length !== 24) throw new ValidationError('invalid userId length')
    },

    healthCareNumber(healthCareNumber) {
        if (typeof healthCareNumber !== 'string') throw new ValidationError('invalid healthCareNumber type')
        if (healthCareNumber.length !== 11) throw new ValidationError('invalid healthCareNumber length')
        if (!healthCareNumber.startsWith('AN')) throw new ValidationError('invalid healthCareNumber format')

    },
    dateOfBirth(dateOfBirth) {
        if (typeof dateOfBirth !== 'string') throw new ValidationError('invalid dateOfBirth type')
        if (dateOfBirth.length !== 10) throw new ValidationError('invalid dateOfBirth length dd/mm/yyyy')
    },
    /*
        password(password) {
            if (typeof password !== 'string') throw new ValidationError('invalid password type')
            if (password.length < 8) throw new ValidationError('invalid password min length')
            if (password.length > 20) throw new ValidationError('invalid password max length')
        },
    
        userId(userId) {
            if (typeof userId !== 'string') throw new ValidationError('invalid userId type')
            if (userId.length !== 24) throw new ValidationError('invalid userId length')
        },
    */
}