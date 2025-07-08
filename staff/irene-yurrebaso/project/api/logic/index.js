import { registerUser } from './registerUser.js'
import { authenticateUser } from './authenticateUser.js'
import { getUserUsername } from './getUserUsername.js'

import { createPlace } from './createPlace.js'
import { getPlaces } from './getPlaces.js'
import { getOnePlace } from './getOnePlace.js'

export const logic = {
    registerUser,
    authenticateUser,
    getUserUsername,

    createPlace,
    getPlaces,
    getOnePlace
}