var products = []

// populate

var cinquecento = {
    id: '2025031-1601',
    brand: 'Fiat',
    model: '500',
    color: 'pink',
    year: 2019,
    kilometers: 145000
}

products[0] = cinquecento

var clio = {
    id: '2025031-1603',
    brand: 'Renault',
    model: 'Clio',
    color: 'red',
    year: 2015,
    kilometers: 225000
}

products[1] = clio

var c3 = {
    id: '2025031-1605',
    brand: 'Citröen',
    model: 'C3',
    color: 'black',
    year: 2010,
    kilometers: 310000
}

products[2] = c3

// logic

function addCar(brand, model, color, year, kilometers) {
    /* 
    STEPS
    - create id for car
    - create object for car data and id
    - insert object in products
    */
}

addCar('Audi', 'A1', 'gray', 2013, 170000)
addCar('Smart', 'ForTwo', 'yellow', 2024, 17000)
addCar('Fiat', '500 Abarth', 'skyblue', 2023, 56000)

// view cars

console.table(products)