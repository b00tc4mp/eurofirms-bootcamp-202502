let products = []

//populate

let cinquecento = {
    id: '20250315-1601',
    brand: 'Fiat',
    model: '500',
    color: 'pink',
    year: 2019,
    kilometers: 145000
}

products[0] = cinquecento

let clio = {
    id: '20250315-1603',
    brand: 'Renault',
    model: 'Clio',
    color: 'red',
    year: 2015,
    kilometers: 225000
}

products[1] = clio

let c3 = {
    id: '20250315-1605',
    brand: 'Citroen',
    model: 'C3',
    color: 'black',
    year: 2010,
    kilometers: 310000
}

products[2] = c3

//logic

function addCar(brand, model, color, year, kilometers) {
    /*
    STEPS
    - create id for car
    - create object for car data and id
    - insert object in products
    */

    let id = Math.random() + '-' + Math.random()

    let car = {}

    car.brand = brand
    car.model = model
    car.color = color
    car.year = year
    car.kilometers = kilometers
    car.id = id

    products[products.length] = car
}

function updateCar(id, brand, model, color, year, kilometers) {
    /*
    STEPS
    - iterar en products (cars) y encontrar indice (posicion) en la que esta el coche con ese id
    - extraer coche del array (usando ese indice)
    - actualizar todos los campos del coche, con los datos de entrada en la funcion
    */
   

    for(let i = 0; i < products.length; i++) {
        if(id === products[i]['id']) {
            let car = products[i]
            car.brand = brand
            car.model = model
            car.color = color
            car.year = year
            car.kilometers = kilometers
            break
        }
    }

}

addCar('Audi', 'A1', 'gray', 2013, 170000)
addCar('Smart', 'ForTwo', 'yellow', 2024, 170000)
addCar('Fiat', '500 Abarth', 'skyblue', 2023, 56000)
updateCar('20250315-1603', 'Renault', 'Clio', 'green', 2015, 225000)
updateCar('20250315-1605', 'Citröen', 'C3', 'black', 2012, 310000)

//view cars

console.table(products)
