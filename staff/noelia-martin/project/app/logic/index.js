import { loginUserDoctor } from './doctor/loginUserDoctor'
import { isUserLoggedInDoctor } from './doctor/isUserLoggedInDoctor'
import { getUserDoctorChooseChild } from './doctor/getUserDoctorChooseChild'
import { getUserDoctorChosenNameChild } from './doctor/getUserDoctorChosenNameChild'
import { getUserDoctorChosenUserId } from './doctor/getUserDoctorChosenUserId'


import { loginUserFamily } from './family/loginUserFamily'
import { getUserFamilyNameChild } from './family/getUserFamilyNameChild'
import { registerUserFamily } from './family/registerUserFamily'
import { isUserLoggedInFamily } from './family/isUserLoggedInFamily'
import { isUserLoggedIn } from './isUserLoggedIn'
import { logoutUser } from './logoutUser'

export const logic = {
    loginUserDoctor, isUserLoggedInDoctor, getUserDoctorChooseChild, getUserDoctorChosenNameChild, getUserDoctorChosenUserId, loginUserFamily, getUserFamilyNameChild, registerUserFamily, isUserLoggedInFamily, isUserLoggedIn, logoutUser
}