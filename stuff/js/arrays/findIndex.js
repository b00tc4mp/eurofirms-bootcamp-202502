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

        if (found) return i
    }

    return -1
}

var index = findIndex(cars, car => car.year === 2001)

console.log(index)

var index = findIndex(cars, car => car.year === 2020)

console.log(index)