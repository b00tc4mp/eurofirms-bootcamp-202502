import { getChoosePacient } from './getChoosePacient'
import { getNamePacient } from './getNamePacient'
import { isUserDoctor } from './isUserDoctor'
import { isUserLoggedIn } from './isUserLoggedIn'
import { loginUser } from './loginUser'
import { logoutUser } from './logoutUser'
import { registerUser } from './registerUser'

export const logic = {
    getChoosePacient, getNamePacient, isUserDoctor, isUserLoggedIn, loginUser, logoutUser, registerUser
}