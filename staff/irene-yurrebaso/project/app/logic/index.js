import { registerUser } from './registerUser'
import { loginUser } from './loginUser'
import { getUserUsername } from './getUserUsername'
import { logoutUser } from './logoutUser'
import { isUserLoggedIn } from './isUserLoggedIn'

import { getPlaces } from './getPlaces'
import { createPlace } from './createPlace'
import { getPlaceDetails } from './getPlaceDetails'
// import { removePost } from './removePost'

export const logic = {
    registerUser,
    loginUser,
    getUserUsername,
    isUserLoggedIn,
    logoutUser,

    getPlaces,
    createPlace,
    getPlaceDetails
}