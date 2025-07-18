import { ValidationError } from "./errors.js";

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
        if (typeof userId !== 'string') throw new ValidationError('invalid userId type')
        if (userId.length !== 24) throw new ValidationError('invalid userId length')
    },

    title(title) {
        if (typeof title !== 'string') throw new ValidationError('invalid title type')
        if (title.length < 1) throw new ValidationError ('invalid title length')
    },

    description(description) {
        if (typeof description !== 'string') throw new ValidationError('invalid description type')
        if (description.length < 5) throw new ValidationError('invalid min description length')
    },

    routineId(routineId) {
        if (typeof routineId !== 'string') throw new ValidationError('invalid routineId type')
        if (routineId.length !== 24) throw new ValidationError('invalid routineId length')
    }
}