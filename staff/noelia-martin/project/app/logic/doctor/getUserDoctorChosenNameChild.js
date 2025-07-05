import { getPayloadFromToken } from '../helper/getPayloadFromToken'
import { data } from '../../data'

export const getUserDoctorChosenNameChild = () => {
    const payload = getPayloadFromToken(data.getTokenFamily())

    const { nameChild } = payload

    return nameChild
} 