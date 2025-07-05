import { registerUserFamily } from './family/registerUserFamily.js'
import { authenticateUserFamily } from './family/authenticateUserFamily.js'
import { getUserFamilyNameChild } from './family/getUserFamilyNameChild.js'

import { registerUserDoctor } from './doctor/registerUserDoctor.js'
import { authenticateUserDoctor } from './doctor/authenticateUserDoctor.js'
import { getUserDoctorUsername } from './doctor/getUserDoctorUsername.js'
import { getUserDoctorChooseChild } from './doctor/getUserDoctorChooseChild.js'

export const logic = {
    registerUserFamily,
    authenticateUserFamily,
    getUserFamilyNameChild,

    registerUserDoctor,
    authenticateUserDoctor,
    getUserDoctorUsername,
    getUserDoctorChooseChild
}