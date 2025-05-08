import { registerUser } from './registerUser'
import { loginUser } from './loginUser'
import { getUserUsername } from './getUserUsername'
import { logoutUser } from './logoutUser'
import { isUserLoggedIn } from './isUserLoggedIn'
import { getPosts } from './getPosts'
import { createPost } from './createPost'
import { removePost } from './removePost'



//es el fichero principal de la carpeta. No hay que cambiar nada en el resto de componentes ya que tienen una ruta a logic; aunque esta sea el nombre de una carpeta al tener un index tira directamente del index; si no hubiera un index entonces si habria que especificarle cual es el fichero principal

//nuevo, añado todas las nuevas funciones creadas al objeto logic para que puedan ser utilizadas en otros componentes
export const logic = {
    registerUser, loginUser, getUserUsername, logoutUser, isUserLoggedIn, getPosts, createPost, removePost
}