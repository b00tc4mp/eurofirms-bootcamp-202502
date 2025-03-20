var products = []

var cinquecento = {
    id: '2025031-1601',
    brand: 'fiat',
    model: '500',
    color: 'pink',
    year: 2020,
    kilometers: 145000
}

products[0] = cinquecento

var clio = {
    id: '2025031-1603',
    brand: 'renault',
    model: 'clio',
    color: 'red',
    year: 2015,
    kilometers: 225000
}

products[1] = clio


var c3 = {
    id: '2025031-1605',
    brand: 'citroen',
    model: 'c3',
    color: 'black',
    year: 2010,
    kilometers: 3100000
}

products[2] = c3

console.table(products)

//logic

function addCar(brand,model,color,year,kilometers) {
/*
STEPS
-create id for car
-create object for car data and id
-insert object in product
*/
}

addCar('audi','A1','grey',2013,170000)
addCar('samrt','forTwo','yellow',2024,170000)
addCar('fiat','500abarth','smartblue',2030,5000000)

// view cars

console.table(products)