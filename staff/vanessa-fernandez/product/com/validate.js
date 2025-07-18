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
        if (password.length < 8) throw new ValidationError('invalid password min length')
        if (password.length > 20) throw new ValidationError('invalid password max length')
    },

    userId(userId) {
        if(typeof userId !== 'string') throw new ValidationError ('Invalid userId type.')
        if(userId.length !== 24) throw new ValidationError('Invalid userId length.') 
    },

    image(image) {
        if (typeof image !== 'string') throw new ValidationError ('Invalid image type.')
        if (!image.startsWith('http')) throw new ValidationError ('Invalid image format.')
        if (!image) throw new ValidationError ('You must provide an image.')  
    },

    text(text) {
        if (!text) throw new ValidationError ('You must provide text.')
        if (typeof text !== 'string') throw new ValidationError ('Invalid text type.')
        if (text.length < 1) throw new ValidationError ('Invalid text min length.')
        if (text.length > 250) throw new ValidationError ('Invalid text max length.')
    },

    postId(postId) {
        if(typeof postId !== 'string') throw new ValidationError ('Invalid postId type.')
        if (postId.length < 24) throw new ValidationError ('Invalid postId length.')
    }

}