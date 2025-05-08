//utilizada en la logica removePost.jsx : 
//const index = posts.findIndex(post => post.id === postId) //localizamos el post que deseo borrar; necesitamos para ello la propiedad postId que se le habra pasado en la llamada a esta logica; una vez localizada nos devuelve su index(su posicion)

var cars = [
    { brand: 'Fiat', model: 'Cinquecento', year: 2016 },
    { brand: 'Seat', model: 'Ibiza', year: 2018 },
    { brand: 'Opel', model: 'Corsa', year: 2001 }
]

// var index = cars.findIndex(car => car.year === 2001)

function findIndex(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        var found = callback(element)

        if (found) return i //parecido a los otros for pero en este no devuelve el elemento, sino solo el numero del index
    }

    return -1 //si no encuentra index devuelve un -1
}

var index = findIndex(cars, car => car.year === 2001)

console.log(index)

var index = findIndex(cars, car => car.year === 2020)

console.log(index)