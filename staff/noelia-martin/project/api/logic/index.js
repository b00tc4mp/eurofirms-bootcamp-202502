import { registerUserFamily } from './family/registerUserFamily.js'
import { authenticateUserFamily } from './family/authenticateUserFamily.js'
import { getUserFamilyUsername } from './family/getUserFamilyUsername.js'

import { registerUserDoctor } from './doctor/registerUserDoctor.js'
import { authenticateUserDoctor } from './doctor/authenticateUserDoctor.js'
import { getUserDoctorUsername } from './doctor/getUserDoctorUsername.js'

export const logic = {
    registerUserFamily,
    authenticateUserFamily,
    getUserFamilyUsername,

    registerUserDoctor,
    authenticateUserDoctor,
    getUserDoctorUsername,
}