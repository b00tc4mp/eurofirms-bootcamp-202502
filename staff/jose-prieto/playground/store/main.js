var products = []

// populate

var cinquecento = {
    id: '2025315-1601',
    brand: 'Fiat',
    model: '500',
    color: 'pink',
    year: 2019,
    kilometers: 145000
}

products[0] = cinquecento

var clio ={
    id: '20250315- 1603',
    brand: 'Renault',
    modelo: 'Clio',
    color: 'red',
    year: 2015,
    kilometers: 225000
}

products[1] = clio

var c3 = {
    id: '20250315-1605',
    brand: 'Citroen',
    model: 'C3',
    color: 'black',
    year: 2015,
    kilometers: 310000
}

products[2] = c3

//logic

function addCar(brand, model, color, year, kilometers) {
    /*
    STEPS
    - create id for car
    - cerate object for car data and id
    - insert object in products
    */


    var id = '20250315-' + (1601 + products.length * 2)
    var newCar = {
        id: id,
        brand: brand,
        model: model,
        color: color,
        year: year,
        kilometers: kilometers
    };

products[products.length] = newCar;
}

function updateCar(id, brand, model, color, year, kilometers) {
    for(var i=0;i <products.length;i++){
        if(products[i].id===id){
            products[i].kilometers=kilometers;
            products[i].brand=brand;
            products[i].model=model;
            products[i].color=color;
            products[i].year=year;
        
            
        
        }
    }
}


addCar('Audi', 'A1', 'gray', 2013, 170000)
addCar('Smart', 'ForTwo', 'yellow', 2024, 17000)
addCar('Fiat', '500 Abarth', 'shyblue', 2023, 56000)
updateCar('20250315-1603', 'Renault', 'clio', 'green', 2015, 225000)
updateCar('20250315-1605', 'Citroen', 'black', 2012, 310000)

console.table(products);