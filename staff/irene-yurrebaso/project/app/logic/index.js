import { registerUser } from './registerUser'
import { loginUser } from './loginUser'
import { getUserUsername } from './getUserUsername'
import { logoutUser } from './logoutUser'
import { isUserLoggedIn } from './isUserLoggedIn'
import { isUserAdministrator } from './isUserAdministrator'

import { getPlaces } from './getPlaces'
import { createPlace } from './createPlace'
import { getPlaceDetails } from './getPlaceDetails'
import { removePlace } from './removePlace'

export const logic = {
    registerUser,
    loginUser,
    getUserUsername,
    isUserLoggedIn,
    logoutUser,
    isUserAdministrator,

    getPlaces,
    createPlace,
    getPlaceDetails,
    removePlace
}