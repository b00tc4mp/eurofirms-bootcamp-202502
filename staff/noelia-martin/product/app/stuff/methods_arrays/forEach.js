//trabajamos con forEach en getPost.js
/*
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
    */

var nums = [10, 20, 30]

// for (var i = 0; i < nums.length; i++) { // imperative
//     var num = nums[i]

//     console.log(num)
// }

// nums.forEach(num => console.log(num)) // declarative: se llama asi porque declaras lo que quieres hacer

//creamos una funcion llamada forEach con un funcionamiento similar a lo que hacer el metodo forEach de los arrays, para comprenderlo
function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) { // imperative
        var element = array[i]

        callback(element)
    }
}

forEach(nums, num => console.log(num)) // declarative

//con el metodo forEach te ahorras de crear un for, utilizas directamente el suyo