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
        if (username.length > 20) throw new ValidationError('username max length')
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

    image(image) {
        if (typeof image !== 'string') throw new ValidationError('invalid image type')
        if (!image.startsWith('http')) throw new ValidationError('invalid image format')
    },

    doctor(doctor) {
        if (typeof doctor !== 'string') throw new ValidationError('invalid doctor type')
        if (doctor.length < 6) throw new ValidationError('invalid min doctor length')
        if (doctor.length > 50) throw new ValidationError('invalid doctor max length')
    },

    treatment(treatment) {
        if (typeof treatment !== 'string') throw new ValidationError('invalid treatment type')
        if (treatment.length < 6) throw new ValidationError('invalid min treatment length')
        if (treatment.length > 50) throw new ValidationError('invalid treatment max length')
    },

    city(city) {
        if (typeof city !== 'string') throw new ValidationError('invalid city type')
        if (city.length < 5) throw new ValidationError('invalid min city length')
        if (city.length > 10) throw new ValidationError('invalid city max length')
    },

    experience(experience) {
        if (typeof experience !== 'string') throw new ValidationError('invalid experience type')
        if (experience.length < 10) throw new ValidationError('invalid min experience length')
        if (experience.length > 100) throw new ValidationError('invalid experience max length')
    }
}