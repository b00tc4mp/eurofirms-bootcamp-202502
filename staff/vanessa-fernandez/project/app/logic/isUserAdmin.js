import { getPayloadFromToken } from './helper/getPayloadFromToken'
import { data } from '../data'

export const isUserAdmin = () => {
    const payload = getPayloadFromToken(data.getToken())

    const { role } = payload
    
    return role === 'admin'
}