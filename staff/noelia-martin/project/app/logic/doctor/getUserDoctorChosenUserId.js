import { getPayloadFromToken } from '../helper/getPayloadFromToken'
import { data } from '../../data'

export const getUserDoctorChosenUserId = () => {
    const payload = getPayloadFromToken(data.getTokenFamily())

    const { sub } = payload

    return sub
} 