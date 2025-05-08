//explicación del metodo map de los arrays
//hicimos una funcion similar a su funcionamiento

//el metodo map somete a los arrays a un cambio segun la funcion que le digas

function map(array, mapper) {
    var mappedArray = []

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        var mappedElement = mapper(element)//ejecuta la funcion con este elemente del array

        mappedArray[i] = mappedElement //metelo en el nuevo array que devolvemos(ya mapeado)
    }

    return mappedArray
}


var fruits = ['apple', 'orange', 'pear']

//var fruitsInUpperCase = fruits.map(fruit => fruit.toUpperCase()) //metodo map
var fruitsInUpperCase = map(fruits, fruit => fruit.toUpperCase()) //nuestro map, recibe el array fruits y a este le aplica una funcion flecha que devuelve un array en mayusculas

console.log(fruits)
console.log(fruitsInUpperCase)


//Codigo completo del profesor comentado

// console.log('hola mundo')

// function map(array, mapper) {
//     var mappedArray = []

//     for (var i = 0; i < array.length; i++) {
//         var element = array[i]

//         var mappedElement = mapper(element)

//         mappedArray[i] = mappedElement
//     }

//     return mappedArray
// }

// /*
// var fruits = ['apple', 'orange', 'pear']

// //var fruitsInUpperCase = fruits.map(fruit => fruit.toUpperCase())
// var fruitsInUpperCase = map(fruits, fruit => fruit.toUpperCase())

// console.log(fruits)
// console.log(fruitsInUpperCase)
// */

// /*
// var nums = [10, 20, 30, 40, 50]

// //var squareNums = nums.map(num => num * num)
// debugger
// var squareNums = map(nums, num => num * num)

// console.log(nums) // [10, 20, 30, 40, 50]
// console.log(squareNums) // [100, 400, 900, 1600, 2500]
// */

// var posts = [
//     { image: 'http://image.com/hola-mundo', text: 'hola mundo' },
//     { image: 'http://image.com/hello-world', text: 'hello world' },
//     { image: 'http://image.com/ciao-mondo', text: 'ciao-mondo' }
// ]

// /*
// var htmlPosts = posts.map(post => `<article>
//     <img src="${post.image}">
//     <p>${post.text}</p>
// </article>`)
// */

// var htmlPosts = map(posts, post => `<article>
//     <img src="${post.image}">
//     <p>${post.text}</p>
// </article>`)

// console.log(posts)
// console.log(htmlPosts)