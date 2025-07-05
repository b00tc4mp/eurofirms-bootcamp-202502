import { data } from '../../data'

export const isUserLoggedInFamily = () => !!data.getToken() && !data.getIsDoctor()
//Si no hay contenido en isDoctor, es que no es doctor, por lo tanto es family