import { ValidationError } from './errors.js'

export const validate = {
    name(name) {
        if (typeof name !== 'string') throw new ValidationError('invalid name type')
        if (name.length < 1) throw new ValidationError('invalid name min length')
        if (name.length > 30) throw new ValidationError('invalid name max length')        
    },

      email(email) {
        if (typeof email !== 'string') throw new ValidationError('invalid email type')
        if (email.length < 6) throw new ValidationError('invalid email min length')
        if (email.length > 30) throw new ValidationError('invalid email max length')        
    },

    username(username) {
        if (typeof username !== 'string') throw new ValidationError('invalid username type')
        if (username.length < 3) throw new ValidationError('invalid username min length')
        if (username.length > 20) throw new ValidationError('invalid username max length')
    },

    password(password) {
        if (typeof password !== 'string') throw new ValidationError('invalid password type')
        if (password.length < 8) throw new ValidationError('invalid password ming length')
        if (password.length > 20) throw new ValidationError('invalid password max length')          
    },

    gender(gender) {
        if (typeof gender !== 'string') throw new ValidationError('invalid gender type')
        if (!['male', 'female', 'other'].includes(gender)) throw new ValidationError('invalid gender value')    
    },

    weight(weight) {
        if (typeof weight !== 'number' || isNaN(weight)) throw new ValidationError('invalid weight type')
        if (weight < 30 || weight > 200) throw new ValidationError('unrealistic weight')    
    },

    height(height) {
        if (typeof height !== 'number' || isNaN(height)) throw new ValidationError('invalid height type')
        if (height < 50 || height > 250) throw new ValidationError('unrealistic height')    
    },

    description(description) {
        if (typeof description !== 'string') throw new ValidationError('invalid description type')
        if (description.length < 1) throw new ValidationError('invalid description min length')    
        if (description.length > 250) throw new ValidationError('invalid description max length')    
    },

    image(image) {
        if (typeof image !== 'string') throw new ValidationError('invalid image type')
        if (!image) throw new ValidationError('you must provide an image')    
    },

    difficulty(difficulty) {
        if (typeof difficulty !== 'string') throw new ValidationError('invalid difficulty type')
        if (!['easy', 'medium', 'hard'].includes(difficulty)) throw new ValidationError('invalid difficulty value')  
    },

    muscleGroup(muscleGroup) {
        if (typeof muscleGroup !== 'string') throw new ValidationError('invalid muscle group type')
        if (!['shoulders', 'legs', 'back', 'arms', 'full-body'].includes(muscleGroup)) throw new ValidationError('invalid muscle group value')  
    },

    userId(userId) {
        if (typeof userId !== 'string') throw new ValidationError('invalid userId type')
        if (userId.length !== 24) throw new ValidationError('invalid userId length')    
    }
}