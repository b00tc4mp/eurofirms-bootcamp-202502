var products = []

var ciquecento = {
    id: '2025315-1601',
    brand: 'Fiat',
    model: '500',
    color: 'pink',
    year: 2019,
    km: 145000,
}
products [0] = ciquecento
    var renault = {
        id: '20250315-1603',
        brand: 'renault',
        model: 'clio',
        color: 'red',
        year: 2015,
        km: 225000,
    }
products [1] = renault; 

var c3 = {
    id: '2025315-1605',
    brand: 'citroen',
    model: 'c3',
    color: 'black',
    year: 2016,
    km: 310000,
}
products[2] = c3;
//logic
function addcar (brand, model, color, year, km){
    /*
    STEPS
    -Create id for car
    -Create object for car and id
    -Insert object in products
    */

    var carId = Math.random();
    var car = {
        id: carId,
        brand: brand,
        model: model,
        color: color,
        year: year,
        km: km
    }
    products[products.length] = car;
}



function updateCar(id,brand, model,color, year, km){
    /*
  STEPS
  - iterar en products (cars) y encontrar indice (posicion) en la que está el coche con ese id
  - extraer coche del array (usando ese indice)
  - actualizar todos los campos del coche, con los datos de entrada en la funcion
  */ 
  for (let i = 0; i < products.length; i++){
  
      if (products[i].id === id){
           let car = products[i]
              car.brand = brand
              car.model = model
              car.color = color
              car.year = year
              car.km = km
      }
  }
}
 
addcar("ferrari", "f80", "red", 2025, 156032)
addcar("peugeot", "300", "amarillo", 2023, 154856)
updateCar("2025315-1605", "citroen", "c3", "blue", 2016, 310000)
console.table(products)