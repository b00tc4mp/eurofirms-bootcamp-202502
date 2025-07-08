import { ValidationError } from './errors.js'

const allowedCategory = ['hotels', 'restaurants', 'outdoors', 'museums', 'shops', 'entertainment', 'transport', 'other']

export const validate = {
    username(username) {
        if (typeof username !== 'string') throw new ValidationError('invalid username type')
        if (username.length < 3) throw new ValidationError('invalid username min length')
        if (username.length > 20) throw new ValidationError('invalid username max length')
    },

    email(email) {
        if (typeof email !== 'string') throw new ValidationError('invalid email type')
        if (email.length < 6) throw new ValidationError('invalid email min length')
        if (email.length > 30) throw new ValidationError('invalid email max length')
    },

    password(password) {
        if (typeof password !== 'string') throw new ValidationError ('invalid password type')
        if (password.length < 8) throw new ValidationError('invalid password min length')
        if (password.length > 20) throw new ValidationError('invalid password max length')
    },

    userId(userId) {
        if (typeof userId !== 'string') throw new ValidationError('invalid userId type')
        if (userId.length !== 24) throw new ValidationError('invalid userId length')
    },

    //The place name
    name(name) {
        if (typeof name !== 'string') throw new ValidationError('invalid name type')
        if (name.length < 3) throw new ValidationError('invalid name min length')
        if (name.length > 100) throw new ValidationError('invalid name max length')
    },

    placeId(placeId) {
        if (typeof placeId !== 'string') throw new ValidationError('invalid placeId type')
        if (placeId.length !== 24) throw new ValidationError('invalid placeId length')
    },

    category(category) {
        if (typeof category !== 'string') throw new ValidationError('invalid category type')
        if (!allowedCategory.includes(category)) throw new ValidationError('invalid category')        
    },

    description(description) {
        if (typeof description !== 'string') throw new ValidationError('invalid description type')
        if (description.length < 10) throw new ValidationError('invalid description min length')
        if (description.length > 500) throw new ValidationError('invalid description max length')
    },

    address(address) {
        if (typeof address !== 'string') throw new ValidationError('invalid address type')
        if (address.length < 1) throw new ValidationError('invalid address min length')
        if (address.length > 200) throw new ValidationError('invalid address max length')
    },

    city(city) {
        if (typeof city !== 'string') throw new ValidationError('invalid city type')
        if (city.length < 1) throw new ValidationError('invalid city min length')
        if (city.length > 100) throw new ValidationError('invalid city max length')
    },

    country(country) {
        if (typeof country !== 'string') throw new ValidationError('invalid country type')
        if (country.length < 1) throw new ValidationError('invalid country min length')
        if (country.length > 100) throw new ValidationError('invalid country max length')
    },

    website(website) {
        if (typeof website !== 'string') throw new ValidationError('invalid website type')
        if (website.length < 3) throw new ValidationError('invalid website min length')
        if (website.length > 200) throw new ValidationError('invalid website max length')
    },

    telephone(telephone) {
        if (typeof telephone !== 'string') throw new ValidationError('invalid telephone type')
        if (telephone.length < 3) throw new ValidationError('invalid telephone min length')
        if (telephone.length > 100) throw new ValidationError('invalid telephone max length')
    },

    image(image) {
        if (typeof image !== 'string') throw new ValidationError('invalid image type')
        if (!image.startsWith('http')) throw new ValidationError('invalid image format')
    }
}