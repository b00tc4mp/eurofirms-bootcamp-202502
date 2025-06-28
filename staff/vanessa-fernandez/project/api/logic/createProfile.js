import { User } from '../data/index.js'
import { validate, SystemError, NotFoundError} from 'com'

export const createProfile = (userId, gender, weight, height) => {
    validate.userId(userId)
    validate.gender(gender)
    validate.weight(weight)
    validate.height(height)

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error')})
        .then(user => {
            if(!user) throw new NotFoundError('user not found')

            user.gender = gender
            user.weight = weight
            user.height = height
            user.profileCompleted = true
            
            return user.save()
        })
        .catch(error => { throw new SystemError('mongo error')})
        .then(() => { })
}

