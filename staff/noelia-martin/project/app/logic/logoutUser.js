import { data } from '../data'

export const logoutUser = () => {
    data.removeToken()
    data.removeIsDoctor()
    data.removeTokenFamily()
}