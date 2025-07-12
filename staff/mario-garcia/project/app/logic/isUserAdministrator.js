import { getPayloadFromToken } from './helper/getPayloadFromToken'
import { data } from '../data'

export const isUserAdministrator = () => {
    if (!data.getToken()) return false

    const payload = getPayloadFromToken(data.getToken())

    const { role } = payload

    return role === 'admin'
}