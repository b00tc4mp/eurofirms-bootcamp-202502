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
    
        var carUpdate = products[i] 
        var searchId = carUpdate.id
    
        if(searchId === id) { // comprobar la coincidencia con id, si coincide modifica el objeto
            carUpdate.brand = brand
            carUpdate.model = model
            carUpdate.color = color
            carUpdate.year = year
            carUpdate.kilometers = kilometers

            var updateCar = { // esta variable la creo simplemente como control para comprobar con el console log el objeto modificado
                                // no es necesaria para el funcionamiento de la función.
                id : carUpdate.id,
                brand : carUpdate.brand,
                model : carUpdate.model,
                color : carUpdate.color,
                year : carUpdate.year,
                kilometers : carUpdate.kilometers
            }

            console.log(`Car with ID ${id} updated successfully.`);
            console.log(updateCar);
            
        }
    }
}

function removeCar(id) {

    for(var i = 0; i < products.length; i++) {
        if(products[i].id === id) { // buscamos la coincidencia con el id que pasamos y el que tenemos en la posicion del array
            if(i < products.length - 1 ) { // comprueba que no sea el ultimo elemento del array
                for(var j = i; j < products.length - 1; j++) { // si no es el ultimo elemento con este bucle movemos elementos a la izquierda para evitar huecos empty
                    products[j] = products[j + 1]
                }
            }
           
            products.length-- // reducimos tamaño del array eliminando el ultimo elemento
            console.log(`Car with ID ${id} has been removed.`)
            
        }
    }
    console.log(`Car with ID ${id} not found.`);
}

addCar('Audi', 'A1', 'gray', 2013, 170000)
addCar('Smart', 'ForTwo', 'yellow', 2024, 17000)
addCar('Fiat', '500 Abarth', 'skyblue', 2023, 56000)
console.table(products)

updateCar('20250315-1603', 'Renault', 'Clio', 'green', 2015, 225000)
updateCar('20250315-1605', 'Citröen', 'C3', 'black', 2012, 310000)
console.table(products)

removeCar('20250315-1603')
console.table(products)