var cars = [
    { brand: 'Fiat', model: 'Cinquecento', year: 2016 },
    { brand: 'Seat', model: 'Ibiza', year: 2018 },
    { brand: 'Opel', model: 'Corsa', year: 2001 }
]

// var car = cars.find(car => car.year === 2001)

function find(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        var found = callback(element)

        if (found) return element
    }
}

var car = find(cars, car => car.year === 2001)

console.log(car)