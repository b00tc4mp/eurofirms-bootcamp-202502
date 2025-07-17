var cars = [
    { brand: 'Fiat', model: 'Cinquecento', year: 2016 },
    { brand: 'Seat', model: 'Ibiza', year: 2018 },
    { brand: 'Opel', model: 'Corsa', year: 2001 }
]

var removed = cars.splice(-3, 0, { brand: 'Peugeot', model: '205', year: 2006 })

console.log(removed)
console.log(cars)