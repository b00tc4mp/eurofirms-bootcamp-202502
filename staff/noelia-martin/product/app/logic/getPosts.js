import { data } from '../data'


//creo una funcion que recoge de la base de datos todos los post y los devuelve, pero en estado inverso ya que normalmente los post deben ir de mas actual a menos

/**
 * Gets all posts from users in the system.
 * 
 * @returns {[{ 
* id: string, 
* author: string, 
* image: string, 
* text: string, 
* date: Date 
* }]} The posts from users in the system.
*/
export const getPosts = () => {
    //return fetch('http://localhost:8080/posts', {
    return fetch(import.meta.env.VITE_API_URL + '/posts', {
        method: 'GET',
        headers: {
            //Cambio Basic por Bearer y el metodo getUserId() por getToken()
            Authorization: 'Bearer ' + data.getToken()
        }
    })
        .catch(error => { throw new Error('connection error') })
        .then(response => {
            const { status } = response

            if (status === 200)
                return response.json()
                    .catch(error => { throw new Error('json error') })
                    .then(posts => posts)

            return response.json()
                .catch(error => { throw new Error('json error') })
                .then(body => {
                    const { error, message } = body

                    throw new Error(message)
                })
        })
}
//en este codigo hemos cambiado la vista de posts. En vez de mostrar el id del usuario, mostrara su username que es mas real.
//y tambien creamos la propiedad own para que si es mio el post podamos borrarlo. El boton de borrar con la condicion creada aqui, se configura en la vista posts
//recuerda que todas estas modificaciones se las mostraremos a la view, luego se pierde, no se guarda en la base de datos (es decir todo esa configuracion es en memoria)
