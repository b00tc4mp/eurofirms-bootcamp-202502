var products = []

// populate

var cinquecento = {
    id: '20250315-1601',
    brand: 'Fiat',
    model: '500',
    color: 'pink',
    year: 2019,
    kilometers: 145000
}

products[0] = cinquecento

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

products[2] = c3

// logic

function addCar(brand, model, color, year, kilometers) {
    /*
    STEPS
    -create id for car
    -create object for car data and id
    -insert object in products
    */
    
    // create id for car
   var id = '20250315-' + (1601 + products.length * 2)
   
   //create object for car data and id
   var newCar = {
    id : id,
    brand : brand,
    model : model,
    color : color,
    year : year,
    kilometers : kilometers
   }
   
   //insert object in products
   products[products.length] = newCar

}

function updateCar(id, brand, model, color, year, kilometers) {
     /*
    STEPS
    - iterar en products (cars) y encontrar indice (posicion) en la que está el coche con ese id
    - extraer coche del array (usando ese indice)
    - actualizar todos los campos del coche, con los datos de entrada en la funcion
    */
   for(var i = 0; i < products.length; i++) { //iterar sobre products
    
        var carupdate = products[i] 
        var searchId = products[i].id
    
        if(searchId === id) { // comprobar la coincidencia con id, si coincide modifica el objeto
            carupdate.brand = brand
            carupdate.model = model
            carupdate.color = color
            carupdate.year = year
            carupdate.kilometers = kilometers

            console.log(`Car with ID ${id} updated successfully.`);
            return
        }
    }
}

function removeCar(id) {
    
}

addCar('Audi', 'A1', 'gray', 2013, 170000)
addCar('Smart', 'ForTwo', 'yellow', 2024, 17000)
addCar('Fiat', '500 Abarth', 'skyblue', 2023, 56000)
updateCar('20250315-1603', 'Renault', 'Clio', 'green', 2015, 225000)
updateCar('20250315-1605', 'Citröen', 'C3', 'black', 2012, 310000)
// view cars

console.table(products)