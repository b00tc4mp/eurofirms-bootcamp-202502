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
    car.brand=brand
    car.model=model  
    car.color=color
    car.year=year
    car.kilometers=kilometers

    products[products.length] = car

}

addCar('Audi', 'A1', 'gray', 2013, 170000)
addCar('Smart', 'ForTwo', 'yellow', 2024, 170000)
addCar('Fiat', '500 Abarth', 'skyblue', 2023, 56000)

//view cars

console.table(products)

function updateCar(id, brand, model, color, year, kilometers) {

/*Próximo Ejercicio - STEPS

1. Iterar en products (car) y encontrar indice (posicion) en la que está el coche con ese id
2. Extraer coche del Array (Usando ese indice)
3. Actulizar todos los campos del coche, con los datos de entrada en la función. */

for (let i = 0; i < products.length; i++) {

    if(id === products[i].id) {
        
        let eureka = products[i]

        eureka.brand = brand;
        eureka.model = model;
        eureka.color = color;
        eureka.year = year;
        eureka.kilometers = kilometers
    }
}
}

updateCar('150325-1650', 'Renault', 'Megane', 'green', 2010, 125000)
updateCar('150325-1660', 'Toyota', 'Yaris', 'black', 2020, 310000)

console.table(products)