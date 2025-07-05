import { data } from '../../data'

export const isUserLoggedInDoctor = () => !!data.getToken() && !!data.getIsDoctor()
//Si hay contenido en isDoctor, es que es doctor