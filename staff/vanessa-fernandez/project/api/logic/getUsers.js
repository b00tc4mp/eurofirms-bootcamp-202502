import { User } from '../data/index.js'
import { SystemError } from 'com'

export const getUsers = () => {
    return User.find({}, 'name username')
        .catch(() => { throw new SystemError('mongo error') })
}