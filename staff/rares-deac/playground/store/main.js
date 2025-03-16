var products = [];

//populate

var cinquecento = {
    id: '20250315-1601',
    brand: 'Fiat',
    model: '500',
    color: 'pink',
    year: 2019,
    kilometers: 145000
}

products [0] = cinquecento;

var clio = {
    id: '20250315-1603',
    brand: 'Renault',
    model: 'Clio',
    color: 'red',
    year: 2015,
    kilometers: 225000
}

products[1] = clio

var c3 = {
    id: '20250315-1605',
    brand: 'Citröen',
    model: 'C3',
    color: 'black',
    year: 2010,
    kilometers: 310000
}

products[2] = c3;

// logic

function addCar(brand, model, color, year, kilometers) {
    /* 
    Steps
    -create id for car
    -create object for car data and id
    -insert object in products
    */
    var id=Math.random() + "-" + Math.random();

    var car = {
        "id": id,
        "brand": brand,
        "model": model,
        'color': color,
        "year": year,
        "kilometers": kilometers,
    }

    products[products.length] = car;

}

function removeCar(carId){
    /*
    Bucle for para encontrar el coche de products
    un booleano para eliminar el coche que corresponda con el id de la funcion
    */

    for(i = 0; i < products.length; i++){
        if(products[i].id===carId){
            delete products[i];
        }

    }

}

function updateCar(carId, brand, model, color, year, kilometers) {
    /*
    Steps
    -iterar en products (cars) y encontrar indice (posicion) en la que está el coche con ese id
    -extraer coche del array (usando ese indice)
    -actualizar todos los campos del coche, con los datos de entrada en al función
    */
    console.log(products[0].id);
    console.log(carId);
    

    for(i=0; i < products.length; i++){
        if(products[i].id===carId){
            var car = {}
            car.id = carId;
            car.brand = brand;
            car.model = model;
            car.color = color;
            car.year = year;
            car.kilometers = kilometers
            products[i]=car;
        }
        
    }
}

addCar('Audi', 'A1', 'gray', 2013, 170000);
addCar('Smart', 'ForTwo', 'yellow', 2024, 17000);
addCar('Fiat', '500 Abarth', 'skyblue', 2023, 56000);

updateCar('20250315-1603','Renault', 'Clio', 'green', 2015, 225000);

console.table(products);
removeCar('20250315-1603');

// view cars

console.table(products);