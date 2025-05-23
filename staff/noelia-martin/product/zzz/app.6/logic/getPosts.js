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
    const posts = data.getPosts().toReversed() //obtenemos los posts existentes en orden inverso
    const users = data.getUsers()//obtenemos los usuarios existentes
    const userId = data.getUserId() //obtenemos el usuario conectado al sistema(se lo pedimos a SsesionStorage)

    //forEach es un metodo que hace lo mismo que un for pero lo realiza él por dentro. Su funcionamiento trata de: para cada post del array posts le pasa la funcion indicada es decir, en vez de trabajar con algunas numeraciones de indices(segun lo tengas configurado), trabaja directamente con todo el array completo
    posts.forEach(post => {
        const authorId = post.author
        const user = users.find(user => user.id === authorId) //metodo que localiza y devuelve el elemento del array(users), que cumpla la condición que indica la funcion pasada
        const username = user.username //me quedo con el username que es lo que necesito y lo cambio por el valor que habia en post.author
        post.author = username
        post.own = authorId === userId //creamos una propiedad para saber si un post es mio o no; esta propiedad no estará en LocalStorage, no es necesario
    });

    return posts
}
//en este codigo hemos cambiado la vista de posts. En vez de mostrar el id del usuario, mostrara su username que es mas real.
//y tambien creamos la propiedad own para que si es mio el post podamos borrarlo. El boton de borrar con la condicion creada aqui, se configura en la vista posts
//recuerda que todas estas modificaciones se las mostraremos a la view, luego se pierde, no se guarda en la base de datos (es decir todo esa configuracion es en memoria)
