//utilizada en la logica getPost.jsx dentro de la funcion pasada al forEach :         
// const user = users.find(user => user.id === authorId) //metodo que localiza y devuelve el elemento del array(users), que cumpla la condición que indica la funcion pasada

var cars = [
    { brand: 'Fiat', model: 'Cinquecento', year: 2016 },
    { brand: 'Seat', model: 'Ibiza', year: 2018 },
    { brand: 'Opel', model: 'Corsa', year: 2001 }
]

// var car = cars.find(car => car.year === 2001)

//igual que el metodo forEach pero solo devuelve el elemento del array si lo encuentra, sino no devuelve nada
function find(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        var found = callback(element)

        if (found) return element
    }
}

var car = find(cars, car => car.year === 2001)

console.log(car)