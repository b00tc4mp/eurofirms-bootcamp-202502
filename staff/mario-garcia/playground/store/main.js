var products = []

//populate

var megane = {
    id: '150325-1650',
    brand: 'Renault',
    model: 'Megane',
    color: 'black',
    year: 2010,
    kilometers: 100000
}

products[0] = megane

var qashqai = {
    id: '150325-1655',
    brand: 'Nissan',
    model: 'Qashqai',
    color: 'white',
    year: 2015,
    kilometers: 150000
}

products[1] = qashqai

var corolla = {
    id: '15032025-1660',
    brand: 'Toyota',
    model: 'Corolla',
    color: 'blue',
    year: 2020,
    kilometers: 200000
}

products[2] = corolla

//logic

function addCar(brand, model, color, year, kilometers) {

    var car = {}
    
    car.id=Math.random() + "-" + Math.random()
    coche.brand=brand
    coche.model=model  
    coche.color=color
    coche.year=year
    coche.kilometers=kilometers

    products[products.length] = coche

}

addCar('Audi', 'A1', 'gray', 2013, 170000)
addCar('Smart', 'ForTwo', 'yellow', 2024, 170000)
addCar('Fiat', '500 Abarth', 'skyblue', 2023, 56000)

//view cars

console.table(products)