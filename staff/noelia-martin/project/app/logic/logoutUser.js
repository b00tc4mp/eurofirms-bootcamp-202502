import { data } from '../data'

export const logoutUser = () => {
    data.removeToken()
}